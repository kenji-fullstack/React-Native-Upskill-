import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface AvatarProps {
  source?: any;
  initials?: string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onPress?: () => void;
  className?: string;
}

const sizeStyles = {
  small: 'w-8 h-8',
  medium: 'w-10 h-10',
  large: 'w-16 h-16',
};

const textSizeStyles = {
  small: 'text-xs',
  medium: 'text-sm',
  large: 'text-lg',
};

export default function Avatar({
  source,
  initials,
  size = 'medium',
  backgroundColor = '#FBBF24',
  onPress,
  className = '',
}: AvatarProps) {
  const Component = onPress ? TouchableOpacity : View;
  
  return (
    <Component
      onPress={onPress}
      className={`
        ${sizeStyles[size]} 
        rounded-full items-center justify-center
        ${className}
      `}
      style={{ backgroundColor }}
      activeOpacity={onPress ? 0.8 : 1}
    >
      {source ? (
        <Image 
          source={source} 
          className={`${sizeStyles[size]} rounded-full`}
          resizeMode="cover"
        />
      ) : (
        <Text 
          className={`text-white font-bold ${textSizeStyles[size]}`}
        >
          {initials}
        </Text>
      )}
    </Component>
  );
}