import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

const TechIcons = {
  // AI & Technology Icons
  ai: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a73e8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#34a853', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="15" y="15" width="70" height="70" rx="16" fill="url(#aiGrad)" opacity="0.1"/>
      <circle cx="50" cy="35" r="12" fill="url(#aiGrad)" opacity="0.8"/>
      <rect x="25" y="55" width="50" height="4" rx="2" fill="url(#aiGrad)" opacity="0.6"/>
      <rect x="25" y="65" width="35" height="4" rx="2" fill="url(#aiGrad)" opacity="0.4"/>
      <rect x="25" y="75" width="40" height="4" rx="2" fill="url(#aiGrad)" opacity="0.3"/>
      <circle cx="30" cy="35" r="2" fill="url(#aiGrad)"/>
      <circle cx="70" cy="35" r="2" fill="url(#aiGrad)"/>
    </svg>
  ),

  blockchain: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="blockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ea4335', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fbbc04', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="15" y="15" width="70" height="70" rx="16" fill="url(#blockGrad)" opacity="0.1"/>
      <rect x="20" y="20" width="20" height="20" fill="url(#blockGrad)" rx="4"/>
      <rect x="60" y="20" width="20" height="20" fill="url(#blockGrad)" rx="4"/>
      <rect x="20" y="60" width="20" height="20" fill="url(#blockGrad)" rx="4"/>
      <rect x="60" y="60" width="20" height="20" fill="url(#blockGrad)" rx="4"/>
      <rect x="45" y="27" width="10" height="3" fill="url(#blockGrad)" rx="1.5"/>
      <rect x="45" y="70" width="10" height="3" fill="url(#blockGrad)" rx="1.5"/>
      <rect x="27" y="45" width="3" height="10" fill="url(#blockGrad)" rx="1.5"/>
      <rect x="70" y="45" width="3" height="10" fill="url(#blockGrad)" rx="1.5"/>
    </svg>
  ),

  cloud: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00f2fe', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M75 60 C75 50, 65 45, 60 50 C60 40, 45 35, 40 45 C30 45, 25 55, 35 60 Z" fill="url(#cloudGrad)" opacity="0.9"/>
      <circle cx="50" cy="55" r="3" fill="white" opacity="0.8"/>
      <circle cx="60" cy="55" r="3" fill="white" opacity="0.8"/>
      <circle cx="40" cy="55" r="3" fill="white" opacity="0.8"/>
    </svg>
  ),

  mobile: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="mobileGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="50" cy="50" rx="25" ry="40" fill="url(#mobileGrad)" opacity="0.15"/>
      <rect x="32" y="15" width="36" height="70" rx="8" fill="rgba(255,255,255,0.1)" stroke="url(#mobileGrad)" strokeWidth="2.5" filter="url(#mobileGlow)"/>
      <rect x="37" y="25" width="26" height="40" rx="3" fill="url(#mobileGrad)" opacity="0.7"/>
      <circle cx="50" cy="75" r="4" fill="url(#mobileGrad)" filter="url(#mobileGlow)"/>
      <rect x="45" y="19" width="10" height="2" rx="1" fill="url(#mobileGrad)" opacity="0.6"/>
      <path d="M42 30 L58 30 M42 35 L55 35 M42 40 L52 40" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),

  payment: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="payGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fa709a', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#fee140', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="payGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="50" cy="50" rx="40" ry="25" fill="url(#payGrad)" opacity="0.15"/>
      <rect x="20" y="30" width="60" height="40" rx="8" fill="rgba(255,255,255,0.1)" stroke="url(#payGrad)" strokeWidth="2.5" filter="url(#payGlow)"/>
      <rect x="20" y="45" width="60" height="8" fill="url(#payGrad)" opacity="0.6"/>
      <rect x="25" y="58" width="20" height="3" rx="1" fill="url(#payGrad)" opacity="0.8"/>
      <rect x="25" y="63" width="30" height="2" rx="1" fill="url(#payGrad)" opacity="0.6"/>
      <circle cx="70" cy="60" r="6" fill="url(#payGrad)" filter="url(#payGlow)"/>
      <path d="M65 60 L67 62 L75 54" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  delivery: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="deliveryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="20" y="40" width="40" height="25" fill="url(#deliveryGrad)" opacity="0.3"/>
      <rect x="60" y="45" width="20" height="20" fill="url(#deliveryGrad)" opacity="0.3"/>
      <circle cx="35" cy="70" r="6" fill="none" stroke="url(#deliveryGrad)" strokeWidth="2"/>
      <circle cx="65" cy="70" r="6" fill="none" stroke="url(#deliveryGrad)" strokeWidth="2"/>
      <path d="M20 40 L60 40 L75 50 L80 50 L80 65 L60 65" stroke="url(#deliveryGrad)" strokeWidth="2" fill="none"/>
    </svg>
  ),

  social: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="socialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00f2fe', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="35" r="8" fill="url(#socialGrad)" opacity="0.8"/>
      <circle cx="30" cy="55" r="6" fill="url(#socialGrad)" opacity="0.6"/>
      <circle cx="70" cy="55" r="6" fill="url(#socialGrad)" opacity="0.6"/>
      <path d="M50 35 L30 55 M50 35 L70 55 M30 55 L70 55" stroke="url(#socialGrad)" strokeWidth="2" opacity="0.5"/>
    </svg>
  ),

  shopping: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="shopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fa709a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fee140', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M25 30 L35 30 L40 60 L70 60 L75 40 L40 40" stroke="url(#shopGrad)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="45" cy="70" r="4" fill="url(#shopGrad)"/>
      <circle cx="65" cy="70" r="4" fill="url(#shopGrad)"/>
      <circle cx="35" cy="30" r="3" fill="url(#shopGrad)"/>
    </svg>
  ),

  vr: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="vrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="20" y="35" width="60" height="30" rx="15" fill="url(#vrGrad)" opacity="0.3"/>
      <rect x="20" y="35" width="60" height="30" rx="15" stroke="url(#vrGrad)" strokeWidth="2" fill="none"/>
      <circle cx="35" cy="50" r="8" fill="url(#vrGrad)" opacity="0.6"/>
      <circle cx="65" cy="50" r="8" fill="url(#vrGrad)" opacity="0.6"/>
      <path d="M45 50 L55 50" stroke="url(#vrGrad)" strokeWidth="2"/>
    </svg>
  ),

  drone: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="droneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="30" cy="30" r="8" fill="none" stroke="url(#droneGrad)" strokeWidth="2"/>
      <circle cx="70" cy="30" r="8" fill="none" stroke="url(#droneGrad)" strokeWidth="2"/>
      <circle cx="30" cy="70" r="8" fill="none" stroke="url(#droneGrad)" strokeWidth="2"/>
      <circle cx="70" cy="70" r="8" fill="none" stroke="url(#droneGrad)" strokeWidth="2"/>
      <rect x="45" y="45" width="10" height="10" fill="url(#droneGrad)" rx="2"/>
      <path d="M30 30 L45 45 M70 30 L55 45 M30 70 L45 55 M70 70 L55 55" stroke="url(#droneGrad)" strokeWidth="2"/>
    </svg>
  ),

  // Communication & Video
  videochat: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="videoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="20" y="30" width="60" height="40" rx="8" fill="url(#videoGrad)" opacity="0.2" stroke="url(#videoGrad)" strokeWidth="2"/>
      <circle cx="50" cy="50" r="6" fill="url(#videoGrad)"/>
      <rect x="15" y="35" width="8" height="6" rx="2" fill="url(#videoGrad)" opacity="0.8"/>
      <rect x="77" y="35" width="8" height="6" rx="2" fill="url(#videoGrad)" opacity="0.8"/>
    </svg>
  ),

  messaging: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="msgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#25d366', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#128c7e', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M20 35 C20 25, 30 20, 50 20 C70 20, 80 25, 80 35 C80 45, 70 50, 50 50 L35 65 Z" fill="url(#msgGrad)" opacity="0.8"/>
      <circle cx="40" cy="35" r="3" fill="white"/>
      <circle cx="50" cy="35" r="3" fill="white"/>
      <circle cx="60" cy="35" r="3" fill="white"/>
    </svg>
  ),

  translation: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="transGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4285f4', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#34a853', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="25" fill="none" stroke="url(#transGrad)" strokeWidth="3" opacity="0.3"/>
      <text x="35" y="45" fill="url(#transGrad)" fontSize="14" fontWeight="bold">A</text>
      <text x="55" y="60" fill="url(#transGrad)" fontSize="14" fontWeight="bold">あ</text>
      <path d="M35 50 Q50 35 65 50" stroke="url(#transGrad)" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
    </svg>
  ),

  // Education & Learning
  learning: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="learnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b35', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f7931e', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="25" y="20" width="50" height="60" rx="4" fill="url(#learnGrad)" opacity="0.2" stroke="url(#learnGrad)" strokeWidth="2"/>
      <rect x="35" y="30" width="30" height="3" rx="1" fill="url(#learnGrad)" opacity="0.8"/>
      <rect x="35" y="40" width="25" height="2" rx="1" fill="url(#learnGrad)" opacity="0.6"/>
      <rect x="35" y="50" width="20" height="2" rx="1" fill="url(#learnGrad)" opacity="0.4"/>
      <circle cx="50" cy="65" r="4" fill="url(#learnGrad)"/>
    </svg>
  ),

  // Healthcare
  healthcare: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="healthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff416c', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff4b2b', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="45" y="25" width="10" height="25" fill="url(#healthGrad)"/>
      <rect x="35" y="35" width="30" height="10" fill="url(#healthGrad)"/>
      <circle cx="50" cy="60" r="15" fill="none" stroke="url(#healthGrad)" strokeWidth="3" opacity="0.3"/>
    </svg>
  ),

  // Food & Agriculture
  food: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="foodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff9a56', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ffad56', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="20" fill="url(#foodGrad)" opacity="0.3"/>
      <path d="M50 35 C40 35, 35 45, 50 50 C65 45, 60 35, 50 35" fill="url(#foodGrad)"/>
      <circle cx="45" cy="42" r="2" fill="#ff6b35"/>
      <circle cx="55" cy="42" r="2" fill="#ff6b35"/>
      <path d="M45 48 Q50 52 55 48" stroke="#ff6b35" strokeWidth="2" fill="none"/>
    </svg>
  ),

  farming: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="farmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#56b3d9', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#88d8b0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M30 70 Q30 50, 40 40 Q50 30, 60 40 Q70 50, 70 70" stroke="url(#farmGrad)" strokeWidth="3" fill="none"/>
      <path d="M25 70 Q25 55, 35 45" stroke="url(#farmGrad)" strokeWidth="2" fill="none" opacity="0.7"/>
      <path d="M75 70 Q75 55, 65 45" stroke="url(#farmGrad)" strokeWidth="2" fill="none" opacity="0.7"/>
      <rect x="20" y="70" width="60" height="5" fill="#8b4513" opacity="0.6"/>
    </svg>
  ),

  // Real Estate & Housing
  realestate: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="realGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M50 25 L75 45 L75 70 L25 70 L25 45 Z" fill="url(#realGrad)" opacity="0.3" stroke="url(#realGrad)" strokeWidth="2"/>
      <rect x="40" y="55" width="8" height="15" fill="url(#realGrad)" opacity="0.8"/>
      <rect x="55" y="45" width="8" height="8" fill="url(#realGrad)" opacity="0.6"/>
      <circle cx="46" cy="62" r="1" fill="url(#realGrad)"/>
    </svg>
  ),

  // Entertainment & Media
  entertainment: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="entGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0844', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ffb199', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="25" fill="url(#entGrad)" opacity="0.2" stroke="url(#entGrad)" strokeWidth="2"/>
      <path d="M40 40 L65 50 L40 60 Z" fill="url(#entGrad)"/>
    </svg>
  ),

  music: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="musicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8360c3', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2ebf91', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="35" cy="65" r="8" fill="url(#musicGrad)" opacity="0.8"/>
      <circle cx="65" cy="55" r="8" fill="url(#musicGrad)" opacity="0.8"/>
      <rect x="63" y="30" width="4" height="25" fill="url(#musicGrad)"/>
      <rect x="33" y="40" width="4" height="25" fill="url(#musicGrad)"/>
      <path d="M37 40 Q45 35, 67 30" stroke="url(#musicGrad)" strokeWidth="3" fill="none"/>
    </svg>
  ),

  // Sports & Fitness
  sports: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="sportsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#56ab2f', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#a8e6cf', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="20" fill="none" stroke="url(#sportsGrad)" strokeWidth="3"/>
      <path d="M35 35 Q50 25, 65 35 Q50 45, 35 35" fill="url(#sportsGrad)" opacity="0.6"/>
      <path d="M35 65 Q50 75, 65 65 Q50 55, 35 65" fill="url(#sportsGrad)" opacity="0.6"/>
      <circle cx="50" cy="50" r="3" fill="url(#sportsGrad)"/>
    </svg>
  ),

  // Fashion & Style
  fashion: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="fashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff9a9e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fecfef', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M35 25 L65 25 L70 35 L70 70 L30 70 L30 35 Z" fill="url(#fashGrad)" opacity="0.3" stroke="url(#fashGrad)" strokeWidth="2"/>
      <path d="M35 25 Q40 20, 45 25 Q50 20, 55 25 Q60 20, 65 25" stroke="url(#fashGrad)" strokeWidth="2" fill="none"/>
      <circle cx="38" cy="45" r="2" fill="url(#fashGrad)"/>
      <circle cx="38" cy="55" r="2" fill="url(#fashGrad)"/>
    </svg>
  ),

  // Security & Safety
  security: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ffeaa7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fab1a0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M50 25 L70 35 L70 55 C70 65, 60 70, 50 75 C40 70, 30 65, 30 55 L30 35 Z" fill="url(#secGrad)" opacity="0.3" stroke="url(#secGrad)" strokeWidth="2"/>
      <path d="M42 48 L47 53 L58 42" stroke="url(#secGrad)" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  ),

  cybersecurity: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff6b6b', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4ecdc4', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M50 25 L70 35 L70 55 C70 65, 60 70, 50 75 C40 70, 30 65, 30 55 L30 35 Z" fill="none" stroke="url(#cyberGrad)" strokeWidth="3"/>
      <rect x="45" y="45" width="10" height="12" rx="2" fill="none" stroke="url(#cyberGrad)" strokeWidth="2"/>
      <circle cx="50" cy="40" r="3" fill="none" stroke="url(#cyberGrad)" strokeWidth="2"/>
      <rect x="47" y="37" width="6" height="3" fill="url(#cyberGrad)"/>
    </svg>
  ),

  biometrics: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="bioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="25" fill="none" stroke="url(#bioGrad)" strokeWidth="2" opacity="0.3"/>
      <path d="M40 30 Q50 25, 60 30 Q55 40, 50 45 Q45 40, 40 30" fill="none" stroke="url(#bioGrad)" strokeWidth="2"/>
      <path d="M35 50 Q40 45, 45 50 Q50 55, 55 50 Q60 45, 65 50" stroke="url(#bioGrad)" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="65" r="3" fill="url(#bioGrad)"/>
    </svg>
  ),

  // Information & News
  news: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="newsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#74b9ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0984e3', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="25" y="20" width="50" height="60" rx="4" fill="url(#newsGrad)" opacity="0.2" stroke="url(#newsGrad)" strokeWidth="2"/>
      <rect x="30" y="30" width="40" height="4" fill="url(#newsGrad)" opacity="0.8"/>
      <rect x="30" y="40" width="35" height="2" fill="url(#newsGrad)" opacity="0.6"/>
      <rect x="30" y="45" width="30" height="2" fill="url(#newsGrad)" opacity="0.4"/>
      <rect x="30" y="55" width="25" height="2" fill="url(#newsGrad)" opacity="0.4"/>
      <rect x="30" y="60" width="35" height="2" fill="url(#newsGrad)" opacity="0.4"/>
    </svg>
  ),

  weather: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="weatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fdcb6e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#e17055', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="35" cy="35" r="12" fill="url(#weatherGrad)" opacity="0.8"/>
      <path d="M70 45 C75 35, 65 30, 60 35 C60 25, 45 20, 40 30 C30 30, 25 40, 35 45 L70 45" fill="url(#weatherGrad)" opacity="0.6"/>
      <path d="M45 60 L45 65 M50 55 L50 65 M55 60 L55 65" stroke="url(#weatherGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    </svg>
  ),

  // Services & Booking
  booking: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#a29bfe', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6c5ce7', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="25" y="25" width="50" height="50" rx="8" fill="url(#bookGrad)" opacity="0.2" stroke="url(#bookGrad)" strokeWidth="2"/>
      <rect x="30" y="20" width="8" height="15" rx="2" fill="url(#bookGrad)" opacity="0.8"/>
      <rect x="62" y="20" width="8" height="15" rx="2" fill="url(#bookGrad)" opacity="0.8"/>
      <rect x="30" y="35" width="40" height="3" fill="url(#bookGrad)" opacity="0.6"/>
      <rect x="30" y="45" width="25" height="2" fill="url(#bookGrad)" opacity="0.4"/>
      <rect x="30" y="55" width="35" height="2" fill="url(#bookGrad)" opacity="0.4"/>
    </svg>
  ),

  // Transport & Ride
  rideshare: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="rideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00b894', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#55efc4', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M25 50 L35 45 L65 45 L75 50 L75 60 L70 65 L30 65 L25 60 Z" fill="url(#rideGrad)" opacity="0.3" stroke="url(#rideGrad)" strokeWidth="2"/>
      <circle cx="35" cy="65" r="5" fill="none" stroke="url(#rideGrad)" strokeWidth="2"/>
      <circle cx="65" cy="65" r="5" fill="none" stroke="url(#rideGrad)" strokeWidth="2"/>
      <rect x="35" y="50" width="12" height="8" rx="2" fill="url(#rideGrad)" opacity="0.6"/>
      <rect x="53" y="50" width="12" height="8" rx="2" fill="url(#rideGrad)" opacity="0.6"/>
    </svg>
  ),

  // Utilities & Power
  generator: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="genGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fdcb6e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f39c12', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="30" y="40" width="40" height="25" rx="4" fill="url(#genGrad)" opacity="0.3" stroke="url(#genGrad)" strokeWidth="2"/>
      <path d="M35 30 L45 40 L40 40 L40 50 L50 35 L45 35 L55 25" stroke="url(#genGrad)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="60" cy="52" r="3" fill="url(#genGrad)"/>
      <rect x="35" y="65" width="8" height="8" rx="2" fill="url(#genGrad)" opacity="0.6"/>
      <rect x="57" y="65" width="8" height="8" rx="2" fill="url(#genGrad)" opacity="0.6"/>
    </svg>
  ),

  // AI & Advanced Tech
  chatbot: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="botGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#74b9ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0984e3', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="30" y="30" width="40" height="40" rx="8" fill="url(#botGrad)" opacity="0.2" stroke="url(#botGrad)" strokeWidth="2"/>
      <circle cx="42" cy="45" r="3" fill="url(#botGrad)"/>
      <circle cx="58" cy="45" r="3" fill="url(#botGrad)"/>
      <rect x="45" y="55" width="10" height="3" rx="1" fill="url(#botGrad)" opacity="0.8"/>
      <rect x="35" y="25" width="6" height="8" rx="3" fill="url(#botGrad)" opacity="0.6"/>
      <rect x="59" y="25" width="6" height="8" rx="3" fill="url(#botGrad)" opacity="0.6"/>
    </svg>
  ),

  voiceassistant: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="voiceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#6c5ce7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#a29bfe', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="47" y="25" width="6" height="35" rx="3" fill="url(#voiceGrad)"/>
      <rect x="40" y="35" width="4" height="20" rx="2" fill="url(#voiceGrad)" opacity="0.8"/>
      <rect x="56" y="35" width="4" height="20" rx="2" fill="url(#voiceGrad)" opacity="0.8"/>
      <rect x="35" y="40" width="3" height="15" rx="1.5" fill="url(#voiceGrad)" opacity="0.6"/>
      <rect x="62" y="40" width="3" height="15" rx="1.5" fill="url(#voiceGrad)" opacity="0.6"/>
      <circle cx="50" cy="70" r="8" fill="none" stroke="url(#voiceGrad)" strokeWidth="2" opacity="0.4"/>
    </svg>
  ),

  facerecognition: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fd79a8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#e84393', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="25" fill="none" stroke="url(#faceGrad)" strokeWidth="2" opacity="0.3"/>
      <circle cx="42" cy="42" r="3" fill="url(#faceGrad)"/>
      <circle cx="58" cy="42" r="3" fill="url(#faceGrad)"/>
      <path d="M45 55 Q50 60, 55 55" stroke="url(#faceGrad)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <rect x="25" y="25" width="8" height="8" fill="none" stroke="url(#faceGrad)" strokeWidth="2" opacity="0.6"/>
      <rect x="67" y="25" width="8" height="8" fill="none" stroke="url(#faceGrad)" strokeWidth="2" opacity="0.6"/>
      <rect x="25" y="67" width="8" height="8" fill="none" stroke="url(#faceGrad)" strokeWidth="2" opacity="0.6"/>
      <rect x="67" y="67" width="8" height="8" fill="none" stroke="url(#faceGrad)" strokeWidth="2" opacity="0.6"/>
    </svg>
  ),

  dataanalytics: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00cec9', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#55a3ff', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="25" y="65" width="8" height="15" fill="url(#dataGrad)" opacity="0.8"/>
      <rect x="40" y="50" width="8" height="30" fill="url(#dataGrad)" opacity="0.8"/>
      <rect x="55" y="35" width="8" height="45" fill="url(#dataGrad)" opacity="0.8"/>
      <rect x="70" y="45" width="8" height="35" fill="url(#dataGrad)" opacity="0.8"/>
      <path d="M29 65 L44 50 L59 35 L74 45" stroke="url(#dataGrad)" strokeWidth="2" fill="none" opacity="0.6"/>
    </svg>
  ),

  cryptocurrency: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="cryptoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f7b733', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fc4a1a', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="25" fill="url(#cryptoGrad)" opacity="0.2" stroke="url(#cryptoGrad)" strokeWidth="3"/>
      <path d="M42 35 L42 65 M58 35 L58 65 M35 42 L65 42 M35 58 L65 58" stroke="url(#cryptoGrad)" strokeWidth="3" strokeLinecap="round"/>
      <rect x="45" y="40" width="10" height="8" fill="url(#cryptoGrad)" opacity="0.6"/>
      <rect x="45" y="52" width="10" height="8" fill="url(#cryptoGrad)" opacity="0.6"/>
    </svg>
  ),

  // IoT & Hardware
  iot: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="iotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="8" fill="url(#iotGrad)"/>
      <circle cx="30" cy="30" r="5" fill="url(#iotGrad)" opacity="0.8"/>
      <circle cx="70" cy="30" r="5" fill="url(#iotGrad)" opacity="0.8"/>
      <circle cx="30" cy="70" r="5" fill="url(#iotGrad)" opacity="0.8"/>
      <circle cx="70" cy="70" r="5" fill="url(#iotGrad)" opacity="0.8"/>
      <path d="M50 42 L30 30 M50 42 L70 30 M50 58 L30 70 M50 58 L70 70" stroke="url(#iotGrad)" strokeWidth="2" opacity="0.6"/>
    </svg>
  ),

  robotics: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00b894', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#55efc4', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="35" y="35" width="30" height="30" rx="6" fill="url(#robotGrad)" opacity="0.3" stroke="url(#robotGrad)" strokeWidth="2"/>
      <circle cx="44" cy="48" r="3" fill="url(#robotGrad)"/>
      <circle cx="56" cy="48" r="3" fill="url(#robotGrad)"/>
      <rect x="46" y="55" width="8" height="3" rx="1" fill="url(#robotGrad)"/>
      <rect x="30" y="48" width="5" height="4" rx="2" fill="url(#robotGrad)" opacity="0.8"/>
      <rect x="65" y="48" width="5" height="4" rx="2" fill="url(#robotGrad)" opacity="0.8"/>
      <circle cx="50" cy="30" r="3" fill="url(#robotGrad)" opacity="0.6"/>
    </svg>
  ),

  printing3d: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="printGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#e17055', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fdcb6e', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="25" y="35" width="50" height="40" rx="4" fill="url(#printGrad)" opacity="0.2" stroke="url(#printGrad)" strokeWidth="2"/>
      <rect x="30" y="55" width="40" height="3" fill="url(#printGrad)" opacity="0.8"/>
      <rect x="35" y="50" width="30" height="3" fill="url(#printGrad)" opacity="0.6"/>
      <rect x="40" y="45" width="20" height="3" fill="url(#printGrad)" opacity="0.4"/>
      <circle cx="50" cy="25" r="3" fill="url(#printGrad)"/>
      <path d="M50 25 L50 42" stroke="url(#printGrad)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // VR/AR
  ar: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="arGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fd79a8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fdcb6e', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="30" y="40" width="40" height="20" rx="10" fill="none" stroke="url(#arGrad)" strokeWidth="3" opacity="0.6"/>
      <circle cx="40" cy="50" r="6" fill="none" stroke="url(#arGrad)" strokeWidth="2"/>
      <circle cx="60" cy="50" r="6" fill="none" stroke="url(#arGrad)" strokeWidth="2"/>
      <path d="M45 50 L55 50" stroke="url(#arGrad)" strokeWidth="2"/>
      <path d="M25 30 L35 40 M75 30 L65 40" stroke="url(#arGrad)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="25" cy="25" r="3" fill="url(#arGrad)" opacity="0.8"/>
      <circle cx="75" cy="25" r="3" fill="url(#arGrad)" opacity="0.8"/>
    </svg>
  ),

  // Development & API
  api: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="apiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00f2fe', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="30" y="35" width="15" height="30" rx="4" fill="url(#apiGrad)" opacity="0.6"/>
      <rect x="55" y="35" width="15" height="30" rx="4" fill="url(#apiGrad)" opacity="0.6"/>
      <path d="M45 40 L55 40 M45 45 L55 45 M45 50 L55 50 M45 55 L55 55 M45 60 L55 60" stroke="url(#apiGrad)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="35" cy="30" r="3" fill="url(#apiGrad)"/>
      <circle cx="65" cy="30" r="3" fill="url(#apiGrad)"/>
    </svg>
  ),

  microservices: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="microGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="25" y="25" width="20" height="20" rx="4" fill="url(#microGrad)" opacity="0.6"/>
      <rect x="55" y="25" width="20" height="20" rx="4" fill="url(#microGrad)" opacity="0.6"/>
      <rect x="25" y="55" width="20" height="20" rx="4" fill="url(#microGrad)" opacity="0.6"/>
      <rect x="55" y="55" width="20" height="20" rx="4" fill="url(#microGrad)" opacity="0.6"/>
      <path d="M45 35 L55 35 M35 45 L35 55 M65 45 L65 55 M45 65 L55 65" stroke="url(#microGrad)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  automation: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#74b9ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0984e3', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="20" fill="none" stroke="url(#autoGrad)" strokeWidth="3" opacity="0.4"/>
      <path d="M50 30 A20 20 0 0 1 70 50" stroke="url(#autoGrad)" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="5" fill="url(#autoGrad)"/>
      <path d="M65 35 L70 30 L75 35" stroke="url(#autoGrad)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),

  // Advanced Computing
  quantum: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="quantumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#a29bfe', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6c5ce7', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="20" fill="none" stroke="url(#quantumGrad)" strokeWidth="2" opacity="0.6"/>
      <circle cx="50" cy="30" r="3" fill="url(#quantumGrad)"/>
      <circle cx="70" cy="50" r="3" fill="url(#quantumGrad)"/>
      <circle cx="50" cy="70" r="3" fill="url(#quantumGrad)"/>
      <circle cx="30" cy="50" r="3" fill="url(#quantumGrad)"/>
      <path d="M50 33 L67 50 L50 67 L33 50 Z" stroke="url(#quantumGrad)" strokeWidth="2" fill="none" opacity="0.4"/>
      <circle cx="50" cy="50" r="3" fill="url(#quantumGrad)"/>
    </svg>
  ),

  edgecomputing: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fd79a8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fdcb6e', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="8" fill="url(#edgeGrad)"/>
      <circle cx="50" cy="50" r="18" fill="none" stroke="url(#edgeGrad)" strokeWidth="2" opacity="0.4"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="url(#edgeGrad)" strokeWidth="2" opacity="0.2"/>
      <circle cx="25" cy="35" r="4" fill="url(#edgeGrad)" opacity="0.8"/>
      <circle cx="75" cy="35" r="4" fill="url(#edgeGrad)" opacity="0.8"/>
      <circle cx="35" cy="75" r="4" fill="url(#edgeGrad)" opacity="0.8"/>
      <circle cx="65" cy="75" r="4" fill="url(#edgeGrad)" opacity="0.8"/>
    </svg>
  ),

  computervision: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00b894', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#55efc4', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="20" fill="none" stroke="url(#visionGrad)" strokeWidth="3" opacity="0.6"/>
      <circle cx="50" cy="50" r="8" fill="none" stroke="url(#visionGrad)" strokeWidth="3"/>
      <circle cx="50" cy="50" r="3" fill="url(#visionGrad)"/>
      <rect x="25" y="25" width="6" height="6" fill="none" stroke="url(#visionGrad)" strokeWidth="2" opacity="0.4"/>
      <rect x="69" y="25" width="6" height="6" fill="none" stroke="url(#visionGrad)" strokeWidth="2" opacity="0.4"/>
      <rect x="25" y="69" width="6" height="6" fill="none" stroke="url(#visionGrad)" strokeWidth="2" opacity="0.4"/>
      <rect x="69" y="69" width="6" height="6" fill="none" stroke="url(#visionGrad)" strokeWidth="2" opacity="0.4"/>
    </svg>
  ),

  nlp: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="nlpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0984e3', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#74b9ff', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M25 35 C25 25, 35 20, 50 20 C65 20, 75 25, 75 35 C75 45, 65 50, 50 50 L40 65 Z" fill="url(#nlpGrad)" opacity="0.3" stroke="url(#nlpGrad)" strokeWidth="2"/>
      <rect x="30" y="30" width="15" height="2" rx="1" fill="url(#nlpGrad)" opacity="0.8"/>
      <rect x="50" y="30" width="15" height="2" rx="1" fill="url(#nlpGrad)" opacity="0.6"/>
      <rect x="30" y="38" width="20" height="2" rx="1" fill="url(#nlpGrad)" opacity="0.4"/>
      <circle cx="60" cy="35" r="2" fill="url(#nlpGrad)"/>
    </svg>
  ),

  // Default icon for components without custom icons
  default: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a73e8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#34a853', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="15" y="15" width="70" height="70" rx="16" fill="url(#defaultGrad)" opacity="0.1"/>
      <rect x="25" y="25" width="50" height="50" rx="12" fill="url(#defaultGrad)" opacity="0.2"/>
      <circle cx="50" cy="50" r="8" fill="url(#defaultGrad)"/>
    </svg>
  )
};

export default TechIcons;