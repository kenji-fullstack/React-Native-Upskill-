import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {
  Cog6ToothIcon,
  UserIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ArrowRightOnRectangleIcon,
  ClockIcon,
} from 'react-native-heroicons/solid';
import { ScreenLayout } from '../ui';

export default function Settings({
  onBack,
  onAccountInfo,
  onAbout,
  onTerms,
  onAccountHistory,
  onLogout,
}: {
  onBack: () => void;
  onAccountInfo: () => void;
  onAbout: () => void;
  onTerms: () => void;
  onAccountHistory: () => void;
  onLogout: () => void;
}) {
  return (
    <ScreenLayout title="Settings" showBackButton onBackPress={onBack}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Settings Icon and Title */}
        <View className="mb-8 mt-4 items-center">
          <View className="mb-4 rounded-full bg-[#FFF5E0] p-6">
            <Cog6ToothIcon size={40} color="#FBBF24" />
          </View>
          <Text className="text-2xl font-bold text-[#230806]">Settings</Text>
        </View>

        {/* Menu Items */}
        <View className="mx-6">
          {/* Account Information */}
          <TouchableOpacity
            className="flex-row items-center border-b border-gray-100 py-4"
            onPress={onAccountInfo}
            activeOpacity={0.7}>
            <View className="mr-4 rounded-lg bg-[#FFF5F4] p-2">
              <UserIcon size={20} color="#E36255" />
            </View>
            <Text className="flex-1 text-base font-medium text-[#222]">Account Information</Text>
            <ArrowRightIcon size={18} color="#BDBDBD" />
          </TouchableOpacity>

          {/* About Us */}
          <TouchableOpacity
            className="flex-row items-center border-b border-gray-100 py-4"
            onPress={onAbout}
            activeOpacity={0.7}>
            <View className="mr-4 rounded-lg bg-[#FFF5F4] p-2">
              <InformationCircleIcon size={20} color="#E36255" />
            </View>
            <Text className="flex-1 text-base font-medium text-[#222]">About us</Text>
            <ArrowRightIcon size={18} color="#BDBDBD" />
          </TouchableOpacity>

          {/* Terms of Service */}
          <TouchableOpacity
            className="flex-row items-center border-b border-gray-100 py-4"
            onPress={onTerms}
            activeOpacity={0.7}>
            <View className="mr-4 rounded-lg bg-[#FFF5F4] p-2">
              <DocumentTextIcon size={20} color="#E36255" />
            </View>
            <Text className="flex-1 text-base font-medium text-[#222]">Terms of Service</Text>
            <ArrowRightIcon size={18} color="#BDBDBD" />
          </TouchableOpacity>

          {/* Account History */}
          <TouchableOpacity
            className="flex-row items-center py-4"
            onPress={onAccountHistory}
            activeOpacity={0.7}>
            <View className="mr-4 rounded-lg bg-[#FFF5F4] p-2">
              <ClockIcon size={20} color="#E36255" />
            </View>
            <Text className="flex-1 text-base font-medium text-[#222]">Account History</Text>
            <ArrowRightIcon size={18} color="#BDBDBD" />
          </TouchableOpacity>
        </View>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Logout Button */}
        <View className="mx-6 mb-8 mt-12">
          <TouchableOpacity
            className="flex-row items-center justify-center rounded-lg bg-[#FFF5F4] py-4"
            onPress={onLogout}
            activeOpacity={0.8}>
            <ArrowRightOnRectangleIcon size={22} color="#E36255" className="mr-2" />
            <Text className="text-base font-semibold text-[#E36255]">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}
