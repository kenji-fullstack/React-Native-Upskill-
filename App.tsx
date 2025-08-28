import React, { useState } from 'react';
import Onboarding from 'components/Onboarding/Onboarding';
import LoginScreen from 'components/Login/LoginScreen';
import ForgotPasswordScreen from 'components/Login/ForgotPasswordScreen';
import ForgotPasswordVerificationScreen from 'components/Login/ForgotPasswordVerificationScreen';
import SetPasswordScreen from 'components/Login/SetPasswordScreen';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  const [screen, setScreen] = useState<
    'onboarding' | 'login' | 'forgot' | 'verify' | 'setpassword'
  >('onboarding');

  return (
    <>
      {screen === 'onboarding' && <Onboarding onGetStarted={() => setScreen('login')} />}
      {screen === 'login' && <LoginScreen onForgotPassword={() => setScreen('forgot')} />}
      {screen === 'forgot' && (
        <ForgotPasswordScreen
          onBack={() => setScreen('login')}
          onSendCode={() => setScreen('verify')}
        />
      )}
      {screen === 'verify' && (
        <ForgotPasswordVerificationScreen
          onBack={() => setScreen('forgot')}
          onVerify={() => setScreen('setpassword')}
        />
      )}
      {screen === 'setpassword' && (
        <SetPasswordScreen
          onBack={() => setScreen('login')}
          onSetPassword={() => setScreen('login')}
        />
      )}
      <StatusBar style="auto" />
    </>
  );
}
