export const brand = {
  name: "IRON DISTRICT",
  tagline: "BUILT DIFFERENT.",
  subTagline1: "DISCIPLINE TODAY.",
  subTagline2: "DOMINATE TOMORROW.",
  description:
    "World-class equipment, elite coaching and a community that pushes you to be your best.",
  cta: "START TRAINING",
  ctaLink: "/training",
  watchVideo: "WATCH VIDEO",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};

export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "TRAINING", href: "/training" },
  { label: "COACHES", href: "/coaches" },
  { label: "PRICING", href: "/pricing" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT", href: "/contact" },
];

export const stats = [
  {
    id: 1,
    icon: "dumbbell",
    value: 500,
    suffix: "+",
    label: "ACTIVE MEMBERS",
  },
  {
    id: 2,
    icon: "flame",
    value: 15,
    suffix: "+",
    label: "EXPERT COACHES",
  },
  {
    id: 3,
    icon: "crown",
    value: 10,
    suffix: "K+",
    label: "TRANSFORMATIONS",
  },
  {
    id: 4,
    icon: "zap",
    value: 100,
    suffix: "%",
    label: "DEDICATION",
  },
];

export const programs = [
  {
    id: 1,
    slug: "strength",
    icon: "dumbbell",
    title: "STRENGTH",
    level: "ALL LEVELS",
    subtitle: "Build muscle. Lift heavy. Get results.",
    shortDesc: "Compound lifts, progressive overload, and competition-grade powerlifting gear.",
    description:
      "Our flagship strength program is engineered around the core compound lifts: squat, bench, deadlift, and overhead press. With calibrated Eleiko plates, Texas power bars, and specialized lifting platforms, we turn raw effort into undeniable strength.",
    features: [
      "Periodized 12-week lifting cycles",
      "Technique breakdown & bar path analysis",
      "Calibrated competition kilo plates & racks",
      "Access to specialty bars (Safety Squat, Trap bar)",
    ],
    schedule: "Mon / Wed / Fri · 6:00 AM & 6:00 PM",
    intensity: "HIGH",
    image: "/images/programs/strength.jpg",
    tag: "POWER",
    color: "#D62020",
  },
  {
    id: 2,
    slug: "conditioning",
    icon: "heart",
    title: "CONDITIONING",
    level: "INTERMEDIATE",
    subtitle: "Increase endurance. Push your limits.",
    shortDesc: "Metabolic conditioning circuits, battle ropes, sled pushes, and erg machines.",
    description:
      "A relentless cardiovascular challenge designed to expand your lung capacity, accelerate fat loss, and build unbreakable mental toughness. You will push sleds, slam battle ropes, and conquer high-output intervals.",
    features: [
      "Heart rate zone monitoring & tracking",
      "SkiErgs, Assault bikes, and Rogue sleds",
      "Dynamic athletic conditioning circuits",
      "Lactate threshold threshold training",
    ],
    schedule: "Tue / Thu / Sat · 7:00 AM & 5:30 PM",
    intensity: "EXTREME",
    image: "/images/programs/conditioning.jpg",
    tag: "ENDURANCE",
    color: "#D62020",
  },
  {
    id: 3,
    slug: "personal-training",
    icon: "user",
    title: "PERSONAL TRAINING",
    level: "TAILORED",
    subtitle: "1-on-1 coaching. 100% focused on you.",
    shortDesc: "Bespoke programming, biomechanical assessments, and dedicated accountability.",
    description:
      "Work directly with an elite coach dedicated solely to your transformation. Every rep, meal plan, and recovery protocol is dialed in specifically for your physiology and target milestones.",
    features: [
      "Custom periodized workout programming",
      "InBody 770 composition scans every 30 days",
      "Direct coach chat and weekly check-ins",
      "Macro nutritional blueprints & habits guide",
    ],
    schedule: "Flexible Booking (5:00 AM – 10:00 PM)",
    intensity: "CUSTOMIZED",
    image: "/images/programs/personal-training.jpg",
    tag: "ELITE",
    color: "#D62020",
  },
  {
    id: 4,
    slug: "hiit-burn",
    icon: "flame",
    title: "HIIT & BURN",
    level: "ALL LEVELS",
    subtitle: "Maximum caloric expenditure. Zero wasted seconds.",
    shortDesc: "Fast-paced intervals, functional kettlebells, and plyometrics.",
    description:
      "45 minutes of explosive full-body movement designed to keep your metabolic furnace burning hours after you leave the turf. High energy, heart-pumping soundtracks, and unyielding team motivation.",
    features: [
      "Tabata and EMOM protocol intervals",
      "Plyometric turf lanes and medicine balls",
      "Calorie tracking telemetry display",
      "Scalable weights for any baseline fitness",
    ],
    schedule: "Daily · 8:00 AM & 12:00 PM & 6:30 PM",
    intensity: "VERY HIGH",
    image: "/images/programs/hiit.jpg",
    tag: "METABOLIC",
    color: "#D62020",
  },
  {
    id: 5,
    slug: "combat-boxing",
    icon: "zap",
    title: "COMBAT & BOXING",
    level: "ADVANCED",
    subtitle: "Strike with power. Move with agility.",
    shortDesc: "Heavy bag striking, speed-bag timing, footwork drills, and core conditioning.",
    description:
      "Taught by former fighters and certified combat coaches. Master the fundamentals of boxing footwork, defensive head movement, and devastating punching power while conditioning your body like a prizefighter.",
    features: [
      "Heavy bag, speed bag, and double-end stations",
      "Hand wrapping and punch mechanics clinics",
      "Fight-specific anaerobic intervals",
      "Core rotational power and agility work",
    ],
    schedule: "Mon / Wed / Sat · 7:00 PM",
    intensity: "HIGH",
    image: "/images/programs/boxing.jpg",
    tag: "FIGHT",
    color: "#D62020",
  },
  {
    id: 6,
    slug: "mobility-recovery",
    icon: "shield",
    title: "MOBILITY & RECOVERY",
    level: "ALL LEVELS",
    subtitle: "Unlock range of motion. Train forever without pain.",
    shortDesc: "Joint decompression, active tissue release, infrared sauna, and cold plunge.",
    description:
      "The best lifters invest as heavily in recovery as in training. Restore joint integrity, relieve chronic fascial tension, and accelerate central nervous system restoration with dedicated mobility sessions.",
    features: [
      "FRC (Functional Range Conditioning) methods",
      "Hyperice percussion tools & pneumatic boots",
      "Infrared Finnish saunas & 48°F ice baths",
      "Guided breathwork and downregulation",
    ],
    schedule: "Tue / Thu / Sun · 10:00 AM & 4:00 PM",
    intensity: "MODERATE",
    image: "/images/programs/mobility.jpg",
    tag: "RECOVERY",
    color: "#D62020",
  },
];

export const weeklySchedule = {
  Monday: [
    { time: "06:00 AM", class: "Strength Foundations", coach: "Marcus Cole", room: "The Pit", intensity: "High" },
    { time: "08:00 AM", class: "HIIT & Burn", coach: "Elena Rostov", room: "Turf Zone", intensity: "Very High" },
    { time: "12:00 PM", class: "Express Conditioning", coach: "Sara Vega", room: "Rig Arena", intensity: "Extreme" },
    { time: "05:30 PM", class: "Barbell Club: Heavy Squats", coach: "Marcus Cole", room: "The Pit", intensity: "Max" },
    { time: "07:00 PM", class: "Combat Strike & Spar", coach: "Viktor Vance", room: "Boxing Ring", intensity: "High" },
  ],
  Tuesday: [
    { time: "07:00 AM", class: "Metabolic Conditioning", coach: "Sara Vega", room: "Turf Zone", intensity: "Extreme" },
    { time: "10:00 AM", class: "Joint Mobility & Flow", coach: "Maya Lin", room: "Recovery Suite", intensity: "Moderate" },
    { time: "05:00 PM", class: "Olympic Weightlifting", coach: "Darius Knight", room: "Platform Deck", intensity: "High" },
    { time: "06:30 PM", class: "HIIT Blitz", coach: "Elena Rostov", room: "The Pit", intensity: "Very High" },
  ],
  Wednesday: [
    { time: "06:00 AM", class: "Deadlift & Pull Dominance", coach: "Marcus Cole", room: "The Pit", intensity: "Max" },
    { time: "08:00 AM", class: "Conditioning Endurance", coach: "Sara Vega", room: "Rig Arena", intensity: "Extreme" },
    { time: "12:00 PM", class: "Functional Hypertrophy", coach: "Darius Knight", room: "Turf Zone", intensity: "High" },
    { time: "07:00 PM", class: "Boxing Footwork & Power", coach: "Viktor Vance", room: "Boxing Ring", intensity: "High" },
  ],
  Thursday: [
    { time: "07:00 AM", class: "Battle Ropes & Erg Hell", coach: "Sara Vega", room: "Rig Arena", intensity: "Extreme" },
    { time: "10:00 AM", class: "Decompression & Downregulation", coach: "Maya Lin", room: "Recovery Suite", intensity: "Light" },
    { time: "05:30 PM", class: "Bench Press & Upper Power", coach: "Marcus Cole", room: "The Pit", intensity: "High" },
    { time: "06:30 PM", class: "HIIT Core Annihilation", coach: "Elena Rostov", room: "Turf Zone", intensity: "Very High" },
  ],
  Friday: [
    { time: "06:00 AM", class: "Total Body Strongman", coach: "Marcus Cole", room: "Turf Zone", intensity: "Max" },
    { time: "08:00 AM", class: "Speed & Agility Circuit", coach: "Elena Rostov", room: "Platform Deck", intensity: "High" },
    { time: "05:00 PM", class: "Friday Night Lights: Team Lift", coach: "All Coaches", room: "Main Gym", intensity: "Festival" },
  ],
  Saturday: [
    { time: "08:00 AM", class: "Iron Gauntlet (Community WOD)", coach: "Sara Vega", room: "Main Gym", intensity: "Extreme" },
    { time: "10:00 AM", class: "Heavy Bag Masterclass", coach: "Viktor Vance", room: "Boxing Ring", intensity: "High" },
    { time: "12:00 PM", class: "Athlete Open Floor", coach: "Darius Knight", room: "The Pit", intensity: "Self" },
  ],
  Sunday: [
    { time: "09:00 AM", class: "Active Recovery & Fascial Stretch", coach: "Maya Lin", room: "Recovery Suite", intensity: "Low" },
    { time: "11:00 AM", class: "Cold Plunge & Sauna Protocol", coach: "Maya Lin", room: "Hydro Room", intensity: "Therapy" },
    { time: "02:00 PM", class: "Form & Technique Clinic", coach: "Marcus Cole", room: "The Pit", intensity: "Educational" },
  ],
};

export const coaches = [
  {
    id: 1,
    name: "MARCUS COLE",
    role: "HEAD STRENGTH COACH",
    experience: "15 Years",
    image: "/images/coaches/coach-1.jpg",
    bio: "Former national powerlifting record holder and USAPL coach. Has developed collegiate athletes, world-class lifters, and thousands of everyday people into iron-clad physical specimens.",
    certifications: ["NSCA CSCS", "USAPL Senior Coach", "Westside Barbell Certified"],
    specialties: ["Powerlifting", "Barbell Mechanics", "Maximal Strength"],
    quote: "The iron never lies. Two hundred pounds will always be two hundred pounds.",
    socials: { instagram: "https://instagram.com", twitter: "https://twitter.com" },
  },
  {
    id: 2,
    name: "SARA VEGA",
    role: "CONDITIONING DIRECTOR",
    experience: "11 Years",
    image: "/images/coaches/coach-2.jpg",
    bio: "Ex-CrossFit Games regional contender with a master's in Exercise Physiology. Specializes in metabolic work capacity, lactate tolerance, and high-cadence anaerobic output.",
    certifications: ["ACSM-CPT", "StrongFirst Kettlebell II", "Precision Nutrition L2"],
    specialties: ["MetCon", "Kettlebell Ballistics", "Work Capacity"],
    quote: "Comfort is the enemy of progress. Step into the fire willingly.",
    socials: { instagram: "https://instagram.com", twitter: "https://twitter.com" },
  },
  {
    id: 3,
    name: "DARIUS KNIGHT",
    role: "HEAD OF 1-ON-1 COACHING",
    experience: "13 Years",
    image: "/images/coaches/coach-3.jpg",
    bio: "Specializes in dramatic body recomposition, biomechanical optimization, and physique sculpting. Known for bulletproofing lifters with nagging joint history into pain-free powerhouses.",
    certifications: ["NASM-PES", "FRC Mobility Specialist", "EXOS Performance Coach"],
    specialties: ["Body Recomposition", "Injury Prevention", "Hypertrophy"],
    quote: "We don't chase fatigue; we engineer results through methodical overload.",
    socials: { instagram: "https://instagram.com", twitter: "https://twitter.com" },
  },
  {
    id: 4,
    name: "ELENA ROSTOV",
    role: "HIIT & ENDURANCE COACH",
    experience: "9 Years",
    image: "/images/coaches/coach-4.jpg",
    bio: "Track and field sprinter turned functional fitness powerhouse. Elena combines rhythmic explosive movement with high-cadence interval training that tests physical stamina.",
    certifications: ["USA Track & Field L1", "CrossFit L2", "TRX Master Trainer"],
    specialties: ["Speed & Agility", "Cardio Conditioning", "Plyometrics"],
    quote: "Your body can handle almost anything; it's your mind you have to convince.",
    socials: { instagram: "https://instagram.com", twitter: "https://twitter.com" },
  },
  {
    id: 5,
    name: "VIKTOR VANCE",
    role: "COMBAT & STRIKING COACH",
    experience: "14 Years",
    image: "/images/coaches/coach-5.jpg",
    bio: "Golden Gloves finalist and Muay Thai practitioner. Viktor brings technical precision, head movement discipline, and relentless conditioning to every round on the bags.",
    certifications: ["USA Boxing Certified", "ISSA Combat Coach", "FMS Functional Movement"],
    specialties: ["Boxing Technique", "Rotational Power", "Fighter Conditioning"],
    quote: "Precision beats speed, timing beats power, but discipline beats everything.",
    socials: { instagram: "https://instagram.com", twitter: "https://twitter.com" },
  },
  {
    id: 6,
    name: "MAYA LIN",
    role: "MOBILITY & RECOVERY LEAD",
    experience: "10 Years",
    image: "/images/coaches/coach-6.jpg",
    bio: "Doctor of Physical Therapy candidate and certified yoga instructor for heavy athletes. Maya ensures lifters possess the active mobility and restorative capacity to train injury-free.",
    certifications: ["FRCms", "Kinstretch Certified", "Pranayama Breathwork Lead"],
    specialties: ["Joint Mechanics", "Contrast Therapy", "Fascial Release"],
    quote: "Longevity is the ultimate flex. If you cannot recover, you cannot grow.",
    socials: { instagram: "https://instagram.com", twitter: "https://twitter.com" },
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: "STARTER",
    monthlyPrice: 49,
    yearlyPrice: 39,
    period: "/mo",
    description: "Everything you need to step onto the floor and begin building momentum.",
    features: [
      "Full gym floor & power rack access",
      "Standard locker rooms & showers",
      "5 group classes per week",
      "Iron District mobile tracking app",
      "Complimentary water station & towel service",
      "Free initial movement assessment",
    ],
    notIncluded: ["Sauna & cold plunge suite", "1-on-1 private coaching", "Guest passes"],
    cta: "GET STARTED",
    featured: false,
    badge: null,
  },
  {
    id: 2,
    name: "PRO",
    monthlyPrice: 89,
    yearlyPrice: 69,
    period: "/mo",
    description: "Our signature tier for dedicated lifters demanding elite equipment and recovery.",
    features: [
      "Everything in Starter tier",
      "Unlimited group & specialized classes",
      "Full recovery suite (Sauna & 48°F plunge)",
      "2× monthly 1-on-1 personal training sessions",
      "Quarterly InBody 770 composition scans",
      "Priority equipment booking in peak hours",
      "Custom nutrition framework blueprint",
    ],
    notIncluded: ["Dedicated permanent locker"],
    cta: "CLAIM PRO TIER",
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    id: 3,
    name: "ELITE",
    monthlyPrice: 149,
    yearlyPrice: 119,
    period: "/mo",
    description: "The complete, unrestricted athletic experience. Zero compromises allowed.",
    features: [
      "Everything in Pro tier with zero limits",
      "8× monthly 1-on-1 private coaching sessions",
      "Permanent executive personal locker",
      "Unlimited guest passes (bring a partner anytime)",
      "Weekly check-ins with Head Strength Coach",
      "Complimentary pre-workout & protein bar shake daily",
      "24/7 keycard VIP biometric facility access",
      "Exclusive invite to quarterly athlete combines",
    ],
    notIncluded: [],
    cta: "ENTER ELITE",
    featured: false,
    badge: "ALL INCLUSIVE",
  },
];

export const pricingComparison = [
  { feature: "24/7 Facility Access", starter: "Standard Hours", pro: "Full 24/7", elite: "VIP Biometric 24/7" },
  { feature: "Group Class Allocation", starter: "5 / Week", pro: "Unlimited", elite: "Unlimited + VIP booking" },
  { feature: "Infrared Sauna & Cold Plunge", starter: "—", pro: "Unlimited", elite: "Unlimited Private Booking" },
  { feature: "Monthly 1-on-1 PT Sessions", starter: "—", pro: "2 Sessions / mo", elite: "8 Sessions / mo" },
  { feature: "Body Composition Scans", starter: "Initial only", pro: "Quarterly", elite: "Monthly InBody 770" },
  { feature: "Custom Meal Programming", starter: "Basic PDF Guide", pro: "Personalized Macro Plan", elite: "Direct Nutritionist Chat" },
  { feature: "Dedicated Permanent Locker", starter: "—", pro: "—", elite: "Personal Named Locker" },
  { feature: "Guest Passes", starter: "—", pro: "2 / Month", elite: "Unlimited Guest Passes" },
];

export const faqs = [
  {
    q: "Is Iron District suitable for beginners?",
    a: "Absolutely. While our aesthetic is gritty and focused, more than 40% of our members started with zero lifting experience. Every new member receives an individualized movement screening and technique run-through.",
  },
  {
    q: "Can I freeze or cancel my membership at any time?",
    a: "Yes. All our monthly plans come with no lock-in contracts. You can pause your membership for up to 60 days per year or cancel with 14 days written notice.",
  },
  {
    q: "What makes the equipment here different from commercial gyms?",
    a: "We invest exclusively in competition-certified gear: Eleiko calibrated plates, Texas power bars, Rogue Monster power racks with monolifts, Kabuki specialty bars, and custom turf lanes.",
  },
  {
    q: "How does the 1-on-1 personal training work?",
    a: "Your coach creates a periodized program based on your movement screening and goals. You schedule sessions directly through the Iron District app at your convenience.",
  },
  {
    q: "Are the cold plunge and sauna clean and sanitary?",
    a: "Our cold plunge features continuous commercial ozone filtration, UV sterilization, and chilled water circulation at 48°F. The Finnish saunas are sanitized multiple times daily.",
  },
  {
    q: "Can I try the gym before committing?",
    a: "Yes! Claim a complimentary 1-Day Trial Pass through our Contact page, or drop by during staffed hours for a full tour.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "TRENT HOLLOWAY",
    role: "Competitive Powerlifter",
    image: "/images/avatars/a1.jpg",
    text: "Before Iron District, I was bouncing between commercial gyms that yelled at me for dropping deadlifts. Here, the energy pushes you to hit PRs you didn’t think were possible.",
    metric: "+85 lbs on Deadlift in 6 Months",
    stars: 5,
  },
  {
    id: 2,
    name: "REBECCA CHEN",
    role: "Triathlete & Marathoner",
    image: "/images/avatars/a2.jpg",
    text: "The conditioning protocols and recovery suites are unmatched. Having access to a cold plunge right after grueling sled sessions completely changed my recovery curve.",
    metric: "18% VO2 Max Increase",
    stars: 5,
  },
  {
    id: 3,
    name: "JORDAN KINCAID",
    role: "Software Executive",
    image: "/images/avatars/a3.jpg",
    text: "The 1-on-1 coaching with Darius saved my spine and rebuilt my physique from scratch. I’ve dropped 22 lbs of fat while gaining noticeable muscle mass.",
    metric: "-22 lbs Fat · +8 lbs Lean Mass",
    stars: 5,
  },
];

export const aboutData = {
  headline: "WE DON'T DO AVERAGE.",
  subheadline: "BUILT OUT OF OBSESSION. FORGED FOR ATHLETES WHO DEMAND MORE.",
  storyP1:
    "Iron District was founded in 2018 as an antidote to the soft, fluorescent-lit, cookie-cutter commercial gyms that treat members like barcodes. We set out to create a cathedral for discipline — where chalk is welcomed, heavy barbells rattle against steel racks, and people show up with purpose.",
  storyP2:
    "Every square foot of our 22,000 sq ft facility is designed with intention. There are no gimmicks, no vibrating belts, and no excuses. Just the world’s finest iron, ruthless conditioning circuits, world-class coaches, and an uncompromising atmosphere that demands your absolute best.",
  values: [
    {
      title: "UNCOMPROMISING STANDARDS",
      desc: "Good enough never is. We hold our coaches, equipment, hygiene, and culture to an obsessive benchmark.",
    },
    {
      title: "MERITOCRACY OF EFFORT",
      desc: "It doesn't matter what car you drive or how much you make. On the gym floor, respect is earned by sweat alone.",
    },
    {
      title: "ZERO EXCUSES",
      desc: "Results require consistency. We provide the tools, the fire, and the guidance; you bring the willingness to execute.",
    },
    {
      title: "COMMUNITY THROUGH ADVERSITY",
      desc: "The bonds forged through shared brutal workouts last outside the gym walls. We celebrate each other’s victories.",
    },
    {
      title: "SCIENTIFIC RIGOR",
      desc: "We marry brute effort with biomechanics, intelligent periodization, and science-backed recovery protocols.",
    },
    {
      title: "LIFELONG RESILIENCE",
      desc: "Our mission goes beyond lifting plates. We forge resilient bodies and mindsets that conquer life outside the gym.",
    },
  ],
  timeline: [
    {
      year: "2018",
      title: "THE BASEMENT BEGINNING",
      desc: "Founded in an underground warehouse with 4 power racks, 2,000 lbs of iron, and 30 dedicated lifters.",
    },
    {
      year: "2020",
      title: "THE EXPANSION",
      desc: "Relocated to our current 22,000 sq ft industrial facility in District 9, adding dedicated turf and combat zones.",
    },
    {
      year: "2022",
      title: "RECOVERY SUITE DEBUT",
      desc: "Installed our commercial cryo & contrast therapy wing with 48°F plunge pools and Finnish cedar saunas.",
    },
    {
      year: "2024",
      title: "10,000+ TRANSFORMATIONS",
      desc: "Recognized as the premier independent athletic strength club in the tri-state area with 500+ active athletes.",
    },
  ],
  facilityFeatures: [
    "22,000 sq ft climate-controlled training floor",
    "14 Rogue Monster power racks with monolifts",
    "Calibrated Eleiko competition discs & Texas bars",
    "60-yard indoor sprint and sled sprint turf",
    "Full combat ring & heavy bag circuit",
    "Hydro recovery suite: saunas & cold plunges",
    "High-speed filtered air ventilation (12 air exchanges/hr)",
    "Private executive showers & luxury locker rooms",
  ],
};

export const cta = {
  line1: "YOUR",
  line2: "STRONGEST",
  line3: "VERSION",
  handwritten: "Starts here.",
  memberCount: "500+",
  memberText: "Join 500+ members and start your journey",
  graffiti: "BE YOUR OWN STANDARD.",
  cta: "JOIN NOW",
};

export const footer = {
  description:
    "Iron District is more than a gym — it's a movement. We build athletes, mindsets, and communities one rep at a time.",
  address: "147 Iron Alley, District 9, New York, NY 10001",
  phone: "+1 (212) 555-0IRON",
  email: "train@irondistrict.com",
  hours: [
    { day: "Mon–Fri", time: "5:00 AM – 11:00 PM (24/7 Keycard for Elite)" },
    { day: "Saturday", time: "6:00 AM – 10:00 PM" },
    { day: "Sunday", time: "7:00 AM – 8:00 PM" },
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Twitter / X", url: "https://twitter.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "TikTok", url: "https://tiktok.com" },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Training", href: "/training" },
    { label: "Coaches", href: "/coaches" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
};

export const marqueeItems = [
  "STRENGTH",
  "CONDITIONING",
  "DISCIPLINE",
  "NO EXCUSES",
  "IRON DISTRICT",
  "BUILT DIFFERENT",
  "PUSH HARDER",
  "NO LIMITS",
];
