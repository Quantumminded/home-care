# Luino Home Care

Website professionale per servizi concierge di lusso a Luino, Lago Maggiore. Target: proprietari di seconde case (tedeschi e svizzeri).

---

## 📋 PANORAMICA PROGETTO

### **Obiettivo**
Sito web vetrina multilingue (IT/DE) per acquisizione lead tramite form di contatto.

### **Stack Tecnologico**
| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| React | ^19.2.4 | Frontend framework |
| Vite | ^8.0.1 | Build tool & dev server |
| Tailwind CSS | ^3.4.19 | Styling |
| Framer Motion | ^12.38.0 | Animazioni |
| react-i18next | ^16.6.0 | Internazionalizzazione |
| Formspree | - | Invio email form |

---

## 🚀 AVVIO RAPIDO

### **1. Prerequisiti**
- Node.js 18+ installato
- Account GitHub (per clone)

### **2. Installazione**
```bash
# Clona la repository
git clone https://github.com/Quantumminded/home-care.git
cd home-care

# Installa dipendenze
npm install

# Avvia server sviluppo
npm run dev
```
L'app sarà su: `http://localhost:5173`

### **3. Build produzione**
```bash
npm run build
```
Output in: `/dist` (pronto per deployment)

---

## 📁 STRUTTURA PROGETTO

```
src/
├── components/
│   ├── layout/
│   │   └── Header.jsx              # Navbar responsive + language switcher
│   └── common/
│       ├── HeroAugmentedNew.jsx   # Hero section con CTA buttons
│       ├── ServicesBento.jsx      # Griglia servizi (bento grid)
│       ├── Testimonials.jsx       # Testimonianze clienti
│       ├── Pricing.jsx            # 3 pacchetti prezzi
│       ├── ContactForm.jsx        # Form contatti (Formspree)
│       └── LanguageSwitcher.jsx   # Switch IT/DE
├── hooks/
│   └── useLeads.js               # Hook gestione form submission
├── services/
│   └── i18n.js                   # Tutte le traduzioni IT/DE
├── App.jsx                       # Main component (layout page)
├── main.jsx                      # Entry point React
└── index.css                     # Stili globali + Tailwind

public/                           # Assets statici
index.html                        # HTML entry point
```

---

## 🌍 INTERNAZIONALIZZAZIONE (i18n)

### **Come funziona**
Tutto il testo traducibile è in `src/services/i18n.js`.

**Struttura file:**
```javascript
const resources = {
  italian: {
    translation: {
      navigation: { ... },
      hero: { ... },
      services: { ... },
      // etc...
    }
  },
  german: {
    translation: {
      // stessa struttura in tedesco
    }
  }
}
```

### **Modificare/Aggiungere Testi**

1. **Apri** `src/services/i18n.js`
2. **Trova la sezione** (es. `hero`, `pricing`, `contact`)
3. **Modifica** sia `italian` che `german`:

```javascript
// ESEMPIO: cambiare titolo hero
// Prima:
hero: {
  title: "La Tua Seconda Casa al Lago Maggiore",
  ...
}

// Dopo:
hero: {
  title: "Nuovo Titolo Qui",           // <-- IT
  ...
}

// E anche in german:
german: {
  hero: {
    title: "Neuer Titel Hier",          // <-- DE
    ...
  }
}
```

**⚠️ IMPORTANTE:** Ogni modifica deve essere fatta in ENTRAMBE le lingue (italian + german) per mantenere coerenza.

---

## 📧 FORM DI CONTATTO (Formspree)

### **Come funziona**
Il form invia automaticamente email a Formspree (servizio esterno). Non serve backend proprio.

### **Configurazione (OBBLIGATORIA per ricevere email)**

1. **Vai su** [formspree.io](https://formspree.io)
2. **Registrati** (gratuito, 50 invii/mese)
3. **Crea nuovo form**
4. **Copia il Form ID** (es. `mnjlewjg`)
5. **Incolla in** `src/hooks/useLeads.js`:

```javascript
// Linea 15 di useLeads.js
const formId = 'mnjlewjg'; // <-- SOSTITUISCI CON IL TUO
```

### **Test invio**
Compila il form sul sito → controlla email registrata su Formspree.

---

## 🎨 MODIFICHE CONTENUTI

### **Sezioni del sito (in ordine):**

| Sezione | Componente | Descrizione |
|---------|------------|-------------|
| 1. Hero | `HeroAugmentedNew.jsx` | Titolo, sottotitolo, 2 bottoni CTA |
| 2. Servizi | `ServicesBento.jsx` | 6 card servizi con metriche |
| 3. About | `App.jsx` (righe 22-63) | 2 card: Affidabilità + Specializzazione |
| 4. Testimonianze | `Testimonials.jsx` | 3 testimonianze clienti |
| 5. Prezzi | `Pricing.jsx` | 3 pacchetti: Basic/Premium/VIP |
| 6. Contatti | `ContactForm.jsx` | Form con validazione |
| 7. Footer | `App.jsx` (righe 83-135) | Info legali + social |

### **Esempi modifiche comuni:**

**Cambiare prezzi:**
```javascript
// In Pricing.jsx, cerca:
const packages = [
  { price: 149, ... },  // Basic
  { price: 299, ... },  // Premium  <-- MODIFICA QUI
  { price: 499, ... },  // VIP
]
```

**Cambiare testimonianze:**
```javascript
// In Testimonials.jsx, modifica array testimonials
const testimonials = [
  {
    name: "Nuovo Nome",           // <-- MODIFICA
    location: "Nuova Città",      // <-- MODIFICA
    text: "Nuovo testo...",        // <-- MODIFICA (anche in i18n.js!)
    ...
  }
]
```

**Modificare link social footer:**
```javascript
// In App.jsx, riga 113-121
<a href="https://instagram.com/tuoaccount">  {/* <-- SOSTITUISCI href */}
  <i className="fab fa-instagram"></i>
</a>
```

---

## 🚀 DEPLOYMENT

### **Opzione 1: Netlify (Consigliato)**
1. Vai su [netlify.com](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Connetti GitHub e seleziona `home-care` repo
4. Build settings: `npm run build`, publish directory: `dist`
5. Deploy!

### **Opzione 2: Vercel**
```bash
npm install -g vercel
vercel --prod
```

### **Dopo il deploy**
- Aggiorna **Formspree** con il nuovo dominio (in settings del form)
- Testa form di contatto sul sito live

---

## 🔧 COMANDI UTILI

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia server sviluppo |
| `npm run build` | Build produzione (cartella `dist`) |
| `npm run preview` | Preview build locale |
| `npm run lint` | Controllo codice ESLint |

---

## ❗ TROUBLESHOOTING

### **Form non invia email**
- Verifica Form ID in `useLeads.js`
- Controlla su Formspree se email confermata
- Verifica dominio in whitelist Formspree

### **Traduzioni non appaiono**
- Controlla che chiave esista in `i18n.js` (sia IT che DE)
- Verifica sintassi JSON (virgole, parentesi)

### **Build fallisce**
```bash
# Prova:
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

---

## 📞 CONTATTI E RISORSE

- **Repository**: https://github.com/Quantumminded/home-care
- **Formspree Docs**: https://formspree.io/docs
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com/docs

---

## ✍️ NOTE PER SVILUPPATORI

- **CSS**: Usa solo classi Tailwind (no CSS custom)
- **Colori brand**: Amber (#f59e0b) per lusso, Cyan per accenti tech
- **Font**: System-ui + Inter (via Tailwind)
- **Icone**: Font Awesome 6 (CDN in index.html)
- **Immagini**: Mettere in `/public` e referenziare con path `/nome-file.jpg`

---

**Ultimo aggiornamento**: Aprile 2026  
**Versione**: 1.0.0
