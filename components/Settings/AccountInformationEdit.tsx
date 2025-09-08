import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CameraIcon } from 'react-native-heroicons/solid';
import { ScreenLayout, Input, Button, Avatar } from '../ui';

export default function AccountInformationEdit({
  onBack,
  onSave,
}: {
  onBack: () => void;
  onSave: () => void;
}) {
  const [name, setName] = useState('Sarah Thompson');
  const [phone, setPhone] = useState('(480) 555-0103');
  const [email, setEmail] = useState('sarahthompson@gmail.com');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');

  return (
    <ScreenLayout title="Edit Account Information" showBackButton onBackPress={onBack} scrollable>
      <View className="flex-1 px-6">
        {/* Profile Photo Section */}
        <View className="mb-8 items-center">
          <View className="relative">
            <Avatar source={require('../../assets/images/avatar-female.png')} size="large" />
            <TouchableOpacity
              className="absolute -bottom-2 -right-2 rounded-full bg-[#E36255] p-2"
              onPress={() => {}}
              activeOpacity={0.8}>
              <CameraIcon size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="mt-2" onPress={() => {}}>
            <Text className="text-sm font-medium text-[#E36255]">Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View className="space-y-4">
          <Input
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          <Input
            label="Phone Number"
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            label="Password"
            placeholder="Enter new password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Input
            label="Secret PIN"
            placeholder="Enter 4-digit PIN"
            value={pin}
            onChangeText={setPin}
            keyboardType="numeric"
            maxLength={4}
            secureTextEntry
          />
        </View>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Save Button */}
        <Button title="Save" onPress={onSave} fullWidth className="mb-8 mt-8" />
      </View>
    </ScreenLayout>
  );
}
