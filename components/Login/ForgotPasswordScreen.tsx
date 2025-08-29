import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { ArrowLeftIcon, PhoneIcon } from 'react-native-heroicons/outline';

const { height: screenHeight } = Dimensions.get('window');

// Forgot Password Screen Component
export default function ForgotPasswordScreen({
  onBack,
  onSendCode,
}: {
  onBack: () => void;
  onSendCode: () => void;
}) {
  const [phone, setPhone] = useState('');

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-6 pb-6 pt-16">
        <TouchableOpacity onPress={onBack}>
          <ArrowLeftIcon size={24} color="#222" />
        </TouchableOpacity>
        <Text
          className="ml-4 text-[#222222]"
          style={{
            fontSize: 18,
            fontWeight: '600',
          }}>
          Forgot Password
        </Text>
      </View>

      {/* Content Container */}
      <View className="flex-1 px-6">
        {/* Image */}
        <View className="mb-8 items-center" style={{ marginTop: screenHeight * 0.1 }}>
          <Image
            source={require('../../assets/images/ForgotPassword.png')}
            className="h-[144.77] w-[179.05]"
            resizeMode="contain"
          />
        </View>

        {/* Description */}
        <Text
          className="mb-8 text-center text-[#222222]"
          style={{
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 24,
          }}>
          Please enter your phone number to receive a{'\n'}verification code
        </Text>

        {/* Phone Input */}
        <View className="mb-8 flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
          <PhoneIcon size={20} color="#BDBDBD" />
          <TextInput
            className="ml-3 flex-1 text-base text-[#222222]"
            placeholder="Phone Number"
            placeholderTextColor="#BDBDBD"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            style={{
              paddingVertical: 16,
              fontSize: 16,
            }}
          />
        </View>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Send Code Button */}
        <TouchableOpacity
          className="mb-8 rounded-lg bg-[#E36255]"
          style={{ paddingVertical: 16 }}
          onPress={onSendCode}
          activeOpacity={0.8}>
          <Text
            className="text-center text-white"
            style={{
              fontSize: 16,
              fontWeight: '600',
            }}>
            Send Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
