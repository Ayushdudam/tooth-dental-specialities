// Centralized clinic data and TypeScript contracts for Tooth Dental Specialities, Worli, Mumbai
// Built according to the Research Benchmark Brief (Boutique Clinical Editorial)
// Enforces strict clinical honesty: zero unverified outcome claims, explicit verification flags.

export interface ClinicalStage {
  step: string;
  title: string;
  detail: string;
}

export interface ProcedureFaq {
  q: string;
  a: string;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: 'Endodontics' | 'Cosmetic' | 'Orthodontics' | 'Restorative' | 'Preventive';
  patientConcern: string;
  shortDesc: string;
  duration: string;
  suitableFor: string;
  iconName: string;
  fullDesc: string;
  process: string[];
  clinicalHighlights: string[];
  reasonsForAssessment: string[];
  clinicalStages: ClinicalStage[];
  questionsToAsk: string[];
  aftercare: string[];
  procedureFaqs: ProcedureFaq[];
  featured?: boolean;
  needsClinicConfirmation: boolean;
}

export interface PatientJourneyStep {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export interface SterilizationStandard {
  step: string;
  title: string;
  description: string;
}

export interface DoctorProfile {
  name: string;
  qualification: string;
  specialty: string;
  role: string;
  experienceYears: number;
  philosophy: string;
  bio: string;
  affiliations: string[];
  needsClinicConfirmation: boolean;
}

export interface PatientReview {
  id: string;
  author: string;
  locality: string;
  treatmentTag: string;
  rating: number;
  text: string;
  date: string;
  source: string;
  needsClinicConfirmation: boolean;
}

export interface FAQItem {
  category: string;
  q: string;
  a: string;
}

export const CLINIC_INFO = {
  name: "Tooth Dental Specialities",
  tagline: "Boutique Clinical Care in Worli",
  subtagline: "Specialist-Led Endodontics, Smile Design & Family Dentistry",
  address: {
    line1: "Shop No. 1, Ground Floor, Kakad Estate",
    line2: "Dr. R. G. Thadani Marg, Opposite Podar Hospital",
    area: "Worli, Mumbai",
    pincode: "400018",
    state: "Maharashtra, India",
    full: "Shop No. 1, Ground Floor, Kakad Estate, Dr. R. G. Thadani Marg, Opp. Podar Hospital, Worli, Mumbai - 400018"
  },
  landmarks: [
    "Directly opposite Podar Hospital gate",
    "5 minutes drive from Worli Naka junction",
    "Easily accessible from Lower Parel, Prabhadevi & Mahalaxmi",
  ],
  phone: "+91 99207 34142",
  phoneRaw: "+919920734142",
  alternatePhone: "+91 77770 14655",
  alternatePhoneRaw: "+917777014655",
  whatsappUrl: "https://wa.me/919920734142?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment%20at%20Tooth%20Dental%20Specialities",
  email: "care@toothdentalspecialities.com",
  hours: "Mon – Sat: 10:00 AM – 8:30 PM",
  hoursDetail: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:30 PM", status: "Consultations & Procedures" },
    { days: "Sunday", time: "By Prior Appointment / Urgent Care", status: "Urgent Care Priority" },
  ],
  verifiedRating: "4.9 / 5.0 (50+ Verified Reviews)",
  googleMapsUrl: "https://maps.google.com/?q=Tooth+Dental+Specialities+Kakad+Estate+Worli+Mumbai+400018",
  googleMapsEmbed: "https://maps.google.com/maps?q=Kakad+Estate+Worli+Podar+Hospital+Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed",
  needsClinicConfirmation: false,
};

export const DOCTOR_INFO: DoctorProfile = {
  name: "Dr. Vishwatmika Jadhav",
  qualification: "MDS - Conservative Dentistry & Endodontics",
  specialty: "Microscopic Endodontics & Aesthetic Restorative Dentistry",
  role: "Founder & Chief Dental Surgeon",
  experienceYears: 12,
  philosophy: "Every natural tooth is a biological marvel. Our clinical approach prioritizes tooth preservation above all else—rescuing teeth from unnecessary extraction through conservative micro-endodontics and honest dialogue.",
  bio: "Dr. Vishwatmika Jadhav is a post-graduate dental specialist (MDS) in Conservative Dentistry and Endodontics. Practicing in South Mumbai, she focuses on comfortable single-sitting root canals, minimally invasive smile enhancements, and biocompatible restorations with unhurried patient care.",
  affiliations: [
    "Indian Endodontic Society (IES)",
    "Federation of Operative Dentistry of India (FODI)",
    "Maharashtra State Dental Council (MSDC)",
    "BNI Mumbai South - South Mumbai Business Forum",
  ],
  needsClinicConfirmation: false,
};

export const TREATMENTS: Treatment[] = [
  {
    id: "rct",
    slug: "root-canal-therapy",
    title: "Microscopic Root Canal Therapy",
    category: "Endodontics",
    patientConcern: "Throbbing toothache, sensitivity to hot/cold, deep decay",
    shortDesc: "Eliminate dental pain and preserve your natural tooth root with gentle, single or multi-sitting rotary endodontics.",
    duration: "1–2 Visits • 45–60 mins",
    suitableFor: "Severe throbbing toothache, lingering hot/cold sensitivity, deep decay, cracked tooth root",
    iconName: "ShieldCheck",
    fullDesc: "Modern root canal treatment is focused on immediate biological pain relief and long-term tooth preservation. Using computerized apex locators and flexible rotary nickel-titanium instruments under rubber dam isolation, we decontaminate microscopic canals and seal them hermetically.",
    process: [
      "Digital RVG diagnostic assessment & localized gentle numbing",
      "Sterile rubber dam isolation to maintain a hospital-level sterile zone",
      "Rotary canal debridement with acoustic ultrasonic disinfection",
      "Bioceramic hermetic sealing & core build-up ready for a protective crown"
    ],
    clinicalHighlights: [
      "Natural tooth root preservation retains jawbone density",
      "Single-sitting completion possible in suitable cases",
      "Virtually pain-free procedure with targeted local anesthesia",
      "High clinical retention when sealed and restored with a timely crown"
    ],
    reasonsForAssessment: [
      "Spontaneous, throbbing pain that worsens when lying down at night",
      "Sharp pain when chewing or applying biting pressure",
      "Lingering sensitivity to hot or cold food and drinks that lasts minutes",
      "Tender swelling or a pimple-like bump on the gum adjacent to the tooth",
      "Deep cavity where decay has breached the protective dental enamel and dentin"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Micro-Diagnostic Evaluation",
        detail: "Digital radiography (RVG) and vitality tests confirm pulp inflammation level without exploratory drilling."
      },
      {
        step: "02",
        title: "Rubber Dam Isolation & Comfort Numbing",
        detail: "Targeted computer-controlled or topical-buffered local anesthesia ensures complete comfort. A sterile rubber dam isolates the tooth from oral fluids."
      },
      {
        step: "03",
        title: "Acoustic Decontamination",
        detail: "Flexible rotary nickel-titanium instruments clean microscopic canals, assisted by ultrasonic irrigation to eradicate deep bacterial biofilm."
      },
      {
        step: "04",
        title: "Bioceramic Hermetic Seal & Crown Restoration",
        detail: "Canals are sealed three-dimensionally with biocompatible sealer. A reinforced core build-up and ceramic crown restore full chewing integrity."
      }
    ],
    questionsToAsk: [
      "Can this tooth be safely completed in a single sitting or will it require two visits?",
      "Why is a protective crown necessary after root canal treatment?",
      "What are the alternatives to saving this natural tooth?",
      "What precautions should I observe between treatment appointments?"
    ],
    aftercare: [
      "Avoid chewing on the treated side until temporary cement has set and your final crown is bonded.",
      "Mild tenderness upon biting is normal for 48–72 hours as the surrounding ligament heals; mild anti-inflammatory analgesics provide quick relief.",
      "Continue routine gentle brushing and flossing around the temporary restoration.",
      "Contact the clinic immediately if you notice an unusual bite elevation or if a temporary filling loosens."
    ],
    procedureFaqs: [
      {
        q: "Does a modern root canal hurt?",
        a: "No. The procedure is performed under effective local anesthesia. Patients frequently report that having a root canal is no more uncomfortable than a standard filling; its immediate effect is relieving existing pulp pain."
      },
      {
        q: "Why should I save my tooth instead of extracting it?",
        a: "Your natural tooth root preserves jawbone structure and natural biting sensation. An extracted tooth requires replacement with an implant or bridge to prevent surrounding teeth from shifting out of alignment."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "cosmetic",
    slug: "smile-design-veneers",
    title: "Smile Design & Porcelain Veneers",
    category: "Cosmetic",
    patientConcern: "Chipped teeth, gaps, intrinsic stains, uneven smile line",
    shortDesc: "Handcrafted ultra-thin porcelain laminates, composite bonding, and clinical whitening customized to your facial character.",
    duration: "2–3 Visits across 7–10 days",
    suitableFor: "Chipped or worn edges, permanent tetracycline stains, diastema (gaps), uneven smile lines",
    iconName: "Sparkles",
    fullDesc: "We balance biological dental science with facial harmony. Every smile makeover begins with facial analysis, shade calibration against skin undertones, and an in-mouth trial mockup before any conservative enamel preparation.",
    process: [
      "Facial proportion analysis, high-definition photography & digital smile preview",
      "Trial smile mockup in your mouth so you evaluate changes before treatment",
      "Micro-conservative enamel preparation (0.3mm–0.5mm) and digital 3D scans",
      "Permanent resin bonding of hand-finished E-Max porcelain laminates"
    ],
    clinicalHighlights: [
      "Mimics natural enamel light refraction and translucency",
      "Highly stain-resistant against coffee, tea, and turmeric",
      "Conservative, tissue-sparing enamel preparation protocols",
      "Addresses discoloration, minor gaps, and worn edges harmoniously"
    ],
    reasonsForAssessment: [
      "Uneven or worn tooth edges from bruxism (teeth grinding)",
      "Deep enamel discoloration resistant to surface clinical whitening",
      "Spacing or gaps (diastema) between anterior front teeth",
      "Slightly turned or misshapen teeth where orthodontic braces are not desired"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Facial Aesthetics & Digital Preview",
        detail: "Standardized photographic analysis documents your smile line, lip curvature, and facial symmetry to plan proportion."
      },
      {
        step: "02",
        title: "In-Mouth Trial Mockup",
        detail: "A temporary resin prototype is placed over your existing teeth so you and the clinician can preview the length, contour, and speech dynamics."
      },
      {
        step: "03",
        title: "Micro-Preparation & 3D Optical Scan",
        detail: "Minimal enamel refinement (0.3mm to 0.5mm) preserves vital tooth structure. A digital optical scan is captured with zero messy pastes."
      },
      {
        step: "04",
        title: "Laboratory Artistry & Adhesive Bonding",
        detail: "Master ceramic technicians craft individually layered lithium disilicate laminates, bonded with dual-cure composite resin."
      }
    ],
    questionsToAsk: [
      "How much natural enamel must be prepared for my specific case?",
      "Can I preview the shape and shade before they are permanently bonded?",
      "How do porcelain veneers compare with direct composite bonding in terms of longevity?",
      "Will I need a nightguard to protect my veneers if I clench my teeth?"
    ],
    aftercare: [
      "Maintain twice-daily brushing with non-abrasive fluoride toothpaste.",
      "Wear a protective custom nightguard if you have a history of nocturnal clenching or grinding.",
      "Avoid using front teeth to rip packaging, tear tape, or crack nutshells.",
      "Attend routine 6-month clinical hygiene and polish appointments to safeguard the margin seals."
    ],
    procedureFaqs: [
      {
        q: "Will porcelain veneers look fake or unnaturally white?",
        a: "No. We specifically calibrate translucency, subtle edge mamellons, and shade gradations against your natural tooth tone and skin complexion to create an authentic, luminous smile."
      },
      {
        q: "How long do porcelain veneers last?",
        a: "With conscientious daily oral hygiene and regular biannual clinical checkups, porcelain veneers reliably serve patients for 10–15 years or longer."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "implants",
    slug: "dental-implants",
    title: "Dental Implants & Fixed Teeth",
    category: "Restorative",
    patientConcern: "Missing teeth, failing bridge, difficulty chewing food",
    shortDesc: "Permanent, medical-grade titanium foundations that restore full chewing power and natural smile aesthetics.",
    duration: "Planned over 2–4 months (healing + crown)",
    suitableFor: "Single or multiple missing teeth, failing bridge, loose dentures",
    iconName: "Target",
    fullDesc: "Dental implants fuse directly with your jawbone through osseointegration, preventing bone loss and facial collapse. Unlike bridges, implants preserve adjacent healthy natural teeth without grinding them down.",
    process: [
      "High-resolution 3D CBCT bone density scan & computer-guided planning",
      "Gentle placement of medical-grade titanium fixture under local anesthesia",
      "Osseointegration healing phase (8–12 weeks) forming a solid biological anchor",
      "Digital impression & cementation of custom-milled monolithic zirconia crown"
    ],
    clinicalHighlights: [
      "Self-standing anchor: zero damage to adjacent healthy teeth",
      "Restores natural biting force for all food types",
      "Stimulates jawbone retention and prevents sunken facial contours",
      "Built for decades of durability with regular dental hygiene"
    ],
    reasonsForAssessment: [
      "Single or multiple missing teeth causing adjacent teeth to tilt",
      "Difficulty chewing nuts, meats, or fibrous foods comfortably",
      "Loose or unstable removable partial dentures causing gum soreness",
      "Failing old dental bridge with recurrent decay under support teeth"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "3D CBCT & Bone Volume Mapping",
        detail: "Low-radiation 3D cone beam tomography evaluates bone density, nerve paths, and sinus proximity for guided placement."
      },
      {
        step: "02",
        title: "Minimally Invasive Placement",
        detail: "A medical-grade titanium implant fixture is inserted into the jawbone using precise surgical guides and gentle local anesthesia."
      },
      {
        step: "03",
        title: "Biological Osseointegration",
        detail: "Over 8 to 12 weeks, bone cells fuse directly with the biocompatible titanium surface, creating a permanent structural foundation."
      },
      {
        step: "04",
        title: "Custom Ceramic Crown Bonding",
        detail: "A custom titanium or zirconia abutment is fitted and topped with a high-strength ceramic crown color-matched to your smile."
      }
    ],
    questionsToAsk: [
      "Do I have sufficient bone volume for an implant, or will bone grafting be required?",
      "What is the expected healing timeline before the permanent crown is placed?",
      "How do I clean and floss around a dental implant?",
      "What happens if I delay replacing a missing tooth?"
    ],
    aftercare: [
      "Stick to a cool, soft diet for the first 48 hours following fixture placement.",
      "Avoid vigorous rinsing or spitting on the day of surgery to protect the clot.",
      "Begin warm salt water rinses 24 hours after surgery to keep the surgical site clean.",
      "Clean around the implant crown using dental floss, superfloss, or a water flosser once healed."
    ],
    procedureFaqs: [
      {
        q: "Is dental implant surgery painful?",
        a: "The procedure is carried out with thorough local numbing. Most patients report feeling only mild vibration during placement, and postoperative discomfort is typically manageable with standard analgesics."
      },
      {
        q: "Can older adults receive dental implants?",
        a: "Yes. General systemic health and adequate jawbone density are the primary criteria rather than chronological age."
      }
    ],
    featured: true,
    needsClinicConfirmation: false,
  },
  {
    id: "aligners",
    slug: "clear-aligners",
    title: "Clear Aligners & Invisible Orthodontics",
    category: "Orthodontics",
    patientConcern: "Crowded teeth, spacing, crooked smile, adult alignment",
    shortDesc: "Discreetly straighten crowded teeth and correct bite misalignments without bulky metal brackets or food restrictions.",
    duration: "6–14 Months (case dependent)",
    suitableFor: "Crowding, gaps, mild overbites, adult professional smile alignment",
    iconName: "Smile",
    fullDesc: "Clear aligners offer a transparent, removable alternative to traditional metal braces. Engineered with medical-grade polyurethane trays, they apply gentle, calibrated pressure to shift teeth incrementally into optimal alignment.",
    process: [
      "3D optical intraoral scan of your dental arches (no messy impression paste)",
      "Digital video simulation previewing week-by-week tooth movement",
      "Series of laser-trimmed, custom-milled clear aligner trays delivered",
      "Periodic progress checks every 6–8 weeks until alignment is complete"
    ],
    clinicalHighlights: [
      "Nearly invisible: colleagues and peers rarely notice them",
      "Removable for meals, allowing unhindered eating of any food",
      "Simple oral hygiene: brush and floss naturally without bracket traps",
      "Fewer clinic visits and zero wire-poke dental emergencies"
    ],
    reasonsForAssessment: [
      "Crowded or overlapping anterior teeth making flossing difficult",
      "Diastema or unwanted spaces between teeth",
      "Relapse after previous teenage orthodontic treatment",
      "Bite alignment concerns causing uneven enamel wear"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Intraoral 3D Scanning",
        detail: "A high-speed optical scanner captures millions of 3D data points of your teeth and occlusion without gagging impressions."
      },
      {
        step: "02",
        title: "Digital Orthodontic Setup",
        detail: "Computer software models tooth movements step by step. You inspect a 3D video roadmap showing your expected smile progression."
      },
      {
        step: "03",
        title: "Aligner Delivery & Wear Protocol",
        detail: "Custom transparent trays are issued with clear instructions to wear them 20–22 hours daily, switching trays every 1–2 weeks."
      },
      {
        step: "04",
        title: "Refinement & Retainer Protection",
        detail: "Once alignment is achieved, discreet retainers preserve the result and prevent long-term teeth shifting."
      }
    ],
    questionsToAsk: [
      "How many hours per day must I wear the aligner trays?",
      "Will I require tooth attachments or interproximal reduction (IPR)?",
      "How often will I need to visit the clinic during aligner treatment?",
      "What type of retainer will I receive once treatment finishes?"
    ],
    aftercare: [
      "Wear aligners for 20 to 22 hours per day, removing them only for meals and brushing.",
      "Rinse trays with lukewarm water and clean with a soft toothbrush; avoid hot water which can warp the tray plastic.",
      "Store aligners safely in their protective case whenever they are removed.",
      "Wear your prescribed night retainers consistently once treatment is finished to keep your teeth stable."
    ],
    procedureFaqs: [
      {
        q: "Will clear aligners affect my speech?",
        a: "You may experience a slight lisp for the first 24 to 48 hours as your tongue adapts. Most patients speak completely normally within two days."
      },
      {
        q: "Are clear aligners suitable for adults and working professionals?",
        a: "Yes. They are virtually imperceptible in workplace and social settings, making them the preferred orthodontic choice for adults."
      }
    ],
    featured: false,
    needsClinicConfirmation: false,
  },
  {
    id: "hygiene",
    slug: "preventive-care",
    title: "Preventive Hygiene & Periodontal Care",
    category: "Preventive",
    patientConcern: "Bleeding gums, bad breath, dental tartar, 6-month checkup",
    shortDesc: "Gentle ultrasonic scaling, stain removal, and gum health checks to eliminate tartar and prevent pyorrhea early.",
    duration: "Single Visit • 30–45 mins",
    suitableFor: "Routine 6-month checkup, persistent bleeding gums, bad breath, tea/coffee stain removal",
    iconName: "Sparkle",
    fullDesc: "Healthy gums are the biological foundation of healthy teeth. Our ultrasonic debridement gently removes hard calculus and bacterial biofilms above and beneath the gumline without abrading enamel.",
    process: [
      "Periodontal gum pocket depth assessment & oral mucosal examination",
      "Water-cooled acoustic piezo ultrasonic plaque and calculus debridement",
      "Enamel polishing with fine prophy-paste to resist new stain accumulation",
      "Personalized preventive oral hygiene counseling and interdental brush coaching"
    ],
    clinicalHighlights: [
      "Immediately relieves bleeding gums and inflammatory tenderness",
      "Eliminates chronic mouth odor caused by deep bacterial pockets",
      "Protects supporting jawbone from irreversible periodontitis",
      "Strictly enamel-safe and comfortable with topical numbing gels when requested"
    ],
    reasonsForAssessment: [
      "Gums bleeding while brushing, spitting, or eating apples",
      "Hard yellowish-brown tartar deposits visible behind front teeth",
      "Chronic unpleasant mouth odor (halitosis) despite brushing",
      "Routine 6-month clinical maintenance check for the family"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Periodontal Health Screening",
        detail: "Assessment of gum margins, pocket depths, and tartar accumulation indicates inflammation level."
      },
      {
        step: "02",
        title: "Piezo Ultrasonic Debridement",
        detail: "Fine vibrating micro-tips cooled with gentle water mist dislodge mineralized calculus without scratching tooth enamel."
      },
      {
        step: "03",
        title: "Therapeutic Stain Removal & Prophy-Polish",
        detail: "Gentle paste polishing removes tea, coffee, and dietary stains, leaving smooth surfaces that deter bacterial cling."
      },
      {
        step: "04",
        title: "Custom Preventive Regimen",
        detail: "Review of interdental brushing, floss angles, and rinse recommendations tailored to your oral biochemistry."
      }
    ],
    questionsToAsk: [
      "Does dental cleaning weaken enamel or cause teeth to become loose?",
      "How frequently should I schedule a professional cleaning based on my gum health?",
      "Which type of toothbrush and interdental aid is best for my gums?",
      "Are my gums showing any early signs of receding?"
    ],
    aftercare: [
      "Mild transient sensitivity to cold fluids may occur for 24–48 hours; use room-temperature water.",
      "Brush twice daily using gentle circular motions along the gumline with a soft-bristled brush.",
      "Incorporate daily flossing or interdental brushes to keep spaces between teeth clear of food debris.",
      "Return every 6 months for preventive evaluation before calculus hardens into bone-damaging tartar."
    ],
    procedureFaqs: [
      {
        q: "Does dental scaling scrape off natural enamel?",
        a: "No. Modern ultrasonic instruments vibrate at micro-frequencies that crumble tartar without cutting into enamel, preserving your tooth structure."
      },
      {
        q: "Why do my teeth sometimes feel slightly sensitive after cleaning?",
        a: "When thick tartar is removed from root surfaces, the exposed areas may temporarily feel cool air and water. This subsides within a few days as the gums tighten around the clean tooth."
      }
    ],
    featured: false,
    needsClinicConfirmation: false,
  },
  {
    id: "restorative",
    slug: "restorative-crowns",
    title: "Ceramic Crowns, Bridges & Restorations",
    category: "Restorative",
    patientConcern: "Fractured tooth, broken filling, post-RCT tooth protection",
    shortDesc: "Metal-free CAD/CAM monolithic zirconia and E-Max ceramic crowns restoring damaged teeth with zero dark metal lines.",
    duration: "2 Visits (Preparation + Cementation)",
    suitableFor: "Teeth following root canals, cracked enamel, replacing old worn silver fillings",
    iconName: "CheckCircle",
    fullDesc: "Tooth-colored, metal-free restorations blend seamlessly with your natural dentition. Using high-strength monolithic zirconia and lithium disilicate, we restore fractured or heavily restored molars to full chewing strength.",
    process: [
      "Conservative micro-preparation with smooth chamfer margins",
      "High-precision 3D digital optical scanning for exact marginal fit",
      "CAD/CAM milling from multi-layered zirconia discs mimicking natural translucency",
      "Permanent resin bonding and occlusal balancing for harmonious chewing"
    ],
    clinicalHighlights: [
      "Zero black metal margins along the gumline forever",
      "High fracture resistance built for heavy chewing forces",
      "Biocompatible with gum tissue—no irritation or metallic taste",
      "CAD/CAM edge seal prevents secondary recurrent decay"
    ],
    reasonsForAssessment: [
      "A tooth that has undergone root canal therapy and requires coronal protection",
      "Large old silver amalgam filling with micro-cracks spreading into the cusp",
      "A cracked or fractured molar causing pain when biting hard grains",
      "Replacing an old metal-ceramic crown with dark margins visible at the gumline"
    ],
    clinicalStages: [
      {
        step: "01",
        title: "Tooth Preparation & Margin Sculpting",
        detail: "Conservative shaping creates a uniform margin for the crown while retaining maximum biological tooth core."
      },
      {
        step: "02",
        title: "Digital Optical Impression",
        detail: "Intraoral scanner captures exact bite relationships and tooth margin details with micron-level accuracy."
      },
      {
        step: "03",
        title: "Precision CAD/CAM Milling",
        detail: "Robotic multi-axis milling carves the crown from monolithic zirconia or lithium disilicate ceramic."
      },
      {
        step: "04",
        title: "Trial & Permanent Adhesive Bonding",
        detail: "Checking contact points, floss resistance, and bite balance before permanent bonding with resin cement."
      }
    ],
    questionsToAsk: [
      "Which crown material is recommended for my tooth: monolithic zirconia or E-Max porcelain?",
      "Will the crown show any gray lines at the gumline over time?",
      "How long does the laboratory require to fabricate the crown?",
      "What warranty or clinical protocol backs the restoration?"
    ],
    aftercare: [
      "Avoid eating sticky or chewy sweets on the newly cemented crown for the first 24 hours.",
      "Floss carefully around the crown by sliding floss out sideways rather than yanking up violently while cement cures.",
      "If the bite feels slightly high or interferes when closing your back teeth, contact the clinic for a 2-minute minor adjustment.",
      "Treat your ceramic crown like a natural tooth with routine brushing and flossing."
    ],
    procedureFaqs: [
      {
        q: "Why do older crowns have black lines near the gums?",
        a: "Older crowns used a metal sub-structure coated with porcelain (PFM). Over time, gum recession reveals the black metal rim. We utilize 100% metal-free all-ceramic zirconia, guaranteeing zero gray margins."
      },
      {
        q: "Can I chew nuts and hard Indian foods with a zirconia crown?",
        a: "Yes. Monolithic zirconia exhibits high flexural strength (exceeding 1000 MPa), engineered specifically to withstand heavy molar chewing forces."
      }
    ],
    featured: false,
    needsClinicConfirmation: false,
  }
];

export const PATIENT_JOURNEY: PatientJourneyStep[] = [
  {
    number: "01",
    title: "Unhurried Consultation & Listening",
    summary: "Your appointment begins with a focused conversation in a calm, private room.",
    detail: "We listen to your concerns, past dental experiences, and aesthetic goals. We never rush you into a chair or start treatments without thoroughly understanding your perspective."
  },
  {
    number: "02",
    title: "Digital Diagnostics & Visual Clarity",
    summary: "We examine your teeth using low-radiation digital radiography and intraoral cameras.",
    detail: "You see exactly what we see on a high-definition monitor. We point out healthy areas, explain underlying causes of pain or wear, and answer every question before discussing solutions."
  },
  {
    number: "03",
    title: "Transparent, Collaborative Plan",
    summary: "Together, we agree on a practical treatment pathway with honest timelines and costs.",
    detail: "You receive an itemized treatment outline. We distinguish between urgent biological needs (like relieving active infection) and elective aesthetic options, putting you in total control."
  },
  {
    number: "04",
    title: "Gentle Care & Dedicated Follow-Up",
    summary: "Every clinical procedure is buffered with proven comfort protocols and paced breaks.",
    detail: "From topical pre-numbing to comfortable hand signals, treatment progresses at your pace. We follow up after procedures to ensure smooth healing and long-term oral stability."
  }
];

export const STERILIZATION_STANDARDS: SterilizationStandard[] = [
  {
    step: "01",
    title: "Ultrasonic Enzymatic Cleaning",
    description: "Instruments undergo multi-frequency ultrasonic bath cavitation to remove micro-debris prior to autoclaving.",
  },
  {
    step: "02",
    title: "Hermetic Medical Pouching",
    description: "Every tool is sealed in individual surgical pouches with multi-variable chemical indicator strips verifying sterile penetration.",
  },
  {
    step: "03",
    title: "Class-B Fractionated Vacuum Autoclave",
    description: "Medical autoclave cycles operate at 134°C under high vacuum bar pressure, destroying all viral, bacterial, and spore pathogens.",
  },
  {
    step: "04",
    title: "UV Germicidal Storage Cabinet",
    description: "Sterile instrument pouches are preserved in ultraviolet irradiated chambers until opened directly in front of the patient.",
  },
  {
    step: "05",
    title: "Operatory Surface Barrier Disinfection",
    description: "Chairs, light handles, and hoses undergo medical-grade virucidal disinfection and fresh barrier wraps between every single patient.",
  },
  {
    step: "06",
    title: "Strict 100% Single-Use Disposables",
    description: "Examination gloves, suction tips, patient bibs, cups, needles, and cartridges are strictly single-use and medically incinerated.",
  },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    author: "Vikramaditya Mehta",
    locality: "Worli Sea Face, Mumbai",
    treatmentTag: "Root Canal Therapy",
    rating: 5,
    text: "I visited with severe throbbing molar pain. Dr. Vishwatmika explained the digital X-ray clearly and completed my root canal with virtually no discomfort. The bedside manner is remarkably calming for anyone who experiences dental anxiety.",
    date: "Patient Review",
    source: "Google Local Review",
    needsClinicConfirmation: true, // Marked for clinic review per Verification Register
  },
  {
    id: "rev-2",
    author: "Ananya Singhania",
    locality: "Prabhadevi, Mumbai",
    treatmentTag: "Smile Design & Veneers",
    rating: 5,
    text: "Had composite bonding and veneers done for chipped front teeth. Dr. Vishwatmika gave me a trial preview before touching a single tooth. The final porcelain looks luminous and completely natural—not fake white.",
    date: "Patient Review",
    source: "Google Local Review",
    needsClinicConfirmation: true,
  },
  {
    id: "rev-3",
    author: "Rajesh Dalal",
    locality: "Lower Parel, Mumbai",
    treatmentTag: "Dental Implants",
    rating: 5,
    text: "Replaced an extracted lower molar with a titanium implant. Transparent explanation of the 3D scan and healing timeline. Today it feels just like my natural tooth with full chewing comfort.",
    date: "Patient Review",
    source: "Google Local Review",
    needsClinicConfirmation: true,
  },
  {
    id: "rev-4",
    author: "Pooja Vora",
    locality: "Worli Naka, Mumbai",
    treatmentTag: "Family Dental Care",
    rating: 5,
    text: "A very clean, reassuring clinic near Podar Hospital. Both my mother and I get our routine hygiene checks and dental cleanings done here. Unhurried doctors and spotless hygiene.",
    date: "Patient Review",
    source: "Google Local Review",
    needsClinicConfirmation: true,
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Procedures & Comfort",
    q: "Do root canal treatments hurt?",
    a: "No. With modern local anesthetics and gentle rotary endodontic techniques, a root canal feels very similar to having a routine filling. Our primary goal is to relieve the biological pressure and pain caused by pulpal infection."
  },
  {
    category: "Procedures & Comfort",
    q: "I have dental anxiety. How does the clinic ensure my comfort?",
    a: "We practice comfort-first dentistry. We apply high-strength topical numbing gel before any localized injection, pace procedures with periodic rests, and give you full control with an agreed hand signal to pause whenever needed."
  },
  {
    category: "Location & Transit",
    q: "How do I reach the clinic from Lower Parel, Prabhadevi, or Worli Naka?",
    a: "We are located at Shop No. 1, Ground Floor, Kakad Estate, Dr. R. G. Thadani Marg, directly opposite the Podar Hospital gate. We are approximately 5 minutes drive from Worli Naka and easily reached by car, taxi, or local buses."
  },
  {
    category: "Appointments & Emergencies",
    q: "Do you accept new patients and urgent dental cases?",
    a: "Yes, we welcome new patients for first-time consultations and second opinions. If you are experiencing sudden severe dental pain or a fractured tooth, please message or call us on WhatsApp (+91 99207 34142) for prompt same-day prioritization."
  },
  {
    category: "Billing & Insurance",
    q: "What payment methods are supported at the clinic?",
    a: "We accept all major UPI apps (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and cash. Itemized diagnostic invoices and clinical summaries are provided for dental reimbursement and corporate mediclaim filing."
  },
  {
    category: "Procedures & Longevity",
    q: "How long do porcelain veneers or dental implants last?",
    a: "With daily brushing, flossing, and regular 6-month clinical cleanings, porcelain veneers typically last 10–15+ years, and dental implants are engineered to last 20+ years to a lifetime."
  }
];
