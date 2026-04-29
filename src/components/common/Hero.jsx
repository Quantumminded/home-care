import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            <i className="fas fa-calendar-check mr-2"></i>
            {t('hero.cta_primary')}
          </button>
          <button className="btn-secondary">
            <i className="fas fa-phone mr-2"></i>
            {t('hero.cta_secondary')}
          </button>
        </div>
      </div>
    </section>
  );
};
