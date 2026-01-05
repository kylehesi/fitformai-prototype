
import React from 'react';

// Common props for icons
type IconProps = {
  className?: string;
};

export const ProfileIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const MicIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

export const FolderIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);

export const DumbbellIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.5 6.75H22.5V8.25H19.5V6.75ZM18 9.75V5.25H15V9.75H18ZM13.5 11.25H10.5V12.75H13.5V11.25ZM6 9.75V5.25H9V9.75H6ZM4.5 6.75H1.5V8.25H4.5V6.75ZM18.75 12H5.25C4.83579 12 4.5 12.3358 4.5 12.75V15.75H2.25V17.25H4.5V20.25H6V17.25H18V20.25H19.5V17.25H21.75V15.75H19.5V12.75C19.5 12.3358 19.1642 12 18.75 12Z" />
  </svg>
);

export const CameraIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008v-.008z" />
  </svg>
);

export const BotIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-6.75 3h9m-9 3h9m3.375-10.5a4.125 4.125 0 00-4.125-4.125H6.375A4.125 4.125 0 002.25 11.25v6.75c0 2.278 1.847 4.125 4.125 4.125h9.75c2.278 0 4.125-1.847 4.125-4.125v-6.75a4.125 4.125 0 00-4.125-4.125H15M12 14.25v5.25" />
  </svg>
);

export const ProgressIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" style={{ strokeDasharray: 57, strokeDashoffset: 57, transition: 'stroke-dashoffset 0.5s ease-in-out' }}/>
  </svg>
);

export const RotateIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.18-3.185m-3.181 9.995l-3.182-3.182a8.25 8.25 0 010-11.664l3.181-3.182" />
  </svg>
);

export const AnatomyFront: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="10" width="20" height="20" rx="10" stroke="white" strokeWidth="2"/>
    <rect x="35" y="32" width="30" height="60" rx="15" stroke="white" strokeWidth="2"/>
    <rect x="45" y="32" width="10" height="20" stroke="white" strokeWidth="2"/>
    <rect x="20" y="35" width="12" height="50" rx="6" stroke="white" strokeWidth="2"/>
    <rect x="68" y="35" width="12" height="50" rx="6" stroke="white" strokeWidth="2"/>
    <rect x="38" y="95" width="10" height="70" rx="5" stroke="white" strokeWidth="2"/>
    <rect x="52" y="95" width="10" height="70" rx="5" stroke="white" strokeWidth="2"/>
  </svg>
);

export const AnatomyBack: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="10" width="20" height="20" rx="10" stroke="white" strokeWidth="2"/>
    <rect x="35" y="32" width="30" height="60" rx="15" stroke="white" strokeWidth="2"/>
    <rect x="48" y="40" width="4" height="40" stroke="white" strokeWidth="2"/>
    <rect x="20" y="35" width="12" height="50" rx="6" stroke="white" strokeWidth="2"/>
    <rect x="68" y="35" width="12" height="50" rx="6" stroke="white" strokeWidth="2"/>
    <rect x="38" y="95" width="10" height="70" rx="5" stroke="white" strokeWidth="2"/>
    <rect x="52" y="95" width="10" height="70" rx="5" stroke="white" strokeWidth="2"/>
    <rect x="40" y="168" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const FlameIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0110.5 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75c0-1.33.267-2.597.748-3.752A.75.75 0 0020.488 8v-.003a.75.75 0 00-.935-.645A12.002 12.002 0 0012.963 2.286z" clipRule="evenodd" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
  </svg>
);

export const BrainIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C9.25 2 7 4.25 7 7V9.5C5.35 9.5 4 10.85 4 12.5C4 14.15 5.35 15.5 7 15.5V17C7 19.75 9.25 22 12 22C14.75 22 17 19.75 17 17V15.5C18.65 15.5 20 14.15 20 12.5C20 10.85 18.65 9.5 17 9.5V7C17 4.25 14.75 2 12 2M12 4C13.65 4 15 5.35 15 7V10H9V7C9 5.35 10.35 4 12 4M12 20C10.35 20 9 18.65 9 17V15.5H15V17C15 18.65 13.65 20 12 20Z" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-7.192a4.5 4.5 0 01-1.12-1.666l-2.023-4.045a.75.75 0 011.06-1.06l4.045 2.023a4.5 4.5 0 011.666 1.12V7.584zM1.001 14.346a.75.75 0 01.867-.032l1.765.882a4.5 4.5 0 004.298 0l2.626-1.313a.75.75 0 01.932 1.01l-2.626 1.313a6 6 0 01-5.73 0l-1.765-.882a.75.75 0 01-.032-.867z" clipRule="evenodd" />
    </svg>
);

export const GoalsIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06zM12 1.5a.75.75 0 01.75.75v19.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5z" clipRule="evenodd" />
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
    </svg>
);

export const WorkoutPlanIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zM5.25 6A1.5 1.5 0 003.75 7.5v11.25c0 .828.672 1.5 1.5 1.5h13.5a1.5 1.5 0 001.5-1.5V7.5A1.5 1.5 0 0018.75 6H5.25z" clipRule="evenodd" />
        <path d="M10.5 12a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3zM15 12a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" />
    </svg>
);

export const AIAnalysesIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.723 11.277a1.5 1.5 0 010 2.446l-4.5 2.25a1.5 1.5 0 01-1.223 0l-4.5-2.25a1.5 1.5 0 010-2.446l4.5-2.25a1.5 1.5 0 011.223 0l4.5 2.25z" />
        <path fillRule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 1.5a10.5 10.5 0 100-21 10.5 10.5 0 000 21z" clipRule="evenodd" />
    </svg>
);

export const SettingsIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.946 1.532A12.016 12.016 0 008.25 6H6.75a.75.75 0 000 1.5h1.5c.254 0 .504.017.75.048a12.003 12.003 0 00-1.524 3.662c-.344.972-.165 2.03.46 2.825a.75.75 0 001.28-.538 9.04 9.04 0 01-.194-1.926c.204-.06.413-.116.623-.168a.75.75 0 00.44-1.332A12.023 12.023 0 0012 10.5c.178 0 .355.01.532.029a.75.75 0 00.44-1.332 11.96 11.96 0 002.046-1.082c.344.972.165 2.03-.46 2.825a.75.75 0 001.28.538 9.04 9.04 0 01-.194-1.926c.204-.06.413-.116.623-.168a.75.75 0 00.44-1.332l-.002-.001a12.023 12.023 0 00-1.524-3.662c.246-.03.496-.048.75-.048h1.5a.75.75 0 000-1.5h-1.5a12.016 12.016 0 00-.882-2.218C12.777 2.913 11.995 2.25 11.078 2.25zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
    </svg>
);

export const ProgressGraphsIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zM3 12a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm2.636 7.864a.75.75 0 010-1.06l1.591-1.592a.75.75 0 011.06 1.061l-1.59 1.591a.75.75 0 01-1.061 0zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zm5.864-2.636a.75.75 0 011.06 0l1.591 1.59a.75.75 0 01-1.06 1.061l-1.591-1.591a.75.75 0 010-1.06zM21 12a.75.75 0 01-.75.75H18a.75.75 0 010-1.5h2.25A.75.75 0 0121 12zm-3.136-7.864a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 11-1.06-1.06l1.59-1.591a.75.75 0 011.06 0z" />
    </svg>
);

export const NotificationsIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.82-1.34-5.932-3.413a.75.75 0 00-1.28.792A9.75 9.75 0 0012 21a9.75 9.75 0 009.212-6.375a.75.75 0 00-1.28-.792A48.27 48.27 0 0012 2.25z" clipRule="evenodd" />
    </svg>
);

export const LogOutIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
);
