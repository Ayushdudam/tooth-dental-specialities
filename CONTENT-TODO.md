# TOOTH DENTAL SPECIALITIES — CONTENT TODO & SIGN-OFF CHECKLIST (`CONTENT-TODO.md`)

This checklist guides **Dr. Vishwatmika Jadhav, MDS** (Founder & Chief Dental Specialist) through final verification and photographic asset replacement before public deployment on `toothdentalspecialities.com`.

*Cross-references: [`VERIFICATION-REGISTER.md`](file:///C:/Users/dudam/.gemini/antigravity/scratch/tooth-dental-specialities/VERIFICATION-REGISTER.md) and [`ASSET-MANIFEST.md`](file:///C:/Users/dudam/.gemini/antigravity/scratch/tooth-dental-specialities/ASSET-MANIFEST.md).*

---

## 1. Executive Clinical Sign-Off Register

| Parameter | Current Value in Project | Status | Action Required for Launch |
| :--- | :--- | :--- | :--- |
| **Practice Signage** | Tooth Dental Specialities | Verified | Confirm exact legal board signage name |
| **Location** | Shop No. 1, Ground Floor, Kakad Estate, Dr. R. G. Thadani Marg, Opp. Podar Hospital, Worli, Mumbai 400018 | Verified | Confirm any parking / entry instructions |
| **Phone Lines** | Primary: `+91 99207 34142` <br/> Alternate: `+91 77770 14655` | Verified | Confirm WhatsApp Business app setup on primary line |
| **Email Address** | `care@toothdentalspecialities.com` | Pending | Create domain email via Google Workspace / Zoho Mail |
| **Operating Hours**| Mon – Sat: 10:00 AM – 8:30 PM <br/> Sun: Prior Appointment / Urgent Care | Documented | Confirm receptionist shift timings & Sunday policy |
| **Doctor Credentials**| Dr. Vishwatmika Jadhav, MDS (Conservative Dentistry & Endodontics) | Verified | Confirm Maharashtra State Dental Council (MSDC) registration number |
| **Professional Bodies**| IES, FODI, MSDC, BNI Mumbai South | Documented | Confirm active committee or fellowship positions |
| **Patient Reviews**| 4 Patient Quotes (Mehta, Singhania, Dalal, Vora) | Marked for review | Provide signed patient consents or sync via Google Place CID |
| **Success Rate Claim**| *"Over 95% lifetime success"* | **EXCLUDED** | Confirmed excluded from public site per brief |

---

## 2. Photographic Asset Swap Guide

The website currently uses high-aesthetic licensed demonstration photography (see [`ASSET-MANIFEST.md`](file:///C:/Users/dudam/.gemini/antigravity/scratch/tooth-dental-specialities/ASSET-MANIFEST.md)). Replace with authentic clinic photography:

1. **Dr. Vishwatmika Jadhav Official Portrait (`IMG-03`)**:
   - *Dimensions*: $800 \times 1066\text{px}$ (3:4 aspect ratio).
   - *Framing*: Eye-level, clinical coat/scrubs, warm neutral backdrop, approachable expression.
   - *Target File*: `public/images/doctor-vishwatmika-jadhav.webp`.
2. **Worli Clinic Operatory Suite (`IMG-02`)**:
   - *Dimensions*: $800 \times 600\text{px}$ (4:3 aspect ratio).
   - *Framing*: Private operatory, Class-B autoclave unit, sterile pouch bay, dental chair.
   - *Target File*: `public/images/worli-operatory.webp`.
3. **Consultation / Shared Decision-Making Moment (`IMG-01`)**:
   - *Dimensions*: $1000 \times 1250\text{px}$ (4:5 / 16:14 aspect ratio).
   - *Framing*: Dr. Vishwatmika explaining digital RVG radiograph to a patient on an HD screen.
   - *Target File*: `public/images/consultation-worli.webp`.

---

## 3. Route Verification & Content Review

Ensure every live route reflects clinical protocols:
- [x] `/` — **Homepage**: Editorial hero, biological conservation philosophy, featured treatments, doctor bio, patient journey, appointment form, FAQs, Worli location.
- [x] `/treatments` — **Treatments Directory**: Dual filtering by clinical discipline and by patient concerns ("What brings you in?").
- [x] `/treatments/:slug` — **Dedicated Treatment Sub-Pages**:
  - `/treatments/root-canal-therapy`
  - `/treatments/smile-design-veneers`
  - `/treatments/dental-implants`
  - `/treatments/clear-aligners`
  - `/treatments/preventive-care`
  - `/treatments/restorative-crowns`
- [x] `/about` — **About Dr. Vishwatmika & Practice**: Credentials, ethics, Class-B sterilization.
- [x] `/patient-experience` — **Patient Care**: Anxiety-relief, topical pre-numbing, hand signals.
- [x] `/appointment` — **Dedicated Booking**: Indian mobile validation (`+91`), 1-tap WhatsApp speed-up.
- [x] `/contact` — **Directions**: Kakad Estate opposite Podar Hospital, transit guide, ground-floor accessibility.
- [x] `/privacy` — **Privacy Disclosure**: Medical confidentiality, zero marketing sharing.
- [x] `/404` — **NotFound Page**: Boutique error recovery.

---

## 4. Production Domain & DNS Checklist

1. **Domain Purchase**:
   - Recommended: `toothdentalspecialities.com` and `toothdentalspecialities.in`.
2. **Hosting Setup**:
   - Connect GitHub repository to Vercel or Netlify.
   - Set Build Command: `npm run build`
   - Set Output Directory: `dist`
3. **DNS Records**:
   - `A` Record: `76.76.21.21` (Vercel)
   - `CNAME` Record: `cname.vercel-dns.com`
   - SSL Certificate: Auto-provisioned via Let's Encrypt with HSTS enabled.
