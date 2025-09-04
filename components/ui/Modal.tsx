import React, { useEffect } from 'react';
import { Modal as RNModal, View, TouchableOpacity, BackHandler } from 'react-native';
import { BlurView } from 'expo-blur';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animationType?: 'none' | 'slide' | 'fade';
  transparent?: boolean;
  blurBackground?: boolean;
  backgroundOpacity?: number;
  dismissOnBackdropPress?: boolean;
  handleAndroidBack?: boolean;
  containerClassName?: string;
}

export default function Modal({
  visible,
  onClose,
  children,
  animationType = 'fade',
  transparent = true,
  blurBackground = false,
  backgroundOpacity = 0.5,
  dismissOnBackdropPress = true,
  handleAndroidBack = true,
  containerClassName = '',
}: ModalProps) {
  
  useEffect(() => {
    if (!handleAndroidBack || !visible) return;
    
    const backAction = () => {
      onClose();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [visible, handleAndroidBack, onClose]);

  const BackgroundComponent = blurBackground ? BlurView : View;
  const backgroundProps = blurBackground 
    ? { intensity: 12, tint: 'default' as const }
    : {};

  return (
    <RNModal
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <BackgroundComponent
        {...backgroundProps}
        className={`flex-1 items-center justify-center px-8 ${containerClassName}`}
        style={!blurBackground ? { backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` } : {}}
      >
        {dismissOnBackdropPress && (
          <TouchableOpacity 
            className="absolute inset-0" 
            activeOpacity={1}
            onPress={onClose}
          />
        )}
        {children}
      </BackgroundComponent>
    </RNModal>
  );
}