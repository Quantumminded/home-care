import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const HeroImmersive = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Check if fonts are loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setIsLoaded(true);
      });
    } else {
      // Fallback for older browsers
      setIsLoaded(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const kenBurnsScale = 1 + (scrollY * 0.0005); // Very slow zoom

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with Lago Maggiore */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1614442404137-7f0a71d85f3d?q=80&w=1170&auto=format&fit=crop')`,
            transform: `translateY(${parallaxOffset}px) scale(${kenBurnsScale})`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        {/* Tech Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900"></div>
      </div>

      {/* Tech Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 container-tech text-center text-white transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } animate-fadeInUp`}>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight mt-20">
          <span className="block mb-2 text-white drop-shadow-lg">{t('hero.title_line1')}</span>
          <span className="text-gradient-gold drop-shadow-2xl">{t('hero.title_line2')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
          {t('hero.subtitle')}
        </p>

        {/* Tech CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button className="btn-tech-primary text-lg px-12 py-5">
            <i className="fas fa-compass mr-3"></i>
            {t('hero.cta_primary')}
          </button>
          <button className="btn-tech-secondary text-lg px-12 py-5">
            <i className="fas fa-play mr-3"></i>
            {t('hero.cta_secondary')}
          </button>
        </div>

        {/* Trust Indicators - Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card text-center py-6">
            <div className="text-4xl font-bold text-gradient-gold mb-2">5+</div>
            <div className="text-slate-300 font-medium">{t('hero.years_experience')}</div>
          </div>
          <div className="glass-card text-center py-6">
            <div className="text-4xl font-bold text-gradient-gold mb-2">50+</div>
            <div className="text-slate-300 font-medium">{t('hero.happy_clients')}</div>
          </div>
          <div className="glass-card text-center py-6">
            <div className="text-4xl font-bold text-gradient-gold mb-2">24/7</div>
            <div className="text-slate-300 font-medium">{t('hero.support')}</div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};
