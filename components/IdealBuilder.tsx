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
    await generateStartupIdea();
    setIsGenerating(false);
    
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
              src="https://lottie.host/87f6e3a8-a28b-4e4d-8b7c-9d6f2e3a1b4c/GjKoLwXtYp.json" 
              width={60} 
              height={60}
              fallback={<span>🚀</span>}
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
                src="https://lottie.host/b5c4d6e8-f9a1-2b3c-4d5e-6f7a8b9c0d1e/LmNoPqRsT.json"
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
                src="https://lottie.host/c7d8e9f0-a1b2-c3d4-e5f6-7890abcdef12/UvWxYzAb.json"
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
                src="https://lottie.host/f2g3h4i5-j6k7-l8m9-n0o1-p2q3r4s5t6u7/CdEfGh.json"
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
                src="https://lottie.host/h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3/IjKlMn.json"
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
              src="https://lottie.host/n4o5p6q7-r8s9-t0u1-v2w3-x4y5z6a7b8c9/OpQrSt.json"
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
              className="btn btn-primary" 
              disabled={gameState.droppedComponents.length < 2 || isGenerating}
              onClick={handleGenerate}
            >
              <span>{isGenerating ? 'Generating...' : 'Generate Startup'}</span>
              {isGenerating ? (
                <span className="loading"></span>
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
                  <div className="share-buttons">
                    <button 
                      className="share-button share-whatsapp" 
                      onClick={() => shareToWhatsApp(idea.name, idea.tagline)}
                    >
                      WhatsApp
                    </button>
                    <button 
                      className="share-button share-twitter" 
                      onClick={() => shareToTwitter(idea.name, idea.tagline)}
                    >
                      Twitter
                    </button>
                    <button 
                      className="share-button share-facebook" 
                      onClick={() => shareToFacebook(idea.name, idea.tagline)}
                    >
                      Facebook
                    </button>
                    <button 
                      className="share-button share-instagram" 
                      onClick={() => shareToInstagram(idea.name, idea.tagline)}
                    >
                      Instagram
                    </button>
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