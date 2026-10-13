# TOOTH DENTAL SPECIALITIES — ASSET MANIFEST (`ASSET-MANIFEST.md`)

This manifest documents all visual and photographic assets utilized across the **Tooth Dental Specialities** digital web experience. In accordance with Section 7 of the *Research Benchmark & Google Antigravity Build Brief*, no stock asset is portrayed as verified clinic property or actual patient outcome. Temporary photographic assets are licensed for demonstration and labeled for seamless client replacement.

---

## 1. Photographic Asset Registry

| ID | Location / Component | Subject / Purpose | Dimensions & Aspect Ratio | Current Source & Status | Alt Text Specification | Target Clinic Asset |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `IMG-01` | **Hero** (`src/components/Hero.tsx`) | Doctor & patient unhurried consultation in a calm, modern operatory | $1000 \times 1250\text{px}$ (4:5 mobile / 16:14 desktop) | Unsplash licensed temporary demonstration asset (`photo-1629909613654-28e377c37b09`) | *"Doctor and patient consultation in a modern, calm dental operatory at Tooth Dental Specialities"* | Official consultation photo of Dr. Vishwatmika Jadhav in Worli operatory |
| `IMG-02` | **Trust Section** (`src/components/TrustSection.tsx`) | Quiet, hygienic private operatory suite and dental chair | $800 \times 600\text{px}$ (4:3) | Unsplash licensed temporary demonstration asset (`photo-1588776814546-1ffcf47267a5`) | *"Quiet, hygienic private dental operatory room at Tooth Dental Specialities in Worli"* | Real operatory room at Shop 1, Kakad Estate |
| `IMG-03` | **Clinician Profile** (`src/components/DoctorClinicSection.tsx` & `src/pages/AboutPage.tsx`) | Dr. Vishwatmika Jadhav, MDS portrait in clinical attire | $800 \times 1066\text{px}$ (3:4) | Unsplash licensed temporary demonstration portrait (`photo-1559839734-2b71ea197ec2`) | *"Dr. Vishwatmika Jadhav, MDS — Lead Specialist at Tooth Dental Specialities, Worli"* | Verified professional clinical portrait of Dr. Vishwatmika Jadhav, MDS |
| `IMG-04` | **Location Map** (`src/components/LocationHub.tsx`) | Interactive Google Maps embed with landmark pin | $100% \times 400\text{px}$ responsive iframe | Official Google Maps Embed API (`Kakad Estate, Worli, Mumbai 400018`) | *"Tooth Dental Specialities Worli Mumbai Clinic Location opposite Podar Hospital"* | Live Google Business Profile CID Map |

---

## 2. Iconography & SVG Graphics

All icons are rendered through [Lucide React](https://lucide.dev/), maintaining a uniform 2px stroke weight and clinical geometry:

| Symbol / Icon | Lucide Component | Clinical Purpose |
| :--- | :--- | :--- |
| **Tooth Brand Crest** | Inline SVG (`Header.tsx`, `Footer.tsx`) | Biological tooth icon rendered in forest green `#123B32` |
| **Endodontics** | `ShieldCheck` | Tooth root preservation & hermetic seal |
| **Smile Design** | `Sparkles` | Porcelain aesthetics and natural translucency |
| **Aligners** | `Smile` | Non-bracket discreet orthodontics |
| **Dental Implants** | `Target` | Osseointegrated titanium bone anchor |
| **Preventive** | `Sparkle` | Ultrasonic piezo plaque debridement |
| **Restorative** | `CheckCircle` | Monolithic zirconia CAD/CAM crowns |
| **Safety** | `ShieldCheck` | Class-B fractionated pre-vacuum autoclave |
| **Pacing** | `HeartHandshake` | Hand-signal patient pause protocol |

---

## 3. Client Asset Swap Protocol

When official photographic assets are provided by Dr. Vishwatmika Jadhav:
1. Place webp/jpg images in `public/images/`:
   - `public/images/doctor-vishwatmika-jadhav.webp` (replacing `IMG-03`)
   - `public/images/worli-operatory.webp` (replacing `IMG-02`)
   - `public/images/consultation-worli.webp` (replacing `IMG-01`)
2. Update the corresponding `src` attributes in `src/components/Hero.tsx`, `src/components/DoctorClinicSection.tsx`, `src/components/TrustSection.tsx`, and `src/pages/AboutPage.tsx`.
3. Verify that `loading="lazy"` and explicit `width` / `height` attributes remain configured to ensure 0 layout shift (CLS).
