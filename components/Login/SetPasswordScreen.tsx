import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowLeftIcon,
} from 'react-native-heroicons/outline';

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
      <View className="flex-row items-center px-6 pb-4 pt-20">
        <TouchableOpacity onPress={onBack}>
          <ArrowLeftIcon size={24} color="#222" className="mr-2" />
        </TouchableOpacity>
        <Text className="ml-1 text-xl font-bold">Set Password</Text>
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
          Please enter a new password, it must be{'\n'}changed with your previous one
        </Text>

        {/* New Password */}
        <View className="mb-4 flex-row items-center rounded-lg border border-[#E0E0E0] bg-[#F8F8F8] px-3">
          <LockClosedIcon size={20} color="#BDBDBD" />
          <TextInput
            className="ml-2 flex-1 py-3 text-base"
            placeholder="New Password"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeSlashIcon size={20} color="#BDBDBD" />
            ) : (
              <EyeIcon size={20} color="#BDBDBD" />
            )}
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <View className="mb-4 flex-row items-center rounded-lg border border-[#E0E0E0] bg-[#F8F8F8] px-3">
          <LockClosedIcon size={20} color="#BDBDBD" />
          <TextInput
            className="ml-2 flex-1 py-3 text-base"
            placeholder="Confirm Password"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={!showConfirm}
            value={confirm}
            onChangeText={setConfirm}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? (
              <EyeSlashIcon size={20} color="#BDBDBD" />
            ) : (
              <EyeIcon size={20} color="#BDBDBD" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Set Password Button at Bottom */}
      <View className="px-6 pb-8">
        <TouchableOpacity className="rounded-lg bg-[#E36255] py-3" onPress={onSetPassword}>
          <Text className="text-center text-base font-bold text-white">Set Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
