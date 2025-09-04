import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { LockClosedIcon, EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';

import { ScreenLayout, Input, Button } from '../ui';

const { height: screenHeight } = Dimensions.get('window');

// Set Password Screen Component
export default function SetPasswordScreen({
  onBack,
  onSetPassword,
}: {
  onBack: () => void;
  onSetPassword: () => void;
}) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <ScreenLayout
      title="Set Password"
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
          Please enter a new password, it must be{'\n'}changed with your previous one
        </Text>

        {/* New Password Input */}
        <Input
          leftIcon={<LockClosedIcon size={20} color="#BDBDBD" />}
          placeholder="New Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          rightIcon={showPassword ? <EyeSlashIcon size={20} color="#BDBDBD" /> : <EyeIcon size={20} color="#BDBDBD" />}
          onRightIconPress={() => setShowPassword(!showPassword)}
          rightIconLabel={showPassword ? "Hide password" : "Show password"}
          containerClassName="mb-4"
        />

        {/* Confirm Password Input */}
        <Input
          leftIcon={<LockClosedIcon size={20} color="#BDBDBD" />}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirm}
          value={confirm}
          onChangeText={setConfirm}
          rightIcon={showConfirm ? <EyeSlashIcon size={20} color="#BDBDBD" /> : <EyeIcon size={20} color="#BDBDBD" />}
          onRightIconPress={() => setShowConfirm(!showConfirm)}
          rightIconLabel={showConfirm ? "Hide password" : "Show password"}
          containerClassName="mb-8"
        />

        {/* Spacer */}
        <View className="flex-1" />

        {/* Set Password Button */}
        <Button
          title="Set Password"
          onPress={onSetPassword}
          fullWidth
          className="mb-8"
        />
      </View>
    </ScreenLayout>
  );
}
