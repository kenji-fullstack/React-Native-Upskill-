import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';
import { Container } from '../Container';

interface HomeCancelAlertProps {
    onCancelAlert?: () => void;
    onGoBack?: () => void;
    onAlertTimeout?: () => void;
}

export default function HomeCancelAlert({ onCancelAlert, onGoBack, onAlertTimeout }: HomeCancelAlertProps) {
    const [pin, setPin] = useState('');
    const [showPin, setShowPin] = useState(false);
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onAlertTimeout?.();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onAlertTimeout]);

    const handleCancelAlert = () => {
        if (pin.length === 4) {
            onCancelAlert?.();
        }
    };

    const progressPercentage = ((10 - countdown) / 10) * 100;

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="white" />

            {/* Header */}
            <View className="items-center mb-8">
                <Text className="text-xl font-bold text-gray-900">Sending Alert in <Text className="text-red-500">{countdown}s</Text></Text>
            </View>

            {/* Description */}
            <View className="mb-8">
                <Text className="text-gray-600 text-center leading-6">
                    Cancel alert if it&apos;s by mistake or you feel{'\n'}
                    safe now
                </Text>
            </View>

            {/* PIN Input */}
            <View className="mb-8">
                <Text className="text-gray-700 font-medium mb-3">Enter 4-digit Secret PIN to cancel alert</Text>
                <View className="relative">
                    <TextInput
                        className="border border-gray-200 rounded-xl px-4 py-4 pr-12 text-gray-900"
                        placeholder="Secret Pin"
                        placeholderTextColor="#9CA3AF"
                        value={pin}
                        onChangeText={setPin}
                        secureTextEntry={!showPin}
                        keyboardType="numeric"
                        maxLength={4}
                    />
                    <TouchableOpacity
                        className="absolute right-4 top-4"
                        onPress={() => setShowPin(!showPin)}
                    >
                        {showPin ? (
                            <EyeSlashIcon size={20} color="#9CA3AF" />
                        ) : (
                            <EyeIcon size={20} color="#9CA3AF" />
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            {/* Countdown Circle */}
            <View className="flex-1 items-center justify-center mb-16">
                <View className="relative items-center justify-center">
                    {/* Background circle */}
                    <View className="w-64 h-64 rounded-full border-8 border-gray-200" />

                    {/* Progress circle */}
                    <View
                        className="absolute w-64 h-64 rounded-full border-8 border-red-500"
                        style={{
                            transform: [{ rotate: '-90deg' }],
                            borderTopColor: progressPercentage > 0 ? '#EF4444' : 'transparent',
                            borderRightColor: progressPercentage > 25 ? '#EF4444' : 'transparent',
                            borderBottomColor: progressPercentage > 50 ? '#EF4444' : 'transparent',
                            borderLeftColor: progressPercentage > 75 ? '#EF4444' : 'transparent',
                        }}
                    />

                    {/* Countdown text */}
                    <View className="absolute items-center justify-center">
                        <Text className="text-6xl font-bold text-gray-900">{countdown.toString().padStart(2, '0')}</Text>
                        <Text className="text-lg text-gray-600">s</Text>
                    </View>
                </View>
            </View>

            {/* Cancel Alert Button */}
            <TouchableOpacity
                className={`rounded-xl py-4 mb-4 ${pin.length === 4 ? 'bg-red-500' : 'bg-red-300'}`}
                onPress={handleCancelAlert}
                disabled={pin.length !== 4}
            >
                <Text className="text-white font-semibold text-center text-lg">Cancel Alert</Text>
            </TouchableOpacity>
        </Container>
    );
}
