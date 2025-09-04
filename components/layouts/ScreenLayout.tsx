import React from 'react';
import Container from './Container';
import Header from '../ui/Header';

interface ScreenLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
  scrollable?: boolean;
  keyboardAvoiding?: boolean;
  containerClassName?: string;
}

export default function ScreenLayout({
  children,
  title,
  showBackButton,
  onBackPress,
  rightComponent,
  scrollable = false,
  keyboardAvoiding = true,
  containerClassName = '',
}: ScreenLayoutProps) {
  return (
    <Container
      scrollable={scrollable}
      keyboardAvoiding={keyboardAvoiding}
      className={containerClassName}
    >
      {(title || showBackButton || rightComponent) && (
        <Header
          title={title}
          showBackButton={showBackButton}
          onBackPress={onBackPress}
          rightComponent={rightComponent}
        />
      )}
      {children}
    </Container>
  );
}