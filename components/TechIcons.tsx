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
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#aiGrad)" opacity="0.1"/>
      <path d="M50 20 L65 35 L65 55 L50 70 L35 55 L35 35 Z" stroke="url(#aiGrad)" strokeWidth="3" fill="none"/>
      <circle cx="50" cy="50" r="8" fill="url(#aiGrad)"/>
      <circle cx="35" cy="35" r="4" fill="url(#aiGrad)"/>
      <circle cx="65" cy="35" r="4" fill="url(#aiGrad)"/>
      <circle cx="35" cy="55" r="4" fill="url(#aiGrad)"/>
      <circle cx="65" cy="55" r="4" fill="url(#aiGrad)"/>
    </svg>
  ),

  blockchain: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="blockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f5576c', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="25" height="25" fill="url(#blockGrad)" opacity="0.8" rx="5"/>
      <rect x="55" y="20" width="25" height="25" fill="url(#blockGrad)" opacity="0.8" rx="5"/>
      <rect x="20" y="55" width="25" height="25" fill="url(#blockGrad)" opacity="0.8" rx="5"/>
      <rect x="55" y="55" width="25" height="25" fill="url(#blockGrad)" opacity="0.8" rx="5"/>
      <path d="M45 32.5 L55 32.5 M45 67.5 L55 67.5 M32.5 45 L32.5 55 M67.5 45 L67.5 55" stroke="url(#blockGrad)" strokeWidth="2"/>
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
          <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="35" y="20" width="30" height="60" rx="5" fill="url(#mobileGrad)" opacity="0.2"/>
      <rect x="35" y="20" width="30" height="60" rx="5" stroke="url(#mobileGrad)" strokeWidth="2" fill="none"/>
      <rect x="40" y="30" width="20" height="35" fill="url(#mobileGrad)" opacity="0.5"/>
      <circle cx="50" cy="73" r="3" fill="url(#mobileGrad)"/>
    </svg>
  ),

  payment: ({ size = 40, className = '' }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="payGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#fa709a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fee140', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="25" y="35" width="50" height="30" rx="5" fill="url(#payGrad)" opacity="0.3"/>
      <rect x="25" y="35" width="50" height="30" rx="5" stroke="url(#payGrad)" strokeWidth="2" fill="none"/>
      <rect x="30" y="45" width="15" height="2" fill="url(#payGrad)"/>
      <rect x="30" y="50" width="25" height="2" fill="url(#payGrad)"/>
      <circle cx="65" cy="55" r="5" fill="url(#payGrad)" opacity="0.7"/>
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