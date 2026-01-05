
import React from 'react';
import type { Page } from '../types';
import { FolderIcon, DumbbellIcon, CameraIcon, BotIcon, ProgressIcon } from './Icons';

interface BottomNavBarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavItem: React.FC<{ icon: React.ReactNode; onClick: () => void; animationClasses: string }> = ({ icon, onClick, animationClasses }) => (
  <button onClick={onClick} className="p-2 group transform transition duration-300 active:scale-95">
    <div className={animationClasses}>
      {icon}
    </div>
  </button>
);

const BottomNavBar: React.FC<BottomNavBarProps> = ({ navigateTo }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto p-2">
      <div className="bg-white/5 backdrop-blur-xl rounded-full flex justify-around items-center h-16 border-t border-white/20">
        <NavItem
          icon={<FolderIcon className="w-7 h-7 text-white group-hover:text-yellow-400 transition-colors" />}
          onClick={() => {}}
          animationClasses="group-hover:-translate-y-1 transition-transform"
        />
        <NavItem
          icon={<DumbbellIcon className="w-7 h-7 text-white group-hover:text-yellow-400 transition-colors" />}
          onClick={() => {}}
          animationClasses="group-hover:rotate-45 transition-transform"
        />
        
        <button 
          onClick={() => navigateTo('home')} 
          className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 flex items-center justify-center -mt-8 shadow-lg shadow-amber-500/40 transition duration-300 active:scale-95 hover:shadow-yellow-400/60"
        >
          <CameraIcon className="w-8 h-8 text-white" />
        </button>
        
        <NavItem
          icon={<BotIcon className="w-7 h-7 text-white group-hover:text-yellow-400 transition-colors" />}
          onClick={() => {}}
          animationClasses="group-hover:animate-pulse"
        />
        <NavItem
          icon={<ProgressIcon className="w-7 h-7 text-white group-hover:text-yellow-400 transition-colors" />}
          onClick={() => navigateTo('profile')}
          animationClasses="group-hover:[&>path:last-child]:stroke-dashoffset-0"
        />
      </div>
    </nav>
  );
};

export default BottomNavBar;
