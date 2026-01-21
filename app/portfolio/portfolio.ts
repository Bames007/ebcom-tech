// /data/portfolioData.ts
export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  fullDescription: string;
  services: string[];
  year: string;
  client: string;
  location: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  logo: string;
  mockups: string[];
  deliverables: string[];
  testimonials?: Array<{
    quote: string;
    author: string;
    role: string;
  }>;
}

export const portfolioProjects = [
  {
    id: "exelita",
    name: "Exelita",
    category: "Premium Watches & Jewelry",
    tagline: "Luxury Redefined in Time",
    description:
      "A complete luxury brand identity for high-end watchmakers combining Swiss precision with African elegance.",
    fullDescription:
      "Exelita represents the pinnacle of luxury timepieces, blending Swiss watchmaking excellence with African-inspired design elements. We developed a comprehensive brand system that communicates precision, heritage, and exclusivity. The brand identity reflects meticulous craftsmanship through elegant typography, refined color palettes, and sophisticated visual language that appeals to discerning collectors worldwide.",
    services: [
      "Brand Strategy",
      "Logo Design",
      "Packaging",
      "Merchandise",
      "Web Design",
    ],
    year: "2025",
    client: "Exelita Watches Ltd.",
    location: "Geneva, Switzerland",

    colors: {
      primary: "#151253",
      secondary: "#4d42d9",
      accent: "#7564eb",
      background: "#51bce5",
    },

    logo: "/brands/exelita/logo.png",
    mockups: [
      "/brands/exelita/mockup-1.jpg",
      "/brands/exelita/mockup-2.jpg",
      "/brands/exelita/mockup-3.jpg",
      "/brands/exelita/mockup-4.jpg",
      "/brands/exelita/mockup-5.png",
    ],

    deliverables: [
      "Primary Logo",
      "Secondary Mark",
      "Brand Guidelines",
      "Packaging System",
      "Store Merchandise",
      "Digital Assets",
    ],

    testimonials: [
      {
        quote:
          "EBCom transformed our vision into a timeless brand identity that resonates with our global clientele.",
        author: "Pierre Laurent",
        role: "CEO, Exelita Watches",
      },
    ],
  },
  {
    id: "handylegal",
    name: "Handylegal",
    category: "Legal Tech",
    tagline: "Justice Made Accessible",
    description:
      "Modernizing legal services with a human-centered brand that builds trust and approachability.",
    fullDescription:
      "Handylegal required a brand identity that would demystify legal services and make them approachable for everyday people. We created a warm, trustworthy brand system that balances professionalism with accessibility. The visual identity uses approachable typography, reassuring color psychology, and clear communication patterns to help users feel confident in their legal decisions.",
    services: [
      "Brand Identity",
      "UI/UX Design",
      "Marketing Materials",
      "Office Branding",
    ],
    year: "2024",
    client: "Handylegal Solutions",
    location: "Lagos, Nigeria",

    colors: {
      primary: "#126a45",
      secondary: "#021c11",
      accent: "#fafafa",
      background: "#fff",
    },

    logo: "/brands/handylegal/logo.jpg",
    mockups: [
      "/brands/handylegal/mockup-1.jpg",
      "/brands/handylegal/mockup-2.jpg",
      "/brands/handylegal/mockup-3.jpg",
      "/brands/handylegal/mockup-4.jpg",
      "/brands/handylegal/mockup-5.jpg",
    ],

    deliverables: [
      "Full Brand System",
      "Website Design",
      "Mobile App UI",
      "Business Cards",
      "Office Signage",
      "Social Media Kit",
    ],
  },
  {
    id: "pulse",
    name: "Pulse",
    category: "Health Tech",
    tagline: "Your Heart, Our Priority",
    description:
      "Vibrant healthcare technology brand promoting heart health awareness and monitoring.",
    fullDescription:
      "Pulse needed a brand that would appeal to both healthcare professionals and patients while communicating innovation and care. We developed a dynamic identity system centered around the heartbeat motif, using warm, reassuring colors that promote trust and vitality. The brand system includes interactive elements for digital platforms while maintaining medical credibility.",
    services: [
      "Healthcare Branding",
      "App Design",
      "Educational Materials",
      "Event Branding",
    ],
    year: "2023",
    client: "Pulse Health Technologies",
    location: "Nairobi, Kenya",

    colors: {
      primary: "#e6ff2b",
      secondary: "#085540",
      accent: "#898a8e",
      background: "#f9f7f2",
    },

    logo: "/brands/pulse/logo.png",
    mockups: [
      "/brands/pulse/mockup-1.png",
      "/brands/pulse/mockup-2.png",
      "/brands/pulse/mockup-3.png",
      "/brands/pulse/mockup-4.png",
      "/brands/pulse/logo.png",
    ],

    deliverables: [
      "Brand Architecture",
      "Mobile Application UI",
      "Medical Brochures",
      "Conference Materials",
      "Wearable Device Packaging",
    ],
  },
  {
    id: "stonecrest",
    name: "Stonecrest",
    category: "Real Estate",
    tagline: "Foundations for Generations",
    description:
      "Premium real estate branding that communicates stability, luxury, and legacy.",
    fullDescription:
      "Stonecrest Properties required a brand identity that would communicate their commitment to quality, stability, and generational value. We created a sophisticated identity system using architectural elements, natural stone textures, and a palette that evokes trust and permanence. The brand positioning emphasizes craftsmanship and attention to detail that Stonecrest brings to every development.",
    services: [
      "Real Estate Branding",
      "Print Collateral",
      "Digital Marketing",
      "Signage Systems",
    ],
    year: "2024",
    client: "Stonecrest Properties",
    location: "Accra, Ghana",

    colors: {
      primary: "#fe6828",
      secondary: "#151515",
      accent: "#d8d4d6",
      background: "#181818",
    },

    logo: "/brands/stonecrest/logo.png",
    mockups: [
      "/brands/stonecrest/mockup-1.png",
      "/brands/stonecrest/mockup-2.png",
      "/brands/stonecrest/mockup-3.png",
      "/brands/stonecrest/mockup-4.png",
      "/brands/stonecrest/mockup-5.png",
    ],

    deliverables: [
      "Corporate Identity",
      "Property Brochures",
      "Digital Ad Campaign",
      "Site Signage",
      "Sales Office Branding",
      "Model Home Styling",
    ],
  },
  {
    id: "verloa",
    name: "Verloa Skin Care",
    category: "Beauty & Wellness",
    tagline: "Nature's Purest Radiance",
    description:
      "Clean beauty brand celebrating African botanicals and sustainable skincare practices.",
    fullDescription:
      "Verloa needed a brand that would communicate purity, natural efficacy, and African heritage in the competitive skincare market. We developed an organic, clean aesthetic that highlights their use of indigenous botanicals. The brand system incorporates natural textures, earthy colors, and elegant typography to create a premium yet approachable presence that resonates with conscious consumers.",
    services: [
      "Beauty Branding",
      "Packaging Design",
      "Retail Design",
      "Content Creation",
    ],
    year: "2023",
    client: "Verloa Natural Products",
    location: "Cape Town, South Africa",

    colors: {
      primary: "#e9e1ce",
      secondary: "#c0913c",
      accent: "#004031",
      background: "#01644f",
    },

    logo: "/brands/verloa/logo.png",
    mockups: [
      "/brands/verloa/mockup-1.png",
      "/brands/verloa/mockup-2.png",
      "/brands/verloa/mockup-3.png",
      "/brands/verloa/mockup-4.png",
      "/brands/verloa/mockup-5.png",
    ],

    deliverables: [
      "Complete Brand System",
      "Product Packaging",
      "Retail Display Units",
      "Digital Content Kit",
      "Social Media Assets",
      "Lookbook Design",
    ],
  },
];
