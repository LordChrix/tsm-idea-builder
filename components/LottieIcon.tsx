import React, { useEffect, useState } from 'react';

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
  const [Player, setPlayer] = useState<any>(null);

  useEffect(() => {
    // Import Lottie Player only on client side
    import('@lottiefiles/react-lottie-player').then((module) => {
      setPlayer(() => module.Player);
    });
  }, []);

  if (!Player) {
    // Show fallback while loading or if Lottie fails
    return fallback || <div style={{ width: `${width}px`, height: `${height}px` }} />;
  }

  return (
    <Player
      src={src}
      style={{ width: `${width}px`, height: `${height}px` }}
      loop={loop}
      autoplay={autoplay}
    />
  );
};

export default LottieIcon;