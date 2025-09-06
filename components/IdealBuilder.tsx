import React, { useState, useEffect } from 'react';
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
  const [draggedComponent, setDraggedComponent] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [activeShareDropdown, setActiveShareDropdown] = useState<number | null>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveShareDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDragStart = (e: React.DragEvent, componentId: string) => {
    setDraggedComponent(componentId);
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('componentId', componentId);
  };

  const handleDragEnd = () => {
    setDraggedComponent(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const componentId = e.dataTransfer.getData('componentId');
    const component = gameConfig.components.find(c => c.id === componentId);
    
    if (component) {
      addComponent(component);
    }
  };

  const createRocketAnimation = () => {
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
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Add visual feedback to stats
    const statElements = document.querySelectorAll('.stat-value');
    statElements.forEach(el => el.classList.add('updating'));
    
    // Show AI-powered generation steps for better UX
    const steps = [
      'Analyzing components...',
      'Connecting to AI brain...',
      'Researching Nigerian market...',
      'AI generating creative ideas...',
      'Calculating realistic valuation...',
      'Finalizing your startup!'
    ];
    
    try {
      // Show loading steps
      for (let i = 0; i < steps.length - 1; i++) {
        setGenerationStep(steps[i]);
        await new Promise(resolve => setTimeout(resolve, 600));
      }
      
      // Final step while AI generates
      setGenerationStep(steps[steps.length - 1]);
      
      // Call AI generation
      await generateStartupIdea();
      
      // Launch rocket animation after successful generation
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
      
      // Show error message to user
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
      setIsGenerating(false);
      setGenerationStep('');
      
      // Remove visual feedback
      setTimeout(() => {
        statElements.forEach(el => el.classList.remove('updating'));
      }, 500);
    }
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
      // Tech & Mobile
      'mobileapp': 'mobile',
      'edgecomputing': 'edgecomputing',
      'cloudbackup': 'cloud',
      
      // Payment & Finance
      'onlinepayment': 'payment',
      'cryptocurrency': 'cryptocurrency',
      'blockchain': 'blockchain',
      
      // Transport & Delivery
      'delivery': 'delivery',
      'rideshare': 'rideshare',
      'drones': 'drone',
      
      // Communication & Social
      'socialmedia': 'social',
      'videochat': 'videochat',
      'messaging': 'messaging',
      'translation': 'translation',
      
      // Shopping & Commerce  
      'onlineshopping': 'shopping',
      
      // Education & Learning
      'onlinelearning': 'learning',
      
      // Services & Booking
      'bookingapp': 'booking',
      
      // Food & Agriculture
      'foodorder': 'food',
      'farming': 'farming',
      
      // Healthcare
      'healthcare': 'healthcare',
      
      // Real Estate & Housing
      'realestate': 'realestate',
      
      // Entertainment & Media
      'entertainment': 'entertainment',
      'music': 'music',
      
      // Sports & Fitness
      'sports': 'sports',
      
      // Fashion & Style
      'fashion': 'fashion',
      
      // Security & Safety
      'security': 'security',
      'cybersecurity': 'cybersecurity',
      'biometrics': 'biometrics',
      
      // Utilities & Power
      'generator': 'generator',
      
      // Information & News
      'news': 'news',
      'weather': 'weather',
      
      // AI & Automation
      'ai': 'ai',
      'chatbot': 'chatbot',
      'voiceassistant': 'voiceassistant',
      'facerecognition': 'facerecognition',
      'dataanalytics': 'dataanalytics',
      'automation': 'automation',
      'computervision': 'computervision',
      'nlp': 'nlp',
      
      // IoT & Hardware
      'iot': 'iot',
      'robotics': 'robotics',
      '3dprinting': 'printing3d',
      
      // VR/AR
      'vr': 'vr',
      'ar': 'ar',
      
      // Development & API
      'api': 'api',
      'microservices': 'microservices',
      
      // Advanced Computing
      'quantum': 'quantum'
    };

    const IconComponent = TechIcons[iconMap[componentId] || 'default'];
    return <IconComponent size={32} className="tech-icon" />;
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-icon">
            <LottieIcon 
              src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" 
              width={60} 
              height={60}
              fallback={<span className="animate-bounce">🚀</span>}
            />
          </div>
          <h1 className="logo-text">AI TSM Builder Game</h1>
        </div>
        <p className="tagline">Build Your Next Billion Naira Tech Startup!</p>
        <p className="sub-tagline">
          <span>🇳🇬 From Abuja to the World • Turn Your Ideas Into Reality</span>
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
          <div className="stat-label">Ideas Generated</div>
          <div className="stat-value">
            <span className="stat-icon animate-pulse">
              <LottieIcon 
                src="https://assets3.lottiefiles.com/packages/lf20_qp1q7mct.json"
                width={32}
                height={32}
                fallback={<span>💡</span>}
              />
            </span>
            <span>{gameState.stats.ideasCount}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Valuation Potential</div>
          <div className="stat-value">
            <span className="stat-icon animate-bounce">
              <LottieIcon 
                src="https://assets9.lottiefiles.com/packages/lf20_06a6pf9i.json"
                width={32}
                height={32}
                fallback={<span>💰</span>}
              />
            </span>
            <div className="dual-currency">
              <span className="currency-main">₦{gameState.stats.totalNaira > 0 ? formatCurrency(gameState.stats.totalNaira) : '0'}</span>
              <span className="currency-alt">${gameState.stats.totalNaira > 0 ? formatCurrency(Math.round(gameState.stats.totalNaira / 1650)) : '0'}</span>
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Jollof Points</div>
          <div className="stat-value">
            <span className="stat-icon animate-wiggle">
              <LottieIcon 
                src="https://assets4.lottiefiles.com/packages/lf20_1pxqjqps.json"
                width={32}
                height={32}
                fallback={<span>🍚</span>}
              />
            </span>
            <span>{gameState.stats.jollofPoints}</span>
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
          <span>How to Play</span>
        </h2>
        <ol className="instructions-list">
          <li>
            <span className="instruction-number">1</span>
            <span>Drag tech components from the left panel</span>
          </li>
          <li>
            <span className="instruction-number">2</span>
            <span>Drop at least 2 components in the center</span>
          </li>
          <li>
            <span className="instruction-number">3</span>
            <span>Click Generate to create your startup!</span>
          </li>
          <li>
            <span className="instruction-number">4</span>
            <span>Share your best ideas with friends!</span>
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
          <div className="components-grid">
            {gameConfig.components.map(component => (
              <div
                key={component.id}
                className={`component-card ${draggedComponent === component.id ? 'dragging' : ''} ${
                  isTouchDevice && selectedComponents.includes(component.id) ? 'selected' : ''
                }`}
                draggable={!isTouchDevice}
                onDragStart={!isTouchDevice ? (e) => handleDragStart(e, component.id) : undefined}
                onDragEnd={!isTouchDevice ? handleDragEnd : undefined}
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
            ))}
          </div>
        </div>

        {/* Drop Zone */}
        <div className="drop-zone-container">
          <h3 className="panel-title">
            <span>🎯</span>
            <span>Build Your Idea</span>
            {isTouchDevice && <span className="mobile-instruction">(Tap components to add them)</span>}
          </h3>
          <div className="drop-zone-wrapper">
            <div 
              className={`drop-zone ${isDragOver ? 'drag-over' : ''} ${isTouchDevice ? 'touch-mode' : ''}`}
              onDragOver={!isTouchDevice ? handleDragOver : undefined}
              onDragLeave={!isTouchDevice ? handleDragLeave : undefined}
              onDrop={!isTouchDevice ? handleDrop : undefined}
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
            </div>
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
            <span>Your Startups</span>
            <span className="startup-count">({gameState.generatedIdeas.length})</span>
          </h3>
          <div className="results-scroll-container">
            {gameState.generatedIdeas.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">🎯</div>
                <div className="empty-state-text">No startups yet. Start building!</div>
              </div>
            ) : (
              gameState.generatedIdeas.map(idea => (
                <div key={idea.id} className="idea-card-compact">
                  <div className="idea-main-content">
                    <div className="idea-header-compact">
                      <div className="idea-icon">💡</div>
                      <div className="idea-title-section">
                        <div className="idea-name">{idea.name}</div>
                        <div className="idea-tagline">&ldquo;{idea.tagline}&rdquo;</div>
                      </div>
                    </div>
                    
                    <div className="idea-description-compact">{idea.description}</div>
                    
                    <div className="idea-stats-compact">
                      <div className="idea-stat-compact valuation">
                        <span className="stat-icon">💰</span>
                        <span className="stat-label">Valuation</span>
                        <span className="stat-value-compact">₦{formatCurrency(idea.valuation)}</span>
                      </div>
                      <div className="idea-stat-compact jollof">
                        <span className="stat-icon">🍚</span>
                        <span className="stat-label">Jollof Rating</span>
                        <span className="stat-value-compact">{idea.jollofRating}/10</span>
                      </div>
                      <div className="idea-stat-compact funding">
                        <span className="stat-icon">📈</span>
                        <span className="stat-label">Stage</span>
                        <span className="stat-value-compact">{idea.fundingStage}</span>
                      </div>
                      <div className="idea-stat-compact market">
                        <span className="stat-icon">🎯</span>
                        <span className="stat-label">Market Size</span>
                        <span className="stat-value-compact">{idea.marketSize}</span>
                      </div>
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
                              shareToWhatsApp(idea.name, idea.tagline);
                              setActiveShareDropdown(null);
                            }}
                          >
                            <SocialIcons.whatsapp size={18} className="share-platform-icon" />
                            <span>WhatsApp</span>
                          </button>
                          <button 
                            className="share-option x-twitter" 
                            onClick={() => {
                              shareToTwitter(idea.name, idea.tagline);
                              setActiveShareDropdown(null);
                            }}
                          >
                            <SocialIcons.x size={18} className="share-platform-icon" />
                            <span>X</span>
                          </button>
                          <button 
                            className="share-option facebook" 
                            onClick={() => {
                              shareToFacebook(idea.name, idea.tagline);
                              setActiveShareDropdown(null);
                            }}
                          >
                            <SocialIcons.facebook size={18} className="share-platform-icon" />
                            <span>Facebook</span>
                          </button>
                          <button 
                            className="share-option instagram" 
                            onClick={() => {
                              shareToInstagram(idea.name, idea.tagline);
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

      {/* Achievement Modal */}
      <AchievementModal
        show={showAchievement}
        achievement={currentAchievement}
        onClose={() => setShowAchievement(false)}
      />
    </div>
  );
};

export default IdeaBuilder;