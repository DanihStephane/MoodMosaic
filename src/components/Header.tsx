import React from 'react';
import { Music, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="w-full py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white">MoodMosaic</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              <User className="w-5 h-5 text-white" />
              <span className="text-white">Mon Profil</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};