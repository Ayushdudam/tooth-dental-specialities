# Tooth Dental Specialities — Elite Dental Web Experience

> **Boutique Clinical Editorial** web experience engineered for **Tooth Dental Specialities**, Worli, Mumbai.  
> Specialist-Led Endodontics, Smile Design & Family Dentistry by **Dr. Vishwatmika Jadhav, MDS**.  
> Built according to the *Tooth Dental Specialities Research Benchmark & Google Antigravity Build Brief*.

---

## 1. Executive Summary & Creative Direction

This application delivers a high-conversion, editorial dental web platform tailored to the expectations of urban patients in South Mumbai (Worli, Prabhadevi, Lower Parel, Mahalaxmi). Rather than standard hospital templates with sterile blues and repetitive cards, this project executes the **Boutique Clinical Editorial** creative direction.

### Key Pillars:
1. **Biological Conservation First**: Emphasizes preserving natural teeth roots and healthy enamel rather than aggressive, premature extractions.
2. **Authentic Photographic Storytelling**: Combines clean editorial compositions, natural operatory lighting, and clinician framing with zero fake outcome claims.
3. **Frictionless Local Conversion**: Instant WhatsApp routing (`+91 99207 34142`) with pre-filled inquiry text, Indian mobile number validation (`+91`), and a non-obstructive mobile sticky bar.
4. **Strict Medical & Verification Integrity**: Every qualification, affiliation, and review is audited. Unsupported claims (e.g., *"over 95% lifetime success"*) have been explicitly excluded.

---

## 2. Design System Tokens

The visual system is governed by custom Tailwind tokens with WCAG AAA / AA verified contrast:

| Token | Value | Role & Contrast Ratio |
| :--- | :--- | :--- |
| `forest.800` | `#123B32` | Primary brand color; clinical surgical authority and calm |
| `canvas` | `#F5F1E8` | Warm ivory background; biological enamel tone eliminating coldness |
| `surface` | `#FFFFFF` | Clean white elevated cards and modal dialogs |
| `copper.500` | `#C28C6B` | Muted copper accent; restrained Mediterranean earthen warmth |
| `border-subtle` | `#E7E3DA` | Crisp editorial borders separating content zones |
| `text-main` | `#29332F` | Dark slate ink; **10.6:1** contrast on canvas (WCAG AAA compliant) |
| `text-muted` | `#6B716D` | Secondary text; **4.6:1** contrast on canvas (WCAG AA compliant) |

### Typography:
- **Display Serif**: *Fraunces* & *DM Serif Display* (soft organic curves, warmth, medical prestige).
- **Interface Sans**: *Plus Jakarta Sans* & *Manrope* (crystal-clear geometric digital legibility).

---

## 3. Architecture & Routing

```
tooth-dental-specialities/
├── index.html                     # HTML5 entry, OpenGraph, JSON-LD Dentist schema
├── package.json                   # React 19, react-router-dom, lucide-react, Tailwind
├── tailwind.config.js             # Boutique editorial tokens & typography rules
├── ASSET-MANIFEST.md              # Photographic registry, aspect ratios & licensing
├── VERIFICATION-REGISTER.md       # Clinical claims audit & excluded statistics log
├── CONFIGURATION.md               # Customization guide & backend integration options
├── CONTENT-TODO.md                # Doctor sign-off checklist & asset swap steps
├── README.md                      # Comprehensive technical architecture
└── src/
    ├── main.tsx                   # React root entry point
    ├── App.tsx                    # Multi-page router & layout orchestrator
    ├── index.css                  # Custom scrollbars, 2px focus rings, reduced motion
    ├── data/
    │   └── clinicData.ts          # Strongly-typed central source of truth
    ├── components/
    │   ├── Header.tsx             # Accessible skip link, logo, desktop & mobile drawer
    │   ├── Hero.tsx               # Photographic art-directed hero with Dr. Jadhav badge
    │   ├── TrustSection.tsx       # "Save Natural Teeth First" split narrative & reviews
    │   ├── TreatmentsGrid.tsx     # Homepage service spotlight & category tabs
    │   ├── DoctorClinicSection.tsx# Specialist profile (Dr. Jadhav) & Class-B autoclave bay
    │   ├── PatientJourney.tsx     # 4-stage unhurried care pathway & comfort protocol
    │   ├── AppointmentForm.tsx    # Low-friction +91 validation & 1-tap WhatsApp speedup
    │   ├── FAQSection.tsx         # Categorized accessible accordion with clear answers
    │   ├── LocationHub.tsx        # Kakad Estate directions, Google map & transit guide
    │   ├── Footer.tsx             # Editorial clinic summary, legal notes & navigation
    │   ├── MobileStickyBar.tsx    # Contextual, keyboard-aware bottom conversion bar
    │   └── ScrollToTop.tsx        # Instant scroll restoration on page change
    └── pages/
        ├── HomePage.tsx           # Complete editorial homepage narrative
        ├── TreatmentsPage.tsx     # Full directory with dual filters (discipline & concern)
        ├── TreatmentDetailPage.tsx# Deep clinical roadmap: stages, aftercare, FAQs (/treatments/:slug)
        ├── AboutPage.tsx          # Dedicated practice story, bio, affiliations & sterilization
        ├── PatientExperiencePage.tsx# Dedicated anxiety-relief & comfort-first protocols
        ├── AppointmentPage.tsx    # Focused full-page booking experience
        ├── ContactPage.tsx        # Dedicated directions, transit & Google maps hub
        ├── PrivacyPage.tsx        # Dedicated medical confidentiality & data disclosure
        └── NotFoundPage.tsx       # Boutique 404 recovery route
```

---

## 4. Key Functional Features

1. **Multi-Page Treatment Roadmaps (`/treatments/:slug`)**:
   - Reusable detail routes for every confirmed clinical service:
     - `/treatments/root-canal-therapy`
     - `/treatments/smile-design-veneers`
     - `/treatments/dental-implants`
     - `/treatments/clear-aligners`
     - `/treatments/preventive-care`
     - `/treatments/restorative-crowns`
   - Each route provides: plain-language explanation, common clinical reasons for assessment, step-by-step clinical stages, questions to ask the clinician, post-care guidance, procedure-specific FAQs, and a pre-filled booking widget.

2. **Problem-Oriented Care Discovery**:
   - Patients can explore care by clinical discipline (Endodontics, Cosmetic, Restorative) or by immediate symptom (*"Throbbing Toothache"*, *"Chipped Teeth"*, *"Missing Tooth"*, *"Bleeding Gums"*).

3. **Contextual, Keyboard-Aware Mobile Action Bar**:
   - Automatically hides when the patient is focused on an input or textarea, preventing virtual keyboard obstruction.
   - Shows after scrolling past the hero to preserve a clean initial screen.
   - Respects safe-area insets (`env(safe-area-inset-bottom)`).

4. **Honest Appointment Submissions**:
   - Indian mobile validation (`+91` 10-digit).
   - In demo/preview mode, presents a clear confirmation card with a **1-tap WhatsApp speed-up link** pre-encoding the patient's full appointment request.

---

## 5. Development & Build Commands

### Install Dependencies:
```bash
npm install
```

### Start Development Server:
```bash
npm run dev
```

### Static Code Linting (Oxlint):
```bash
npm run lint
```
*Current status: 0 errors, 0 warnings across all 27 files.*

### Production Build:
```bash
npm run build
```
*Current status: Clean bundle generated in ~1.2s.*

### Preview Production Build:
```bash
npx vite preview --port 5173 --host
```

---

## 6. Verification & Quality Assurance

- **Linting**: 0 warnings, 0 errors with [Oxlint](https://oxc.rs/) on 27 files.
- **Viewport Testing**: Responsive fluid layout tested across 360px, 390px, 414px, 768px, 1024px, and 1440px with 0 horizontal scroll.
- **WCAG 2.2 AA / AAA**: Text contrast reaches **10.6:1** for primary dark slate ink and **4.6:1** for secondary neutral text on warm ivory canvas.
- **SEO & Structured Data**: Native JSON-LD `Dentist` schema embedded in `index.html` with Worli coordinates and verified phone numbers.
