import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { EyeIcon, EyeSlashIcon, PhoneIcon, LockClosedIcon } from 'react-native-heroicons/outline';

export default function LoginScreen({ onForgotPassword }: { onForgotPassword: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-white">
      {/* Header Image (includes logo and title) */}
      <Image
        source={require('../../assets/images/Login_header.png')}
        className="h-[309px] w-full"
        style={{ height: 309, opacity: 1, top: 24 }}
        resizeMode="cover"
      />

      {/* Main Container */}
      <View
        className="absolute left-0 right-0 rounded-t-3xl bg-white px-6 pt-8"
        style={{
          width: '100%',
          height: 481,
          top: 276,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}>
        <Text className="mb-6 text-center text-xl font-bold">Welcome Back!</Text>

        {/* Phone Input */}
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

        {/* Password Input */}
        <View className="mb-2 flex-row items-center rounded-lg border border-[#E0E0E0] bg-[#F8F8F8] px-3">
          <LockClosedIcon size={20} color="#BDBDBD" />
          <TextInput
            className="ml-2 flex-1 py-3 text-base"
            placeholder="Password"
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

        {/* Forgot Password */}
        <TouchableOpacity className="mb-6 self-end" onPress={onForgotPassword}>
          <Text className="text-sm text-[#230806] underline">Forgot Password</Text>
        </TouchableOpacity>

        {/* Spacer to push buttons to bottom */}
        <View className="flex-1" />

        {/* Login Button */}
        <TouchableOpacity className="mb-4 rounded-lg bg-[#E36255] py-5">
          <Text className="text-center text-base font-bold text-white">Login</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <View className="mb-2 flex-row justify-center">
          <Text className="text-sm text-[#444]">Dont have an account? </Text>
          <TouchableOpacity>
            <Text className="text-sm text-[#E36255] underline">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
