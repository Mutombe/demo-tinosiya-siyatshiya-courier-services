export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Bebas Neue", body: "Inter", display: "Bebas Neue" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Tinosiya Siyatshiya Courier Services",
    legalName: "Tinosiya Siyatshiya Courier Services",
    tagline: "Delivering Excellence Across Zimbabwe",
    description: "Founded with a belief that Zimbabwe deserves world-class logistics, Tinosiya Siyatshiya Courier Services has grown from a single delivery van into one of Harare's most trusted courier and freight companies.",
    phone: "+263 78 877 7666",
    phoneRaw: "+263788777666",
    whatsappNumber: "263788777666",
    email: "info@tinosiyasiyatshiyaco.co.zw",
    address: "4th Floor, ZB Bank, First Street, and George Silundika Ave, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 1,
    established: "2018",
    yearsExperience: "6+",
    projectsCompleted: "10000+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "tinosiya-siyatshiya-courier-services-cookie-consent",
    socialLinks: { facebook: "", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Tinosiya", logoLine2: "Siyatshiya Courier" },

  hero: {
    badge: "Harare's Trusted Courier & Logistics Partner",
    titleParts: [
      { text: "WE GO " },
      { text: "THE DISTANCE", highlight: true },
      { text: " FOR YOU." },
    ],
    subtitle: "We combine technology-driven route optimisation with the personal touch that only a local company can provide. Every package is handled with care, tracked in real time, and delivered with a smile.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "Our Services",
    trustBadge: "10000+ Parcels Delivered",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85", alt: "Professional workspace and equipment" },
      { url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=1920&q=85", alt: "Team delivering quality service" },
      { url: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=85", alt: "Modern facilities and operations" },
    ],
  },

  stats: [
    { number: "10000+", label: "Parcels Delivered" },
    { number: "99%", label: "On-Time Rate" },
    { number: "50+", label: "Routes Covered" },
    { number: "24/7", label: "Operations" },
  ],

  servicesPreview: [
    { title: "Same-Day Delivery", desc: "Lightning-fast intra-city delivery with real-time tracking. Your package reaches its destination before the day ends -- guaranteed.", icon: "Rocket" },
    { title: "Nationwide Freight", desc: "Reliable long-haul transport connecting Harare to every corner of Zimbabwe. Full truckload or LTL -- we handle it all.", icon: "Briefcase" },
    { title: "Last-Mile Delivery", desc: "The final stretch matters most. We ensure every parcel reaches the doorstep safely, on time, and with a smile.", icon: "Heart" },
    { title: "Express Parcels", desc: "When hours matter, not days. Our express parcel service provides the fastest intercity delivery in Zimbabwe.", icon: "Star" },
    { title: "Corporate Logistics", desc: "Tailored logistics solutions for businesses. Dedicated account management, volume discounts, and seamless API integration.", icon: "Buildings" },
    { title: "Warehousing & Storage", desc: "Secure, climate-controlled warehousing with pick-and-pack fulfilment services for e-commerce and retail.", icon: "Lightbulb" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions tailored to your needs. Quality and reliability in everything we do.",
    items: [
      { title: "Same-Day Delivery", slug: "same-day-delivery", desc: "Lightning-fast intra-city delivery with real-time tracking. Your package reaches its destination before the day ends -- guaranteed.", features: ["Real-Time GPS Tracking", "Proof of Delivery", "Priority Routing", "Insurance Coverage", "SMS Notifications", "Dedicated Rider"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80" },
      { title: "Nationwide Freight", slug: "nationwide-freight", desc: "Reliable long-haul transport connecting Harare to every corner of Zimbabwe. Full truckload or LTL -- we handle it all.", features: ["Full Truckload", "Less-Than-Truckload", "Cross-Docking", "Route Optimisation", "Cargo Insurance", "Scheduled Pickups"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80" },
      { title: "Last-Mile Delivery", slug: "last-mile-delivery", desc: "The final stretch matters most. We ensure every parcel reaches the doorstep safely, on time, and with a smile.", features: ["Doorstep Delivery", "Photo Confirmation", "Flexible Time Slots", "Contactless Options", "Return Handling", "Customer Notifications"], image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80" },
      { title: "Express Parcels", slug: "express-parcels", desc: "When hours matter, not days. Our express parcel service provides the fastest intercity delivery in Zimbabwe.", features: ["2-Hour City Express", "Next-Day Intercity", "Fragile Item Handling", "Cold Chain Available", "Weekend Delivery", "Live Tracking"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80" },
      { title: "Corporate Logistics", slug: "corporate-logistics", desc: "Tailored logistics solutions for businesses. Dedicated account management, volume discounts, and seamless API integration.", features: ["Dedicated Account Manager", "Volume Pricing", "API Integration", "Monthly Reporting", "SLA Guarantees", "Custom Packaging"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80" },
      { title: "Warehousing & Storage", slug: "warehousing", desc: "Secure, climate-controlled warehousing with pick-and-pack fulfilment services for e-commerce and retail.", features: ["Climate Control", "24/7 Security", "Inventory Management", "Pick & Pack", "E-Commerce Fulfilment", "Cross-Docking"], image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to excellence.",
    items: [
      { title: "E-Commerce Fulfilment", slug: "ecommerce-fulfilment", category: "Corporate", location: "Harare, Zimbabwe", desc: "End-to-end logistics for a major online retailer handling 500+ daily orders.", client: "Client Project", services: ["Same-Day Delivery", "Nationwide Freight"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", images: ["https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80"] },
      { title: "Pharmacy Network", slug: "pharmacy-network", category: "Healthcare", location: "Harare, Zimbabwe", desc: "Temperature-controlled medicine delivery across 30 pharmacy branches.", client: "Client Project", services: ["Same-Day Delivery", "Nationwide Freight"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80"] },
      { title: "Agricultural Supply Chain", slug: "agri-supply", category: "Agriculture", location: "Harare, Zimbabwe", desc: "Farm-to-market logistics connecting rural producers with urban buyers.", client: "Client Project", services: ["Same-Day Delivery", "Nationwide Freight"], image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80", images: ["https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80"] },
      { title: "Document Express", slug: "document-express", category: "Express", location: "Harare, Zimbabwe", desc: "Same-day legal document courier for Harare's top law firms.", client: "Client Project", services: ["Same-Day Delivery", "Nationwide Freight"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", images: ["https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80"] },
      { title: "Retail Distribution", slug: "retail-distribution", category: "Retail", location: "Harare, Zimbabwe", desc: "Weekly restocking runs for a 15-store retail chain across Zimbabwe.", client: "Client Project", services: ["Same-Day Delivery", "Nationwide Freight"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "We switched to Tinosiya Siyatshiya Courier Services six months ago and our delivery complaints dropped to almost zero. The real-time tracking gives our customers confidence.", name: "Tendai Moyo", role: "E-Commerce Director", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "Same-day delivery in Harare that actually works. Tinosiya Siyatshiya Courier Services has been a game-changer for our pharmacy business.", name: "Rudo Nhemachena", role: "Pharmacy Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "Reliable, professional, and always on time. Tinosiya Siyatshiya Courier Services handles all our corporate logistics and we could not be happier.", name: "James Karanga", role: "Operations Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The express parcel service is exceptional. Documents that used to take days now arrive in hours.", name: "Grace Chikore", role: "Legal Secretary", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on trust, driven by excellence.",
    story: [
      "Founded with a belief that Zimbabwe deserves world-class logistics, Tinosiya Siyatshiya Courier Services has grown from a single delivery van into one of Harare's most trusted courier and freight companies.",
      "We combine technology-driven route optimisation with the personal touch that only a local company can provide. Every package is handled with care, tracked in real time, and delivered with a smile.",
      "Today, we serve hundreds of businesses and thousands of individuals across Zimbabwe, with a 99% on-time delivery rate that speaks louder than any marketing campaign.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or the materials we use." },
      { title: "Reliability", desc: "When we make a promise, we keep it. On time, every time." },
      { title: "Customer Focus", desc: "Your satisfaction is our measure of success." },
      { title: "Integrity", desc: "Honest pricing, transparent communication, and ethical business practices." },
    ],
    team: [
      { name: "Tendai Masuku", role: "Managing Director", bio: "15 years in logistics and supply chain management across Southern Africa.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Farai Chinyanga", role: "Operations Manager", bio: "Former fleet manager with a passion for on-time delivery and customer satisfaction.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Grace Moyo", role: "Client Relations", bio: "Dedicated to ensuring every client receives personalised, responsive service.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our clients say about working with us.",
    items: [
      { text: "We switched to Tinosiya Siyatshiya Courier Services six months ago and our delivery complaints dropped to almost zero. The real-time tracking gives our customers confidence.", name: "Tendai Moyo", role: "E-Commerce Director", rating: 5 },
      { text: "Same-day delivery in Harare that actually works. Tinosiya Siyatshiya Courier Services has been a game-changer for our pharmacy business.", name: "Rudo Nhemachena", role: "Pharmacy Owner", rating: 5 },
      { text: "Reliable, professional, and always on time. Tinosiya Siyatshiya Courier Services handles all our corporate logistics and we could not be happier.", name: "James Karanga", role: "Operations Manager", rating: 5 },
      { text: "The express parcel service is exceptional. Documents that used to take days now arrive in hours.", name: "Grace Chikore", role: "Legal Secretary", rating: 5 },
      { text: "Outstanding service from start to finish. Tinosiya Siyatshiya Courier Services exceeded all our expectations.", name: "Memory Dube", role: "Satisfied Customer", rating: 5 },
      { text: "Professional, reliable, and great value for money. I recommend Tinosiya Siyatshiya Courier Services to everyone.", name: "Tafadzwa Chikumba", role: "Regular Client", rating: 5 },
      { text: "The team at Tinosiya Siyatshiya Courier Services is knowledgeable and always willing to go the extra mile.", name: "Chenai Manyika", role: "Business Owner", rating: 5 },
      { text: "Consistently excellent service. Tinosiya Siyatshiya Courier Services has been our trusted partner for years.", name: "Patrick Nhamo", role: "Property Manager", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented, dedicated people.",
    positions: [
      { title: "Operations Assistant", department: "Operations", location: "Harare", type: "Full-time", desc: "Support daily operations and ensure smooth service delivery." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to get started? Contact us for a free quote.",
    formTitle: "Send Us a Message",
    formSubtitle: "Fill in your details and we will respond within 24 hours.",
  },

  homeCta: {
    title: "YOUR PACKAGE OUR PRIORITY",
    subtitle: "Ready to experience the difference? Get in touch today for a free, no-obligation quote. We look forward to serving you.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "WhatsApp Us",
    whatsappText: "Hi Tinosiya Siyatshiya Courier Services! I would like to request a quote.",
    backgroundImage: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85",
  },

  footer: {
    description: "Founded with a belief that Zimbabwe deserves world-class logistics, Tinosiya Siyatshiya Courier Services has grown from a single delivery van into one of Harare's most trusted courier and freight comp",
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export default siteData;
