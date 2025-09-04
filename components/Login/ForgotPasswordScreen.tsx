import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { PhoneIcon } from 'react-native-heroicons/solid';

import { ScreenLayout, Input, Button } from '../ui';

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
    <ScreenLayout
      title="Forgot Password"
      showBackButton
      onBackPress={onBack}
    >
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
        <Input
          leftIcon={<PhoneIcon size={20} color="#BDBDBD" />}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          containerClassName="mb-8"
        />

        {/* Spacer */}
        <View className="flex-1" />

        {/* Send Code Button */}
        <Button
          title="Send Code"
          onPress={onSendCode}
          fullWidth
          className="mb-8"
        />
      </View>
    </ScreenLayout>
  );
}
