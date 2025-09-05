import React, { useState } from 'react';
import { gameConfig } from './GameConfig';
import useGameLogic from '../hooks/useGameLogic';
import LottieIcon from './LottieIcon';

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
    shareToInstagram
  } = useGameLogic();

  const [isGenerating, setIsGenerating] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<{title: string, message: string} | null>(null);
  const [draggedComponent, setDraggedComponent] = useState<string | null>(null);

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
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const componentId = e.dataTransfer.getData('componentId');
    const component = gameConfig.components.find(c => c.id === componentId);
    
    if (component) {
      addComponent(component);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Add visual feedback to stats
    const statElements = document.querySelectorAll('.stat-value');
    statElements.forEach(el => el.classList.add('updating'));
    
    await generateStartupIdea();
    setIsGenerating(false);
    
    // Remove visual feedback
    setTimeout(() => {
      statElements.forEach(el => el.classList.remove('updating'));
    }, 500);
    
    // Check for achievements
    const achievement = gameConfig.achievements.find(a => a.count === gameState.stats.ideasCount + 1);
    if (achievement) {
      setCurrentAchievement(achievement);
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 3000);
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
          <h1 className="logo-text">TSM Idea Builder</h1>
        </div>
        <p className="tagline">Build Your Next Billion Naira Tech Startup!</p>
        <p className="sub-tagline">
          <span>🇳🇬 From Lagos to the World</span>
          <button className="sound-toggle" onClick={toggleSound} title="Toggle Sound">
            <span>{gameState.soundEnabled ? '🔊' : '🔇'}</span>
          </button>
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
          <div className="stat-label">Naira Potential</div>
          <div className="stat-value">
            <span className="stat-icon animate-bounce">
              <LottieIcon 
                src="https://assets9.lottiefiles.com/packages/lf20_06a6pf9i.json"
                width={32}
                height={32}
                fallback={<span>₦</span>}
              />
            </span>
            <span>₦{gameState.stats.totalNaira > 0 ? formatCurrency(gameState.stats.totalNaira) : '0'}</span>
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
                fallback={<span>🍛</span>}
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
                className={`component-card ${draggedComponent === component.id ? 'dragging' : ''}`}
                draggable
                onDragStart={(e) => handleDragStart(e, component.id)}
                onDragEnd={handleDragEnd}
                title={component.description}
              >
                <div className="component-category">{component.category}</div>
                <div className="component-emoji">{component.emoji}</div>
                <div className="component-label">{component.label}</div>
                <div className="component-description">{component.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Drop Zone */}
        <div className="drop-zone-container">
          <h3 className="panel-title">
            <span>🎯</span>
            <span>Build Your Idea</span>
          </h3>
          <div 
            className="drop-zone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {gameState.droppedComponents.length === 0 ? (
              <div className="drop-zone-empty">
                <div className="drop-zone-empty-icon">📦</div>
                <div className="drop-zone-empty-text">Drag components here to start building!</div>
              </div>
            ) : (
              <div className="dropped-components">
                {gameState.droppedComponents.map(component => (
                  <div key={component.id} className="dropped-component">
                    <span className="dropped-component-emoji">{component.emoji}</span>
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
          <div className="action-buttons">
            <button 
              className={`btn btn-primary ${isGenerating ? 'btn-generating' : ''}`}
              disabled={gameState.droppedComponents.length < 2 || isGenerating}
              onClick={handleGenerate}
            >
              <span>{isGenerating ? 'Creating Your Startup...' : 'Generate Startup Idea'}</span>
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
          </h3>
          <div>
            {gameState.generatedIdeas.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">🎯</div>
                <div className="empty-state-text">No startups yet. Start building!</div>
              </div>
            ) : (
              gameState.generatedIdeas.slice(0, 5).map(idea => (
                <div key={idea.id} className="idea-card">
                  <div className="idea-header">
                    <div className="idea-icon">💡</div>
                    <div className="idea-name">{idea.name}</div>
                  </div>
                  <div className="idea-tagline">&ldquo;{idea.tagline}&rdquo;</div>
                  <div className="idea-description">{idea.description}</div>
                  <div className="idea-stats">
                    <div className="idea-stat">
                      <span className="idea-stat-icon">💰</span>
                      <span>₦{formatCurrency(idea.valuation)}</span>
                    </div>
                    <div className="idea-stat">
                      <span className="idea-stat-icon">🍛</span>
                      <span>{idea.jollofRating}/10 Jollof</span>
                    </div>
                    <div className="idea-stat">
                      <span className="idea-stat-icon">📈</span>
                      <span>{idea.fundingStage}</span>
                    </div>
                    <div className="idea-stat">
                      <span className="idea-stat-icon">🎯</span>
                      <span>{idea.marketSize}</span>
                    </div>
                  </div>
                  <div className="share-section">
                    <div className="share-title">💫 Share Your Startup Idea:</div>
                    <div className="share-buttons">
                      <button 
                        className="share-button share-whatsapp" 
                        onClick={() => shareToWhatsApp(idea.name, idea.tagline)}
                        title="Share on WhatsApp with friends and family"
                      >
                        <span className="share-icon">📱</span>
                        <span className="share-text">
                          <span className="share-platform">WhatsApp</span>
                          <span className="share-description">Friends & Family</span>
                        </span>
                      </button>
                      <button 
                        className="share-button share-twitter" 
                        onClick={() => shareToTwitter(idea.name, idea.tagline)}
                        title="Tweet your startup idea to the world"
                      >
                        <span className="share-icon">🐦</span>
                        <span className="share-text">
                          <span className="share-platform">Twitter</span>
                          <span className="share-description">Tech Community</span>
                        </span>
                      </button>
                      <button 
                        className="share-button share-facebook" 
                        onClick={() => shareToFacebook(idea.name, idea.tagline)}
                        title="Post on Facebook timeline"
                      >
                        <span className="share-icon">👥</span>
                        <span className="share-text">
                          <span className="share-platform">Facebook</span>
                          <span className="share-description">Social Network</span>
                        </span>
                      </button>
                      <button 
                        className="share-button share-instagram" 
                        onClick={() => shareToInstagram(idea.name, idea.tagline)}
                        title="Copy text for Instagram post or story"
                      >
                        <span className="share-icon">📸</span>
                        <span className="share-text">
                          <span className="share-platform">Instagram</span>
                          <span className="share-description">Copy Text</span>
                        </span>
                      </button>
                    </div>
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