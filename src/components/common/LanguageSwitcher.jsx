import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'italian' ? 'german' : 'italian';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      aria-label="Switch language"
    >
      <i className="fas fa-globe text-gray-600"></i>
      <span className="text-sm font-medium text-gray-700">
        {i18n.language === 'italian' ? 'DE' : 'IT'}
      </span>
    </button>
  );
};
