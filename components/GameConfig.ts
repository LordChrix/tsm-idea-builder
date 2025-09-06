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
    { id: 'mobileapp', emoji: '📱', label: 'Mobile App', category: 'Tech', description: 'Apps for smartphones and tablets' },
    { id: 'whatsapp', emoji: '📱', label: 'WhatsApp', category: 'Social', description: 'WhatsApp messaging and business integration' },
    { id: 'tiktok', emoji: '📱', label: 'TikTok', category: 'Social', description: 'Short video content and viral trends' },
    { id: 'instagram', emoji: '📷', label: 'Instagram', category: 'Social', description: 'Photo sharing and stories' },
    { id: 'gaming', emoji: '🎮', label: 'Gaming', category: 'Fun', description: 'Mobile games and esports' },
    { id: 'memes', emoji: '😂', label: 'Memes & Comedy', category: 'Fun', description: 'Funny content and viral jokes' },
    { id: 'dating', emoji: '💝', label: 'Dating App', category: 'Social', description: 'Find love and relationships online' },
    { id: 'nft', emoji: '🖼️', label: 'NFTs', category: 'Crypto', description: 'Digital art and collectibles' },
    { id: 'onlinepayment', emoji: '💳', label: 'Online Payment', category: 'Money', description: 'Like POS, bank transfers, or mobile money' },
    { id: 'delivery', emoji: '🛵', label: 'Delivery Service', category: 'Transport', description: 'Like Jumia delivery or motorcycle dispatch' },
    { id: 'socialmedia', emoji: '📸', label: 'Social Media', category: 'Social', description: 'Like Facebook, Twitter, or LinkedIn' },
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
    { id: 'news', emoji: '📰', label: 'News & Info', category: 'Information', description: 'Local news, sports updates, or community info' },
    { id: 'podcast', emoji: '🎧', label: 'Podcasts', category: 'Entertainment', description: 'Audio shows and storytelling' },
    { id: 'youtube', emoji: '📺', label: 'YouTube', category: 'Entertainment', description: 'Video content and tutorials' },
    { id: 'snapchat', emoji: '📸', label: 'Snapchat', category: 'Social', description: 'Disappearing messages and AR filters' },
    { id: 'clubhouse', emoji: '🎤', label: 'Clubhouse', category: 'Social', description: 'Audio-based social networking' },
    { id: 'discord', emoji: '🎮', label: 'Discord', category: 'Social', description: 'Community chat and voice channels' },
    { id: 'metaverse', emoji: '🕶️', label: 'Metaverse', category: 'VR/AR', description: 'Virtual worlds and digital spaces' },
    { id: 'livestream', emoji: '📹', label: 'Live Streaming', category: 'Entertainment', description: 'Broadcast live video content' },
    { id: 'influencer', emoji: '🌟', label: 'Influencer Marketing', category: 'Marketing', description: 'Creator economy and brand deals' },
    
    // AI & Advanced Tech
    { id: 'ai', emoji: '🤖', label: 'AI Assistant', category: 'AI', description: 'Smart AI that helps with tasks and answers questions' },
    { id: 'chatbot', emoji: '💬', label: 'Chat Bot', category: 'AI', description: 'Automated customer service like bank chat support' },
    { id: 'voiceassistant', emoji: '🎙️', label: 'Voice Assistant', category: 'AI', description: 'Voice commands like Siri or Google Assistant' },
    { id: 'facerecognition', emoji: '👤', label: 'Face Recognition', category: 'AI', description: 'Login with your face like iPhone Face ID' },
    { id: 'dataanalytics', emoji: '📊', label: 'Data Analytics', category: 'Data', description: 'Analyze business data to make smart decisions' },
    { id: 'blockchain', emoji: '🔗', label: 'Blockchain', category: 'Crypto', description: 'Secure digital records like Bitcoin technology' },
    { id: 'cryptocurrency', emoji: '₿', label: 'Cryptocurrency', category: 'Crypto', description: 'Digital money like Bitcoin or local crypto' },
    
    // IoT & Hardware
    { id: 'iot', emoji: '📡', label: 'IoT Sensors', category: 'Hardware', description: 'Smart devices that connect to internet' },
    { id: 'drones', emoji: '🚁', label: 'Drone Tech', category: 'Hardware', description: 'Flying drones for delivery or monitoring' },
    { id: 'robotics', emoji: '🦾', label: 'Robotics', category: 'Hardware', description: 'Robots that help with work or manufacturing' },
    { id: 'biometrics', emoji: '👆', label: 'Biometrics', category: 'Security', description: 'Fingerprint or eye scanning for security' },
    { id: '3dprinting', emoji: '🖨️', label: '3D Printing', category: 'Manufacturing', description: 'Print physical objects from digital designs' },
    
    // Virtual & Augmented Reality
    { id: 'vr', emoji: '🥽', label: 'Virtual Reality', category: 'VR/AR', description: 'Virtual worlds and experiences' },
    { id: 'ar', emoji: '📳', label: 'Augmented Reality', category: 'VR/AR', description: 'Add digital info to real world like Instagram filters' },
    
    // Business & Development
    { id: 'api', emoji: '🔌', label: 'API Integration', category: 'Development', description: 'Connect different apps and services together' },
    { id: 'microservices', emoji: '⚙️', label: 'Microservices', category: 'Development', description: 'Break big apps into smaller, manageable pieces' },
    { id: 'automation', emoji: '🔄', label: 'Automation', category: 'Business', description: 'Automatic processes that save time and money' },
    { id: 'cybersecurity', emoji: '🛡️', label: 'Cybersecurity', category: 'Security', description: 'Protect against hackers and cyber attacks' },
    
    // Future Tech
    { id: 'quantum', emoji: '⚛️', label: 'Quantum Computing', category: 'Future', description: 'Super powerful computers for complex problems' },
    { id: 'edgecomputing', emoji: '📱', label: 'Edge Computing', category: 'Computing', description: 'Fast processing closer to users' },
    { id: 'computervision', emoji: '👁️', label: 'Computer Vision', category: 'AI', description: 'Computers that can see and understand images' },
    { id: 'nlp', emoji: '🗨️', label: 'Language AI', category: 'AI', description: 'AI that understands human language perfectly' }
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