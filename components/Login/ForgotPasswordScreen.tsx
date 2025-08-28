import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { PhoneIcon, ArrowLeftIcon } from 'react-native-heroicons/outline';

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
      <View className="flex-row items-center px-6 pb-4 pt-20">
        <TouchableOpacity onPress={onBack}>
          <ArrowLeftIcon size={24} color="#222" className="mr-2" />
        </TouchableOpacity>
        <Text className="ml-1 text-xl font-bold">Forgot Password</Text>
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
          Please enter your phone number to receive a{'\n'}verification code
        </Text>

        <View className="mb-4 flex-row items-center rounded-lg border border-[#E0E0E0] bg-[#F8F8F8] px-3">
          <PhoneIcon size={20} color="#BDBDBD" />
          <TextInput
            className="ml-2 flex-1 py-3 text-base"
            placeholder="Phone Number"
            placeholderTextColor="#BDBDBD"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>

      {/* Send Code Button at Bottom */}
      <View className="px-6 pb-8">
        <TouchableOpacity className="rounded-lg bg-[#E36255] py-3" onPress={onSendCode}>
          <Text className="text-center text-base font-bold text-white">Send Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
