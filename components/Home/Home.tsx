import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { MapPinIcon, Cog6ToothIcon } from 'react-native-heroicons/outline';
import { Container } from '../Container';

interface HomeProps {
  onNavigateToExtraInfo?: () => void;
  onNavigateToSettings?: () => void;
  onNavigateToAccountHistory?: () => void;
}

export default function Home({
  onNavigateToExtraInfo,
  onNavigateToSettings,
  onNavigateToAccountHistory,
}: HomeProps) {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="mb-8 flex-row items-center justify-between">
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
          <View className="ml-3 h-10 w-10 items-center justify-center rounded-full bg-amber-400">
            <Text className="text-sm font-bold text-white">ST</Text>
          </View>
        </View>
      </View>

      {/* Greeting */}
      <View className="mb- items-center justify-center">
        <Text className="text-lg text-gray-800">
          Hey, <Text className="font-semibold text-red-500">Sara Thompson</Text>
        </Text>
        <Text className="mt-1 text-2xl font-bold text-gray-900">Not Feeling Safe Today?</Text>
      </View>

      {/* Description */}
      <View className="mb-12">
        <Text className="text-center leading-6 text-gray-600">
          Tap for instant security backup, your security{'\n'}
          personal is just a tap away.
        </Text>
      </View>

      {/* Emergency Button */}
      <View className="mb-16 flex-1 items-center justify-center">
        <View className="relative">
          {/* Outer glow circles */}
          <View
            className="absolute inset-0 h-60 w-60 rounded-full bg-red-100 opacity-30"
            style={{ transform: [{ scale: 1.4 }] }}
          />
          <View
            className="absolute inset-0 h-60 w-60 rounded-full bg-red-100 opacity-40"
            style={{ transform: [{ scale: 1.2 }] }}
          />

          {/* Main button */}
          <TouchableOpacity
            className="h-60 w-60 items-center justify-center rounded-full bg-red-500 shadow-lg"
            onPress={onNavigateToExtraInfo}
            activeOpacity={0.8}>
            <Text className="text-2xl font-bold text-white">Tap Me!</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Account History Button */}
      <TouchableOpacity
        className="mb-4 rounded-xl border border-red-500 py-4"
        onPress={onNavigateToAccountHistory}>
        <View className="flex-row items-center justify-center">
          <Text className="mr-2 font-medium text-red-500">📋</Text>
          <Text className="font-medium text-red-500">Account History</Text>
        </View>
      </TouchableOpacity>
    </Container>
  );
}
