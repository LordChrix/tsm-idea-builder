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
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="aiGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#aiGrad)" opacity="0.15"/>
      <path d="M30 30 L50 20 L70 30 L70 50 L50 60 L30 50 Z" stroke="url(#aiGrad)" strokeWidth="2.5" fill="rgba(102, 126, 234, 0.1)" filter="url(#aiGlow)"/>
      <circle cx="50" cy="40" r="6" fill="url(#aiGrad)" filter="url(#aiGlow)"/>
      <path d="M42 50 L46 54 L54 46 M58 50 L54 54 L46 46" stroke="url(#aiGrad)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="35" cy="35" r="3" fill="url(#aiGrad)" opacity="0.8"/>
      <circle cx="65" cy="35" r="3" fill="url(#aiGrad)" opacity="0.8"/>
      <circle cx="40" cy="65" r="2" fill="url(#aiGrad)" opacity="0.6"/>
      <circle cx="60" cy="65" r="2" fill="url(#aiGrad)" opacity="0.6"/>
    </svg>
  ),

  blockchain: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="blockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4facfe', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="blockGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#blockGrad)" opacity="0.1"/>
      <rect x="18" y="18" width="22" height="22" fill="url(#blockGrad)" opacity="0.9" rx="6" filter="url(#blockGlow)"/>
      <rect x="60" y="18" width="22" height="22" fill="url(#blockGrad)" opacity="0.9" rx="6" filter="url(#blockGlow)"/>
      <rect x="18" y="60" width="22" height="22" fill="url(#blockGrad)" opacity="0.9" rx="6" filter="url(#blockGlow)"/>
      <rect x="60" y="60" width="22" height="22" fill="url(#blockGrad)" opacity="0.9" rx="6" filter="url(#blockGlow)"/>
      <path d="M40 29 L60 29 M40 71 L60 71 M29 40 L29 60 M71 40 L71 60" stroke="url(#blockGrad)" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="29" cy="29" r="3" fill="url(#blockGrad)"/>
      <circle cx="71" cy="29" r="3" fill="url(#blockGrad)"/>
      <circle cx="29" cy="71" r="3" fill="url(#blockGrad)"/>
      <circle cx="71" cy="71" r="3" fill="url(#blockGrad)"/>
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

  // Default icon for components without custom icons
  default: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="30" fill="url(#defaultGrad)" opacity="0.2"/>
      <circle cx="50" cy="50" r="30" stroke="url(#defaultGrad)" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="50" r="5" fill="url(#defaultGrad)"/>
    </svg>
  )
};

export default TechIcons;