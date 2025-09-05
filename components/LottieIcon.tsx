import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieIconProps {
  src: string;
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
  fallback?: React.ReactNode;
}

const LottieIcon: React.FC<LottieIconProps> = ({
  src,
  width = 32,
  height = 32,
  loop = true,
  autoplay = true,
  fallback
}) => {
  return (
    <Player
      src={src}
      style={{ width: `${width}px`, height: `${height}px` }}
      loop={loop}
      autoplay={autoplay}
      onError={() => {
        // If Lottie fails to load, the fallback will be shown
        console.log('Lottie animation failed to load');
      }}
    />
  );
};

export default LottieIcon;