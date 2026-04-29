import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('navigation.entdecken'), href: '#hero' },
    { name: t('navigation.services'), href: '#services' },
    { name: t('navigation.concierge'), href: '#about' },
    { name: t('navigation.blog'), href: '#testimonials' },
    { name: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container-tech">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <i className="fas fa-home text-white"></i>
              </div>
              <div>
                <h1 className="text-xl font-luxury font-bold text-white">
                  Luino Home Care
                </h1>
                <p className="text-xs text-slate-400 font-light">
                  {t('header.tagline')}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-amber-400 ${
                  isScrolled ? 'text-slate-300' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            
            {/* CTA Button */}
            <button className="hidden md:block btn-tech-primary text-sm px-6 py-2.5">
              {t('header.cta')}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isScrolled 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="py-6 space-y-4 bg-slate-900/95 backdrop-blur-xl rounded-b-2xl mt-2 border border-white/10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="px-6 pt-4 border-t border-white/10">
              <button className="w-full btn-tech-primary text-sm">
                {t('header.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
