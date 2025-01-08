import React from 'react';
import { Share2 } from 'lucide-react';

type ShareButtonProps = {
  moodName: string;
};

export const ShareButton = ({ moodName }: ShareButtonProps) => {
  const handleShare = () => {
    alert(`Simulation: Partage de votre humeur "${moodName}" et de votre playlist sur les réseaux sociaux`);
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-600 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-colors"
    >
      <Share2 className="w-5 h-5" />
      <span>Partager</span>
    </button>
  );
};