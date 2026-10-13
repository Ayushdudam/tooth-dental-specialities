# TOOTH DENTAL SPECIALITIES — CONFIGURATION GUIDE (`CONFIGURATION.md`)

This guide explains how to customize and maintain the Tooth Dental Specialities web codebase, configure backend integrations, and manage environment settings.

---

## 1. Centralized Clinic Configuration (`src/data/clinicData.ts`)

All clinical text, doctor credentials, operating hours, telephone numbers, and treatment data are centralized in a single TypeScript configuration file: [`src/data/clinicData.ts`](file:///C:/Users/dudam/.gemini/antigravity/scratch/tooth-dental-specialities/src/data/clinicData.ts).

### Modifying Contact Information:
```typescript
export const CLINIC_INFO = {
  name: "Tooth Dental Specialities",
  phone: "+91 99207 34142",
  phoneRaw: "+919920734142",
  alternatePhone: "+91 77770 14655",
  whatsappUrl: "https://wa.me/919920734142?text=...",
  email: "care@toothdentalspecialities.com",
  hours: "Mon – Sat: 10:00 AM – 8:30 PM",
  // Google Maps embed URL
  googleMapsEmbed: "https://maps.google.com/maps?q=...",
};
```

### Adding or Updating Treatments:
To add a new treatment, append a new object conforming to the `Treatment` interface:
```typescript
export const TREATMENTS: Treatment[] = [
  {
    id: "pediatric",
    slug: "pediatric-dentistry",
    title: "Gentle Pediatric Dental Care",
    category: "Preventive",
    patientConcern: "Cavity prevention and gentle checkups for children",
    shortDesc: "Painless fluoride treatments and sealants in a reassuring environment.",
    duration: "30–45 mins",
    suitableFor: "Children and teenagers",
    iconName: "Smile",
    fullDesc: "...",
    process: ["...", "..."],
    clinicalHighlights: ["...", "..."],
    reasonsForAssessment: ["...", "..."],
    clinicalStages: [{ step: "01", title: "...", detail: "..." }],
    questionsToAsk: ["..."],
    aftercare: ["..."],
    procedureFaqs: [{ q: "...", a: "..." }],
    featured: false,
    needsClinicConfirmation: false,
  }
];
```

---

## 2. Design System Tokens (`tailwind.config.js`)

The visual design system is driven by Tailwind CSS tokens configured in [`tailwind.config.js`](file:///C:/Users/dudam/.gemini/antigravity/scratch/tooth-dental-specialities/tailwind.config.js):

| Token Name | Color Hex | Psychological Purpose |
| :--- | :--- | :--- |
| `forest.800` | `#123B32` | Primary brand color; clinical surgical authority and calm |
| `canvas` | `#F5F1E8` | Warm ivory background; biological tooth enamel tone |
| `surface` | `#FFFFFF` | Clean white card backgrounds |
| `copper.500` | `#C28C6B` | Muted copper accent; warm Mediterranean earthen tone |
| `text-main` | `#29332F` | Dark slate ink; WCAG AAA 10.6:1 contrast |
| `text-muted`| `#6B716D` | Muted neutral; WCAG AA 4.6:1 contrast |
| `border-subtle` | `#E7E3DA` | Subtle editorial card and section border |

Typography is governed by two fonts loaded via Google Fonts in `index.html`:
- **Display Serif**: `font-serif` maps to `Fraunces` and `DM Serif Display`.
- **Interface Sans**: `font-sans` maps to `Plus Jakarta Sans` and `Manrope`.

---

## 3. SEO & Structured Data (`index.html`)

Local SEO is anchored by OpenGraph metadata and JSON-LD `Dentist` structured data embedded in [`index.html`](file:///C:/Users/dudam/.gemini/antigravity/scratch/tooth-dental-specialities/index.html):

```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Tooth Dental Specialities",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 1, Ground Floor, Kakad Estate, Dr. R. G. Thadani Marg, Opp. Podar Hospital",
    "addressLocality": "Worli",
    "addressRegion": "Mumbai",
    "postalCode": "400018",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0028",
    "longitude": "72.8188"
  },
  "telephone": "+91-99207-34142"
}
```

---

## 4. Production Appointment Backend Options

The current appointment form provides a transparent submission state with an instant 1-tap WhatsApp speed-up link. To connect a live backend:

### Option A: Direct Email Forwarding with Resend
1. Sign up for [Resend](https://resend.com) and verify `toothdentalspecialities.com`.
2. Create an API route or serverless function (`api/appointment.ts`).
3. Send patient appointment submissions directly to `care@toothdentalspecialities.com`.

### Option B: Formspree / Web3Forms (Zero Backend Setup)
1. Add action endpoint `https://formspree.io/f/{your-id}` in `src/components/AppointmentForm.tsx`.
2. Submissions deliver instantly to clinic email with zero server infrastructure.

### Option C: Meta WhatsApp Cloud API Webhook
1. Register WhatsApp Business Number on Meta Developer portal.
2. Direct incoming inquiries to a webhook that triggers an instant WhatsApp template message to Dr. Vishwatmika's clinic team.
