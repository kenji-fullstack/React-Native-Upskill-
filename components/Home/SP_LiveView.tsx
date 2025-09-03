import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Container } from '../Container';

interface SPLiveViewProps {
    onGoBack?: () => void;
    onChat?: () => void;
}

export default function SPLiveView({ onGoBack, onChat }: SPLiveViewProps) {
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="white" />

            {/* Map Background */}
            <View className="absolute inset-0 bg-gray-100">
                
            </View>

            {/* Top time indicator */}
            <View className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
                <Text className="text-sm font-medium text-gray-900">10:00</Text>
            </View>

            {/* Bottom Card */}
            <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl px-6 py-6"
                style={{ paddingBottom: 40 }}>

                {/* Help is on the way text */}
                <View className="items-center mb-4">
                    <Text className="text-xl font-bold text-gray-900">Help is on the way!</Text>
                </View>

                {/* Personnel Info */}
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                        <View className="w-12 h-12 rounded-full bg-amber-400 items-center justify-center mr-4">
                            <Text className="text-white font-bold">JC</Text>
                        </View>
                        <View className="flex-1">
                            <Text className="text-lg font-semibold text-gray-900">Jane Cooper</Text>
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                                <Text className="text-sm text-gray-600">4.9</Text>
                            </View>
                        </View>
                    </View>

                    {/* Chat Button */}
                    <TouchableOpacity
                        className="bg-red-500 px-6 py-3 rounded-xl flex-row items-center"
                        onPress={onChat}
                    >
                        <Text className="text-white font-semibold mr-2">Chat</Text>
                        <View className="w-5 h-5 bg-white rounded-full items-center justify-center">
                            <Text className="text-red-500 text-xs">💬</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
}
