
import React from 'react';
import {
  ChevronLeftIcon, FlameIcon, ClockIcon, DumbbellIcon, BrainIcon, SparklesIcon,
  GoalsIcon, WorkoutPlanIcon, AIAnalysesIcon, SettingsIcon, ProgressGraphsIcon,
  NotificationsIcon, LogOutIcon
} from '../components/Icons';
import type { Page } from '../types';

interface ProfileScreenProps {
  navigateTo: (page: Page) => void;
}

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; }> = ({ icon, value, label }) => (
  <div className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl flex flex-col items-start space-y-2">
    {icon}
    <span className="text-2xl font-bold">{value}</span>
    <span className="text-sm text-white/70">{label}</span>
  </div>
);

const MenuItem: React.FC<{ icon: React.ReactNode; label: string; }> = ({ icon, label }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-3 flex items-center space-x-4 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
    {icon}
    <span className="text-base">{label}</span>
    <svg className="w-5 h-5 text-white/50 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
  </div>
);

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigateTo }) => {
  const progress = 75; // Example progress
  const circumference = 2 * Math.PI * 45;

  const activityData = [45, 60, 80, 50, 75, 90, 65];

  return (
    <div className="p-4 flex flex-col items-center min-h-screen space-y-6">
      {/* Header */}
      <header className="w-full flex justify-between items-center pt-2">
        <button onClick={() => navigateTo('home')} className="p-2 -ml-2">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="w-10"></div>
      </header>
      
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-3">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#fff" strokeOpacity="0.1" strokeWidth="10" fill="transparent" />
            <circle
              cx="50" cy="50" r="45"
              stroke="url(#progressGradient)"
              strokeWidth="10"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (progress / 100) * circumference}
              className="transition-all duration-500 ease-out"
              transform="rotate(-90 50 50)"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-full text-black text-3xl font-bold">
            J
          </div>
          <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full border-2 border-black">
            {progress}%
          </div>
        </div>
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-sm text-white/70">Level 12 | 2500/3000 XP</p>
      </div>

      {/* Stats Grid */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4">
        <StatCard icon={<FlameIcon className="w-6 h-6 text-orange-500" />} value="1,240" label="Calories" />
        <StatCard icon={<ClockIcon className="w-6 h-6 text-blue-400" />} value="5h 32m" label="Duration" />
        <StatCard icon={<DumbbellIcon className="w-6 h-6 text-purple-400" />} value="28" label="Workouts" />
        <StatCard icon={<BrainIcon className="w-6 h-6 text-yellow-400" />} value="8.2" label="Consistency" />
      </div>

      {/* Weekly Activity */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg p-4 rounded-2xl">
        <h3 className="font-semibold mb-4">Weekly Activity</h3>
        <div className="flex justify-between items-end h-32">
          {activityData.map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center space-y-1">
              <div
                className="w-4/5 rounded-t-full bg-gradient-to-b from-yellow-400 to-orange-500 transition-all duration-500"
                style={{ height: `${height}%` }}
              ></div>
              <span className="text-xs text-white/60">{"SMTWTFS"[index]}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* AI Insight Card */}
      <div className="w-full max-w-md bg-gradient-to-br from-yellow-400/10 via-amber-500/5 to-orange-500/10 p-4 rounded-2xl flex items-center space-x-4">
          <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex-shrink-0">
             <SparklesIcon className="w-6 h-6 text-white"/>
          </div>
          <p className="text-sm text-white/80">Great job on your consistency this week! Try increasing your dumbbell workout intensity for even better results.</p>
      </div>

      {/* Menu */}
      <div className="w-full max-w-md space-y-3">
        <MenuItem icon={<GoalsIcon className="w-6 h-6 text-yellow-400"/>} label="Goals"/>
        <MenuItem icon={<WorkoutPlanIcon className="w-6 h-6 text-yellow-400"/>} label="Workout Plan"/>
        <MenuItem icon={<AIAnalysesIcon className="w-6 h-6 text-yellow-400"/>} label="AI Analyses"/>
        <MenuItem icon={<SettingsIcon className="w-6 h-6 text-yellow-400"/>} label="Settings"/>
        <MenuItem icon={<ProgressGraphsIcon className="w-6 h-6 text-yellow-400"/>} label="Progress Graphs"/>
        <MenuItem icon={<NotificationsIcon className="w-6 h-6 text-yellow-400"/>} label="Notifications"/>
        <MenuItem icon={<LogOutIcon className="w-6 h-6 text-red-500"/>} label="Log Out"/>
      </div>
    </div>
  );
};

export default ProfileScreen;
