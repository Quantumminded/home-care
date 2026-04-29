import { useTranslation } from 'react-i18next';

export const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: "Klaus Schmidt",
      location: t('testimonials.klaus.location'),
      property: t('testimonials.klaus.property'),
      rating: 5,
      text: t('testimonials.klaus.text'),
      date: t('testimonials.klaus.date')
    },
    {
      id: 2,
      name: "Erika Mueller",
      location: t('testimonials.erika.location'),
      property: t('testimonials.erika.property'),
      rating: 5,
      text: t('testimonials.erika.text'),
      date: t('testimonials.erika.date')
    },
    {
      id: 3,
      name: "Hans Weber",
      location: t('testimonials.hans.location'),
      property: t('testimonials.hans.property'),
      rating: 5,
      text: t('testimonials.hans.text'),
      date: t('testimonials.hans.date')
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? 'text-amber-400' : 'text-slate-600'}`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="section-tech">
      <div className="container-tech">
        <div className="section-title">
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-card group hover:scale-105 transition-all duration-300">
              {/* Header with avatar */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center mr-4 border border-amber-500/20">
                  <span className="text-amber-400 font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-slate-400">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial text */}
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 text-6xl text-cyan-500/20 font-serif">"</div>
                <p className="text-slate-300 leading-relaxed pl-6 italic">
                  {testimonial.text}
                </p>
              </div>

              {/* Footer with property and date */}
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span className="text-sm font-medium text-cyan-400">{testimonial.property}</span>
                <span className="text-sm text-slate-500">{testimonial.date}</span>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="tech-button-tech">
            <i className="fas fa-comments mr-2"></i>
            {t('testimonials.read_more')}
          </button>
        </div>
      </div>
    </section>
  );
};
