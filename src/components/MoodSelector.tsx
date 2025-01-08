import React from 'react';
import { moods } from '../data/moods';

type MoodSelectorProps = {
  onMoodSelect: (moodId: string) => void;
};

export const MoodSelector = ({ onMoodSelect }: MoodSelectorProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
      {moods.map((mood) => (
        <button
          key={mood.id}
          onClick={() => onMoodSelect(mood.id)}
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          <span className="text-4xl mb-2">{mood.emoji}</span>
          <span className="text-lg font-medium text-gray-700">{mood.name}</span>
        </button>
      ))}
    </div>
  );
};