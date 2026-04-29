import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Force refresh when language changes
  useEffect(() => {
    setRefreshKey(prev => prev + 1);
  }, [i18n.language]);

  const packages = [
    {
      id: 1,
      name: 'Basic',
      price: '0',
      period: t('pricing.period', 'Monat'),
      popular: false,
      metrics: [
        { labelKey: 'pricing.metrics.cleaning_frequency', label: t('pricing.metrics.cleaning_frequency'), value: 30, text: t('pricing.frequency.1x_week') },
        { labelKey: 'pricing.metrics.garden', label: t('pricing.metrics.garden'), value: 40, text: t('pricing.level.basic') },
      ],
      features: [
        { key: 'pricing.features.basic_cleaning' },
        { key: 'pricing.features.email_support' },
        { key: 'pricing.features.emergency' }
      ]
    },
    {
      id: 2,
      name: 'Premium',
      price: '299',
      period: t('pricing.period', 'Monat'),
      popular: true,
      metrics: [
        { labelKey: 'pricing.metrics.cleaning_frequency', label: t('pricing.metrics.cleaning_frequency'), value: 60, text: t('pricing.frequency.2x_week') },
        { labelKey: 'pricing.metrics.garden', label: t('pricing.metrics.garden'), value: 80, text: t('pricing.level.standard') },
      ],
      features: [
        { key: 'pricing.features.premium_cleaning' },
        { key: 'pricing.features.climate' },
        { key: 'pricing.features.shopping' },
        { key: 'pricing.features.phone_email' }
      ]
    },
    {
      id: 3,
      name: 'VIP',
      price: '399',
      period: t('pricing.period', 'Monat'),
      popular: false,
      metrics: [
        { labelKey: 'pricing.metrics.cleaning_frequency', label: t('pricing.metrics.cleaning_frequency'), value: 100, text: t('pricing.frequency.4x_week') },
        { labelKey: 'pricing.metrics.garden', label: t('pricing.metrics.garden'), value: 100, text: t('pricing.level.premium') },
      ],
      features: [
        { key: 'pricing.features.vip_cleaning' },
        { key: 'pricing.features.full_service' },
        { key: 'pricing.features.laundry' },
        { key: 'pricing.features.priority' }
      ]
    }
  ];

  return (
    <section id="pricing" className="section-tech" key={refreshKey}>
      <div className="container-tech">
        <div className="section-title">
          <h2>{t('pricing.title', 'Pricing')}</h2>
          <p>{t('pricing.subtitle', 'Transparente Preise für jeden Bedarf')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.id} pkg={pkg} index={index} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ pkg, index, hoveredCard, setHoveredCard }) => {
  const { t } = useTranslation();
  
  // Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });
  const scale = useSpring(hoveredCard === pkg.id ? 1.05 : 1, { stiffness: 400, damping: 25 });
  
  // Spotlight effect position
  const spotlightX = useSpring(50, { stiffness: 400, damping: 30 });
  const spotlightY = useSpring(50, { stiffness: 400, damping: 30 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
    
    // Calculate spotlight position relative to card
    const relX = ((event.clientX - rect.left) / rect.width) * 100;
    const relY = ((event.clientY - rect.top) / rect.height) * 100;
    spotlightX.set(relX);
    spotlightY.set(relY);
  };

  const handleMouseEnter = () => {
    setHoveredCard(pkg.id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    x.set(0);
    y.set(0);
    spotlightX.set(50);
    spotlightY.set(50);
  };

  return (
    <motion.div
      className="relative flex flex-col h-full"
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ z: 50 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      <motion.div 
        className={`glass-card group relative overflow-visible flex flex-col h-full ${
          pkg.popular && hoveredCard === pkg.id ? 'backdrop-blur-xl' : 'backdrop-blur-lg'
        } transition-all duration-500`}
        style={{
          boxShadow: hoveredCard === pkg.id 
            ? '0 25px 50px -12px rgba(6, 182, 212, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
            : '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          transform: 'translateZ(0)',
          paddingTop: '2rem'
        }}
      >
        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle 200px at ${spotlightX}% ${spotlightY}%, rgba(255, 255, 255, 0.03) 0%, rgba(212, 175, 55, 0.02) 40%, transparent 70%)`,
          }}
        />

        {/* Popular Badge */}
        {pkg.popular && (
          <motion.div 
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20, delay: index * 0.1 }}
          >
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
              {t('pricing.most_popular')}
            </span>
          </motion.div>
        )}

        <div className="text-center mb-6 pt-6">
          <motion.h3 
            className="text-xl font-bold text-white mb-2"
            animate={{ 
              textShadow: hoveredCard === pkg.id ? '0 0 20px rgba(6, 182, 212, 0.5)' : 'none'
            }}
          >
            {pkg.name}
          </motion.h3>
          <div className="flex items-baseline justify-center">
            <motion.span 
              className="text-4xl font-bold text-gradient-gold"
              animate={{ 
                scale: hoveredCard === pkg.id ? 1.1 : 1,
                textShadow: hoveredCard === pkg.id ? '0 0 30px rgba(212, 175, 55, 0.6)' : 'none'
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              €{pkg.price}
            </motion.span>
            <span className="text-slate-400 ml-2">/{pkg.period}</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {pkg.metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
            >
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-400">{t(metric.labelKey, metric.label)}</span>
                <motion.span 
                  className="text-cyan-400 font-medium"
                  animate={{ 
                    textShadow: hoveredCard === pkg.id ? '0 0 10px rgba(6, 182, 212, 0.8)' : 'none'
                  }}
                >
                  {metric.text}
                </motion.span>
              </div>
              <div className="tech-bar relative overflow-hidden">
                <motion.div 
                  className="tech-bar-fill"
                  style={{ width: `${metric.value}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 30, 
                    delay: index * 0.1 + idx * 0.05 + 0.2 
                  }}
                />
                {/* Glow effect on hover */}
                {hoveredCard === pkg.id && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-cyan-600/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex-1 mb-6">
          <div className="space-y-2">
            {pkg.features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-center gap-3 text-sm text-slate-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 + 0.1 }}
              >
                <motion.i 
                  className={`fas fa-check text-xs ${pkg.popular ? 'text-cyan-400' : 'text-slate-500'}`}
                  animate={{ 
                    scale: hoveredCard === pkg.id ? [1, 1.2, 1] : 1,
                    textShadow: hoveredCard === pkg.id ? '0 0 10px rgba(6, 182, 212, 0.8)' : 'none'
                  }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                />
                <span>{t(feature.key)}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Micro-chart SVG */}
        <motion.div 
          className="mb-6 h-16 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <svg viewBox="0 0 200 60" className="w-full h-full">
            <defs>
              <linearGradient id={`grad-${pkg.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={pkg.popular ? "#06b6d4" : "#64748b"} stopOpacity="0.8" />
                <stop offset="100%" stopColor={pkg.popular ? "#0891b2" : "#475569"} stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,50 Q40,45 80,35 T160,25 T200,20 L200,60 L0,60 Z"
              fill={`url(#grad-${pkg.id})`}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.1 + 0.4 }}
            />
            <motion.path
              d="M0,50 Q40,45 80,35 T160,25 T200,20"
              fill="none"
              stroke={pkg.popular ? "#06b6d4" : "#64748b"}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.1 + 0.4 }}
            />
            {/* Glow effect on hover */}
            {hoveredCard === pkg.id && (
              <motion.path
                d="M0,50 Q40,45 80,35 T160,25 T200,20"
                fill="none"
                stroke={pkg.popular ? "#06b6d4" : "#64748b"}
                strokeWidth="4"
                opacity={0.5}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </svg>
        </motion.div>

        <motion.button 
          onClick={() => {
            sessionStorage.setItem('selectedPackage', pkg.name);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 mt-auto cursor-pointer ${
            pkg.popular 
              ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg hover:shadow-cyan-500/30' 
              : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
          }`}
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            boxShadow: pkg.popular 
              ? '0 20px 40px -15px rgba(6, 182, 212, 0.4)' 
              : '0 10px 20px -10px rgba(255, 255, 255, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          {t('pricing.choose_plan')}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
