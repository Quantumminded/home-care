# Luino Home Care

Servizi professionali di concierge per proprietari stranieri di seconde case a Luino.

## 🏗️ Architettura del Progetto

### **Stack Tecnologico**
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Realtime)
- **Internazionalizzazione**: react-i18next (Italiano/Tedesco)
- **Icons**: Font Awesome 6
- **Deployment**: Pronto per Vercel/Netlify

### **Struttura Cartelle**
```
src/
├── components/
│   ├── layout/
│   │   └── Header.jsx          # Navigazione con language switcher
│   └── common/
│       ├── Hero.jsx            # Hero section con copy persuasivo
│       ├── ContactForm.jsx     # Form contatti con validazione
│       ├── Testimonials.jsx     # Testimonianze clienti
│       ├── Pricing.jsx         # Pacchetti prezzi trasparenti
│       └── LanguageSwitcher.jsx # Switch IT/DE
├── hooks/
│   └── useLeads.js          # Custom hook per gestione leads
├── services/
│   ├── supabase.js          # Configurazione e funzioni Supabase
│   └── i18n.js             # Traduzioni Italiano/Tedesco
└── App.jsx                   # Componente principale
```

## 🚀 Quick Start

### **1. Clone e Installazione**
```bash
git clone <repository-url>
cd luino-home-care
npm install
```

### **2. Configurazione Ambiente**
Crea un file `.env` nella root:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

### **3. Setup Database Supabase**
1. Vai su [supabase.com](https://supabase.com)
2. Crea un nuovo progetto
3. Esegui questo SQL nell'editor Supabase:

```sql
-- Tabella Leads
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  nationality TEXT CHECK (nationality IN ('german', 'swiss', 'italian', 'other')),
  property_type TEXT CHECK (property_type IN ('apartment', 'house', 'villa')),
  message TEXT,
  preferred_language TEXT DEFAULT 'italian' CHECK (preferred_language IN ('italian', 'german')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost'))
);

-- Tabella Service Requests
CREATE TABLE service_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  service_type TEXT NOT NULL CHECK (service_type IN ('cleaning', 'shopping', 'home_control', 'package')),
  property_address TEXT NOT NULL,
  check_in_date DATE,
  check_out_date DATE,
  frequency TEXT CHECK (frequency IN ('one_time', 'weekly', 'biweekly', 'monthly')),
  special_requirements TEXT,
  estimated_price DECIMAL(10,2),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indici performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_service_requests_lead_id ON service_requests(lead_id);
CREATE INDEX idx_service_requests_status ON service_requests(status);

-- Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert service_requests" ON service_requests FOR INSERT WITH CHECK (true);
```

### **4. Avvio Sviluppo**
```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`

## 🌍 Internazionalizzazione

Il progetto supporta **Italiano** e **Tedesco** con:
- Switch istantaneo nell'header
- Traduzioni culturalmente adattate
- URL routing multilingua (futuro)

### **Aggiungere Nuove Traduzioni**
```javascript
// src/services/i18n.js
resources: {
  italian: {
    translation: {
      // nuove chiavi italiano
    }
  },
  german: {
    translation: {
      // nuove chiavi tedesco
    }
  }
}
```

## 🎨 Design System

### **Colori Brand**
```css
--primary-50: #eff6ff;
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-700: #1d4ed8;
```

### **Componenti Riutilizzabili**
- `.btn-primary` - Button principale
- `.btn-secondary` - Button secondario  
- `.card` - Card con hover effect
- `.container` - Container responsive

## 📱 Features Principali

### **✅ Contact Form**
- Validazione real-time
- Campi culturalmente adattati (nazionalità, tipo proprietà)
- Integrazione Supabase per salvataggio leads
- Feedback visivo success/error
- Multilingua Italiano/Tedesco

### **⭐ Testimonials**
- 3 testimonianze autentiche clienti tedeschi/svizzeri
- Sistema rating 5 stelle
- Avatar con iniziali
- Design responsive

### **💰 Pricing**
- 3 pacchetti trasparenti: Basic (€149), Premium (€299), VIP (€499)
- "Most Popular" badge
- Lista features dettagliata
- Garanzia soddisfazione 100%
- Call-to-action per piani personalizzati

### **🌍 Language Switcher**
- Switch istantaneo IT/DE
- Persistenza scelta utente
- Icona globe con indicatore lingua

## 🔒 Sicurezza

### **Frontend**
- Validazione input lato client
- Sanitizzazione dati
- XSS protection
- CSRF protection

### **Backend (Supabase)**
- Row Level Security (RLS)
- Autenticazione sicura
- API keys con limitazioni
- Backup automatici

## 📊 Analytics Tracking

Per integrare Google Analytics 4:

```javascript
// index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Deployment

### **Vercel**
```bash
npm install -g vercel
vercel --prod
```

### **Netlify**
```bash
npm run build
# Carica la cartella /dist su Netlify
```

## 🧪 Testing

### **Unit Tests**
```bash
npm run test
```

### **E2E Tests**
```bash
npm run test:e2e
```

## 📈 Performance Optimization

- **Core Web Vitals**: Ottimizzato per LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Bundle Size**: Code splitting e lazy loading
- **Images**: Formati moderni (WebP/AVIF) con responsive loading
- **Caching**: Service worker per offline support

## 🤝 Contributo

1. Fork il progetto
2. Crea feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Apri Pull Request

## 📄 Licenza

MIT License - vedi file [LICENSE](LICENSE) per dettagli

## 📞 Contatto

- **Email**: info@luinohomecare.it
- **Phone**: +39 0332 123456
- **Location**: Luino, Provincia di Varese

---

**Luino Home Care** - La tua seconda casa, sempre curata come fossi presente.
