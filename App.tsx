
import React, { useState } from 'react';
import type { Page } from './types';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNavBar from './components/BottomNavBar';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased overflow-hidden">
      <main className="pb-24">
        {currentPage === 'home' && <HomeScreen navigateTo={navigateTo} />}
        {currentPage === 'profile' && <ProfileScreen navigateTo={navigateTo} />}
      </main>
      <BottomNavBar currentPage={currentPage} navigateTo={navigateTo} />
    </div>
  );
};

export default App;
