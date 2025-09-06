import React, { useState, useEffect, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { gameConfig } from './GameConfig';
import useGameLogic from '../hooks/useGameLogic';
import LottieIcon from './LottieIcon';
import TechIcons from './TechIcons';
import SocialIcons from './SocialIcons';

interface AchievementModalProps {
  show: boolean;
  achievement: { title: string; message: string } | null;
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ show, achievement, onClose }) => (
  <div className={`modal-overlay ${show ? 'active' : ''}`} onClick={onClose}>
    <div className="achievement-modal">
      <div className="achievement-icon">🏆</div>
      <h2 className="achievement-title">{achievement?.title}</h2>
      <p className="achievement-message">{achievement?.message}</p>
    </div>
  </div>
);

const IdeaBuilder: React.FC = () => {
  const {
    gameState,
    addComponent,
    removeComponent,
    clearComponents,
    generateStartupIdea,
    toggleSound,
    shareToWhatsApp,
    shareToTwitter,
    shareToFacebook,
    shareToInstagram,
    resetEverything
  } = useGameLogic();

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState('');
  const [showAchievement, setShowAchievement] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<{title: string, message: string} | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [activeShareDropdown, setActiveShareDropdown] = useState<number | null>(null);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [selectedBlueprint, setSelectedBlueprint] = useState<any>(null);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' });
  
  // Animation system state
  const [showAnimationOverlay, setShowAnimationOverlay] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Detect touch device on component mount
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  const handleComponentSelect = (componentId: string) => {
    if (isTouchDevice) {
      const component = gameConfig.components.find(c => c.id === componentId);
      if (component) {
        addComponent(component);
      }
    }
  };

  const toggleComponentSelection = (componentId: string) => {
    if (selectedComponents.includes(componentId)) {
      setSelectedComponents(prev => prev.filter(id => id !== componentId));
    } else {
      setSelectedComponents(prev => [...prev, componentId]);
    }
  };

  const addSelectedComponents = () => {
    selectedComponents.forEach(componentId => {
      const component = gameConfig.components.find(c => c.id === componentId);
      if (component) {
        addComponent(component);
      }
    });
    setSelectedComponents([]);
  };

  const toggleShareDropdown = (ideaId: number) => {
    setActiveShareDropdown(activeShareDropdown === ideaId ? null : ideaId);
  };


  const openConsultationModal = (idea: any) => {
    setSelectedBlueprint(idea);
    setShowConsultationModal(true);
  };

  const submitLeadForm = async () => {
    // Validate form fields
    if (!leadForm.name?.trim() || !leadForm.email?.trim() || !leadForm.phone?.trim()) {
      // Show proper error notification instead of alert
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
        <div class="toast-content toast-error">
          <span class="toast-icon">❌</span>
          <span class="toast-message">Please fill in all required fields</span>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('toast-show');
      }, 100);
      
      setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }, 3000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadForm.email)) {
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
        <div class="toast-content toast-error">
          <span class="toast-icon">❌</span>
          <span class="toast-message">Please enter a valid email address</span>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('toast-show');
      }, 100);
      
      setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }, 3000);
      return;
    }
    
    try {
      // Here you would normally send the lead data to your backend
      console.log('Lead submitted:', leadForm, 'Blueprint:', selectedBlueprint);
      
      // Show success message with improved styling
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
        <div class="toast-content toast-success">
          <span class="toast-icon">✅</span>
          <span class="toast-message">
            <strong>Success!</strong> We'll contact you within 24 hours to discuss your "${selectedBlueprint?.name || 'business'}" blueprint.
          </span>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('toast-show');
      }, 100);
      
      setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }, 4000);
      
      // Reset form and close modal
      setLeadForm({ name: '', email: '', phone: '' });
      setShowConsultationModal(false);
      setSelectedBlueprint(null);
      
    } catch (error) {
      console.error('Error submitting lead form:', error);
      
      // Show error message
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
        <div class="toast-content toast-error">
          <span class="toast-icon">❌</span>
          <span class="toast-message">Something went wrong. Please try again.</span>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('toast-show');
      }, 100);
      
      setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }, 3000);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveShareDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    
    // If dropped outside a droppable area
    if (!destination) {
      return;
    }
    
    // If dropped in the drop zone
    if (destination.droppableId === 'drop-zone' && source.droppableId === 'components') {
      const component = gameConfig.components.find(c => c.id === draggableId);
      if (component) {
        addComponent(component);
      }
    }
  };

  const createRocketAnimation = useCallback(() => {
    // Create rocket element
    const rocket = document.createElement('div');
    rocket.innerHTML = '🚀';
    rocket.style.cssText = `
      position: fixed;
      font-size: 120px;
      z-index: 10000;
      left: 20%;
      bottom: -180px;
      transform: rotate(-30deg);
      animation: natural-rocket-launch 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      filter: drop-shadow(0 0 40px rgba(255, 50, 255, 0.8)) drop-shadow(0 0 80px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 120px rgba(255, 100, 0, 0.4));
    `;
    
    // Create magical sparkles
    const sparkles = document.createElement('div');
    sparkles.innerHTML = '✨✨✨✨✨';
    sparkles.style.cssText = `
      position: fixed;
      font-size: 40px;
      z-index: 9998;
      left: 20%;
      bottom: -150px;
      animation: sparkles-natural-follow 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
    `;
    
    // Create rainbow trail
    const trail = document.createElement('div');
    trail.style.cssText = `
      position: fixed;
      width: 250px;
      height: 12px;
      background: linear-gradient(-30deg, 
        rgba(255, 0, 150, 0.8) 0%, 
        rgba(255, 100, 0, 0.9) 25%, 
        rgba(0, 255, 255, 0.8) 50%, 
        rgba(150, 0, 255, 0.9) 75%, 
        transparent 100%);
      z-index: 9999;
      left: 20%;
      bottom: -300px;
      transform: rotate(-30deg);
      border-radius: 6px;
      animation: natural-trail-launch 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      box-shadow: 0 0 20px rgba(255, 100, 255, 0.5);
    `;
    
    // Add CSS animation if not already present
    if (!document.querySelector('#rocket-animation-style')) {
      const style = document.createElement('style');
      style.id = 'rocket-animation-style';
      style.textContent = `
        @keyframes natural-rocket-launch {
          0% {
            left: 20%;
            bottom: -180px;
            transform: rotate(-30deg) scale(0.4);
            filter: drop-shadow(0 0 40px rgba(255, 50, 255, 0.8)) drop-shadow(0 0 80px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 120px rgba(255, 100, 0, 0.4));
          }
          15% {
            left: 30%;
            bottom: 20%;
            transform: rotate(-25deg) scale(1.2);
            filter: drop-shadow(0 0 60px rgba(255, 50, 255, 1)) drop-shadow(0 0 120px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 180px rgba(255, 100, 0, 0.6));
          }
          45% {
            left: 60%;
            bottom: 60%;
            transform: rotate(-20deg) scale(1.1);
            filter: drop-shadow(0 0 50px rgba(255, 50, 255, 0.9)) drop-shadow(0 0 100px rgba(0, 255, 255, 0.7)) drop-shadow(0 0 150px rgba(255, 100, 0, 0.5));
          }
          75% {
            left: 80%;
            bottom: 85%;
            transform: rotate(-15deg) scale(0.9);
            filter: drop-shadow(0 0 40px rgba(255, 50, 255, 0.7)) drop-shadow(0 0 80px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 120px rgba(255, 100, 0, 0.4));
          }
          100% {
            left: calc(100% + 100px);
            bottom: calc(100% + 100px);
            transform: rotate(-10deg) scale(0.6);
            filter: drop-shadow(0 0 20px rgba(255, 50, 255, 0.4)) drop-shadow(0 0 40px rgba(0, 255, 255, 0.3)) drop-shadow(0 0 60px rgba(255, 100, 0, 0.2));
          }
        }
        
        @keyframes sparkles-natural-follow {
          0% {
            left: 20%;
            bottom: -150px;
            opacity: 0;
            transform: scale(0.5) rotate(0deg);
          }
          20% {
            left: 35%;
            bottom: 25%;
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
          60% {
            left: 70%;
            bottom: 70%;
            opacity: 1;
            transform: scale(1) rotate(360deg);
          }
          100% {
            left: calc(100% + 50px);
            bottom: calc(100% + 50px);
            opacity: 0;
            transform: scale(0.7) rotate(540deg);
          }
        }
        
        @keyframes natural-trail-launch {
          0% {
            left: 15%;
            bottom: -350px;
            opacity: 0;
            transform: rotate(-30deg) scale(0.3);
          }
          15% {
            opacity: 1;
            transform: rotate(-30deg) scale(1);
          }
          85% {
            left: 75%;
            bottom: 80%;
            opacity: 1;
            transform: rotate(-30deg) scale(1);
          }
          100% {
            left: calc(100% + 150px);
            bottom: calc(100% + 150px);
            opacity: 0;
            transform: rotate(-30deg) scale(0.7);
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(trail);
    document.body.appendChild(sparkles);
    document.body.appendChild(rocket);
    
    // Remove elements after animation
    setTimeout(() => {
      if (rocket.parentNode) {
        document.body.removeChild(rocket);
      }
      if (trail.parentNode) {
        document.body.removeChild(trail);
      }
      if (sparkles.parentNode) {
        document.body.removeChild(sparkles);
      }
    }, 1900);
  }, []);

  // Lottie Animation Array for Dynamic System
  const lottieAnimations = [
    '/lottie/blueprint-unfold.json',
    '/lottie/tsm-trophy-spin.json', 
    '/lottie/dynamic-rocket-launch.json'
  ];

  // Enhanced PDF Download with better formatting and branding
  const downloadBlueprint = async (idea: any) => {
    try {
      setIsLoading(true);
      
      // Dynamic import to reduce bundle size
      const { jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;
      
      const doc = new jsPDF();
      
      // TSM House Agency Branding Header
      doc.setFillColor(6, 182, 212); // Cyan-500
      doc.rect(0, 0, 210, 25, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('TSM House Agency', 20, 16);
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text('Business Blueprint Generator', 140, 16);
      
      // Reset text color for content
      doc.setTextColor(0, 0, 0);
      
      // Blueprint Title
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text(idea.name, 20, 45);
      
      // Generate timestamp
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
      });
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on ${currentDate}`, 20, 52);
      
      let yPosition = 65;
      
      // Executive Summary Section
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Executive Summary', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const summaryLines = doc.splitTextToSize(idea.executiveSummary, 170);
      doc.text(summaryLines, 20, yPosition);
      yPosition += summaryLines.length * 5 + 15;
      
      // Market Opportunity Section
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Market Opportunity', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const marketLines = doc.splitTextToSize(idea.marketOpportunity, 170);
      doc.text(marketLines, 20, yPosition);
      yPosition += marketLines.length * 5 + 15;
      
      // Revenue Model Section
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Revenue Model', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const revenueLines = doc.splitTextToSize(idea.revenueModel, 170);
      doc.text(revenueLines, 20, yPosition);
      yPosition += revenueLines.length * 5 + 15;
      
      // Check if we need a new page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 30;
      }
      
      // Key Features Section
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Key Features', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const featuresLines = doc.splitTextToSize(idea.keyFeatures, 170);
      doc.text(featuresLines, 20, yPosition);
      yPosition += featuresLines.length * 5 + 15;
      
      // Next Steps Section
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Next Steps', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const stepsLines = doc.splitTextToSize(idea.nextSteps, 170);
      doc.text(stepsLines, 20, yPosition);
      yPosition += stepsLines.length * 5 + 20;
      
      // Call to Action Section (Highlighted Box)
      if (yPosition > 260) {
        doc.addPage();
        yPosition = 30;
      }
      
      doc.setFillColor(240, 253, 250); // Light cyan background
      doc.rect(15, yPosition - 5, 180, 25, 'F');
      doc.setDrawColor(6, 182, 212);
      doc.rect(15, yPosition - 5, 180, 25, 'S');
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(6, 182, 212);
      doc.text('Ready to Get Started?', 20, yPosition + 5);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0);
      const ctaLines = doc.splitTextToSize(idea.callToAction, 170);
      doc.text(ctaLines, 20, yPosition + 15);
      
      // Footer
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text('Generated by TSM House Agency - Business Blueprint Builder', 20, 285);
      doc.text('Visit: https://tsmhouse.agency', 140, 285);
      
      // Save the PDF
      doc.save(`${idea.name.replace(/\s+/g, '_')}_Business_Blueprint.pdf`);
      
      // Show success notification
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
        <div class="toast-content toast-success">
          <span class="toast-icon">📄</span>
          <span class="toast-message">Blueprint PDF downloaded successfully!</span>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('toast-show');
      }, 100);
      
      setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }, 3000);
      
    } catch (error) {
      console.error('PDF generation failed:', error);
      
      // Show error notification
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
        <div class="toast-content toast-warning">
          <span class="toast-icon">⚠️</span>
          <span class="toast-message">PDF download failed. Please try again.</span>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('toast-show');
      }, 100);
      
      setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  // Animation completion callback
  const onAnimationComplete = useCallback(async () => {
    // After animation completes, proceed with AI generation
    try {
      await generateStartupIdea();
      
      // Hide animation overlay after successful generation
      setShowAnimationOverlay(false);
      setCurrentAnimation(null);
      
      // Launch celebration effects
      createRocketAnimation();
      
      // Check for achievements
      const achievement = gameConfig.achievements.find(a => a.count === gameState.stats.ideasCount + 1);
      if (achievement) {
        setCurrentAchievement(achievement);
        setShowAchievement(true);
        setTimeout(() => setShowAchievement(false), 3000);
      }
      
    } catch (error) {
      console.error('Generation failed:', error);
      
      // Hide animation and show error
      setShowAnimationOverlay(false);
      setCurrentAnimation(null);
      
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
        <div class="toast-content toast-warning">
          <span class="toast-icon">⚠️</span>
          <span class="toast-message">AI generation failed, but we created a great idea anyway! 🚀</span>
        </div>
      `;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.add('toast-show');
      }, 100);
      
      setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => {
          if (toast.parentNode) {
            document.body.removeChild(toast);
          }
        }, 300);
      }, 3000);
    } finally {
      setIsLoading(false);
      setIsGenerating(false);
    }
  }, [generateStartupIdea, gameState.stats.ideasCount, createRocketAnimation]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setIsLoading(true);
    
    // Immediately show animation overlay and select random animation
    setShowAnimationOverlay(true);
    const randomAnimation = lottieAnimations[Math.floor(Math.random() * lottieAnimations.length)];
    setCurrentAnimation(randomAnimation);
    
    // Add visual feedback to stats
    const statElements = document.querySelectorAll('.stat-value');
    statElements.forEach(el => el.classList.add('updating'));
    
    // Simulate animation duration and trigger AI generation after completion (3 seconds)
    setTimeout(() => {
      onAnimationComplete();
    }, 3000);
  };

  const formatCurrency = (amount: number): string => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(0)}M`;
    }
    return amount.toString();
  };

  const getComponentIcon = (componentId: string) => {
    const iconMap: { [key: string]: keyof typeof TechIcons } = {
      // Current component IDs from GameConfig.ts
      'storefront': 'shopping',
      'payments': 'payment',
      'logistics': 'delivery',
      'chat': 'messaging',
      'ai-insights': 'ai',
      'mobile-app': 'mobile',
      'cloud-hosting': 'cloud',
      'cybersecurity': 'cybersecurity',
      'social-media': 'social'
    };

    const IconComponent = TechIcons[iconMap[componentId] || 'default'];
    return <IconComponent size={32} className="tech-icon" />;
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <div className="tsm-logo">
            {/* TSM House Agency Logo */}
            <picture>
              <source 
                media="(max-width: 767px)" 
                srcSet="https://tsmhouse.agency/wp-content/uploads/2025/07/TSM-house-logomark.png" 
              />
              <source 
                media="(min-width: 768px)" 
                srcSet="https://tsmhouse.agency/wp-content/uploads/2025/07/cropped-TSM-house.png" 
              />
              <img 
                src="https://tsmhouse.agency/wp-content/uploads/2025/07/cropped-TSM-house.png"
                alt="TSM House Agency - Biz Blueprint Builder"
                className="tsm-logo-img"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="tsm-logo-fallback">TSM House Agency</div>';
                  }
                }}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '1';
                }}
              />
            </picture>
          </div>
          <div className="brand-section">
            <div className="logo-icon">
              <LottieIcon 
                src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" 
                width={48} 
                height={48}
                fallback={<span className="animate-bounce">🚀</span>}
              />
            </div>
            <h1 className="logo-text">Your Business Idea, Your Digital Blueprint.</h1>
          </div>
        </div>
        <p className="tagline">Transform Your Vision Into A Winning Strategy</p>
        <p className="sub-tagline">
          <span>🚀 Professional Business Blueprints • Powered by AI • Ready in Minutes</span>
          <div className="header-controls">
            <button className="sound-toggle" onClick={toggleSound} title="Toggle Sound">
              <span>{gameState.soundEnabled ? '🔊' : '🔇'}</span>
            </button>
            <button className="fresh-start-btn" onClick={resetEverything} title="Fresh Start - Clear All Data">
              <span>🆕</span>
              <span>Fresh Start</span>
            </button>
          </div>
        </p>
      </header>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Community Blueprints Created</div>
          <div className="stat-value">
            <span className="stat-icon animate-pulse">
              <LottieIcon 
                src="https://assets3.lottiefiles.com/packages/lf20_qp1q7mct.json"
                width={32}
                height={32}
                fallback={<span>💡</span>}
              />
            </span>
            <span>1,234</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Solutions Delivered</div>
          <div className="stat-value">
            <span className="stat-icon animate-bounce">
              <LottieIcon 
                src="https://assets9.lottiefiles.com/packages/lf20_06a6pf9i.json"
                width={32}
                height={32}
                fallback={<span>💰</span>}
              />
            </span>
            <span>256</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Success Stories</div>
          <div className="stat-value">
            <span className="stat-icon animate-wiggle">
              <LottieIcon 
                src="https://assets4.lottiefiles.com/packages/lf20_1pxqjqps.json"
                width={32}
                height={32}
                fallback={<span>🍚</span>}
              />
            </span>
            <span>89</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Success Rate</div>
          <div className="stat-value">
            <span className="stat-icon animate-grow">
              <LottieIcon 
                src="https://assets1.lottiefiles.com/packages/lf20_9wpyhdzo.json"
                width={32}
                height={32}
                fallback={<span>📈</span>}
              />
            </span>
            <span>{gameState.stats.ideasCount > 0 ? Math.min(100, gameState.stats.ideasCount * 10) : 0}%</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="instructions-card">
        <h2 className="instructions-title">
          <span className="animate-spin-slow">
            <LottieIcon 
              src="https://assets7.lottiefiles.com/packages/lf20_khzniaya.json"
              width={24}
              height={24}
              fallback={<span>🎮</span>}
            />
          </span>
          <span>How It Works</span>
        </h2>
        <ol className="instructions-list">
          <li>
            <span className="instruction-number">1</span>
            <span>Pick your business challenge</span>
          </li>
          <li>
            <span className="instruction-number">2</span>
            <span>Drag and drop the tools you need</span>
          </li>
          <li>
            <span className="instruction-number">3</span>
            <span>Click 'Generate' to see your blueprint</span>
          </li>
          <li>
            <span className="instruction-number">4</span>
            <span>Download & share your plan</span>
          </li>
        </ol>
      </div>

      {/* Game Area */}
      <div className="game-area">
        {/* Components Panel */}
        <div className="components-panel">
          <h3 className="panel-title">
            <span>🛠️</span>
            <span>Tech Components</span>
          </h3>
          <Droppable droppableId="components" isDropDisabled={true}>
            {(provided) => (
              <div className="components-grid" {...provided.droppableProps} ref={provided.innerRef}>
                {gameConfig.components.map((component, index) => (
                  <Draggable key={component.id} draggableId={component.id} index={index} isDragDisabled={isTouchDevice}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`component-card ${snapshot.isDragging ? 'dragging' : ''} ${
                          isTouchDevice && selectedComponents.includes(component.id) ? 'selected' : ''
                        }`}
                        onClick={isTouchDevice ? () => handleComponentSelect(component.id) : undefined}
                        title={component.description}
                      >
                        <div className="component-icon-wrapper">
                          {getComponentIcon(component.id)}
                        </div>
                        <div className="component-label">{component.label}</div>
                        {isTouchDevice && (
                          <div className="mobile-add-indicator">
                            <span className="add-text">Select</span>
                            <span className="add-icon">+</span>
                          </div>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        {/* Drop Zone */}
        <div className="drop-zone-container">
          <h3 className="panel-title">
            <span>🎯</span>
            <span>Build Your Idea</span>
            {isTouchDevice && <span className="mobile-instruction">(Tap components to add them)</span>}
          </h3>
          <div className="drop-zone-wrapper">
            <Droppable droppableId="drop-zone">
              {(provided, snapshot) => (
                <div 
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`drop-zone ${snapshot.isDraggingOver ? 'drag-over' : ''} ${isTouchDevice ? 'touch-mode' : ''}`}
                >
            {gameState.droppedComponents.length === 0 ? (
              <div className="drop-zone-empty">
                <div className="drop-zone-empty-icon">📦</div>
                <div className="drop-zone-empty-text">
                  {isTouchDevice ? 'Tap components above to add them here!' : 'Drag components here to start building!'}
                </div>
                <div className="drop-zone-hint">Need at least 2 components to generate an idea</div>
              </div>
            ) : gameState.droppedComponents.length === 1 ? (
              <div className="dropped-components">
                {gameState.droppedComponents.map(component => (
                  <div key={component.id} className="dropped-component">
                    <div className="dropped-component-icon">
                      {getComponentIcon(component.id)}
                    </div>
                    <span className="dropped-component-label">{component.label}</span>
                    <button 
                      className="remove-component" 
                      onClick={() => removeComponent(component.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <div className="need-more-hint">
                  <span className="hint-icon">👆</span>
                  <span>Add 1 more component to generate!</span>
                </div>
              </div>
            ) : (
              <div className="dropped-components">
                {gameState.droppedComponents.map(component => (
                  <div key={component.id} className="dropped-component">
                    <div className="dropped-component-icon">
                      {getComponentIcon(component.id)}
                    </div>
                    <span className="dropped-component-label">{component.label}</span>
                    <button 
                      className="remove-component" 
                      onClick={() => removeComponent(component.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="action-buttons">
            <button 
              className={`btn btn-primary ${isGenerating ? 'btn-generating' : ''}`}
              disabled={gameState.droppedComponents.length < 2 || isGenerating}
              onClick={handleGenerate}
            >
              <span>{isGenerating ? (generationStep || 'Creating Your Startup...') : 'Generate Startup Idea'}</span>
              {isGenerating ? (
                <span className="loading-spinner"></span>
              ) : (
                <span>🚀</span>
              )}
            </button>
            {gameState.droppedComponents.length > 0 && (
              <button className="btn btn-danger" onClick={clearComponents}>
                <span>Clear All</span>
                <span>🗑️</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Panel */}
        <div className="results-panel">
          <h3 className="panel-title">
            <span>💡</span>
            <span>Your Business Blueprints</span>
            <span className="startup-count">({gameState.generatedIdeas.length})</span>
          </h3>
          <div className="results-scroll-container">
            {gameState.generatedIdeas.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">🎯</div>
                <div className="empty-state-text">No blueprints yet. Start building!</div>
              </div>
            ) : (
              gameState.generatedIdeas.map(idea => (
                <div key={idea.id} className="blueprint-card">
                  <div className="blueprint-header">
                    <div className="blueprint-icon">📋</div>
                    <div className="blueprint-title">
                      <h3>{idea.name}</h3>
                      <div className="blueprint-components">
                        {idea.components.map((comp, idx) => (
                          <span key={idx} className="component-tag">{comp}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="blueprint-content">
                    <div className="blueprint-section">
                      <h4>Executive Summary</h4>
                      <p>{idea.executiveSummary}</p>
                    </div>
                    
                    <div className="blueprint-grid">
                      <div className="blueprint-section">
                        <h4>📊 Market Opportunity</h4>
                        <p>{idea.marketOpportunity}</p>
                      </div>
                      <div className="blueprint-section">
                        <h4>💰 Revenue Model</h4>
                        <p>{idea.revenueModel}</p>
                      </div>
                    </div>
                    
                    <div className="blueprint-section">
                      <h4>⚡ Key Features</h4>
                      <p>{idea.keyFeatures}</p>
                    </div>
                    
                    <div className="blueprint-section">
                      <h4>🚀 Next Steps</h4>
                      <p>{idea.nextSteps}</p>
                    </div>
                    
                    <div className="blueprint-cta">
                      <p className="cta-text">{idea.callToAction}</p>
                    </div>
                    
                    <div className="blueprint-actions">
                      <button 
                        className="btn-download"
                        onClick={() => downloadBlueprint(idea)}
                      >
                        <span>📥</span>
                        <span>Download Blueprint</span>
                      </button>
                      <button 
                        className="btn-consultation"
                        onClick={() => openConsultationModal(idea)}
                      >
                        <span>💼</span>
                        <span>Get Free Consultation</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="share-dropdown-container">
                    <button 
                      className="share-trigger-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleShareDropdown(idea.id);
                      }}
                      title="Share this startup"
                    >
                      <span className="share-trigger-icon">↗</span>
                      <span>Share</span>
                    </button>
                    
                    {activeShareDropdown === idea.id && (
                      <div className="share-dropdown" onClick={(e) => e.stopPropagation()}>
                        <div className="share-dropdown-header">
                          <span className="share-dropdown-title">Share {idea.name}</span>
                        </div>
                        <div className="share-options">
                          <button 
                            className="share-option whatsapp" 
                            onClick={() => {
                              shareToWhatsApp(idea.name, idea.executiveSummary);
                              setActiveShareDropdown(null);
                            }}
                          >
                            <SocialIcons.whatsapp size={18} className="share-platform-icon" />
                            <span>WhatsApp</span>
                          </button>
                          <button 
                            className="share-option x-twitter" 
                            onClick={() => {
                              shareToTwitter(idea.name, idea.executiveSummary);
                              setActiveShareDropdown(null);
                            }}
                          >
                            <SocialIcons.x size={18} className="share-platform-icon" />
                            <span>X</span>
                          </button>
                          <button 
                            className="share-option facebook" 
                            onClick={() => {
                              shareToFacebook(idea.name, idea.executiveSummary);
                              setActiveShareDropdown(null);
                            }}
                          >
                            <SocialIcons.facebook size={18} className="share-platform-icon" />
                            <span>Facebook</span>
                          </button>
                          <button 
                            className="share-option instagram" 
                            onClick={() => {
                              shareToInstagram(idea.name, idea.executiveSummary);
                              setActiveShareDropdown(null);
                            }}
                          >
                            <SocialIcons.instagram size={18} className="share-platform-icon" />
                            <span>Instagram</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Dynamic Animation Overlay */}
      {showAnimationOverlay && (
        <div className="animation-overlay">
          <div className="animation-content">
            <div className="animation-wrapper">
              {currentAnimation && (
                <div className="blueprint-animation">
                  {currentAnimation.includes('blueprint-unfold') && (
                    <div className="blueprint-unfold-animation">📋</div>
                  )}
                  {currentAnimation.includes('tsm-trophy') && (
                    <div className="trophy-spin-animation">🏆</div>
                  )}
                  {currentAnimation.includes('rocket-launch') && (
                    <div className="rocket-launch-animation">🚀</div>
                  )}
                </div>
              )}
            </div>
            <div className="animation-text">
              <h3>Creating Your Blueprint</h3>
              <p>AI is crafting your perfect business strategy...</p>
              <div className="loading-dots">
                <span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Achievement Modal */}
      <AchievementModal
        show={showAchievement}
        achievement={currentAchievement}
        onClose={() => setShowAchievement(false)}
      />

      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="modal-overlay" onClick={() => setShowConsultationModal(false)}>
          <div className="modal-content consultation-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowConsultationModal(false)}>×</button>
            
            <div className="modal-header">
              <h2>Get Your Free Consultation</h2>
              <p>Ready to make this happen? Let's connect and build your future.</p>
            </div>
            
            <form className="lead-form" onSubmit={(e) => {
              e.preventDefault();
              submitLeadForm();
            }}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({...leadForm, name: e.target.value})}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({...leadForm, phone: e.target.value})}
                  placeholder="+234 800 000 0000"
                  required
                />
              </div>
              
              <div className="form-blueprint-info">
                <p className="blueprint-selected">
                  Blueprint: <strong>{selectedBlueprint?.name}</strong>
                </p>
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowConsultationModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Get Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </DragDropContext>
  );
};

export default IdeaBuilder;