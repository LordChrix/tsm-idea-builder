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
      id: 'online-shop', 
      emoji: '🏪', 
      label: 'Online Shop', 
      category: 'E-commerce', 
      description: 'Complete online store with product catalog and checkout',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 7h-3V4c0-1.1-.9-2-2-2h-4c0 1.1-.9 2-2 2v3H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4zm7 15H7V9h10v10zm-8-7h6v2H9v-2zm0 3h4v2H9v-2z"/></svg>`
    },
    { 
      id: 'collect-payments', 
      emoji: '💳', 
      label: 'Collect Payments', 
      category: 'Finance', 
      description: 'Secure payment processing for all transactions',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 8.5H4V6h16v2.5zm0 9.5H4v-7h16v7zM6 12h2v2H6zm0 3h8v2H6z"/></svg>`
    },
    { 
      id: 'delivery-logistics', 
      emoji: '🚚', 
      label: 'Delivery & Logistics', 
      category: 'Operations', 
      description: 'End-to-end delivery and supply chain management',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`
    },
    { 
      id: 'customer-support', 
      emoji: '💬', 
      label: 'Customer Support', 
      category: 'Support', 
      description: 'Live chat and customer service management',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/><path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>`
    },
    { 
      id: 'smart-insights', 
      emoji: '📊', 
      label: 'Smart Insights', 
      category: 'Analytics', 
      description: 'AI-powered business intelligence and analytics',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.25l-1.41-1.41L15 19.93l-3.59-3.59-1.41 1.41L15 22.75l4.5-4.5z"/></svg>`
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
      description: 'Reliable cloud infrastructure and hosting services',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`
    },
    { 
      id: 'security', 
      emoji: '🔒', 
      label: 'Security', 
      category: 'Security', 
      description: 'Complete security and data protection solutions',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/></svg>`
    },
    { 
      id: 'inventory-stock', 
      emoji: '📦', 
      label: 'Inventory & Stock', 
      category: 'Operations', 
      description: 'Smart inventory management and stock tracking',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/></svg>`
    },
    { 
      id: 'bookkeeping-invoices', 
      emoji: '📋', 
      label: 'Bookkeeping & Invoices', 
      category: 'Finance', 
      description: 'Complete accounting and invoice management system',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/></svg>`
    },
    { 
      id: 'marketing-tools', 
      emoji: '📢', 
      label: 'Marketing Tools', 
      category: 'Marketing', 
      description: 'Complete marketing automation and campaign tools',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.09 0 2.14-.18 3.12-.5l1.42 1.42c1.17-.78 2.22-1.83 3.12-3.12l-1.42-1.42c.32-.98.5-2.03.5-3.12C22 6.48 17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M8 9h8v2H8zm0 4h6v2H8z"/></svg>`
    },
    { 
      id: 'customer-list', 
      emoji: '👥', 
      label: 'Customer List', 
      category: 'CRM', 
      description: 'Customer relationship management and contact database',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4.5c0-1.1.9-2 2-2 .85 0 1.6.55 1.85 1.35l1.48 5.15h10.67c.33 0 .6.27.6.6v.4H4z"/><path d="M12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z"/><path d="M5.5 6C4.67 6 4 6.67 4 7.5S4.67 9 5.5 9 7 8.33 7 7.5 6.33 6 5.5 6z"/></svg>`
    },
    { 
      id: 'staff-management', 
      emoji: '👨‍💼', 
      label: 'Staff Management', 
      category: 'HR', 
      description: 'Employee management and team coordination tools',
      svgIcon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`
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