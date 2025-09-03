import React, { useState } from 'react';
import Home from './Home';
import HomeExtraInformation from './Home_ExtraInformation';
import HomeCancelAlert from './Home_CancelAlert';
import SPLiveView from './SP_LiveView';

type HomeScreen = 'home' | 'cancel-alert' | 'live-view';

export default function HomeNavigator() {
    const [currentScreen, setCurrentScreen] = useState<HomeScreen>('home');
    const [showExtraInfoModal, setShowExtraInfoModal] = useState(false);

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

    const handleChat = () => {
        // Handle chat functionality
        console.log('Opening chat...');
    };

    const handleNavigateToSettings = () => {
        // Handle settings navigation
        console.log('Opening settings...');
    };

    const renderCurrentScreen = () => {
        switch (currentScreen) {
            case 'home':
                return (
                    <Home
                        onNavigateToExtraInfo={handleNavigateToExtraInfo}
                        onNavigateToSettings={handleNavigateToSettings}
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
                return (
                    <SPLiveView
                        onGoBack={handleGoBackToHome}
                        onChat={handleChat}
                    />
                );
            default:
                return (
                    <Home
                        onNavigateToExtraInfo={handleNavigateToExtraInfo}
                        onNavigateToSettings={handleNavigateToSettings}
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
