import React, { useState } from 'react';
import { Header } from './components/Header';
import { MoodSelector } from './components/MoodSelector';
import { ColorPalette } from './components/ColorPalette';
import { ColorSpectrum } from './components/ColorSpectrum';
import { PlaylistPreview } from './components/PlaylistPreview';
import { ShareButton } from './components/ShareButton';
import { moods } from './data/moods';
import { playlists } from './data/playlists';

function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  const selectedMoodData = selectedMood 
    ? moods.find(mood => mood.id === selectedMood)
    : null;

  const selectedPlaylist = selectedMood 
    ? playlists[selectedMood as keyof typeof playlists]
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {!selectedMood ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Des musiques et des couleurs pour vos émotions
              </h2>
              <p className="text-xl text-gray-600">
                Sélectionnez votre humeur et découvrez une expérience unique
              </p>
            </div>
            <MoodSelector onMoodSelect={setSelectedMood} />
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">{selectedMoodData?.emoji}</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedMoodData?.name}
              </h3>
              <p className="text-gray-600">
                Laissez-vous porter par les couleurs et la musique de votre humeur
              </p>
            </div>
            
            {selectedMoodData && (
              <>
                <ColorSpectrum colors={selectedMoodData.colors} />
                <ColorPalette colors={selectedMoodData.colors} />
                
                {selectedPlaylist && (
                  <PlaylistPreview 
                    title={selectedPlaylist.title} 
                    tracks={selectedPlaylist.tracks} 
                  />
                )}
                
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => setSelectedMood(null)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Choisir une autre humeur
                  </button>
                  
                  {selectedMoodData && (
                    <ShareButton moodName={selectedMoodData.name} />
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;