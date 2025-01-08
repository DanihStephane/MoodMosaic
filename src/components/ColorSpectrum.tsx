import React from 'react';

type ColorSpectrumProps = {
  colors: string[];
};

export const ColorSpectrum = ({ colors }: ColorSpectrumProps) => {
  return (
    <div className="relative h-32 rounded-xl overflow-hidden shadow-lg mb-8">
      <div className="absolute inset-0 flex">
        {colors.map((color, index) => (
          <div
            key={index}
            className="flex-1 animate-pulse"
            style={{ 
              backgroundColor: color,
              animation: `pulse ${2 + index}s infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
};