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
    if (gameState.droppedComponents.find(c => c.id === component.id)) return;
    
    setGameState(prev => ({
      ...prev,
      droppedComponents: [...prev.droppedComponents, component]
    }));
    
    playSound('drop');
    if (gameState.droppedComponents.length < 3) {
      createConfetti();
    }
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

  const createIdea = useCallback((): Idea => {
    const components = gameState.droppedComponents;
    const prefix = gameConfig.prefixes[Math.floor(Math.random() * gameConfig.prefixes.length)];
    const suffix = gameConfig.suffixes[Math.floor(Math.random() * gameConfig.suffixes.length)];
    
    const descriptions = [
      `Stop paying ₦150 bank charges! This ${components[0].label} + ${components[1] ? components[1].label : components[0].label} platform lets you send money for just ₦50. Perfect for small business owners who transfer money daily.`,
      `Tired of Lagos traffic? Our ${components.map(c => c.label).join(' + ')} app helps delivery riders find the fastest routes, saving ₦50,000 monthly on fuel. No more getting stuck in go-slow!`,
      `Farmers in villages can now sell directly to Lagos buyers! This ${components[0].label} platform helps farmers get 40% more money by cutting out middlemen. Your yam goes straight from farm to customer.`,
      `Students, stop buying expensive textbooks! Our ${components.map(c => c.label).join(' + ')} platform gives you all course materials for ₦15,000/year instead of ₦80,000. Study anywhere, anytime.`,
      `Small shop owners, manage your business easier! This ${components[0].label} helps you track sales, customers, and inventory in English, Igbo, Yoruba, or Hausa for just ₦5,000/month.`,
      `See a doctor from your home! This ${components[0].label} app connects you with real doctors via video chat. Save 60% on hospital visits and get help for common sickness immediately.`,
      `House hunters, find your perfect home! This ${components.map(c => c.label).join(' + ')} app shows available rooms, flats, and houses in your area with real photos and prices. No fake agents!`,
      `Food lovers, get your favorite meals delivered hot! Our ${components[0].label} platform connects you with local restaurants and fast delivery riders. Jollof rice in 30 minutes!`
    ];
    
    return {
      id: Date.now(),
      name: `${prefix}${suffix}`,
      tagline: gameConfig.taglines[Math.floor(Math.random() * gameConfig.taglines.length)],
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      components: components.map(c => c.label),
      valuation: getRealisticValuation(components.length),
      jollofRating: Math.floor(Math.random() * 5) + 6,
      fundingStage: getFundingStage(),
      marketSize: getMarketSize()
    };
  }, [gameState.droppedComponents, getRealisticValuation, getFundingStage, getMarketSize]);

  const generateStartupIdea = useCallback(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const idea = createIdea();
        setGameState(prev => ({
          ...prev,
          generatedIdeas: [idea, ...prev.generatedIdeas],
          stats: {
            ...prev.stats,
            ideasCount: prev.stats.ideasCount + 1,
            totalNaira: prev.stats.totalNaira + idea.valuation,
            jollofPoints: prev.stats.jollofPoints + idea.jollofRating
          }
        }));
        
        playSound('generate');
        createConfetti();
        resolve();
      }, 1500);
    });
  }, [createIdea, playSound, createConfetti]);

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
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied to clipboard! Paste it in your Instagram post or story.');
    }).catch(() => {
      prompt('Copy this text for Instagram:', text);
    });
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
    shareToInstagram
  };
};

export default useGameLogic;