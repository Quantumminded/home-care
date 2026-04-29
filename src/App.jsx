import { Header } from './components/layout/Header';
import { HeroAugmentedNew } from './components/common/HeroAugmentedNew';
import { ContactForm } from './components/common/ContactForm';
import { Testimonials } from './components/common/Testimonials';
import { Pricing } from './components/common/Pricing';
import { ServicesBento } from './components/common/ServicesBento';
import { useTranslation } from 'react-i18next';
import './services/i18n';
import './index.css';

function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroAugmentedNew />
      
      {/* Services Section - Bento Grid */}
      <ServicesBento />

      {/* About Section */}
      <section id="about" className="section-tech">
        <div className="container-tech">
          <div className="section-title">
            <h2>{t('about.title')}</h2>
            <p>{t('about.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
                  <i className="fas fa-handshake text-amber-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white">{t('about.reliability.title')}</h3>
              </div>
              <p className="text-slate-300">
                {t('about.reliability.description')}
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400">ISO 9001</span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400">{t('badges.certified', 'Certificato TÜV')}</span>
              </div>
            </div>
            
            <div className="glass-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center">
                  <i className="fas fa-globe text-cyan-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white">{t('about.specialization.title')}</h3>
              </div>
              <p className="text-slate-300">
                {t('about.specialization.description')}
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400">{t('badges.gdpr', 'GDPR Compliant')}</span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400">{t('badges.multilingual', 'Multilingue')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <section id="contact" className="section-tech">
        <div className="container-tech">
          <div className="section-title">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
          </div>
              <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-slate-950">
        <div className="container-tech">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <i className="fas fa-home text-white text-sm"></i>
                </div>
                <span className="text-xl font-bold text-white">Luino Home Care</span>
              </div>
              <p className="text-slate-400 text-sm">
                Ihr vertrauenswürdiger Partner für Immobilienverwaltung am Lago Maggiore.
              </p>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Impressum</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">AGB</a></li>
              </ul>
            </div>
            
            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Folgen Sie uns</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Luino Home Care. Alle Rechte vorbehalten.
            </p>
            <p className="text-slate-600 text-xs">
              Made with precision in Luino 🇮🇹
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
