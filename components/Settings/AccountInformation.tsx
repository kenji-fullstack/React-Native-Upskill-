import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
  KeyIcon,
  PencilSquareIcon,
} from 'react-native-heroicons/solid';
import { ScreenLayout, Avatar } from '../ui';

export default function AccountInformation({
  onBack,
  onEdit,
}: {
  onBack: () => void;
  onEdit: () => void;
}) {
  return (
    <ScreenLayout
      title="Account Information"
      showBackButton
      onBackPress={onBack}
      rightComponent={
        <TouchableOpacity
          className="flex-row items-center rounded-lg bg-[#FFF5F4] px-3 py-2"
          onPress={onEdit}
          activeOpacity={0.7}>
          <PencilSquareIcon size={16} color="#E36255" className="mr-1" />
          <Text className="text-sm font-semibold text-[#E36255]">Edit</Text>
        </TouchableOpacity>
      }>
      <View className="flex-1 px-6">
        {/* Profile Section */}
        <View className="mb-8 items-center">
          <Avatar
            source={require('../../assets/images/avatar-female.png')}
            size="large"
            className="mb-4"
          />
          <Text className="text-xl font-bold text-[#222]">Sarah Thompson</Text>
        </View>

        {/* Information List */}
        <View className="space-y-6">
          {/* Email */}
          <View className="flex-row items-center">
            <View className="mr-4 rounded-lg bg-[#FFF5F4] p-2">
              <EnvelopeIcon size={20} color="#E36255" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-medium text-[#666]">Email</Text>
              <Text className="text-base text-[#222]">sarahthompson@gmail.com</Text>
            </View>
          </View>

          {/* Phone Number */}
          <View className="flex-row items-center">
            <View className="mr-4 rounded-lg bg-[#FFF5F4] p-2">
              <PhoneIcon size={20} color="#E36255" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-medium text-[#666]">Phone Number</Text>
              <Text className="text-base text-[#222]">(480) 555-0103</Text>
            </View>
          </View>

          {/* Password */}
          <View className="flex-row items-center">
            <View className="mr-4 rounded-lg bg-[#FFF5F4] p-2">
              <LockClosedIcon size={20} color="#E36255" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-medium text-[#666]">Password</Text>
              <Text className="text-base text-[#222]">••••••••</Text>
            </View>
          </View>

          {/* Secret PIN */}
          <View className="flex-row items-center">
            <View className="mr-4 rounded-lg bg-[#FFF5F4] p-2">
              <KeyIcon size={20} color="#E36255" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-medium text-[#666]">Secret PIN</Text>
              <Text className="text-base text-[#222]">••••</Text>
            </View>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
}
