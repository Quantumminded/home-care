import { useTranslation } from 'react-i18next';

export const ServicesBento = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'cleaning',
      icon: 'fa-broom',
      title: t('services.cleaning.title'),
      metrics: [
        { labelKey: 'services.metrics.cleaning_frequency', label: t('services.metrics.cleaning_frequency'), value: 85, text: t('pricing.frequency.1x_week') },
        { labelKey: 'services.metrics.quality_index', label: t('services.metrics.quality_index'), value: 95, text: t('services.metrics.excellent') },
      ],
      wide: true
    },
    {
      id: 'shopping',
      icon: 'fa-shopping-cart',
      title: t('services.shopping.title'),
      metrics: [
        { labelKey: 'services.metrics.availability', label: t('services.metrics.availability'), value: 100, text: '24/7' },
        { labelKey: 'services.metrics.delivery_time', label: t('services.metrics.delivery_time'), value: 90, text: '<2h' },
      ]
    },
    {
      id: 'control',
      icon: 'fa-shield-alt',
      title: t('services.control.title'),
      metrics: [
        { labelKey: 'services.metrics.monitoring', label: t('services.metrics.monitoring'), value: 100, text: '24/7' },
        { labelKey: 'services.metrics.reaction_time', label: t('services.metrics.reaction_time'), value: 98, text: '<15min' },
      ]
    }
  ];

  return (
    <section id="services" className="section-tech">
      <div className="container-tech">
        <div className="section-title">
          <h2 className="text-white">{t('services.title', 'Dienstleistungen')}</h2>
          <p>{t('services.subtitle', 'Professionelle Betreuung für Ihr Eigentum')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`glass-card ${service.wide ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center">
                  <i className={`fas ${service.icon} text-cyan-400 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>

              {/* Metrics with glowing bars */}
              <div className="space-y-4">
                {service.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">{t(metric.labelKey, metric.label)}</span>
                      <span className="text-cyan-400 font-medium">{metric.text}</span>
                    </div>
                    <div className="tech-bar">
                      <div 
                        className="tech-bar-fill"
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Chart */}
              <div className="mt-6 h-16 relative">
                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`gradient-${service.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,45 Q20,40 40,35 T80,30 T120,25 T160,20 T200,15 L200,60 L0,60 Z"
                    fill={`url(#gradient-${service.id})`}
                  />
                  <path
                    d="M0,45 Q20,40 40,35 T80,30 T120,25 T160,20 T200,15"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-6 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium">
                {t('services.learn_more', 'Details ansehen')} <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
