import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  italian: {
    translation: {
      navigation: {
        entdecken: "Scopri",
        services: "Servizi",
        concierge: "Concierge",
        blog: "Blog",
        contact: "Contatti"
      },
      header: {
        tagline: "Concierge di Lusso",
        cta: "Contattaci"
      },
      hero: {
        title: "La Tua Seconda Casa al Lago Maggiore",
        subtitle: "Servizi concierge esclusivi per proprietari di seconde case. Professionalità svizzera, cortesia italiana.",
        cta_primary: "Contattaci",
        cta_secondary: "Scopri i Servizi",
        luxury_badge: "Servizio di Lusso",
        title_line1: "La Tua Seconda Casa",
        title_line2: "Sempre Curata",
        years_experience: "Anni di Esperienza",
        happy_clients: "Clienti Soddisfatti",
        support: "Assistenza",
        scroll_hint: "Scopri di più"
      },
      services: {
        title: "Servizi",
        subtitle: "Soluzioni su misura per la tua proprietà con la massima precisione",
        learn_more: "Scopri di più",
        metrics: {
          cleaning_frequency: "Frequenza pulizia",
          quality_index: "Indice qualità",
          availability: "Disponibilità",
          delivery_time: "Tempo consegna",
          monitoring: "Monitoraggio",
          reaction_time: "Tempo reazione",
          excellent: "Eccellente"
        },
        cleaning: {
          title: "Pulizia Professionale",
          items: [
            "Pulizia completa prima arrivo/partenza",
            "Manutenzione ordinaria",
            "Cambio biancheria e asciugamani",
            "Report fotografico dettagliato"
          ]
        },
        shopping: {
          title: "Spesa e Forniture",
          items: [
            "Spesa personalizzata prima arrivo",
            "Forniture di base sempre disponibili",
            "Consegna diretta a casa",
            "Ricevute dettagliate"
          ]
        },
        control: {
          title: "Controllo e Sicurezza",
          items: [
            "Controllo riscaldamento e climatizzazione",
            "Verifica periodica proprietà",
            "Gestione emergenze 24/7",
            "Coordinate con artigiani locali"
          ]
        }
      },
      about: {
        title: "Perché scegliere Luino Home Care?",
        subtitle: "Affidabilità tedesca inconta ospitalità italiana",
        reliability: {
          title: "Affidabilità Tedesca",
          description: "Approccio metodico e precisione svizzera nella gestione della tua proprietà. Ogni servizio viene documentato e verificato secondo i più alti standard."
        },
        specialization: {
          title: "Specializzati in Clienti Internazionali",
          description: "Comprendiamo le esigenze specifiche dei proprietari stranieri. Comunicazione chiara, report dettagliati e rispetto totale della tua privacy."
        }
      },
      badges: {
        certified: "Certificato TÜV",
        gdpr: "GDPR Compliant",
        multilingual: "Multilingue"
      },
      contact: {
        title: "Pronto a affidare la tua proprietà a mani esperte?",
        subtitle: "Contattaci per una consulenza iniziale gratuita e scopri la nostra affidabilità",
        phone: "Telefono",
        email: "Email",
        location: "Sede",
        first_name: "Nome",
        last_name: "Cognome",
        nationality: "Nazionalità",
        nationality_german: "Tedesco",
        nationality_swiss: "Svizzero",
        nationality_italian: "Italiano",
        nationality_other: "Altro",
        property_type: "Tipo di Proprietà",
        property_apartment: "Appartamento",
        property_house: "Casa",
        property_villa: "Villa",
        message: "Messaggio",
        message_placeholder: "Descrivi le tue esigenze e come possiamo aiutarti...",
        privacy_agreement: "Accetto la privacy policy e i termini di servizio",
        send: "Invia Messaggio",
        sending: "Invio in corso...",
        success_title: "Messaggio Inviato con Successo!",
        success_message: "Ti contatteremo entro 24 ore per una consulenza personalizzata.",
        send_another: "Invia un altro messaggio"
      },
      validation: {
        first_name_required: "Il nome è obbligatorio",
        last_name_required: "Il cognome è obbligatorio",
        email_required: "L'email è obbligatoria",
        email_invalid: "Inserisci un'email valida",
        phone_required: "Il telefono è obbligatorio",
        phone_invalid: "Inserisci un numero di telefono valido",
        message_required: "Il messaggio è obbligatorio"
      },
      footer: {
        description: "Il tuo partner affidabile per la gestione della proprietà sul Lago Maggiore.",
        legal_title: "Legale",
        privacy: "Privacy Policy",
        imprint: "Impressum",
        terms: "Termini e Condizioni",
        social_title: "Seguici",
        copyright: "© 2024 Luino Home Care. Tutti i diritti riservati.",
        made_in: "Fatto con precisione a Luino 🇮🇹"
      },
      testimonials: {
        title: "Dicono di Noi",
        subtitle: "Clienti tedeschi e svizzeri condividono la loro esperienza con Luino Home Care",
        read_more: "Leggi Altre Recensioni",
        klaus: {
          location: "Monaco, Germania",
          property: "Appartamento con vista lago",
          text: "Servizio impeccabile e professionale. La mia seconda casa a Luino è sempre perfetta quando arrivo. Raccomandato!",
          date: "Marzo 2024"
        },
        erika: {
          location: "Zurigo, Svizzera",
          property: "Villa sul lago",
          text: "Affidabilità svizzera e cortesia italiana. Un servizio che non teme confronti in Europa.",
          date: "Febbraio 2024"
        },
        hans: {
          location: "Francoforte, Germania",
          property: "Casa vacanze",
          text: "Finalmente un servizio che capisce le esigenze dei proprietari stranieri. Comunicazione chiara e risultati garantiti.",
          date: "Gennaio 2024"
        }
      },
      pricing: {
        title: "Pacchetti Trasparenti per Ogni Esigenza",
        subtitle: "Scegli il piano perfetto per la tua seconda casa. Nessun costo nascosto, cancellazione gratuita.",
        most_popular: "Più Popolare",
        choose_plan: "Scegli Questo Piano",
        custom_note: "Hai esigenze specifiche? Creiamo un piano personalizzato per te.",
        contact_custom: "Contatta per Piano Personalizzato",
        trust_title: "Garanzia di Soddisfazione al 100%",
        trust_description: "Se non sei completamente soddisfatto, ti rimborseremo il primo mese.",
        testimonial_name: "Klaus Schmidt, Zurigo",
        period: "Mese",
        frequency: {
          "1x_week": "1x/sett",
          "2x_week": "2x/sett", 
          "4x_week": "4x/sett"
        },
        level: {
          basic: "Base",
          standard: "Standard",
          premium: "Premium"
        },
        metrics: {
          cleaning_frequency: "Frequenza pulizia",
          garden: "Cura giardino"
        },
        features: {
          basic_cleaning: "Pulizia base",
          email_support: "Supporto email",
          emergency: "Emergenze 24/7",
          premium_cleaning: "Pulizia premium",
          climate: "Controllo clima",
          shopping: "Servizio spesa",
          phone_email: "Telefono & email",
          vip_cleaning: "Pulizia VIP",
          full_service: "Servizio completo",
          laundry: "Cambio biancheria",
          priority: "Supporto priority 24/7"
        },
        packages: {
          basic: {
            name: "Basic",
            description: "Perfetto per proprietà usate occasionalmente"
          },
          premium: {
            name: "Premium", 
            description: "La scelta più popolare per uso frequente"
          },
          vip: {
            name: "VIP",
            description: "Servizio completo per massima tranquillità"
          }
        }
      }
    }
  },
  german: {
    translation: {
      navigation: {
        entdecken: "Entdecken",
        services: "Dienstleistungen",
        concierge: "Concierge",
        blog: "Blog",
        contact: "Kontakt"
      },
      header: {
        tagline: "Luxus Concierge",
        cta: "Kontaktieren"
      },
      hero: {
        title: "Ihr Zweitheim am Lago Maggiore",
        subtitle: "Vertrauen Sie auf exklusive Concierge-Dienste für Ihr Eigentum. Deutsche Zuverlässigkeit, schweizer Präzision, italienische Gastfreundschaft.",
        cta_primary: "Kontaktieren Sie uns",
        cta_secondary: "Services Entdecken",
        luxury_badge: "Luxus Service",
        title_line1: "Ihr Zweitheim",
        title_line2: "Immer Gepflegt",
        years_experience: "Jahre Erfahrung",
        happy_clients: "Zufriedene Kunden",
        support: "Rund-um-die-Uhr Support",
        scroll_hint: "Mehr erfahren"
      },
      services: {
        title: "Dienstleistungen",
        subtitle: "Maßgeschneiderte Lösungen für Ihr Eigentum mit höchster Präzision",
        learn_more: "Details ansehen",
        metrics: {
          cleaning_frequency: "Reinigungsfrequenz",
          quality_index: "Qualitätsindex",
          availability: "Verfügbarkeit",
          delivery_time: "Lieferzeit",
          monitoring: "Überwachung",
          reaction_time: "Reaktionszeit",
          excellent: "Exzellent"
        },
        cleaning: {
          title: "Professionelle Reinigung",
          items: [
            "Vollständige Reinigung vor Ihrer An- und Abreise",
            "Regelmäßige Wartung nach Ihren Wünschen",
            "Wechsel von Bettwäsche und Handtüchern",
            "Detaillierter fotographischer Bericht für Ihre Sicherheit"
          ]
        },
        shopping: {
          title: "Einkäufe und Lieferungen",
          items: [
            "Personalisierter Einkauf vor Ihrer Ankunft",
            "Grundversorgung immer verfügbar für Sie",
            "Direkte Lieferung in Ihr Zuhause",
            "Detaillierte Quittungen für Ihre Abrechnung"
          ]
        },
        control: {
          title: "Kontrolle und Sicherheit",
          items: [
            "Heizungs- und Klimakontrolle für Ihr Wohlbefinden",
            "Regelmäßige Immobilienüberprüfung",
            "24/7 Notfallmanagement für Ihre Sicherheit",
            "Koordination mit lokalen Handwerkern"
          ]
        }
      },
      about: {
        title: "Warum Sie Luino Home Care Wählen Sollten",
        subtitle: "Vertrauen, Präzision und diskrete Professionalität",
        reliability: {
          title: "Deutsche Zuverlässigkeit",
          description: "Vertrauen Sie auf methodische Vorgehensweise und schweizer Präzision bei der Verwaltung Ihrer Immobilie. Jede Dienstleistung wird nach höchsten Standards dokumentiert und von uns persönlich überprüft."
        },
        specialization: {
          title: "Spezialisiert auf Ihre Bedürfnisse",
          description: "Wir verstehen die spezifischen Anforderungen internationaler Eigentümer wie Sie. Klare Kommunikation, detaillierte Berichte und vollständiger Respekt Ihrer Privatsphäre garantiert."
        }
      },
      badges: {
        certified: "TÜV Zertifiziert",
        gdpr: "DSGVO Konform",
        multilingual: "Mehrsprachig"
      },
      contact: {
        title: "Bereit, Ihr Eigentum in professionelle Hände zu geben?",
        subtitle: "Kontaktieren Sie uns für eine kostenlose Erstberatung und überzeugen Sie sich von unserer Zuverlässigkeit",
        phone: "Telefon",
        email: "E-Mail",
        location: "Standort",
        first_name: "Vorname",
        last_name: "Nachname",
        nationality: "Ihre Nationalität",
        nationality_german: "Deutsch",
        nationality_swiss: "Schweizer",
        nationality_italian: "Italienisch",
        nationality_other: "Andere",
        property_type: "Ihr Immobilientyp",
        property_apartment: "Wohnung",
        property_house: "Haus",
        property_villa: "Villa",
        message: "Ihre Nachricht an uns",
        message_placeholder: "Beschreiben Sie Ihre Anforderungen und wie wir Sie mit Präzision und Sorgfalt unterstützen können...",
        privacy_agreement: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten für die Kontaktaufnahme zu",
        send: "Nachricht an uns senden",
        sending: "Wird übermittelt...",
        success_title: "Vielen Dank für Ihr Vertrauen!",
        success_message: "Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück, um Ihre Anforderungen persönlich zu besprechen.",
        send_another: "Weitere Anfrage senden"
      },
      validation: {
        first_name_required: "Bitte geben Sie Ihren Vornamen ein",
        last_name_required: "Bitte geben Sie Ihren Nachnamen ein",
        email_required: "Bitte geben Sie Ihre E-Mail-Adresse ein",
        email_invalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
        phone_required: "Bitte geben Sie Ihre Telefonnummer ein",
        phone_invalid: "Bitte geben Sie eine gültige Telefonnummer ein",
        message_required: "Bitte beschreiben Sie Ihre Anforderungen"
      },
      footer: {
        description: "Ihr vertrauenswürdiger Partner für Immobilienverwaltung am Lago Maggiore.",
        legal_title: "Rechtliches",
        privacy: "Datenschutz",
        imprint: "Impressum",
        terms: "AGB",
        social_title: "Folgen Sie uns",
        copyright: "© 2024 Luino Home Care. Alle Rechte vorbehalten.",
        made_in: "Mit Präzision gemacht in Luino 🇮🇹"
      },
      testimonials: {
        title: "Das Sagen Unsere Kunden",
        subtitle: "Vertrauen Sie auf die Erfahrungen zufriedener Kunden aus Deutschland und der Schweiz",
        read_more: "Weitere Bewertungen ansehen",
        klaus: {
          location: "München, Deutschland",
          property: "Wohnung mit Seeblick",
          text: "Einwandfreier und professioneller Service. Meine zweite Wohnung in Luino ist bei jeder Ankunft perfekt. Empfohlen!",
          date: "März 2024"
        },
        erika: {
          location: "Zürich, Schweiz",
          property: "Villa am See",
          text: "Schweizer Zuverlässigkeit und italienische Gastfreundschaft. Ein Service, der in Europa seinesgleichen sucht.",
          date: "Februar 2024"
        },
        hans: {
          location: "Frankfurt, Deutschland",
          property: "Ferienhaus",
          text: "Endlich ein Service, der die Bedürfnisse ausländischer Eigentümer versteht. Klare Kommunikation und garantierte Ergebnisse.",
          date: "Januar 2024"
        }
      },
      pricing: {
        title: "Transparente Preise für Ihre Sicherheit",
        subtitle: "Wählen Sie das passende Paket für Ihr Zweitheim. Keine versteckten Kosten, jederzeit kündbar mit 30 Tagen Frist.",
        most_popular: "Beliebteste Wahl",
        choose_plan: "Diesen Plan wählen",
        custom_note: "Benötigen Sie ein individuelles Angebot? Wir erstellen Ihnen einen maßgeschneiderten Plan.",
        contact_custom: "Individuelles Angebot anfordern",
        trust_title: "100% Zufriedenheitsgarantie",
        trust_description: "Sollten Sie nicht vollständig zufrieden sein, erstatten wir Ihnen den ersten Monat zurück.",
        testimonial_name: "Klaus Schmidt, Zürich",
        period: "Monat",
        frequency: {
          "1x_week": "1x/Woche",
          "2x_week": "2x/Woche", 
          "4x_week": "4x/Woche"
        },
        level: {
          basic: "Basis",
          standard: "Standard",
          premium: "Premium"
        },
        metrics: {
          cleaning_frequency: "Reinigungsfrequenz",
          garden: "Gartenpflege"
        },
        features: {
          basic_cleaning: "Grundreinigung",
          email_support: "E-Mail Support",
          emergency: "Notfall 24/7",
          premium_cleaning: "Premium Reinigung",
          climate: "Wärme/Klima Kontrolle",
          shopping: "Einkauf Service",
          phone_email: "Telefon & E-Mail Support",
          vip_cleaning: "VIP Reinigung",
          full_service: "Komplett Service",
          laundry: "Handtuch/Wäsche Wechsel",
          priority: "Priority Support 24/7"
        },
        packages: {
          basic: {
            name: "Basic",
            description: "Perfekt für gelegentlich genutzte Immobilien"
          },
          premium: {
            name: "Premium", 
            description: "Die beliebteste Wahl für häufige Nutzung"
          },
          vip: {
            name: "VIP",
            description: "Vollständiger Service für maximale Ruhe"
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'italian',
    fallbackLng: 'italian',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
