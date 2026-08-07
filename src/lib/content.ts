// Site-wide content + config for OC Skin Care Center — Newport Beach LP.
// Single source of truth for copy, phone, form options, and tracking IDs.
// Every factual claim below is mirrored in /content-sources.json.

export const PHONE = "(949) 767-7870";
export const PHONE_HREF = "tel:+19497677870";

export const CTA = {
  primary: "Request an appointment",
  secondary: `Call ${PHONE}`,
  bookAnchor: "#book",
  submitLabel: "Request my appointment",
};

export const BRAND = {
  name: "OC Skin Care Center",
  wordmark: "OC Skincare Center",
  city: "Newport Beach, California",
  address: "1220 Bison Ave A3, Newport Beach, CA 92660",
  email: "info@ocskincarecenter.com",
  emailHref: "mailto:info@ocskincarecenter.com",
  since: 2010,
};

export const CURRENT_YEAR = new Date().getFullYear();

export const HERO = {
  eyebrow: BRAND.city,
  h1: "Healthy skin at every stage of life",
  sub: "Personalized, results-focused skin and aesthetic care — planned around your skin, not a fixed menu.",
  supporting:
    "Facials and medical aesthetics from a Newport Beach team serving Orange County since 2010. Every injectable visit begins with a complimentary consultation, so your plan and pricing are mapped before anything is treated.",
};

// ─── Trust bar (aggregate proof ONLY — no attributed testimonials) ───
export const TRUST_ITEMS = [
  { stat: "5.0", label: "rating across 191+ Google reviews" },
  { stat: "500+", label: "reviews across platforms, zero negative on record" },
  { stat: "30+", label: "years of founder expertise" },
  { stat: "Since 2010", label: "serving Orange County" },
];

// ─── Facials ───
export const FACIALS_INTRO =
  "Every facial is designed around your skin's current condition and built to support your barrier — not a one-size routine. Your treatment is customized in the room to what your skin needs that day.";

export const FACIALS = [
  {
    id: "anti-aging-signature-facial",
    name: "Anti-Aging Signature Facial",
    price: "$299",
    image: "/images/facial-treatment.jpg",
    alt: "Esthetician applying facial product to a relaxed client during a treatment",
    body: "One of our most popular treatments, designed to support skin health and overall rejuvenation. It includes a specialized lifting step that helps support skin firmness and a smoother, healthier-looking appearance. Well suited to dryness, early signs of aging, loss of firmness and fine lines, and customized to your skin's condition. Suitable for all skin types.",
  },
  {
    id: "custom-hydrofacial",
    name: "Custom HydroFacial",
    price: "From $250",
    image: "/images/facial-mask.jpg",
    alt: "Client resting with a treatment mask while an esthetician works",
    body: "A results-focused treatment that deeply cleanses, hydrates and restores balance while supporting barrier health. It improves texture, dullness, congestion, dryness and early signs of aging through deep cleansing, gentle exfoliation, a hydration infusion, extractions if needed, and a customized finishing mask. Safe for all skin types, including sensitive skin.",
  },
  {
    id: "acne-facial",
    name: "Acne Facial",
    price: "$250",
    image: null,
    alt: null,
    body: "Designed to support clearer, healthier-looking skin while respecting the skin barrier. It addresses clogged pores, excess oil and congestion using gentle techniques that calm inflammation and restore balance rather than over-stripping the skin. You'll also leave with guidance on a personalized home-care routine to help maintain your results.",
  },
  {
    id: "mens-facial",
    name: "Men's Facial",
    price: "$250",
    image: null,
    alt: null,
    body: "Focuses on deep cleansing, gentle exfoliation, hydration and barrier support to improve texture, clarity and overall appearance. It addresses congestion, dryness, oiliness and irritation from shaving — without harsh or over-aggressive techniques.",
  },
];

// ─── Injectables ───
export const INJECTABLES_INTRO =
  "Every injectable visit begins with a complimentary consultation, so your plan and pricing are mapped before anything is treated. Our approach is refreshed, never frozen — natural and proportional to your features.";

export const INJECTABLES_IMAGE = {
  src: "/images/prp-treatment.jpg",
  alt: "Provider performing a precise injectable treatment on a seated client",
};

export const INJECTABLES = [
  {
    id: "botox-dysport",
    name: "Botox / Dysport",
    price: "$14 per unit",
    image: "/images/injectable-mapping.jpg",
    alt: "Injector mapping treatment points on a client's face before an appointment",
    body: "Advanced neuromodulators that soften expression lines and help prevent deeper wrinkles from forming over time. Dosing is customized to your unique facial anatomy and muscle strength — the focus is always refreshed, never frozen. Most appointments take only 10–15 minutes with no downtime. Many people notice softening within 24–48 hours, with full results developing in 10–14 days and generally lasting about 3–4 months.",
    detail:
      "Areas treated include frown lines, forehead lines, crow's feet, lip flip and lip lines, dimpled chin, masseter and jaw clenching, platysmal bands, and excessive sweating. Typical dosing ranges from about 20–60 units for Jeuveau and 50–150 units for Dysport.",
  },
  {
    id: "dermal-fillers",
    name: "Dermal Fillers & Facial Balancing",
    price: "Starting at $700",
    image: "/images/injector-lip.jpg",
    alt: "Injector performing a careful lip treatment on a client",
    body: "Advanced hyaluronic acid fillers — naturally found in the body and reversible — restore mid-face volume, soften wrinkles and folds, enhance and define the lips, improve contour, and refine areas affected by volume loss. The approach is always natural and proportional, and improvement is visible immediately after treatment.",
    detail:
      "Areas treated include the cheek and midface, jawline, lips, smile lines, chin augmentation and earlobes.",
  },
  {
    id: "prp-prf",
    name: "PRP / PRF",
    price: "By consultation",
    image: "/images/microneedling.jpg",
    alt: "Microneedling device being used across a client's forehead during treatment",
    body: "PRP/PRF treatments use components drawn from your own blood to support skin quality and texture — including microneedling with PRP/PRF. It's a natural approach to refreshing the skin's quality and works well as part of a broader plan mapped during your complimentary consultation.",
    detail: null,
  },
];

// ─── Why us (philosophy — deep-teal is used on the your-visit band, this is light) ───
export const WHY_INTRO =
  "Our philosophy is simple: strengthen skin health and enhance your natural beauty, rather than chase temporary fixes. That standard shapes every treatment we perform.";

export const WHY_IMAGE = {
  src: "/images/founder-products.jpg",
  alt: "Founder Mahla Morteza in a white coat beside her professional skincare product line",
};

export const WHY_POINTS = [
  {
    id: "support-not-over-treat",
    title: "Support the skin, don't over-treat it",
    body: "Treatments are chosen to work with your skin barrier — calming, balancing and strengthening rather than over-stripping or over-treating. The goal is healthier skin over time, not a temporary reset that leaves it more reactive.",
  },
  {
    id: "education-first",
    title: "Education-first care",
    body: "We take the time to explain what your skin needs and why. You leave understanding your plan and how to care for your skin between visits — not just what happened in the room. Informed clients get better, longer-lasting results.",
  },
  {
    id: "one-standard-of-care",
    title: "One documented standard of care",
    body: "Founder Mahla Morteza brings more than 30 years in professional aesthetics and Guinot Paris certification, with training across Paris, New York and California. Every provider is trained under that same standard, so your care is consistent whoever you see.",
  },
  {
    id: "transparent-pricing",
    title: "Published, transparent pricing",
    body: "Our facial and injectable pricing is published and clear, so you know what to expect before you book. Injectable plans and their pricing are mapped in detail during your complimentary consultation, with nothing treated until you're ready.",
  },
];

// ─── Your visit (deep-teal dark band) ───
export const VISIT_INTRO =
  "Booking is simple, and it's always confirmed by a real person — never an automated calendar.";

export const VISIT_STEPS = [
  {
    n: "01",
    title: "Share a few details",
    body: "Submit the short form or call us. Five quick questions are all we need to understand what you're looking for and get started.",
  },
  {
    n: "02",
    title: "We reach out to confirm",
    body: "A member of the OC Skin Care Center team calls you back to confirm your appointment time. Your booking is always finalized with a real person.",
  },
  {
    n: "03",
    title: "A skin assessment & plan",
    body: "Your visit starts with a skin assessment and a personalized plan built in the room. For injectables, this begins with your complimentary consultation before anything is treated.",
  },
  {
    n: "04",
    title: "Home-care guidance",
    body: "You leave with clear guidance to support and maintain your results between visits, so your skin keeps improving over time.",
  },
];

// ─── Team ───
export const TEAM_INTRO =
  "A close team trained under one standard of care — so whoever you see, your treatment reflects the same expertise and attention.";

export const TEAM = [
  {
    id: "mahla-morteza",
    name: "Mahla Morteza",
    role: "Founder",
    image: "/images/provider-mahla.jpg",
    alt: "Portrait of Mahla Morteza, founder of OC Skin Care Center",
    bio: "Over three decades in professional aesthetics, known for deep expertise in skin analysis and an education-first, results-focused approach. Her philosophy centers on strengthening skin health and enhancing natural beauty rather than temporary fixes. Her mentorship and standard of care shape every treatment performed at the center.",
  },
  {
    id: "negar-rad",
    name: "Negar Rad, FNP-C",
    role: "Aesthetic Nurse Practitioner",
    image: "/images/provider-negar-rad.jpg",
    alt: "Portrait of Negar Rad, FNP-C, aesthetic nurse practitioner",
    bio: "Nationally certified with advanced training in aesthetic medicine, bringing medical precision, safety and an artistic eye to injectable treatments and facial balancing. Her philosophy centers on enhancing, not altering, each person's natural features.",
  },
  {
    id: "mahsa-gol",
    name: "Mahsa Gol",
    role: "Licensed Esthetician",
    image: "/images/provider-mahsa-gol.jpg",
    alt: "Portrait of Mahsa Gol, licensed esthetician",
    bio: "Trained under Mahla's mentorship, Mahsa specializes in customized facials and maintenance programs built around long-term skin health, with a steady focus on the fundamentals that keep skin balanced.",
  },
  {
    id: "mary-baghi",
    name: "Mary Baghi",
    role: "Licensed Esthetician",
    image: "/images/provider-mary-baghi.jpg",
    alt: "Portrait of Mary Baghi, licensed esthetician",
    bio: "Over 20 years in professional skincare, specializing in corrective treatments that improve skin tone, texture and overall balance with a careful, methodical approach.",
  },
  {
    id: "mahsa-kankash",
    name: "Mahsa Kankash",
    role: "Licensed Esthetician",
    image: "/images/provider-mahsa-kankash.jpg",
    alt: "Portrait of Mahsa Kankash, licensed esthetician",
    bio: "A calm, detail-oriented approach focused on understanding each client's skin and delivering thoughtful, consistent results visit after visit.",
  },
];

// ─── FAQ (built from the client's own published answers) ───
export const FAQ = [
  {
    q: "What's the difference between Botox and Dysport?",
    a: "Both are advanced neuromodulators that soften expression lines and help prevent deeper wrinkles from forming over time. They work in similar ways, and your provider recommends the option best suited to your facial anatomy and goals. Dosing is always customized — the focus is refreshed, never frozen.",
  },
  {
    q: "What does treatment cost?",
    a: "Botox and Dysport are $14 per unit, with dosing customized to you. Dermal fillers and facial balancing start at $700. Facials are $299 for the Anti-Aging Signature Facial and $250 for the HydroFacial, Acne and Men's facials. Injectable plans and their pricing are confirmed during your complimentary consultation.",
  },
  {
    q: "When will I see results, and how long do they last?",
    a: "With Botox and Dysport, many people notice softening within 24–48 hours, with full results developing in 10–14 days and generally lasting about 3–4 months. Dermal filler results are visible immediately after treatment.",
  },
  {
    q: "What is dermal filler, and is it reversible?",
    a: "Our dermal fillers are advanced hyaluronic acid, a substance naturally found in the body. It restores volume, softens folds and enhances contour and lips — and because it's hyaluronic acid, it's reversible. Our approach is always natural and proportional.",
  },
  {
    q: "Is a consultation included?",
    a: "Every injectable visit begins with a complimentary consultation, so your plan and pricing are mapped before anything is treated. Facials are customized in the room to your skin's condition on the day of your appointment.",
  },
  {
    q: "How does booking work after I submit the form?",
    a: "After you submit the form or call, a member of our team reaches out to confirm your appointment time. Booking is always finalized with a real person, so your visit is scheduled around you.",
  },
];

// ─── Book section ───
export const BOOK = {
  headline: "Book your visit at OC Skin Care Center",
  sub: "Submit the form and our team will reach out to confirm your appointment time — or call us now and we'll help you find one.",
  image: {
    src: "/images/storefront.jpg",
    alt: "The OC Skincare Center storefront on Bison Avenue in Newport Beach",
  },
};

// ─── Form select options (looking_for) — VERBATIM, in order ───
export interface LookingForOption {
  value: string;
  qualified: boolean;
  nurture?: boolean;
}

export const LOOKING_FOR_OPTIONS: LookingForOption[] = [
  { value: "Premium results-driven skin care and treatments", qualified: true },
  { value: "A quick affordable facial", qualified: false },
  { value: "Just exploring my options", qualified: true, nurture: true },
];

export const FORM_COPY = {
  eyebrow: "Book your visit",
  heading: "Request your appointment",
  subheading:
    "Tell us a little about what you're looking for and our team will reach out to confirm your time.",
  submitLabel: CTA.submitLabel,
  thankYouBody:
    "Thank you — your request is in. A member of the OC Skin Care Center team will reach out shortly to confirm your appointment time. If you'd like to speak with someone now, call (949) 767-7870.",
  reassurance: "No spam. Your details are only used to schedule your appointment.",
};

// ─── Mega tracking — real OC Skin Care Center IDs (Meta Pixel ON) ───
export const TRACKING = {
  siteKey: "qvsczupnzvxtza3u",
  siteId: "b3520734-191d-4e5d-a969-ffe2a3a26a7b",
  gtmId: "GTM-W8CFHS2D",
  pixelId: "992122401762482",
};

// Mega submission API expects snake_case keys: customer_id, site_id, source_provider.
// NOTE: customerId is DIFFERENT from siteId — do not conflate them.
export const FORM = {
  customerId: "fc710e7d-eedc-47a9-b7e2-a9cc5f6246ad",
  siteId: "b3520734-191d-4e5d-a969-ffe2a3a26a7b",
  sourceProvider: "oc-skin-care-center-landing",
};
