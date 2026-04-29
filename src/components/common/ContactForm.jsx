import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLeads } from '../../hooks/useLeads';

export const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const { createLead, loading, error, success, resetState } = useLeads();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    // Read selected package from sessionStorage (set by Pricing buttons)
    const pkg = sessionStorage.getItem('selectedPackage');
    if (pkg) {
      setSelectedPackage(pkg);
    }

    // Listen for storage changes (when user selects different package from Pricing)
    const handleStorageChange = () => {
      const newPkg = sessionStorage.getItem('selectedPackage');
      setSelectedPackage(newPkg);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically for same-tab changes (storage event doesn't fire in same tab)
    const interval = setInterval(() => {
      const currentPkg = sessionStorage.getItem('selectedPackage');
      if (currentPkg !== selectedPackage) {
        setSelectedPackage(currentPkg);
      }
    }, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [selectedPackage]);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = t('validation.first_name_required');
    if (!formData.last_name.trim()) newErrors.last_name = t('validation.last_name_required');
    if (!formData.email.trim()) newErrors.email = t('validation.email_required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t('validation.email_invalid');
    if (!formData.message.trim()) newErrors.message = t('validation.message_required');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const result = await createLead({ 
      ...formData, 
      preferred_language: i18n.language,
      selected_package: selectedPackage 
    });
    if (result.success) {
      setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' });
      setErrors({});
      sessionStorage.removeItem('selectedPackage'); // Clear after successful submission
      setSelectedPackage(null);
    }
  };


  if (success) {
    return (
      <motion.div 
        className="max-w-md mx-auto text-center p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {t('contact.success_title')}
        </h3>
        <p className="text-gray-600 mb-6">{t('contact.success_message')}</p>
        <button 
          onClick={resetState}
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          {t('contact.send_another')}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
      transition={{ duration: 0.8 }}
    >
      <form 
        onSubmit={handleSubmit}
        className="glass-card relative overflow-visible p-8"
      >
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {/* Selected Package Banner */}
        {selectedPackage && (
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300 mb-1">{t('contact.selected_package', 'Pacchetto selezionato')}</p>
                <p className="text-lg font-bold text-white">{selectedPackage}</p>
              </div>
              <button 
                type="button"
                onClick={() => {
                  sessionStorage.removeItem('selectedPackage');
                  setSelectedPackage(null);
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-cyan-300 hover:text-white text-sm underline cursor-pointer"
              >
                {t('contact.change_package', 'Cambia')}
              </button>
            </div>
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-amber-200/80 mb-2">
              {t('contact.first_name')}
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              placeholder={t('contact.first_name_placeholder')}
              className={`w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/30 hover:border-amber-400/40 ${
                errors.first_name ? 'border-red-500' : 'border-white/10'
              } transition-all duration-300`}
            />
            {errors.first_name && <p className="text-red-400 text-sm mt-1">{errors.first_name}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-amber-200/80 mb-2">
              {t('contact.last_name')}
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              placeholder={t('contact.last_name_placeholder')}
              className={`w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/30 hover:border-amber-400/40 ${
                errors.last_name ? 'border-red-500' : 'border-white/10'
              } transition-all duration-300`}
            />
            {errors.last_name && <p className="text-red-400 text-sm mt-1">{errors.last_name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-amber-200/80 mb-2">
              {t('contact.email')}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t('contact.email_placeholder')}
              className={`w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/30 hover:border-amber-400/40 ${
                errors.email ? 'border-red-500' : 'border-white/10'
              } transition-all duration-300`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-amber-200/80 mb-2">
              {t('contact.phone')}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t('contact.phone_placeholder')}
              className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/30 hover:border-amber-400/40 transition-all duration-300"
            />
          </div>
        </div>

        {/* Message - Full Width */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-amber-200/80 mb-2">
            {t('contact.message')}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t('contact.message_placeholder')}
            rows={4}
            className={`w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/30 hover:border-amber-400/40 resize-none ${
              errors.message ? 'border-red-500' : 'border-white/10'
            } transition-all duration-300`}
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button - Pricing Style */}
        <div className="flex justify-center">
          <motion.button
            type="submit"
            disabled={loading}
            className={`py-3 px-8 rounded-xl font-medium transition-all duration-300 ${
              loading 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg hover:shadow-cyan-500/30'
            }`}
            whileHover={{ 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {t('contact.send')}
                </>
              )}
            </span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};
