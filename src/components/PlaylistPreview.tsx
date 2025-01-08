import React from 'react';
import { Music } from 'lucide-react';

type PlaylistPreviewProps = {
  title: string;
  tracks: string[];
};

export const PlaylistPreview = ({ title, tracks }: PlaylistPreviewProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Music className="w-5 h-5 mr-2 text-purple-500" />
        {title}
      </h3>
      <ul className="space-y-3">
        {tracks.map((track, index) => (
          <li 
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-sm">
              {index + 1}
            </span>
            <span className="text-gray-700">{track}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};