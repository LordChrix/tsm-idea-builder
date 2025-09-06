export interface Component {
  id: string;
  emoji: string;
  label: string;
  category: string;
  description: string;
  svgIcon?: string;
}

export interface GameState {
  droppedComponents: Component[];
  generatedIdeas: Idea[];
  stats: {
    ideasCount: number;
    totalNaira: number;
    jollofPoints: number;
  };
  soundEnabled: boolean;
}

export interface Idea {
  id: number;
  name: string;
  executiveSummary: string;
  marketOpportunity: string;
  revenueModel: string;
  keyFeatures: string;
  nextSteps: string;
  callToAction: string;
  components: string[];
}

export interface Achievement {
  count: number;
  title: string;
  message: string;
}

export const gameConfig = {
  components: [
    { 
      id: 'storefront', 
      emoji: '🏪', 
      label: 'Online Storefront', 
      category: 'E-commerce', 
      description: 'Professional online store with product catalog and checkout',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 7h-3V4c0-1.1-.9-2-2-2h-4c0 1.1-.9 2-2 2v3H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4zm7 15H7V9h10v10zm-8-7h6v2H9v-2zm0 3h4v2H9v-2z"/></svg>`
    },
    { 
      id: 'payments', 
      emoji: '💰', 
      label: 'Payments', 
      category: 'Finance', 
      description: 'Secure payment processing and financial transactions',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4-4H7v2h10V7z"/></svg>`
    },
    { 
      id: 'logistics', 
      emoji: '🚚', 
      label: 'Delivery & Logistics', 
      category: 'Operations', 
      description: 'Efficient delivery and supply chain management',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`
    },
    { 
      id: 'chat', 
      emoji: '💬', 
      label: 'Customer Chat', 
      category: 'Support', 
      description: 'Live chat support and customer engagement',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/><path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>`
    },
    { 
      id: 'ai-insights', 
      emoji: '🧠', 
      label: 'AI-Powered Insights', 
      category: 'Analytics', 
      description: 'Business intelligence and predictive analytics',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4-4H7v2h10V7zm2-2V3c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2H1v2h22V5h-2z"/><circle cx="12" cy="4" r="2"/></svg>`
    },
    { 
      id: 'mobile-app', 
      emoji: '📱', 
      label: 'Mobile App', 
      category: 'Technology', 
      description: 'Native mobile application for iOS and Android',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/></svg>`
    },
    { 
      id: 'cloud-hosting', 
      emoji: '☁️', 
      label: 'Cloud Hosting', 
      category: 'Infrastructure', 
      description: 'Scalable cloud infrastructure and hosting solutions',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`
    },
    { 
      id: 'cybersecurity', 
      emoji: '🔒', 
      label: 'Cybersecurity', 
      category: 'Security', 
      description: 'Advanced security measures and data protection',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/></svg>`
    },
    { 
      id: 'social-media', 
      emoji: '📢', 
      label: 'Social Media Tools', 
      category: 'Marketing', 
      description: 'Social media management and marketing automation',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.09 0 2.14-.18 3.12-.5l1.42 1.42c1.17-.78 2.22-1.83 3.12-3.12l-1.42-1.42c.32-.98.5-2.03.5-3.12C22 6.48 17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M8 9h8v2H8zm0 4h6v2H8z"/></svg>`
    }
  ] as Component[],
  
  prefixes: [
    'Naija', 'Lagos', 'Abuja', 'Jollof', 'Eko', 'Warri', 'Gidi', 'Suya', 'Pepper',
    'Swift', 'Smart', 'Quick', 'Easy', 'Smooth', 'Bright', 'Fresh', 'Bold', 'Prime'
  ],
  
  suffixes: [
    'Tech', 'Hub', 'Labs', 'Pay', 'Wallet', 'Bank', 'Move', 'Flow', 'Wave', 
    'Pulse', 'Connect', 'Plus', 'Pro', 'Max', 'Express', 'Link', 'Bridge'
  ],
  
  taglines: [
    "It's not magic, it's technology! 🎩",
    "From Lagos to the World! 🌍",
    "Making waves like Burna Boy! 🎵",
    "Fast, efficient, no complications! ⚡",
    "This will amaze you! 💥",
    "Success is inevitable with the right recipe! 💰",
    "We've got your back! 🤝",
    "Your connection to everything tech! 🔌",
    "Look at this amazing innovation! 🎉",
    "Making Nigeria proud! 🇳🇬"
  ],
  
  achievements: [
    { count: 1, title: "First Timer!", message: "You've started your tech journey! 🎉" },
    { count: 5, title: "Serial Entrepreneur!", message: "5 startups and counting! 🔥" },
    { count: 10, title: "Tech Titan!", message: "Dangote is taking notes! 💼" },
    { count: 20, title: "Silicon Valley Lagos!", message: "You're unstoppable! 🚀" },
    { count: 50, title: "Unicorn Builder!", message: "Next billion dollar company! 🦄" }
  ] as Achievement[]
};