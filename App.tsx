import React, { useState } from 'react';
import Onboarding from 'components/Onboarding/Onboarding';
import LoginScreen from 'components/Login/LoginScreen';
import ForgotPasswordScreen from 'components/Login/ForgotPasswordScreen';
import ForgotPasswordVerificationScreen from 'components/Login/ForgotPasswordVerificationScreen';
import SetPasswordScreen from 'components/Login/SetPasswordScreen';

import SignupStep1 from 'components/SignUp/SignupStep1';
import SignupStep2 from 'components/SignUp/SignupStep2';
import SignupStep3 from 'components/SignUp/SignupStep3';
import SignupSuccess from 'components/SignUp/SignupSuccess';
import HomeNavigator from 'components/Home/HomeNavigator';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  const [screen, setScreen] = useState<
    'onboarding' | 'login' | 'forgot' | 'verify' | 'setpassword' | 'signup' | 'signup2' | 'signup3' | 'home'
  >('onboarding');
  
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      {screen === 'onboarding' && <Onboarding onGetStarted={() => setScreen('login')} />}
      {screen === 'login' && (
        <LoginScreen
          onForgotPassword={() => setScreen('forgot')}
          onSignup={() => setScreen('signup')}
          onLogin={() => setScreen('home')}
        />
      )}
      {screen === 'signup' && (
        <SignupStep1 
          onNext={() => setScreen('signup2')} 
          onBack={() => setScreen('login')}
        />
      )}
      {screen === 'signup2' && (
        <SignupStep2
          onNext={() => setScreen('signup3')}
          onBack={() => setScreen('signup')}
        />
      )}
      {screen === 'signup3' && (
        <SignupStep3
          onNext={() => setShowSuccessModal(true)}
          onBack={() => setScreen('signup2')}
        />
      )}
      
      {/* Success Modal - can appear over any screen */}
      <SignupSuccess
        visible={showSuccessModal}
        onContinue={() => {
          setShowSuccessModal(false);
          setScreen('login');
        }}
        onBack={() => setShowSuccessModal(false)}
      />
      {screen === 'home' && <HomeNavigator />}
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
