import React, { useState } from 'react';
import Home from './Home';
import HomeExtraInformation from './Home_ExtraInformation';
import HomeCancelAlert from './Home_CancelAlert';
import SPLiveView from './SP_LiveView';
import SettingsNavigator from '../Settings/SettingsNavigator';

type HomeScreen = 'home' | 'cancel-alert' | 'live-view' | 'settings';

interface HomeNavigatorProps {
  onLogout: () => void;
}

export default function HomeNavigator({ onLogout }: HomeNavigatorProps) {
  const [currentScreen, setCurrentScreen] = useState<HomeScreen>('home');
  const [showExtraInfoModal, setShowExtraInfoModal] = useState(false);
  const [settingsInitialScreen, setSettingsInitialScreen] = useState<'main' | 'history'>('main');

  const handleNavigateToExtraInfo = () => {
    setShowExtraInfoModal(true);
  };

  const handleSendAlert = (info: string) => {
    setShowExtraInfoModal(false);
    setCurrentScreen('cancel-alert');
  };

  const handleCancelAlert = () => {
    setCurrentScreen('home');
  };

  const handleAlertTimeout = () => {
    setCurrentScreen('live-view');
  };

  const handleGoBackToHome = () => {
    setCurrentScreen('home');
  };

  const handleNavigateToAccountHistory = () => {
    setSettingsInitialScreen('history');
    setCurrentScreen('settings');
  };

  const handleNavigateToSettings = () => {
    setSettingsInitialScreen('main');
    setCurrentScreen('settings');
  };

  const handleChat = () => {
    // Handle chat functionality
    console.log('Opening chat...');
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <Home
            onNavigateToExtraInfo={handleNavigateToExtraInfo}
            onNavigateToSettings={handleNavigateToSettings}
            onNavigateToAccountHistory={handleNavigateToAccountHistory}
          />
        );
      case 'cancel-alert':
        return (
          <HomeCancelAlert
            onCancelAlert={handleCancelAlert}
            onGoBack={handleGoBackToHome}
            onAlertTimeout={handleAlertTimeout}
          />
        );
      case 'live-view':
        return <SPLiveView onGoBack={handleGoBackToHome} onChat={handleChat} />;
      case 'settings':
        return (
          <SettingsNavigator
            onBackToHome={handleGoBackToHome}
            onLogout={onLogout}
            initialScreen={settingsInitialScreen}
          />
        );
      default:
        return (
          <Home
            onNavigateToExtraInfo={handleNavigateToExtraInfo}
            onNavigateToSettings={handleNavigateToSettings}
            onNavigateToAccountHistory={handleNavigateToAccountHistory}
          />
        );
    }
  };

  return (
    <>
      {renderCurrentScreen()}
      <HomeExtraInformation
        visible={showExtraInfoModal}
        onClose={() => setShowExtraInfoModal(false)}
        onSendAlert={handleSendAlert}
      />
    </>
  );
}
