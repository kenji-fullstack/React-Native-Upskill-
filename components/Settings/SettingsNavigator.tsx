import React, { useState } from 'react';
import Settings from './Settings';
import AccountInformation from './AccountInformation';
import AccountInformationEdit from './AccountInformationEdit';
import AboutUs from './AboutUs';
import TermsOfService from './TermsOfService';
import AccountHistory from './AccountHistory';
import LogoutConfirmation from './LogoutConfirmation';

type SettingsScreen = 'main' | 'account-info' | 'account-edit' | 'about' | 'terms' | 'history';

interface SettingsNavigatorProps {
  onBackToHome: () => void;
  onLogout: () => void;
  initialScreen?: SettingsScreen;
}

export default function SettingsNavigator({
  onBackToHome,
  onLogout,
  initialScreen = 'main',
}: SettingsNavigatorProps) {
  const [currentScreen, setCurrentScreen] = useState<SettingsScreen>(initialScreen);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    onLogout();
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'main':
        return (
          <Settings
            onBack={onBackToHome}
            onAccountInfo={() => setCurrentScreen('account-info')}
            onAbout={() => setCurrentScreen('about')}
            onTerms={() => setCurrentScreen('terms')}
            onAccountHistory={() => setCurrentScreen('history')}
            onLogout={() => setShowLogoutModal(true)}
          />
        );
      case 'account-info':
        return (
          <AccountInformation
            onBack={() => setCurrentScreen('main')}
            onEdit={() => setCurrentScreen('account-edit')}
          />
        );
      case 'account-edit':
        return (
          <AccountInformationEdit
            onBack={() => setCurrentScreen('account-info')}
            onSave={() => setCurrentScreen('account-info')}
          />
        );
      case 'about':
        return <AboutUs onBack={() => setCurrentScreen('main')} />;
      case 'terms':
        return <TermsOfService onBack={() => setCurrentScreen('main')} />;
      case 'history':
        return <AccountHistory onBack={() => setCurrentScreen('main')} />;
      default:
        return (
          <Settings
            onBack={onBackToHome}
            onAccountInfo={() => setCurrentScreen('account-info')}
            onAbout={() => setCurrentScreen('about')}
            onTerms={() => setCurrentScreen('terms')}
            onAccountHistory={() => setCurrentScreen('history')}
            onLogout={() => setShowLogoutModal(true)}
          />
        );
    }
  };

  return (
    <>
      {renderCurrentScreen()}
      <LogoutConfirmation
        visible={showLogoutModal}
        onCancel={() => setShowLogoutModal(false)}
        onLogout={handleLogout}
      />
    </>
  );
}
