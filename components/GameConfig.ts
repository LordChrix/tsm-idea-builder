export interface Component {
  id: string;
  emoji: string;
  label: string;
  category: string;
  description: string;
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
  tagline: string;
  description: string;
  components: string[];
  valuation: number;
  jollofRating: number;
  fundingStage: string;
  marketSize: string;
}

export interface Achievement {
  count: number;
  title: string;
  message: string;
}

export const gameConfig = {
  components: [
    { id: 'whatsapp', emoji: '💬', label: 'WhatsApp', category: 'Social', description: 'WhatsApp messaging and business integration' },
    { id: 'payment', emoji: '💳', label: 'Payment', category: 'Money', description: 'Digital payments and mobile money' },
    { id: 'delivery', emoji: '🛵', label: 'Delivery', category: 'Transport', description: 'Fast delivery services' },
    { id: 'shopping', emoji: '🛒', label: 'Shopping', category: 'Shopping', description: 'Online marketplace and e-commerce' },
    { id: 'videocall', emoji: '📹', label: 'Video Call', category: 'Communication', description: 'Video calling and conferencing' },
    { id: 'learning', emoji: '📚', label: 'Learning', category: 'Education', description: 'Online education and courses' },
    { id: 'food', emoji: '🍕', label: 'Food Order', category: 'Food', description: 'Food delivery and ordering' },
    { id: 'transport', emoji: '🚗', label: 'Transport', category: 'Transport', description: 'Ride hailing and transport' },
    { id: 'farming', emoji: '🌾', label: 'Farming', category: 'Agriculture', description: 'Smart agriculture solutions' },
    { id: 'health', emoji: '🏥', label: 'Healthcare', category: 'Health', description: 'Online medical services' },
    { id: 'social', emoji: '📱', label: 'Social Media', category: 'Social', description: 'Social networking platforms' },
    { id: 'entertainment', emoji: '🎬', label: 'Entertainment', category: 'Fun', description: 'Movies, music, and content' },
    { id: 'ai', emoji: '🤖', label: 'AI Assistant', category: 'AI', description: 'Artificial intelligence and automation' },
    { id: 'crypto', emoji: '₿', label: 'Cryptocurrency', category: 'Finance', description: 'Digital currency and blockchain' },
    { id: 'gaming', emoji: '🎮', label: 'Gaming', category: 'Entertainment', description: 'Mobile games and esports' },
    { id: 'security', emoji: '🔒', label: 'Security', category: 'Safety', description: 'Digital security and protection' },
    { id: 'fintech', emoji: '🏦', label: 'FinTech', category: 'Finance', description: 'Financial technology solutions' },
    { id: 'cloud', emoji: '☁️', label: 'Cloud Storage', category: 'Tech', description: 'Online data storage and backup' },
    { id: 'weather', emoji: '🌤️', label: 'Weather', category: 'Information', description: 'Weather updates and forecasts' }
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