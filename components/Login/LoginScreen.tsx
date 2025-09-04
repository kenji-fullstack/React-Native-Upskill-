import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { EyeIcon, EyeSlashIcon, PhoneIcon, LockClosedIcon } from 'react-native-heroicons/solid';

import { Button, Input } from '../ui';

const { height: screenHeight } = Dimensions.get('window');

// Login Screen Component
export default function LoginScreen({
  onForgotPassword,
  onSignup,
  onLogin,
}: {
  onForgotPassword: () => void;
  onSignup: () => void;
  onLogin: () => void;
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
          <Input
            leftIcon={<PhoneIcon size={20} color="#BDBDBD" />}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            containerClassName="mb-4"
          />

          {/* Password Input */}
          <Input
            leftIcon={<LockClosedIcon size={20} color="#BDBDBD" />}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            rightIcon={showPassword ? <EyeSlashIcon size={20} color="#BDBDBD" /> : <EyeIcon size={20} color="#BDBDBD" />}
            onRightIconPress={() => setShowPassword(!showPassword)}
            rightIconLabel={showPassword ? "Hide password" : "Show password"}
            containerClassName="mb-3"
          />

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
          <Button
            title="Login"
            onPress={onLogin}
            fullWidth
            className="mb-4"
          />

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
