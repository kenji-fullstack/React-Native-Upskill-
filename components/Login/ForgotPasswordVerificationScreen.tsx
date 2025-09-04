import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { PhoneIcon } from 'react-native-heroicons/solid';

import { ScreenLayout, Input, Button } from '../ui';

const { height: screenHeight } = Dimensions.get('window');

// Verification Screen Component
export default function ForgotPasswordVerificationScreen({
  onBack,
  onVerify,
}: {
  onBack: () => void;
  onVerify: () => void;
}) {
  const [code, setCode] = useState('');

  return (
    <ScreenLayout
      title="Verification"
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
          Please enter 4-digit verification code sent on{'\n'}your number
        </Text>

        {/* Verification Code Input */}
        <Input
          leftIcon={<PhoneIcon size={20} color="#BDBDBD" />}
          placeholder="Verification Code"
          keyboardType="number-pad"
          maxLength={4}
          value={code}
          onChangeText={setCode}
          containerClassName="mb-6"
        />

        {/* Resend Code */}
        <TouchableOpacity className="mb-8">
          <Text
            className="text-center text-[#222222]"
            style={{
              fontSize: 16,
              fontWeight: '400',
              textDecorationLine: 'underline',
            }}>
            Resend Code
          </Text>
        </TouchableOpacity>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Verify Code Button */}
        <Button
          title="Verify Code"
          onPress={onVerify}
          fullWidth
          className="mb-8"
        />
      </View>
    </ScreenLayout>
  );
}
