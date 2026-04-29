import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import lakeBackground from '../../assets/image_29.png';

export const HeroAugmentedNew = () => {
  const { t, i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const containerRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll-based parallax
  const { scrollY } = useScroll();
  
  // Layer 1: Background moves slowly (0 to 150px)
  const bgY = useTransform(scrollY, [0, 600], isMobile ? [0, 0] : [0, 150]);
  
  // Layer 2: Content moves faster with fade out
  const contentY = useTransform(scrollY, [0, 500], isMobile ? [0, 0] : [0, -100]);
  const contentOpacity = useTransform(scrollY, [0, 400], isMobile ? [1, 1] : [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const lang = i18n.language === 'de' ? 'de' : 'it';

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Layer 1: Background - Cinematic Lake with Scroll Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${lakeBackground})`,
            height: '120%',
            filter: 'blur(2px)',
          }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" />
      </motion.div>

      {/* Layer 2: Content - Text & Buttons with Scroll Parallax + Fade */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* Mobile Spacer to avoid navbar overlap */}
        <div className="h-32 md:hidden" />

        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title - Elegant Serif */}
          <motion.h1 
            className="font-serif leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-100/90 mb-3"
              style={{
                fontFamily: "'Playfair Display', 'Crimson Text', Georgia, serif",
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {t('hero.title_line1')} in Luino,
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #f5d485 0%, #e6b84f 25%, #d4a84b 50%, #c9953c 75%, #b8872a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(212, 168, 75, 0.5))',
                fontFamily: "'Playfair Display', 'Crimson Text', Georgia, serif",
              }}
            >
              {t('hero.title_line2')}
            </span>
          </motion.h1>

          {/* Subtitle - Minimal Sans-Serif */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-300/80 font-light mb-12 max-w-2xl mx-auto tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons - Glass HUD Style */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Primary Button - White/Light - Scroll to Contact Form */}
            <GlassButton 
              text={t('hero.cta_primary')} 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            />
            
            {/* Secondary Button - Glass with cyan accent - Scroll to Services */}
            <GlassButton 
              text={t('hero.cta_secondary')} 
              secondary 
              icon 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </motion.div>
        </div>

        {/* Bottom spacer for mobile */}
        <div className="h-16 md:hidden" />
      </motion.div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

const GlassButton = ({ text, secondary, icon, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`group relative px-8 py-4 rounded-full overflow-hidden flex items-center justify-center gap-2 w-full sm:w-auto min-w-[180px] cursor-pointer ${
      secondary ? 'bg-cyan-500/10 border border-cyan-400/30' : 'bg-white/90'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    style={{
      backdropFilter: 'blur(20px)',
      boxShadow: secondary 
        ? '0 8px 32px rgba(6,182,212,0.2)' 
        : '0 8px 32px rgba(255,255,255,0.2)',
    }}
  >
    {icon && (
      <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
      </svg>
    )}
    <span className={`relative z-10 font-semibold text-sm tracking-wider uppercase ${
      secondary ? 'text-white' : 'text-slate-900'
    }`}>
      {text}
    </span>
  </motion.button>
);
