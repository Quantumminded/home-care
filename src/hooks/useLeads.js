import { useState, useCallback } from 'react';

export const useLeads = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createLead = useCallback(async (leadData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Formspree endpoint - SOSTITUISCI CON IL TUO FORM ID
      const formId = 'mnjlewjg'; // <-- MODIFICA QUI
      const endpoint = `https://formspree.io/f/${formId}`;
      
      // Prepara i dati per Formspree
      const formData = {
        name: `${leadData.first_name} ${leadData.last_name}`,
        email: leadData.email,
        phone: leadData.phone || 'Non specificato',
        message: leadData.message,
        language: leadData.preferred_language || 'it',
        subject: 'Nuovo contatto da Luino Home Care'
      };

      // Invia a Formspree
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Errore nell\'invio del form');
      }

      const result = await response.json();
      
      if (result.success || response.ok) {
        setSuccess(true);
        return { success: true, data: result };
      } else {
        throw new Error(result.error || 'Errore generico');
      }
      
    } catch (err) {
      console.error('Formspree error:', err);
      const errorMessage = err.message || 'Errore nell\'invio del messaggio. Riprova più tardi.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const resetState = useCallback(() => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  }, []);

  return {
    createLead,
    loading,
    error,
    success,
    resetState
  };
};
