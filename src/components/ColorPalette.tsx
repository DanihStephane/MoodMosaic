import React from 'react';

type ColorPaletteProps = {
  colors: string[];
};

export const ColorPalette = ({ colors }: ColorPaletteProps) => {
  return (
    <div className="flex space-x-4 justify-center my-8">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-16 h-16 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};