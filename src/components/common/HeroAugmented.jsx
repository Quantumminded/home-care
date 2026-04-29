import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HeroAugmented = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  
  // Mouse tracking for augmented parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Layer 1: Background - Slow parallax
  const bgX = useSpring(useTransform(mouseX, [-1, 1], [30, -30]), { stiffness: 50, damping: 30 });
  const bgY = useSpring(useTransform(mouseY, [-1, 1], [20, -20]), { stiffness: 50, damping: 30 });
  const bgScale = useSpring(useTransform(mouseY, [-1, 1], [1.05, 1.15]), { stiffness: 100, damping: 25 });
  
  // Layer 2: Text - Medium parallax
  const textY = useSpring(useTransform(mouseY, [-1, 1], [-15, 15]), { stiffness: 75, damping: 25 });
  const textX = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), { stiffness: 75, damping: 25 });
  
  // Layer 3: Bento - Varied depths
  const bento1Y = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), { stiffness: 100, damping: 25 });
  const bento2Y = useSpring(useTransform(mouseY, [-1, 1], [-30, 30]), { stiffness: 120, damping: 25 });
  const bento3Y = useSpring(useTransform(mouseY, [-1, 1], [-25, 25]), { stiffness: 90, damping: 25 });
  
  // Layer 4: Branch - Fast parallax (foreground)
  const branchX = useSpring(useTransform(mouseX, [-1, 1], [60, -60]), { stiffness: 150, damping: 20 });
  const branchY = useSpring(useTransform(mouseY, [-1, 1], [40, -40]), { stiffness: 150, damping: 20 });
  const branchRotate = useSpring(useTransform(mouseX, [-1, 1], [3, -3]), { stiffness: 100, damping: 25 });

  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => setIsLoaded(true));
    } else {
      setIsLoaded(true);
    }
  }, []);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((event.clientX - centerX) / (rect.width / 2));
    mouseY.set((event.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Layer 1: Background - Deep Lake (image_29.png) */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ x: bgX, y: bgY, scale: bgScale }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/images/lake-background.jpg')`,
            filter: 'blur(2px) saturate(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/60" />
      </motion.div>

      {/* Layer 2: Title Text - Gold Serif */}
      <motion.div 
        className="relative z-20 text-center px-4"
        style={{ x: textX, y: textY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
          <span className="block text-white drop-shadow-2xl mb-2">{t('hero.title_line1')} in Luino,</span>
          <span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500"
            style={{ filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.6))' }}
          >
            {t('hero.title_line2')}
          </span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
      </motion.div>

      {/* Layer 3: Bento Modules - Glassmorphism */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* 5+ Module - Top Left */}
        <motion.div 
          className="absolute top-[20%] left-[10%] pointer-events-auto"
          style={{ y: bento1Y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="glass-bento p-6 rounded-2xl text-center min-w-[120px]">
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-1">5+</div>
            <div className="text-sm text-slate-300">Kontalar</div>
          </div>
        </motion.div>

        {/* 50+ Module - Top Right */}
        <motion.div 
          className="absolute top-[15%] right-[15%] pointer-events-auto"
          style={{ y: bento2Y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-bento p-6 rounded-2xl text-center min-w-[120px]">
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-1">50+</div>
            <div className="text-sm text-slate-300">Glasswviere</div>
          </div>
        </motion.div>

        {/* 24/7 Module - Top Center-Right */}
        <motion.div 
          className="absolute top-[25%] right-[35%] pointer-events-auto"
          style={{ y: bento3Y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass-bento p-6 rounded-2xl text-center min-w-[120px]">
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-1">24/7</div>
            <div className="text-sm text-slate-300">Tech glow</div>
          </div>
        </motion.div>
      </div>

      {/* Layer 4: Branch - Foreground with Alpha (image_30.png) */}
      <motion.div 
        className="absolute z-40 pointer-events-none"
        style={{ 
          x: branchX, 
          y: branchY, 
          rotate: branchRotate,
          top: '35%',
          right: '0',
          width: '50%',
          height: '40%',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        <img 
          src="/images/branch-foreground.png" 
          alt=""
          className="w-full h-full object-contain object-right"
          style={{ 
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
          }}
        />
      </motion.div>

      {/* Layer 5: CTA HUD Buttons */}
      <motion.div 
        className="absolute bottom-[20%] z-50 flex gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Services Button - HUD Neomorphic */}
        <motion.button
          className="relative px-8 py-4 rounded-full font-medium text-white overflow-hidden group"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 20px rgba(6,182,212,0.3)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Border Beam Animation */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)',
                animation: 'borderBeam 2s linear infinite',
              }}
            />
          </div>
          <span className="relative z-10">SERVICES ENTDECKEN</span>
        </motion.button>

        {/* Tour Button - HUD Neomorphic with Glow */}
        <motion.button
          className="relative px-8 py-4 rounded-full font-medium text-white overflow-hidden group"
          style={{
            background: 'linear-gradient(145deg, rgba(6,182,212,0.2), rgba(6,182,212,0.1))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(6,182,212,0.4)',
            boxShadow: '0 8px 32px rgba(6,182,212,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 12px 40px rgba(6,182,212,0.3), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 30px rgba(6,182,212,0.4)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Border Beam Animation */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                animation: 'borderBeam 2s linear infinite',
              }}
            />
          </div>
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
            VIDEO TOUR
          </span>
        </motion.button>
      </motion.div>

      {/* CSS Animation for Border Beam */}
      <style>{`
        @keyframes borderBeam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  
  // Mouse tracking for augmented parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring values for smooth movement
  const backgroundX = useSpring(useTransform(mouseX, [0, 1], [-50, 50]), { stiffness: 100, damping: 30 });
  const backgroundY = useSpring(useTransform(mouseY, [0, 1], [-30, 30]), { stiffness: 100, damping: 30 });
  const backgroundScale = useSpring(useTransform(mouseY, [0, 1], [1.1, 1]), { stiffness: 200, damping: 25 });
  const backgroundBlur = useSpring(useTransform(mouseY, [0, 1], [2, 0]), { stiffness: 200, damping: 25 });

  useEffect(() => {
    // Check if fonts are loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setIsLoaded(true);
      });
    } else {
      setIsLoaded(true);
    }
  }, []);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (event.clientX - centerX) / (rect.width / 2);
    const y = (event.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Layer 1: Background - Lago Maggiore with Augmented Parallax */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{
          x: backgroundX,
          y: backgroundY,
          scale: backgroundScale,
          filter: `blur(${backgroundBlur}px)`,
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1614442404137-7f0a71d85f3d?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        {/* Abyss Blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-slate-900/50" />
      </motion.div>

      {/* Layer 2: Text - German Title with Serif Font */}
      <motion.div 
        className="relative z-20 text-center text-white mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 leading-tight">
          <span className="block mb-2 text-white drop-shadow-2xl">{t('hero.title_line1')} in Luino,</span>
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 drop-shadow-2xl"
            style={{
              textShadow: '0 0 40px rgba(212, 175, 55, 0.5)',
            }}
          >
            {t('hero.title_line2')}
          </motion.span>
        </h1>
      </motion.div>

      {/* Layer 3: Bento Modules - Glassmorphism with Layered Parallax */}
      <motion.div 
        className="relative z-30 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        {/* 5+ Module */}
        <motion.div 
          className="glass-card backdrop-blur-md text-center py-8"
          style={{
            y: useSpring(useTransform(mouseY, [0, 1], [0, -15]), { stiffness: 150, damping: 25 }),
            x: useSpring(useTransform(mouseX, [0, 1], [0, -10]), { stiffness: 150, damping: 25 }),
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-5xl font-bold text-gradient-gold mb-2">5+</div>
          <div className="text-slate-300 font-medium">{t('hero.years_experience')}</div>
        </motion.div>

        {/* 50+ Module */}
        <motion.div 
          className="glass-card backdrop-blur-md text-center py-8"
          style={{
            y: useSpring(useTransform(mouseY, [0, 1], [0, -20]), { stiffness: 150, damping: 25 }),
            x: useSpring(useTransform(mouseX, [0, 1], [0, 5]), { stiffness: 150, damping: 25 }),
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-5xl font-bold text-gradient-gold mb-2">50+</div>
          <div className="text-slate-300 font-medium">{t('hero.happy_clients')}</div>
        </motion.div>

        {/* 24/7 Module */}
        <motion.div 
          className="glass-card backdrop-blur-md text-center py-8"
          style={{
            y: useSpring(useTransform(mouseY, [0, 1], [0, -10]), { stiffness: 150, damping: 25 }),
            x: useSpring(useTransform(mouseX, [0, 1], [0, 10]), { stiffness: 150, damping: 25 }),
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-5xl font-bold text-gradient-gold mb-2">24/7</div>
          <div className="text-slate-300 font-medium">{t('hero.support')}</div>
        </motion.div>
      </motion.div>

      {/* Layer 4: Luxury - Branch Element Covering Text */}
      <motion.div 
        className="absolute z-25 pointer-events-none"
        style={{
          top: '35%',
          right: '10%',
          width: '300px',
          height: '200px',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><path d="M50,100 Q150,50 250,100" stroke="d4af37" stroke-width="3" fill="none" opacity="0.6"/><circle cx="80" cy="85" r="8" fill="d4af37" opacity="0.8"/><circle cx="150" cy="70" r="6" fill="d4af37" opacity="0.7"/><circle cx="220" cy="90" r="10" fill="d4af37" opacity="0.9"/></svg>')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))',
          y: useSpring(useTransform(mouseY, [0, 1], [0, -25]), { stiffness: 100, damping: 30 }),
          x: useSpring(useTransform(mouseX, [0, 1], [0, 15]), { stiffness: 100, damping: 30 }),
          rotate: useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 100, damping: 30 }),
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      />

      {/* Layer 5: CTA - HUD Buttons with Neomorphism */}
      <motion.div 
        className="relative z-40 flex flex-col sm:flex-row gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
      >
        {/* Services Button */}
        <motion.button 
          className="relative px-12 py-5 text-lg font-medium text-white rounded-2xl overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 12px 40px rgba(0, 0, 0, 0.4)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Border Beam Effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse" />
          </div>
          
          <span className="relative z-10 flex items-center">
            <i className="fas fa-compass mr-3 text-cyan-400"></i>
            Services
          </span>
        </motion.button>

        {/* Tour Button */}
        <motion.button 
          className="relative px-12 py-5 text-lg font-medium text-white rounded-2xl overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 12px 40px rgba(0, 0, 0, 0.4)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Border Beam Effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-30 animate-pulse" />
          </div>
          
          <span className="relative z-10 flex items-center">
            <i className="fas fa-play mr-3 text-amber-400"></i>
            Tour
          </span>
        </motion.button>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-50" />
    </section>
  );
};
