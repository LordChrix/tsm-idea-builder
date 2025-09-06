import { useState, useEffect, useCallback } from 'react';
import { GameState, Component, Idea, gameConfig } from '../components/GameConfig';

const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
    droppedComponents: [],
    generatedIdeas: [],
    stats: {
      ideasCount: 0,
      totalNaira: 0,
      jollofPoints: 0
    },
    soundEnabled: true
  });

  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Set current URL on client side
    setCurrentUrl(window.location.href);
    
    // Load game state from localStorage
    const saved = localStorage.getItem('tsmGameState');
    if (saved) {
      const savedStats = JSON.parse(saved);
      setGameState(prev => ({ ...prev, stats: savedStats }));
    }
  }, []);

  const saveGameState = useCallback(() => {
    localStorage.setItem('tsmGameState', JSON.stringify(gameState.stats));
  }, [gameState.stats]);

  const playSound = useCallback((type: 'drop' | 'generate' | 'achievement') => {
    if (!gameState.soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      let frequency: number, duration: number;
      
      switch(type) {
        case 'drop':
          frequency = 800;
          duration = 0.1;
          break;
        case 'generate':
          frequency = 600;
          duration = 0.3;
          break;
        case 'achievement':
          frequency = 1000;
          duration = 0.5;
          break;
        default:
          return;
      }
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      console.log('Audio not supported');
    }
  }, [gameState.soundEnabled]);

  const createConfetti = useCallback(() => {
    // Remove any existing confetti first
    const existingConfetti = document.querySelectorAll('.confetti-container');
    existingConfetti.forEach(container => {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    });

    const colors = ['#00b7ff', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f7d794'];
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    confettiContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1000;
    `;
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        top: -10px;
        border-radius: 2px;
        animation: confetti-fall ${1.5 + Math.random() * 1.5}s linear forwards;
      `;
      confettiContainer.appendChild(confetti);
    }

    // Clean up after animation completes
    setTimeout(() => {
      if (confettiContainer && confettiContainer.parentNode) {
        confettiContainer.parentNode.removeChild(confettiContainer);
      }
    }, 3000);
  }, []);

  const addComponent = useCallback((component: Component) => {
    if (gameState.droppedComponents.find(c => c.id === component.id)) {
      // Show duplicate notification
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
        <div class="toast-content toast-warning">
          <span class="toast-icon">⚠️</span>
          <span class="toast-message">You already have ${component.label} in your idea!</span>
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
      }, 2000);
      return;
    }
    
    setGameState(prev => ({
      ...prev,
      droppedComponents: [...prev.droppedComponents, component]
    }));
    
    playSound('drop');
    if (gameState.droppedComponents.length < 3) {
      createConfetti();
    }
    
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
    
    // Show success notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <div class="toast-content toast-success">
        <span class="toast-icon">✅</span>
        <span class="toast-message">${component.label} added to your startup!</span>
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
    }, 2500);
  }, [gameState.droppedComponents, playSound, createConfetti]);

  const removeComponent = useCallback((componentId: string) => {
    setGameState(prev => ({
      ...prev,
      droppedComponents: prev.droppedComponents.filter(c => c.id !== componentId)
    }));
  }, []);

  const clearComponents = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      droppedComponents: []
    }));
  }, []);

  const resetEverything = useCallback(() => {
    setGameState({
      droppedComponents: [],
      generatedIdeas: [],
      stats: {
        ideasCount: 0,
        totalNaira: 0,
        jollofPoints: 0
      },
      soundEnabled: true
    });
    
    // Clear localStorage
    localStorage.removeItem('tsmGameState');
    
    // Play success sound
    playSound('achievement');
    
    // Show confirmation
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <div class="toast-content toast-success">
        <span class="toast-icon">🎯</span>
        <span class="toast-message">Fresh start! All data cleared. Ready to build new startups!</span>
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
  }, [playSound]);

  const getRealisticValuation = useCallback((componentCount: number): number => {
    const baseRanges = [
      { min: 50000000, max: 200000000 },    // ₦50M - ₦200M (Pre-seed)
      { min: 200000000, max: 800000000 },   // ₦200M - ₦800M (Seed)
      { min: 800000000, max: 3000000000 },  // ₦800M - ₦3B (Series A)
      { min: 3000000000, max: 15000000000 } // ₦3B - ₦15B (Series B+)
    ];
    
    const range = baseRanges[Math.min(componentCount - 1, baseRanges.length - 1)];
    return Math.floor(Math.random() * (range.max - range.min)) + range.min;
  }, []);

  const getFundingStage = useCallback((): string => {
    const stages = ['Pre-seed', 'Seed Round', 'Series A', 'Series B'];
    return stages[Math.floor(Math.random() * stages.length)];
  }, []);

  const getMarketSize = useCallback((): string => {
    const sizes = [
      '220M Nigerians nationwide', 
      '25M Lagos residents', 
      '180M mobile phone users', 
      '70M young people (18-35)', 
      '40M small business owners', 
      '20M university students',
      '50M farmers across Nigeria',
      '15M civil servants',
      '30M traders in markets'
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }, []);

  const generateWithAI = useCallback(async (): Promise<Idea> => {
    const components = gameState.droppedComponents;
    
    try {
      const response = await fetch('/api/generate-idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          components: components.map(c => c.label)
        }),
      });

      if (!response.ok) {
        throw new Error('AI API request failed');
      }

      const aiIdea = await response.json();
      
      if (aiIdea.error) {
        throw new Error(aiIdea.error);
      }

      return {
        id: Date.now(),
        name: aiIdea.name,
        executiveSummary: aiIdea.executiveSummary,
        marketOpportunity: aiIdea.marketOpportunity,
        revenueModel: aiIdea.revenueModel,
        keyFeatures: aiIdea.keyFeatures,
        nextSteps: aiIdea.nextSteps,
        callToAction: aiIdea.callToAction,
        components: components.map(c => c.label)
      };

    } catch (error) {
      console.error('AI Generation failed, using fallback:', error);
      
      // Fallback to template-based generation
      const prefix = gameConfig.prefixes[Math.floor(Math.random() * gameConfig.prefixes.length)];
      const suffix = gameConfig.suffixes[Math.floor(Math.random() * gameConfig.suffixes.length)];
      
      const fallbackDescriptions = [
        `Revolutionary ${components[0].label} platform for Nigerian users. Solves real problems with innovative technology and affordable ₦5000/month pricing.`,
        `Smart ${components.map(c => c.label).join(' + ')} solution for Nigeria. Makes life easier with local insights. Starting at ₦10000.`,
        `Nigerian ${components[0].label} platform addressing local needs. Bridging technology gaps for 25M Lagos residents. ₦3000 monthly subscription.`
      ];
      
      return {
        id: Date.now(),
        name: `${prefix}${suffix}`,
        executiveSummary: fallbackDescriptions[Math.floor(Math.random() * fallbackDescriptions.length)],
        marketOpportunity: "Growing market opportunity with significant demand for innovative solutions",
        revenueModel: "Subscription-based model with premium features and enterprise tiers",
        keyFeatures: `Integrated ${components.map(c => c.label).join(', ')} solution with seamless user experience`,
        nextSteps: "1. Develop MVP 2. Test with users 3. Secure funding 4. Scale operations",
        callToAction: "Ready to transform the market? Let's build something amazing together!",
        components: components.map(c => c.label)
      };
    }
  }, [gameState.droppedComponents, getRealisticValuation, getFundingStage, getMarketSize]);

  const generateStartupIdea = useCallback(async () => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        // Generate idea using AI
        const idea = await generateWithAI();
        
        setGameState(prev => ({
          ...prev,
          generatedIdeas: [idea, ...prev.generatedIdeas],
          stats: {
            ...prev.stats,
            ideasCount: prev.stats.ideasCount + 1,
            totalNaira: prev.stats.totalNaira + Math.floor(Math.random() * 1000000000) + 50000000,
            jollofPoints: prev.stats.jollofPoints + Math.floor(Math.random() * 5) + 6
          }
        }));
        
        playSound('generate');
        createConfetti();
        resolve();
        
      } catch (error) {
        console.error('Failed to generate startup idea:', error);
        reject(error);
      }
    });
  }, [generateWithAI, playSound, createConfetti]);

  const toggleSound = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      soundEnabled: !prev.soundEnabled
    }));
    
    if (!gameState.soundEnabled) {
      playSound('drop'); // Test sound
    }
  }, [gameState.soundEnabled, playSound]);

  const shareToWhatsApp = useCallback((name: string, tagline: string) => {
    const text = `Just created ${name} on TSM Idea Builder! ${tagline} 🚀🇳🇬\n\nBuild your own Nigerian tech startup idea: ${currentUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }, [currentUrl]);

  const shareToTwitter = useCallback((name: string, tagline: string) => {
    const text = `Just created ${name} on TSM Idea Builder! ${tagline} 🚀🇳🇬\n\n#NigerianTech #StartupIdeas #TechInnovation\n\nBuild your own: ${currentUrl}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }, [currentUrl]);

  const shareToFacebook = useCallback((name: string, tagline: string) => {
    const text = `Just created ${name} on TSM Idea Builder! ${tagline} 🚀🇳🇬\n\nDiscover Nigerian tech innovation: ${currentUrl}`;
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }, [currentUrl]);

  const shareToInstagram = useCallback((name: string, tagline: string) => {
    const text = `Just created ${name} on TSM Idea Builder! ${tagline} 🚀🇳🇬\n\n#NigerianTech #StartupIdeas #TechInnovation\n\nBuild your own: ${currentUrl}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        // Create a nice toast notification instead of alert
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
          <div class="toast-content">
            <span class="toast-icon">✅</span>
            <span class="toast-message">Text copied! Paste it in your Instagram post or story.</span>
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
      }).catch(() => {
        prompt('Copy this text for Instagram:', text);
      });
    } else {
      prompt('Copy this text for Instagram:', text);
    }
  }, [currentUrl]);

  // Save game state whenever stats change
  useEffect(() => {
    saveGameState();
  }, [saveGameState]);

  return {
    gameState,
    addComponent,
    removeComponent,
    clearComponents,
    generateStartupIdea,
    toggleSound,
    createConfetti,
    playSound,
    shareToWhatsApp,
    shareToTwitter,
    shareToFacebook,
    shareToInstagram,
    resetEverything
  };
};

export default useGameLogic;