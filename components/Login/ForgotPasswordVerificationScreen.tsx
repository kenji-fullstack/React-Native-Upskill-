import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { ArrowLeftIcon, KeyIcon } from 'react-native-heroicons/outline';

export default function ForgotPasswordVerificationScreen({
  onBack,
  onVerify,
}: {
  onBack: () => void;
  onVerify: () => void;
}) {
  const [code, setCode] = useState('');

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-6 pb-4 pt-20">
        <TouchableOpacity onPress={onBack}>
          <ArrowLeftIcon size={24} color="#222" className="mr-2" />
        </TouchableOpacity>
        <Text className="ml-1 text-xl font-bold">Verification</Text>
      </View>

      {/* Center Content */}
      <View className="flex-1 justify-center px-6">
        <View className="mb-4 items-center">
          <Image
            source={require('../../assets/images/ForgotPassword.png')}
            className="h-[140px] w-[180px]"
            resizeMode="contain"
          />
        </View>

        <Text className="mb-6 text-center text-base text-[#222]">
          Please enter 4-digit verification code sent on{'\n'}your number
        </Text>

        <View className="mb-4 flex-row items-center rounded-lg border border-[#E0E0E0] bg-[#F8F8F8] px-3">
          <KeyIcon size={20} color="#BDBDBD" />
          <TextInput
            className="ml-2 flex-1 py-3 text-base"
            placeholder="Verification Code"
            placeholderTextColor="#BDBDBD"
            keyboardType="number-pad"
            maxLength={4}
            value={code}
            onChangeText={setCode}
          />
        </View>

        <TouchableOpacity>
          <Text className="mb-4 text-center text-base text-[#222] underline">Resend Code</Text>
        </TouchableOpacity>
      </View>

      {/* Verify Code Button at Bottom */}
      <View className="px-6 pb-8">
        <TouchableOpacity className="rounded-lg bg-[#E36255] py-3" onPress={onVerify}>
          <Text className="text-center text-base font-bold text-white">Verify Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
