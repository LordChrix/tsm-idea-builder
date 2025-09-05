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
    { id: 'mobileapp', emoji: '📱', label: 'Mobile App', category: 'Tech', description: 'Apps like WhatsApp, Instagram, or Uber' },
    { id: 'onlinepayment', emoji: '💳', label: 'Online Payment', category: 'Money', description: 'Like POS, bank transfers, or mobile money' },
    { id: 'delivery', emoji: '🛵', label: 'Delivery Service', category: 'Transport', description: 'Like Jumia delivery or motorcycle dispatch' },
    { id: 'socialmedia', emoji: '📸', label: 'Social Media', category: 'Social', description: 'Like TikTok, Instagram, or Twitter' },
    { id: 'onlineshopping', emoji: '🛒', label: 'Online Shopping', category: 'Shopping', description: 'Like Jumia, Konga, or online markets' },
    { id: 'videochat', emoji: '📹', label: 'Video Chat', category: 'Communication', description: 'Like Zoom, WhatsApp video, or Google Meet' },
    { id: 'onlinelearning', emoji: '📚', label: 'Online Learning', category: 'Education', description: 'Like YouTube tutorials or online courses' },
    { id: 'bookingapp', emoji: '🎫', label: 'Booking App', category: 'Services', description: 'Book hotels, events, or appointments online' },
    { id: 'foodorder', emoji: '🍕', label: 'Food Ordering', category: 'Food', description: 'Order food online like using food apps' },
    { id: 'rideshare', emoji: '🚗', label: 'Ride Sharing', category: 'Transport', description: 'Like Uber, Bolt, or InDrive' },
    { id: 'farming', emoji: '🌾', label: 'Smart Farming', category: 'Agriculture', description: 'Modern farming with technology' },
    { id: 'healthcare', emoji: '🏥', label: 'Online Healthcare', category: 'Health', description: 'See doctors online or book appointments' },
    { id: 'realestate', emoji: '🏠', label: 'Property Apps', category: 'Housing', description: 'Find houses, land, or rooms to rent online' },
    { id: 'entertainment', emoji: '🎬', label: 'Entertainment', category: 'Fun', description: 'Like Netflix, YouTube, or music streaming' },
    { id: 'messaging', emoji: '💬', label: 'Messaging', category: 'Communication', description: 'Chat apps like WhatsApp or Telegram' },
    { id: 'cloudbackup', emoji: '☁️', label: 'Cloud Storage', category: 'Tech', description: 'Store photos and files online like Google Drive' },
    { id: 'security', emoji: '🔒', label: 'Security App', category: 'Safety', description: 'Apps that protect phones and data' },
    { id: 'generator', emoji: '⚡', label: 'Power Solutions', category: 'Utilities', description: 'Solar power, generators, or energy saving' },
    { id: 'fashion', emoji: '👗', label: 'Fashion & Style', category: 'Fashion', description: 'Online fashion stores or styling apps' },
    { id: 'sports', emoji: '⚽', label: 'Sports & Fitness', category: 'Sports', description: 'Football betting, fitness tracking, sports news' },
    { id: 'music', emoji: '🎵', label: 'Music & Audio', category: 'Entertainment', description: 'Music streaming, Afrobeats, or podcasts' },
    { id: 'translation', emoji: '🗣️', label: 'Language Help', category: 'Communication', description: 'Translation between English, Igbo, Yoruba, Hausa' },
    { id: 'weather', emoji: '🌤️', label: 'Weather Info', category: 'Information', description: 'Weather updates and farming forecasts' },
    { id: 'news', emoji: '📰', label: 'News & Info', category: 'Information', description: 'Local news, sports updates, or community info' }
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