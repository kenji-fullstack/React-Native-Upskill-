import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
  backgroundColor?: string;
  statusBarStyle?: 'dark-content' | 'light-content';
  containerClassName?: string;
}

export default function Header({
  title,
  showBackButton = false,
  onBackPress,
  rightComponent,
  backgroundColor = 'white',
  statusBarStyle = 'dark-content',
  containerClassName = '',
}: HeaderProps) {
  return (
    <>
      <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
      <View className={`flex-row items-center px-6 pb-6 pt-16 ${containerClassName}`}>
        {showBackButton && (
          <TouchableOpacity onPress={onBackPress} accessibilityLabel="Go back">
            <ArrowLeftIcon size={24} color="#222" />
          </TouchableOpacity>
        )}
        
        {title && (
          <Text
            className={`text-[#222222] ${showBackButton ? 'ml-4' : ''} flex-1`}
            style={{ fontSize: 18, fontWeight: '600' }}
          >
            {title}
          </Text>
        )}
        
        {rightComponent && (
          <View className="ml-auto">
            {rightComponent}
          </View>
        )}
      </View>
    </>
  );
}