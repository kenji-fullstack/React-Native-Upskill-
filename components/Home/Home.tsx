import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { MapPinIcon, Cog6ToothIcon } from 'react-native-heroicons/outline';
import { Container } from '../Container';

interface HomeProps {
    onNavigateToExtraInfo?: () => void;
    onNavigateToSettings?: () => void;
}

export default function Home({ onNavigateToExtraInfo, onNavigateToSettings }: HomeProps) {
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="white" />

            {/* Header */}
            <View className="flex-row items-center justify-between mb-8">
                <View className="flex-row items-center">
                    <MapPinIcon size={20} color="#EF4444" className="mr-2" />
                    <View>
                        <Text className="text-xs text-gray-500">2118 Thornridge Cir, Syracuse,</Text>
                        <Text className="text-xs text-gray-500">Connecticut 35624</Text>
                    </View>
                </View>

                <View className="flex-row items-center">
                    <TouchableOpacity onPress={onNavigateToSettings}>
                        <Cog6ToothIcon size={24} color="#6B7280" />
                    </TouchableOpacity>
                    <View className="ml-3 w-10 h-10 rounded-full bg-amber-400 items-center justify-center">
                        <Text className="text-white font-bold text-sm">ST</Text>
                    </View>
                </View>
            </View>

            {/* Greeting */}
            <View className="mb- justify-center items-center">
                <Text className="text-lg text-gray-800">Hey, <Text className="font-semibold text-red-500">Sara Thompson</Text></Text>
                <Text className="text-2xl font-bold text-gray-900 mt-1">Not Feeling Safe Today?</Text>
            </View>

            {/* Description */}
            <View className="mb-12">
                <Text className="text-gray-600 text-center leading-6">
                    Tap for instant security backup, your security{'\n'}
                    personal is just a tap away.
                </Text>
            </View>

            {/* Emergency Button */}
            <View className="flex-1 items-center justify-center mb-16">
                <View className="relative">
                    {/* Outer glow circles */}
                    <View className="absolute inset-0 w-60 h-60 rounded-full bg-red-100 opacity-30" style={{ transform: [{ scale: 1.4 }] }} />
                    <View className="absolute inset-0 w-60 h-60 rounded-full bg-red-100 opacity-40" style={{ transform: [{ scale: 1.2 }] }} />

                    {/* Main button */}
                    <TouchableOpacity
                        className="w-60 h-60 rounded-full bg-red-500 items-center justify-center shadow-lg"
                        onPress={onNavigateToExtraInfo}
                        activeOpacity={0.8}
                    >
                        <Text className="text-white text-2xl font-bold">Tap Me!</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Account History Button */}
            <TouchableOpacity className="border border-red-500 rounded-xl py-4 mb-4">
                <View className="flex-row items-center justify-center">
                    <Text className="text-red-500 font-medium mr-2">📋</Text>
                    <Text className="text-red-500 font-medium">Account History</Text>
                </View>
            </TouchableOpacity>
        </Container>
    );
}
