import React, { forwardRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  rightIconLabel?: string;
  containerClassName?: string;
  inputClassName?: string;
}

const Input = forwardRef<TextInput, InputProps>(({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  rightIconLabel,
  containerClassName = '',
  inputClassName = '',
  ...props
}, ref) => {
  return (
    <View className={`mb-4 ${containerClassName}`}>
      {label && (
        <Text className="mb-2 text-sm font-medium text-[#222222]">
          {label}
        </Text>
      )}
      
      <View className={`
        flex-row items-center rounded-lg border bg-white px-4 py-1
        ${error ? 'border-red-500' : 'border-[#E5E5E5]'}
      `}>
        {leftIcon && (
          <View className="mr-3">
            {leftIcon}
          </View>
        )}
        
        <TextInput
          ref={ref}
          className={`flex-1 text-base text-[#222222] ${inputClassName}`}
          placeholderTextColor="#BDBDBD"
          style={{ paddingVertical: 16, fontSize: 16 }}
          {...props}
        />
        
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            className="p-1"
            accessibilityLabel={rightIconLabel}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      
      {error && (
        <Text className="mt-1 text-sm text-red-500">
          {error}
        </Text>
      )}
    </View>
  );
});

Input.displayName = 'Input';

export default Input;