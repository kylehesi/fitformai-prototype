
import React, { useState } from 'react';
import { ProfileIcon, SearchIcon, MicIcon, RotateIcon, AnatomyFront, AnatomyBack } from '../components/Icons';
import type { Page } from '../types';

interface HomeScreenProps {
  navigateTo: (page: Page) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigateTo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-4 flex flex-col items-center min-h-screen space-y-8">
      {/* Header */}
      <header className="w-full flex justify-between items-center pt-2">
        <div className="w-10"></div>
        <h1 className="text-3xl font-bold tracking-[0.2em] bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 5px #f59e0b)' }}>
          FitFormAI
        </h1>
        <button onClick={() => navigateTo('profile')} className="text-white hover:text-yellow-400 transition-colors duration-300">
          <ProfileIcon className="w-8 h-8" />
        </button>
      </header>

      {/* Search Bar */}
      <div className="w-full max-w-md relative">
        <div className="absolute inset-0 bg-white/10 rounded-full border border-white/30 backdrop-blur-lg"></div>
        <div className="relative flex items-center px-4 py-3">
          <SearchIcon className="w-5 h-5 text-white/70" />
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent text-white placeholder-white/50 w-full focus:outline-none ml-3"
          />
          <MicIcon className="w-5 h-5 text-white/70 ml-auto" />
        </div>
      </div>

      {/* Main Anatomy Viewer */}
      <div className="w-full max-w-md flex-grow flex flex-col items-center justify-center">
        <div className="w-full aspect-[3/4] p-4 border-2 border-white/30 rounded-[32px] bg-white/5 backdrop-blur-sm relative perspective-1000">
          
          <div 
            className={`w-full h-full relative transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          >
            <div className="absolute w-full h-full backface-hidden flex items-center justify-center">
              <AnatomyFront className="w-auto h-full object-contain" />
            </div>
            <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center">
              <AnatomyBack className="w-auto h-full object-contain" />
            </div>
          </div>

          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm">
            {isFlipped ? 'Back View' : 'Front View'}
          </div>
          <button 
            onClick={() => setIsFlipped(!isFlipped)} 
            className="absolute top-4 right-4 bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg hover:shadow-yellow-400/50 transition-shadow duration-300 active:scale-95"
          >
            <RotateIcon className="w-6 h-6 text-white" />
          </button>
          
        </div>
        <p className="text-white/60 mt-4 text-sm">Click on body parts to learn more.</p>
      </div>
    </div>
  );
};

export default HomeScreen;
