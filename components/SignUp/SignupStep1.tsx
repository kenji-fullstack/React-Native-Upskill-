import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import {
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  LockClosedIcon,
  CameraIcon,
} from 'react-native-heroicons/outline';

const { height: screenHeight } = Dimensions.get('window');

// SignupStep1.tsx
export default function SignupStep1({ onNext }: { onNext: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretPin, setSecretPin] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);

  return (
    <View className="flex-1 bg-white">
      {/* Progress Steps */}
      <View className="px-6 pb-6 pt-16">
        <View className="mb-6 flex-row items-center justify-between">
          {/* Step 1 - Active */}
          <View className="flex-1 items-center">
            <View className="mb-2 h-8 w-8 items-center justify-center rounded-full bg-[#E36255]">
              <Text className="text-sm font-semibold text-white">1</Text>
            </View>
            <Text className="text-center text-xs font-medium text-[#222222]">
              Personal{'\n'}Information
            </Text>
          </View>

          {/* Connector Line */}
          <View className="mx-2 h-0.5 flex-1 bg-[#E0E0E0]" />

          {/* Step 2 - Inactive */}
          <View className="flex-1 items-center">
            <View className="mb-2 h-8 w-8 items-center justify-center rounded-full bg-[#E0E0E0]">
              <Text className="text-sm font-semibold text-[#BDBDBD]">2</Text>
            </View>
            <Text className="text-center text-xs font-medium text-[#BDBDBD]">
              Subscription{'\n'}Plans
            </Text>
          </View>

          {/* Connector Line */}
          <View className="mx-2 h-0.5 flex-1 bg-[#E0E0E0]" />

          {/* Step 3 - Inactive */}
          <View className="flex-1 items-center">
            <View className="mb-2 h-8 w-8 items-center justify-center rounded-full bg-[#E0E0E0]">
              <Text className="text-sm font-semibold text-[#BDBDBD]">3</Text>
            </View>
            <Text className="text-center text-xs font-medium text-[#BDBDBD]">
              Payment{'\n'}Details
            </Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 px-6">
        <Text
          className="mb-2 text-center text-[#222222]"
          style={{ fontSize: 24, fontWeight: '700' }}>
          Tell Us About Yourself
        </Text>

        <Text
          className="mb-8 text-center text-[#666666]"
          style={{ fontSize: 16, fontWeight: '400', lineHeight: 24 }}>
          Start by providing your personal information{'\n'}to personalize your account.
        </Text>

        {/* Upload Photo */}
        <View className="mb-8 items-center">
          <View className="h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#E0E0E0] bg-[#F5F5F5]">
            <CameraIcon size={32} color="#BDBDBD" />
          </View>
          <Text className="mt-2 text-center text-[#666666]" style={{ fontSize: 14 }}>
            Upload{'\n'}Photo
          </Text>
        </View>

        {/* Form Fields */}
        <View className="space-y-4">
          {/* Name */}
          <View className="flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
            <UserIcon size={20} color="#BDBDBD" />
            <TextInput
              className="ml-3 flex-1 text-base text-[#222222]"
              placeholder="Name"
              placeholderTextColor="#BDBDBD"
              value={name}
              onChangeText={setName}
              style={{ paddingVertical: 16, fontSize: 16 }}
            />
          </View>

          {/* Phone Number */}
          <View className="flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
            <PhoneIcon size={20} color="#BDBDBD" />
            <TextInput
              className="ml-3 flex-1 text-base text-[#222222]"
              placeholder="Phone Number"
              placeholderTextColor="#BDBDBD"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              style={{ paddingVertical: 16, fontSize: 16 }}
            />
          </View>

          {/* Email */}
          <View className="flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
            <EnvelopeIcon size={20} color="#BDBDBD" />
            <TextInput
              className="ml-3 flex-1 text-base text-[#222222]"
              placeholder="Email"
              placeholderTextColor="#BDBDBD"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={{ paddingVertical: 16, fontSize: 16 }}
            />
          </View>

          {/* Password */}
          <View className="flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
            <LockClosedIcon size={20} color="#BDBDBD" />
            <TextInput
              className="ml-3 flex-1 text-base text-[#222222]"
              placeholder="Password"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={{ paddingVertical: 16, fontSize: 16 }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="p-1">
              {showPassword ? (
                <EyeSlashIcon size={20} color="#BDBDBD" />
              ) : (
                <EyeIcon size={20} color="#BDBDBD" />
              )}
            </TouchableOpacity>
          </View>

          {/* Secret Pin */}
          <View className="flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
            <LockClosedIcon size={20} color="#BDBDBD" />
            <TextInput
              className="ml-3 flex-1 text-base text-[#222222]"
              placeholder="Secret Pin"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={!showPin}
              keyboardType="numeric"
              maxLength={4}
              value={secretPin}
              onChangeText={setSecretPin}
              style={{ paddingVertical: 16, fontSize: 16 }}
            />
            <TouchableOpacity onPress={() => setShowPin(!showPin)} className="p-1">
              {showPin ? (
                <EyeSlashIcon size={20} color="#BDBDBD" />
              ) : (
                <EyeIcon size={20} color="#BDBDBD" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Next Button */}
        <TouchableOpacity
          className="mb-8 flex-row items-center justify-center rounded-lg bg-[#E36255]"
          style={{ paddingVertical: 16 }}
          onPress={onNext}
          activeOpacity={0.8}>
          <Text className="mr-2 text-white" style={{ fontSize: 16, fontWeight: '600' }}>
            Next
          </Text>
          <View className="h-4 w-4 rotate-45 border-b-2 border-r-2 border-white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
