import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LockClosedIcon, EyeIcon, EyeSlashIcon, ArrowLeftIcon } from 'react-native-heroicons/solid';

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
          Set Password
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
          Please enter a new password, it must be{'\n'}changed with your previous one
        </Text>

        {/* New Password Input */}
        <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
          <LockClosedIcon size={20} color="#BDBDBD" />
          <TextInput
            className="ml-3 flex-1 text-base text-[#222222]"
            placeholder="New Password"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={{
              paddingVertical: 16,
              fontSize: 16,
            }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="p-1">
            {showPassword ? (
              <EyeSlashIcon size={20} color="#BDBDBD" />
            ) : (
              <EyeIcon size={20} color="#BDBDBD" />
            )}
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View className="mb-8 flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
          <LockClosedIcon size={20} color="#BDBDBD" />
          <TextInput
            className="ml-3 flex-1 text-base text-[#222222]"
            placeholder="Confirm Password"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={!showConfirm}
            value={confirm}
            onChangeText={setConfirm}
            style={{
              paddingVertical: 16,
              fontSize: 16,
            }}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)} className="p-1">
            {showConfirm ? (
              <EyeSlashIcon size={20} color="#BDBDBD" />
            ) : (
              <EyeIcon size={20} color="#BDBDBD" />
            )}
          </TouchableOpacity>
        </View>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Set Password Button */}
        <TouchableOpacity
          className="mb-8 rounded-lg bg-[#E36255]"
          style={{ paddingVertical: 16 }}
          onPress={onSetPassword}
          activeOpacity={0.8}>
          <Text
            className="text-center text-white"
            style={{
              fontSize: 16,
              fontWeight: '600',
            }}>
            Set Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
