// components/eddy-ai.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Building,
  Briefcase,
  Clock,
  DollarSign,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  MapPin,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  type?: "text" | "services" | "portfolio" | "pricing" | "contact";
}

interface UserInfo {
  name: string;
  business: string;
  industry?: string;
  budget?: string;
  timeline?: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  startingPrice?: string;
  timeline: string;
}

interface Project {
  id: string;
  name: string;
  industry: string;
  results: string[];
  technologies: string[];
}

export default function EddyAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    business: "",
  });
  const [conversationStage, setConversationStage] = useState<
    | "greeting"
    | "asking_name"
    | "asking_business"
    | "services"
    | "pricing"
    | "portfolio"
    | "requirements"
    | "contact"
    | "custom"
  >("greeting");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Contact information
  const contactInfo = {
    email: "ebcomtechnologies@gmail.com",
    phone: "+234-812-772-8084",
    meeting: "ebcomtechnologies.com/meetings",
    address: "Abuja, Nigeria",
  };

  // Services data
  const services: Service[] = [
    {
      id: "web",
      title: "Custom Web Applications",
      description:
        "High-performance web applications built with modern technologies",
      features: [
        "90+ Google PageSpeed scores",
        "Mobile-optimized responsive design",
        "SEO-friendly architecture",
        "Scalable cloud infrastructure",
        "Enterprise-level security",
      ],
      startingPrice: "$2,000",
      timeline: "4-8 weeks",
    },
    {
      id: "mobile",
      title: "Mobile Applications",
      description: "Cross-platform mobile apps for iOS and Android",
      features: [
        "Native performance experience",
        "Offline functionality",
        "Push notifications",
        "App store deployment",
        "Regular updates & maintenance",
      ],
      startingPrice: "$10,000",
      timeline: "6-12 weeks",
    },
    {
      id: "ecommerce",
      title: "E-commerce Platforms",
      description: "Complete online store solutions with advanced features",
      features: [
        "3x average conversion increase",
        "Multiple payment gateways",
        "Inventory management",
        "Customer analytics dashboard",
        "Multi-channel integration",
      ],
      startingPrice: "$5,000",
      timeline: "6-10 weeks",
    },
    {
      id: "management",
      title: "Business Management Systems",
      description: "Custom CRM, ERP, and workflow automation solutions",
      features: [
        "Process automation",
        "Real-time analytics",
        "Multi-user access control",
        "Custom reporting",
        "API integrations",
      ],
      startingPrice: "$8,000",
      timeline: "8-16 weeks",
    },
  ];

  // Portfolio projects
  const portfolio: Project[] = [
    {
      id: "1",
      name: "Bumblebee Cars",
      industry: "Transportation",
      results: [
        "300% revenue increase",
        "95% booking automation",
        "40% customer retention improvement",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Payment Integration"],
    },
    {
      id: "2",
      name: "SAU University Portal",
      industry: "Education",
      results: [
        "50,000+ active users",
        "80% process automation",
        "Real-time grade management",
      ],
      technologies: ["Next.js", "PostgreSQL", "AWS", "Real-time APIs"],
    },
    {
      id: "3",
      name: "Okemena Stores",
      industry: "E-commerce",
      results: [
        "3x conversion rates",
        "60% faster load times",
        "Multi-payment integration",
      ],
      technologies: ["Shopify Plus", "React", "Payment Gateways", "Analytics"],
    },
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Initial greeting and conversation flow
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addAIMessage(
          "Hello! I'm Eddy, your AI assistant from EBCom Technologies. I'm here to help you discover how we can transform your business with cutting-edge software solutions.\n\nWith over 500 successful projects delivered, we specialize in creating digital solutions that drive real business growth and operational efficiency."
        );
        setTimeout(() => {
          addAIMessage(
            "To provide you with the most relevant recommendations, may I know your name?"
          );
          setConversationStage("asking_name");
        }, 1500);
      }, 500);
    }
  }, [isOpen, messages.length]);

  const addAIMessage = (
    text: string,
    type: "text" | "services" | "portfolio" | "pricing" | "contact" = "text"
  ) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "ai",
      timestamp: new Date(),
      type,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay: number = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay + Math.random() * 1000);
  };

  const extractName = (text: string): string => {
    const patterns = [
      /(?:my name is|i'm|i am|name is|this is) ([a-zA-Z]+(?:\s+[a-zA-Z]+){0,2})/i,
      /^([a-zA-Z]+(?:\s+[a-zA-Z]+){0,2})$/i,
      /(?:call me|known as|you can call me) ([a-zA-Z]+)/i,
      /(?:it'?s|it is) ([a-zA-Z]+)/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    }

    // If no pattern matches, return the first word as name
    const words = text.trim().split(/\s+/);
    return words[0] || text;
  };

  const extractBusinessInfo = (
    text: string
  ): { business: string; industry?: string } => {
    const info: { business: string; industry?: string } = { business: "" };

    // Business name patterns
    const businessPatterns = [
      /(?:business|company|organization|startup|venture|enterprise) (?:is|called|named|known as) ['"]?([^,.!?]+)['"]?/i,
      /(?:work at|own|run|operate|manage) (?:a|an|the)?\s*([^,.!?]+?(?:company|business|enterprise|organization|startup)?)/i,
      /(?:my|our) (?:business|company|startup|venture) (?:is|called|named) ['"]?([^,.!?]+)['"]?/i,
      /(?:it'?s|it is) ['"]?([^,.!?]+)['"]?/i,
    ];

    for (const pattern of businessPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        info.business = match[1]
          .trim()
          .replace(/(?:company|business|enterprise|organization)$/i, "")
          .trim();
        break;
      }
    }

    // If no pattern matches, take the whole text as business name
    if (!info.business && text.length > 0) {
      info.business = text.trim();
    }

    // Enhanced industry detection
    const industries = [
      {
        terms: [
          "restaurant",
          "cafe",
          "food",
          "dining",
          "culinary",
          "catering",
          "bakery",
        ],
        industry: "Restaurant & Food",
      },
      {
        terms: [
          "retail",
          "store",
          "shop",
          "boutique",
          "merchandise",
          "outlet",
          "supermarket",
        ],
        industry: "Retail",
      },
      {
        terms: [
          "healthcare",
          "hospital",
          "clinic",
          "medical",
          "health",
          "doctor",
          "pharmacy",
          "dental",
        ],
        industry: "Healthcare",
      },
      {
        terms: [
          "education",
          "school",
          "university",
          "college",
          "learning",
          "academy",
          "institution",
          "training",
        ],
        industry: "Education",
      },
      {
        terms: [
          "ecommerce",
          "e-commerce",
          "online store",
          "digital shop",
          "online retail",
          "dropshipping",
        ],
        industry: "E-commerce",
      },
      {
        terms: [
          "manufacturing",
          "factory",
          "production",
          "industrial",
          "assembly",
          "fabrication",
        ],
        industry: "Manufacturing",
      },
      {
        terms: [
          "finance",
          "bank",
          "financial",
          "investment",
          "insurance",
          "fintech",
          "banking",
          "loan",
        ],
        industry: "Finance",
      },
      {
        terms: [
          "real estate",
          "property",
          "housing",
          "realty",
          "construction",
          "development",
        ],
        industry: "Real Estate",
      },
      {
        terms: [
          "technology",
          "tech",
          "software",
          "IT",
          "digital",
          "saas",
          "programming",
          "development",
        ],
        industry: "Technology",
      },
      {
        terms: [
          "automotive",
          "car",
          "vehicle",
          "auto",
          "transport",
          "logistics",
          "shipping",
          "delivery",
        ],
        industry: "Automotive & Transport",
      },
      {
        terms: [
          "beauty",
          "salon",
          "spa",
          "cosmetic",
          "aesthetic",
          "wellness",
          "skincare",
        ],
        industry: "Beauty & Wellness",
      },
      {
        terms: [
          "fitness",
          "gym",
          "wellness",
          "exercise",
          "sports",
          "yoga",
          "health club",
        ],
        industry: "Fitness",
      },
      {
        terms: ["agriculture", "farm", "farming", "agro", "crop", "livestock"],
        industry: "Agriculture",
      },
      {
        terms: [
          "entertainment",
          "media",
          "music",
          "film",
          "production",
          "events",
          "arts",
        ],
        industry: "Entertainment & Media",
      },
      {
        terms: [
          "nonprofit",
          "ngo",
          "charity",
          "foundation",
          "social enterprise",
        ],
        industry: "Non-Profit",
      },
      {
        terms: [
          "consulting",
          "consultancy",
          "advisory",
          "professional services",
        ],
        industry: "Consulting",
      },
      {
        terms: [
          "hospitality",
          "hotel",
          "tourism",
          "travel",
          "accommodation",
          "resort",
        ],
        industry: "Hospitality & Tourism",
      },
    ];

    const lowerText = text.toLowerCase();
    for (const { terms, industry } of industries) {
      if (terms.some((term) => lowerText.includes(term))) {
        info.industry = industry;
        break;
      }
    }

    return info;
  };

  const extractRequirements = (
    text: string
  ): { budget?: string; timeline?: string } => {
    const requirements: { budget?: string; timeline?: string } = {};

    // Budget patterns
    const budgetPatterns = [
      /(?:budget|price|cost) (?:of|is|around|about|approximately)?\s*(\$?\d+(?:,\d{3})*(?:\.\d{2})?(?:\s*(?:k|thousand))?)/i,
      /(\$?\d+(?:,\d{3})*(?:\.\d{2})?(?:\s*(?:k|thousand))?)\s*(?:dollar|usd)?\s*(?:budget|price|cost)/i,
      /(?:looking to spend|willing to invest|have a budget of)\s*(\$?\d+(?:,\d{3})*(?:\.\d{2})?(?:\s*(?:k|thousand))?)/i,
    ];

    // Timeline patterns
    const timelinePatterns = [
      /(?:timeline|deadline|timeframe|completion) (?:is|by|within|in)\s*(\d+\s*(?:weeks?|months?|days?))/i,
      /(?:need|want|require) (?:it|project) (?:in|within|by)\s*(\d+\s*(?:weeks?|months?|days?))/i,
      /(\d+\s*(?:weeks?|months?|days?))\s*(?:timeline|deadline|timeframe)/i,
    ];

    for (const pattern of budgetPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        requirements.budget = match[1];
        break;
      }
    }

    for (const pattern of timelinePatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        requirements.timeline = match[1];
        break;
      }
    }

    return requirements;
  };

  const generateAIResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase().trim();
    let response = "";
    let nextStage = conversationStage;
    let messageType: "text" | "services" | "portfolio" | "pricing" | "contact" =
      "text";

    switch (conversationStage) {
      case "asking_name":
        const name = extractName(userMessage);
        if (name && name.length > 1) {
          setUserInfo((prev) => ({ ...prev, name }));
          response = `Nice to meet you, ${name}. It's a pleasure to connect with you.\n\nTo better understand how we can serve you, could you tell me the name of your business or organization?`;
          nextStage = "asking_business";
        } else {
          response =
            "I didn't quite catch your name. Could you please tell me your full name so I can address you properly?";
        }
        break;

      case "asking_business":
        const businessInfo = extractBusinessInfo(userMessage);
        if (businessInfo.business && businessInfo.business.length > 1) {
          setUserInfo((prev) => ({ ...prev, ...businessInfo }));

          const industryText = businessInfo.industry
            ? ` I can see you're operating in the ${businessInfo.industry} sector - that's fantastic!`
            : "";

          response = `Excellent! ${industryText}

Now, ${userInfo.name}, I'd love to understand what kind of digital transformation you're looking for ${businessInfo.business}. 

Here are the primary areas where we can help:

🚀 **Custom Software Development**
• Web Applications & Platforms
• Mobile Applications (iOS/Android)
• Desktop Applications
• API Development & Integration

🛒 **E-commerce & Digital Commerce**
• Online Store Development
• Payment Gateway Integration
• Inventory Management Systems
• Multi-vendor Marketplaces

📊 **Business Management Systems**
• Custom CRM Solutions
• ERP Systems
• Workflow Automation
• Data Analytics & Reporting

🤖 **Advanced Solutions**
• AI & Machine Learning
• IoT Applications
• Blockchain Solutions
• Cloud Migration

Could you tell me what specific challenges you're facing or what type of solution you're considering?`;
          nextStage = "services";
        } else {
          response =
            "I want to make sure I understand correctly. Could you please share the name of your business or organization?";
        }
        break;

      case "services":
        const requirements = extractRequirements(userMessage);
        if (requirements.budget || requirements.timeline) {
          setUserInfo((prev) => ({ ...prev, ...requirements }));
        }

        // Service-specific responses
        if (
          message.includes("web") ||
          message.includes("website") ||
          message.includes("application") ||
          message.includes("platform")
        ) {
          const webService = services.find((s) => s.id === "web");
          response = `Perfect choice for ${userInfo.business}, ${userInfo.name}!

**Custom Web Applications** are our specialty. Here's what we deliver:

🎯 **Key Benefits:**
• Lightning-fast performance (90+ Google PageSpeed scores)
• Mobile-optimized responsive design
• SEO-friendly architecture
• Scalable cloud infrastructure
• Enterprise-level security protocols

🛠 **Our Technology Stack:**
• Frontend: React, Next.js, TypeScript
• Backend: Node.js, Python, PHP
• Databases: PostgreSQL, MongoDB, MySQL
• Cloud: AWS, Google Cloud, Azure
• DevOps: Docker, CI/CD pipelines

💼 **Typical Project Scope:**
• Starting from ${webService?.startingPrice}
• Development timeline: ${webService?.timeline}
• Includes: UX/UI design, development, testing, deployment, and 30-day support

Do you have specific features in mind, or would you like me to walk you through our development process?`;
          nextStage = "requirements";
        } else if (
          message.includes("mobile") ||
          message.includes("app") ||
          message.includes("ios") ||
          message.includes("android")
        ) {
          const mobileService = services.find((s) => s.id === "mobile");
          response = `Excellent direction, ${userInfo.name}!

**Mobile Applications** can significantly enhance customer engagement for ${userInfo.business}. Here's our approach:

📱 **Development Options:**
• Cross-platform (React Native/Flutter) - 80% code reuse
• Native iOS (Swift) - Maximum performance
• Native Android (Kotlin) - Optimal Android experience

🌟 **Key Features We Implement:**
• Offline functionality & data sync
• Push notifications & deep linking
• Biometric authentication
• In-app purchases & subscriptions
• Social media integration

🕒 **Project Timeline:**
• Starting from ${mobileService?.startingPrice}
• Development: ${mobileService?.timeline}
• Includes: App store deployment and 3 months of updates

Have you considered whether you need a cross-platform solution or native applications?`;
          nextStage = "requirements";
        } else if (
          message.includes("e-commerce") ||
          message.includes("ecommerce") ||
          message.includes("shop") ||
          message.includes("store") ||
          message.includes("selling")
        ) {
          const ecommerceService = services.find((s) => s.id === "ecommerce");
          response = `Brilliant! E-commerce is transformative for businesses like ${userInfo.business}.

**Our E-commerce Solutions Include:**

🛒 **Platform Options:**
• Custom-built solutions (maximum flexibility)
• Shopify Plus development
• WooCommerce enterprise solutions
• Multi-vendor marketplace platforms

💳 **Payment & Integration:**
• Multiple payment gateways (Stripe, PayPal, Flutterwave)
• Tax calculation & compliance
• Shipping provider integration
• Inventory synchronization

📈 **Advanced Features:**
• AI-powered product recommendations
• Abandoned cart recovery systems
• Customer loyalty programs
• Advanced analytics dashboard

💰 **Investment:**
• Starting from ${ecommerceService?.startingPrice}
• Timeline: ${ecommerceService?.timeline}
• ROI-focused development approach

What products or services will ${userInfo.business} be selling online?`;
          nextStage = "requirements";
        } else if (
          message.includes("management") ||
          message.includes("crm") ||
          message.includes("erp") ||
          message.includes("system") ||
          message.includes("automation")
        ) {
          const managementService = services.find((s) => s.id === "management");
          response = `Smart thinking, ${userInfo.name}! Proper management systems are crucial for scaling ${userInfo.business}.

**Business Management Solutions We Build:**

📊 **System Types:**
• Custom CRM (Customer Relationship Management)
• ERP (Enterprise Resource Planning)
• Inventory & Supply Chain Management
• HR & Employee Management Systems
• Custom Workflow Automation

⚡ **Automation Benefits:**
• Reduce manual work by 60-80%
• Improve data accuracy
• Enhance team collaboration
• Real-time business insights

🔧 **Technical Implementation:**
• Role-based access control
• Custom reporting & analytics
• API integrations with existing tools
• Mobile & desktop access

💵 **Development Investment:**
• Starting from ${managementService?.startingPrice}
• Timeline: ${managementService?.timeline}
• Includes training and documentation

What specific business processes are you looking to improve or automate?`;
          nextStage = "requirements";
        } else if (
          message.includes("price") ||
          message.includes("cost") ||
          message.includes("budget") ||
          message.includes("investment")
        ) {
          response = `I understand budget consideration is important, ${userInfo.name}.

**Our Transparent Pricing Structure:**

🔄 **Project-Based Pricing:**
• Basic Website: $2,000 - $5,000
• Custom Web Application: $5,000 - $20,000+
• Mobile Applications: $10,000 - $30,000+
• E-commerce Platforms: $5,000 - $25,000+
• Enterprise Solutions: $25,000 - $100,000+

📅 **Monthly Retainer Options:**
• Ongoing development & support
• Priority feature requests
• Regular updates & maintenance
• Starting from $1,000/month

🎯 **What's Included in Every Project:**
• Free initial consultation & requirements analysis
• Detailed project proposal with fixed pricing
• Milestone-based payment schedule
• 30-day post-launch support
• Comprehensive documentation

To give you a more accurate estimate, could you share:
1. Your approximate budget range?
2. Your desired timeline?
3. Key features you need?`;
          nextStage = "pricing";
          messageType = "pricing";
        } else if (
          message.includes("portfolio") ||
          message.includes("work") ||
          message.includes("example") ||
          message.includes("case study")
        ) {
          response = `I'd be happy to share some of our success stories, ${
            userInfo.name
          }!

**Recent Success Stories:**

🚗 **Bumblebee Cars** - Transportation Industry
• Custom booking & fleet management system
• **Results:** 300% revenue increase, 95% booking automation
• **Technologies:** React, Node.js, MongoDB, Payment Integration

🎓 **SAU University Portal** - Education Sector
• Comprehensive student management portal
• **Results:** 50,000+ active users, 80% process automation
• **Technologies:** Next.js, PostgreSQL, AWS, Real-time APIs

🛍️ **Okemena Stores** - E-commerce Retail
• Advanced online shopping platform
• **Results:** 3x conversion rates, multi-payment integration
• **Technologies:** Shopify Plus, React, Analytics Integration

💅 **Lush Lashes** - Beauty Industry
• Appointment booking & management system
• **Results:** 90% booking automation, customer retention improved
• **Technologies:** Vue.js, Laravel, SMS Integration

We have over 500 successful projects across 15+ industries. Would you like to see more examples relevant to ${
            userInfo.industry || "your industry"
          }?`;
          nextStage = "portfolio";
          messageType = "portfolio";
        } else if (
          message.includes("contact") ||
          message.includes("call") ||
          message.includes("meet") ||
          message.includes("talk") ||
          message.includes("email")
        ) {
          response = `I'd be delighted to connect you with our team, ${userInfo.name}!

**Contact EBCom Technologies:**

📞 **Phone:** ${contactInfo.phone}
• Available: Mon-Fri, 8AM-6PM WAT
• Immediate assistance for urgent inquiries

📧 **Email:** ${contactInfo.email}
• Typical response: Within 2 hours
• Detailed project discussions
• Proposal and quote delivery

📅 **Schedule a Meeting:** ${contactInfo.meeting}
• Free 30-minute consultation
• Technical deep dive sessions
• Project planning workshops

🏢 **Office Visit:** ${contactInfo.address}
• On-site consultations available
• Team collaboration sessions
• Project demonstrations

What would be the most convenient way for you to connect? I can also have our project specialist reach out to you directly.`;
          nextStage = "contact";
          messageType = "contact";
        } else if (
          message.includes("time") ||
          message.includes("duration") ||
          message.includes("long") ||
          message.includes("deadline")
        ) {
          response = `Timeline is a crucial factor, ${userInfo.name}. Here's our typical development schedule:

**Project Development Timelines:**

⚡ **Rapid Development (2-4 weeks):**
• Basic websites
• Landing pages
• Simple web applications

🎯 **Standard Projects (4-12 weeks):**
• Custom web applications
• E-commerce platforms
• Mobile applications (cross-platform)

🏢 **Enterprise Solutions (12-24 weeks):**
• Complex business systems
• Multi-platform applications
• Advanced feature sets

**Our Development Process:**
1. Discovery & Planning (1-2 weeks)
2. Design & Prototyping (1-3 weeks)
3. Development & Implementation (2-16 weeks)
4. Testing & Quality Assurance (1-2 weeks)
5. Deployment & Launch (1 week)

We use Agile methodology with 2-week sprints, providing you with regular updates and demo sessions. Are you working with a specific deadline?`;
          nextStage = "requirements";
        } else if (
          message.includes("process") ||
          message.includes("workflow") ||
          message.includes("methodology") ||
          message.includes("develop")
        ) {
          response = `Our development process is designed for success and transparency, ${userInfo.name}.

**EBCom Development Methodology:**

1. **Discovery Phase** (1-2 weeks)
   • In-depth requirements analysis
   • Technical feasibility assessment
   • Project roadmap creation
   • Fixed-price quotation

2. **Design & Planning** (1-3 weeks)
   • UX/UI design prototyping
   • System architecture planning
   • Technology stack selection
   • Project timeline finalization

3. **Development Sprints** (2-week cycles)
   • Agile methodology implementation
   • Regular progress demonstrations
   • Continuous client feedback
   • Quality assurance testing

4. **Testing & Deployment** (1-3 weeks)
   • Comprehensive testing (unit, integration, user acceptance)
   • Performance optimization
   • Security auditing
   • Production deployment

5. **Post-Launch Support** (30 days included)
   • Bug fixes and adjustments
   • Team training sessions
   • Documentation delivery
   • Ongoing support options

We maintain 100% transparency throughout the process with regular communication and progress updates. Does this approach align with your expectations?`;
          nextStage = "requirements";
        } else if (
          message.includes("technology") ||
          message.includes("stack") ||
          message.includes("framework") ||
          message.includes("tool")
        ) {
          response = `We use modern, battle-tested technologies to ensure the best results for ${userInfo.business}, ${userInfo.name}.

**Our Technology Stack:**

🌐 **Frontend Development:**
• React.js with TypeScript
• Next.js for server-side rendering
• Vue.js for complex interfaces
• Tailwind CSS for styling

⚙️ **Backend Development:**
• Node.js with Express
• Python with Django/FastAPI
• PHP with Laravel
• Java with Spring Boot

📱 **Mobile Development:**
• React Native for cross-platform
• Flutter for high-performance apps
• Native iOS (Swift)
• Native Android (Kotlin)

🗄️ **Databases:**
• PostgreSQL for relational data
• MongoDB for document storage
• Redis for caching
• Elasticsearch for search

☁️ **Cloud & DevOps:**
• AWS, Google Cloud, Azure
• Docker containerization
• CI/CD pipelines
• Kubernetes for orchestration

We choose technologies based on your specific requirements, ensuring scalability, security, and performance. Do you have any technology preferences or requirements?`;
          nextStage = "requirements";
        } else {
          response = `Thank you for sharing that, ${userInfo.name}.

Based on what you've told me about ${userInfo.business}, I believe we can create significant value through digital transformation. 

Here's how we typically approach projects for businesses like yours:

🔍 **Deep Understanding:** We start by thoroughly understanding your business processes, customer journey, and pain points.

🎯 **Strategic Planning:** We design solutions that address your specific challenges while positioning you for future growth.

🚀 **Modern Implementation:** We build using cutting-edge technologies that ensure scalability, security, and outstanding user experience.

📈 **Measurable Results:** We focus on delivering tangible business outcomes - whether it's increased revenue, reduced costs, or improved efficiency.

Would you like to:
• Discuss specific features you need?
• Learn about our development process?
• Get a preliminary estimate?
• See more case studies?
• Speak directly with our team?`;
          nextStage = "custom";
        }
        break;

      case "pricing":
        if (
          message.includes("yes") ||
          message.includes("sure") ||
          message.includes("okay") ||
          message.includes("go ahead") ||
          !message.includes("no")
        ) {
          response = `Perfect! To provide you with the most accurate pricing for ${userInfo.business}, I'll need to understand a few more details:

1. **Project Scope:** What are the main features and functionalities you need?
2. **User Base:** How many users will be using the system?
3. **Integration Needs:** Do you need integration with existing systems?
4. **Design Requirements:** Do you have existing brand guidelines, or do you need complete design?

Alternatively, I can connect you with our project specialist who can provide a detailed quote after a free consultation. They'll analyze your requirements and provide:

• Detailed cost breakdown
• Project timeline
• Technology recommendations
• ROI analysis

Would you prefer to provide more details now, or shall I arrange a consultation call?`;
          nextStage = "requirements";
        } else {
          response = `No problem at all, ${userInfo.name}. Pricing is just one aspect of the conversation.

Let's focus on what would make the biggest impact for ${userInfo.business}. What specific business challenges or opportunities are you most excited to address with technology?`;
          nextStage = "services";
        }
        break;

      case "portfolio":
        response = `We take pride in delivering exceptional results for our clients. Here's what sets our work apart:

**Our Development Philosophy:**

✅ **User-Centric Design:** Every application is built with the end-user in mind, ensuring intuitive experiences and high adoption rates.

✅ **Scalable Architecture:** We build systems that grow with your business, handling increased traffic and features seamlessly.

✅ **Security First:** Enterprise-grade security measures are integrated into every layer of our applications.

✅ **Performance Optimized:** We achieve 90+ PageSpeed scores and sub-second load times for optimal user experience.

**Client Success Metrics:**
• Average 3x ROI within first year
• 40% reduction in operational costs
• 60% improvement in process efficiency
• 95% client retention rate

Would you like me to share specific case studies relevant to ${
          userInfo.industry || "your industry"
        }, or discuss how we can achieve similar results for ${
          userInfo.business
        }?`;
        nextStage = "custom";
        break;

      case "requirements":
        if (
          message.includes("feature") ||
          message.includes("need") ||
          message.includes("want") ||
          message.length > 10
        ) {
          response = `Thank you for those details, ${userInfo.name}. 

Based on what you've described, I can see how a custom solution could significantly benefit ${userInfo.business}. 

Here's what I recommend as next steps:

1. **Detailed Requirements Analysis** - Our team can conduct a deep dive into your specific needs
2. **Preliminary Technical Proposal** - We'll outline the recommended solution architecture
3. **Project Roadmap** - Clear timeline with milestones and deliverables
4. **Investment Breakdown** - Transparent pricing based on your exact requirements

Would you like me to arrange a free consultation with our solutions architect? They can provide:

• 30-minute deep dive into your requirements
• Initial technical recommendations
• Preliminary timeline and budget estimate
• Answers to any technical questions

Or would you prefer to share more specific details about your project requirements first?`;
          nextStage = "contact";
        } else {
          response = `I want to make sure I fully understand your needs for ${userInfo.business}, ${userInfo.name}.

Could you tell me a bit more about:

• The main problem you're trying to solve?
• Your target users or customers?
• Any specific features that are most important?
• Your timeline expectations?

The more details you can provide, the better I can guide you toward the perfect solution.`;
        }
        break;

      case "contact":
        if (
          message.includes("yes") ||
          message.includes("please") ||
          message.includes("sure") ||
          message.includes("okay")
        ) {
          response = `Excellent! I'm arranging for our project specialist to contact you, ${userInfo.name}.

**Here's what will happen next:**

1. Our specialist will reach out within 2 hours (during business hours)
2. They'll schedule a free 30-minute consultation at your convenience
3. During the call, they'll deep-dive into your requirements
4. Within 24 hours, you'll receive a detailed proposal

**Contact Method:** ${contactInfo.phone}
**Email Follow-up:** ${contactInfo.email}

In the meantime, is there anything else you'd like me to clarify about our services, process, or previous work for ${userInfo.business}?`;
        } else {
          response = `No problem at all, ${userInfo.name}. I'm here to help whenever you're ready to take the next step.

Is there anything else I can help you with regarding digital transformation for ${userInfo.business}? Perhaps you'd like to know more about:
• Our technology expertise
• Project management approach
• Support and maintenance services
• Case studies in your industry`;
          nextStage = "services";
        }
        break;

      default:
        // Handle general conversation and common questions
        if (
          message.includes("hello") ||
          message.includes("hi") ||
          message.includes("hey")
        ) {
          response = `Hello ${userInfo.name}! Great to continue our conversation about ${userInfo.business}. How can I assist you further today?`;
        } else if (message.includes("thank")) {
          response = `You're very welcome, ${userInfo.name}! It's my pleasure to help you and ${userInfo.business} explore digital transformation opportunities.

Is there anything specific you'd like to dive deeper into, or shall we explore another aspect of how technology can drive growth for your business?`;
        } else if (
          message.includes("bye") ||
          message.includes("goodbye") ||
          message.includes("see you")
        ) {
          response = `It's been wonderful chatting with you, ${userInfo.name}! Thank you for considering EBCom Technologies for ${userInfo.business}'s digital transformation.

Remember, you can always reach us at:
📞 ${contactInfo.phone}
📧 ${contactInfo.email}

I'm here whenever you need more information or want to continue our discussion. Have a great day!`;
        } else if (message.includes("help")) {
          response = `I'm here to help you, ${userInfo.name}! Here are some ways I can assist:

• Explain our services and expertise
• Discuss pricing and timelines
• Share case studies and portfolio
• Explain our development process
• Connect you with our specialist team
• Answer technical questions
• Help define project requirements

What would you like to explore for ${userInfo.business}?`;
        } else {
          response = `Thank you for sharing that, ${userInfo.name}.

At EBCom Technologies, we're committed to delivering more than just code - we deliver business solutions that drive real results. Our approach combines:

• **Strategic Thinking:** Understanding your business objectives first
• **Technical Excellence:** Using modern, scalable technologies
• **User-Centric Design:** Creating experiences that people love to use
• **Ongoing Partnership:** Supporting your growth long after launch

For ${userInfo.business}, I believe we could create significant value through:
- Process automation to reduce costs
- Enhanced customer experiences to drive revenue
- Data-driven insights for better decisions
- Scalable systems to support growth

Would you like to explore any of these areas in more detail, or is there something specific you'd like to know about our approach?`;
        }
    }

    setConversationStage(nextStage);
    return { response, type: messageType };
  };

  const handleSendMessage = () => {
    if (!inputText.trim() || isTyping) return;

    // Add user message
    addUserMessage(inputText);
    const userMessage = inputText;
    setInputText("");

    // Simulate AI thinking and response
    simulateTyping(() => {
      const { response, type } = generateAIResponse(userMessage);
      addAIMessage(response, type);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Tell me about your services",
    "What's your pricing?",
    "Show me your portfolio",
    "How long does development take?",
    "Contact your team",
    "Explain your process",
    "What technologies do you use?",
  ];

  const resetConversation = () => {
    setMessages([]);
    setUserInfo({ name: "", business: "" });
    setConversationStage("greeting");
    setInputText("");
  };

  const renderServiceCard = (service: Service) => (
    <div
      key={service.id}
      className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3"
    >
      <h4 className="font-semibold text-blue-900 mb-2">{service.title}</h4>
      <p className="text-sm text-blue-700 mb-3">{service.description}</p>
      <div className="text-xs text-blue-600 space-y-1">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      {service.startingPrice && (
        <div className="mt-3 pt-2 border-t border-blue-200 text-xs">
          <div className="flex justify-between">
            <span className="text-blue-600">Starting from:</span>
            <span className="font-semibold text-blue-900">
              {service.startingPrice}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-600">Timeline:</span>
            <span className="font-semibold text-blue-900">
              {service.timeline}
            </span>
          </div>
        </div>
      )}
    </div>
  );

  const renderContactInfo = () => (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
      <div className="flex items-center gap-3">
        <Phone className="w-4 h-4 text-green-600" />
        <div>
          <div className="font-semibold text-green-900">Phone</div>
          <div className="text-sm text-green-700">{contactInfo.phone}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="w-4 h-4 text-green-600" />
        <div>
          <div className="font-semibold text-green-900">Email</div>
          <div className="text-sm text-green-700">{contactInfo.email}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Calendar className="w-4 h-4 text-green-600" />
        <div>
          <div className="font-semibold text-green-900">Meeting</div>
          <div className="text-sm text-green-700">{contactInfo.meeting}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MapPin className="w-4 h-4 text-green-600" />
        <div>
          <div className="font-semibold text-green-900">Address</div>
          <div className="text-sm text-green-700">{contactInfo.address}</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Pulsing animation */}
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>

          {/* Main button */}
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 hover:scale-110 flex items-center gap-3">
            <div className="relative">
              <Bot className="w-6 h-6" />
              <div className="w-2 h-2 bg-green-400 rounded-full absolute -top-1 -right-1 border border-white"></div>
            </div>
            <span className="font-semibold text-sm whitespace-nowrap">
              Talk With Eddy AI
            </span>
          </div>
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:items-center sm:justify-end sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Container */}
          <div className="relative w-full max-w-md h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Eddy AI</h3>
                  <p className="text-blue-100 text-sm">
                    EBCom Technologies Assistant
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetConversation}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-200 text-xs"
                  title="Start new conversation"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {message.sender === "ai" && (
                        <Bot className="w-4 h-4 text-blue-500" />
                      )}
                      <span className="text-xs opacity-70 font-medium">
                        {message.sender === "ai" ? "Eddy AI" : "You"}
                      </span>
                    </div>

                    {message.type === "services" && message.sender === "ai" ? (
                      <div className="space-y-3">
                        <p className="text-sm whitespace-pre-line leading-relaxed mb-3">
                          {message.text.split("\n\n")[0]}
                        </p>
                        <div className="space-y-2">
                          {services.map((service) =>
                            renderServiceCard(service)
                          )}
                        </div>
                      </div>
                    ) : message.type === "contact" &&
                      message.sender === "ai" ? (
                      <div className="space-y-3">
                        <p className="text-sm whitespace-pre-line leading-relaxed mb-3">
                          {message.text.split("\n\n")[0]}
                        </p>
                        {renderContactInfo()}
                      </div>
                    ) : (
                      <p className="text-sm whitespace-pre-line leading-relaxed">
                        {message.text}
                      </p>
                    )}

                    <span className="text-xs opacity-50 block mt-2">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 shadow-sm border border-gray-200 rounded-2xl rounded-bl-none p-4 max-w-[85%]">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Bot className="w-4 h-4 text-blue-500" />
                      Eddy AI is thinking
                      <div className="flex gap-1 ml-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length > 2 &&
              !isTyping &&
              conversationStage !== "asking_name" &&
              conversationStage !== "asking_business" && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => {
                          setInputText(reply);
                          setTimeout(() => handleSendMessage(), 100);
                        }}
                        className="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-full hover:bg-gray-50 hover:border-blue-300 transition-colors duration-200"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    conversationStage === "asking_name"
                      ? "Your name..."
                      : conversationStage === "asking_business"
                      ? "Your business name..."
                      : "Ask me about services, pricing, portfolio..."
                  }
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                Powered by EBCom Technologies AI • {contactInfo.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
