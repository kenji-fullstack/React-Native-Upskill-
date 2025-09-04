import React from 'react';
import { View, TouchableOpacity, ViewProps, TouchableOpacityProps } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  selected?: boolean;
  variant?: 'default' | 'outlined' | 'elevated';
  className?: string;
}

const variantStyles = {
  default: 'bg-white',
  outlined: 'bg-white border border-gray-200',
  elevated: 'bg-white shadow-lg',
};

export default function Card({ 
  children, 
  onPress, 
  selected = false, 
  variant = 'default',
  className = '' 
}: CardProps) {
  const Component = onPress ? TouchableOpacity : View;
  const componentProps = onPress 
    ? { onPress, activeOpacity: 0.8 } as TouchableOpacityProps
    : {} as ViewProps;

  return (
    <Component
      className={`
        rounded-lg p-4
        ${variantStyles[variant]}
        ${selected ? 'border-2 border-[#E36255] bg-[#FFF5F4]' : ''}
        ${className}
      `}
      {...componentProps}
    >
      {children}
    </Component>
  );
}