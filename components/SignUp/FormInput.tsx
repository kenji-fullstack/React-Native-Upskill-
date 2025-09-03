import React from 'react';
import { View, TextInput, TouchableOpacity, TextInputProps } from 'react-native';

interface FormInputProps extends TextInputProps {
    icon: React.ReactNode;
    rightIcon?: React.ReactNode;
    onRightIconPress?: () => void;
    rightIconLabel?: string;
}

export default function FormInput({
    icon,
    rightIcon,
    onRightIconPress,
    rightIconLabel,
    ...props
}: FormInputProps) {
    return (
        <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
            {icon}
            <TextInput
                className="ml-3 flex-1 text-base text-[#222222]"
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
    );
}
