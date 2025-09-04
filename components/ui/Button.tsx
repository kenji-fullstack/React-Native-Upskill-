import React from 'react';
import { TouchableOpacity, Text, View, TouchableOpacityProps, ActivityIndicator } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const variantStyles = {
  primary: 'bg-[#E36255]',
  secondary: 'bg-[#BDBDBD]',
  outline: 'border border-[#E36255] bg-transparent',
  ghost: 'bg-transparent',
};

const sizeStyles = {
  small: 'py-2 px-4',
  medium: 'py-3 px-6',
  large: 'py-4 px-8',
};

const textStyles = {
  primary: 'text-white',
  secondary: 'text-white',
  outline: 'text-[#E36255]',
  ghost: 'text-[#E36255]',
};

export default function Button({
  title,
  variant = 'primary',
  size = 'medium',
  leftIcon,
  rightIcon,
  loading = false,
  fullWidth = false,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      className={`
        items-center justify-center rounded-lg
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${isDisabled ? 'opacity-50' : ''}
        ${className}
      `}
      disabled={isDisabled}
      activeOpacity={0.8}
      {...props}>
      <View className="flex-row items-center justify-center">
        {leftIcon && !loading && <View className="mr-2">{leftIcon}</View>}
        {loading ? (
          <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : '#E36255'} size="small" />
        ) : (
          <>
            <Text
              className={`font-semibold ${textStyles[variant]}`}
              style={{ fontSize: size === 'large' ? 16 : size === 'medium' ? 16 : 14 }}>
              {title}
            </Text>
            {rightIcon && <View className="ml-2">{rightIcon}</View>}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}
