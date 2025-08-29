import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { EyeIcon, EyeSlashIcon, PhoneIcon, LockClosedIcon } from 'react-native-heroicons/solid';

const { height: screenHeight } = Dimensions.get('window');

// Login Screen Component
export default function LoginScreen({
  onForgotPassword,
  onSignup,
}: {
  onForgotPassword: () => void;
  onSignup: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-white">
      {/* Header Image */}
      <View className="relative" style={{ height: screenHeight * 0.45 }}>
        <Image
          source={require('../../assets/images/Login_header.png')}
          className="h-full w-full"
          resizeMode="cover"
        />
      </View>

      {/* Main Container */}
      <View
        className="flex-1 rounded-t-[32px] bg-white px-6"
        style={{
          marginTop: -32,
          paddingTop: 32,
          paddingBottom: 40,
        }}>
        {/* Welcome Text */}
        <Text
          className="mb-8 text-center text-[#222222]"
          style={{
            fontSize: 20,
            fontWeight: '700',
            lineHeight: 24,
          }}>
          Welcome Back!
        </Text>

        {/* Form Fields */}
        <View className="flex-1">
          {/* Phone Input */}
          <View className="mb-4 flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
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

          {/* Password Input */}
          <View className="mb-3 flex-row items-center rounded-lg border border-[#E5E5E5] bg-white px-4 py-1">
            <LockClosedIcon size={20} color="#BDBDBD" />
            <TextInput
              className="ml-3 flex-1 text-base text-[#222222]"
              placeholder="Password"
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

          {/* Forgot Password */}
          <TouchableOpacity className="mb-8 self-end" onPress={onForgotPassword}>
            <Text
              className="text-[#3366FF]"
              style={{
                fontSize: 14,
                fontWeight: '400',
                textDecorationLine: 'underline',
              }}>
              Forgot Password
            </Text>
          </TouchableOpacity>

          {/* Spacer */}
          <View className="flex-1" />

          {/* Login Button */}
          <TouchableOpacity
            className="mb-4 rounded-lg bg-[#E36255]"
            style={{ paddingVertical: 16 }}
            activeOpacity={0.8}>
            <Text
              className="text-center text-white"
              style={{
                fontSize: 16,
                fontWeight: '600',
              }}>
              Login
            </Text>
          </TouchableOpacity>

          {/* Signup Link */}
          <View className="flex-row justify-center">
            <Text className="text-[#666666]" style={{ fontSize: 14, fontWeight: '400' }}>
              Don`t have an account?{' '}
            </Text>
            <TouchableOpacity onPress={onSignup}>
              <Text
                className="text-[#3366FF]"
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  textDecorationLine: 'underline',
                }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
