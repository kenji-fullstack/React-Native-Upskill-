import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';
import {
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  LockClosedIcon,
  CameraIcon,
  ArrowRightIcon,
} from 'react-native-heroicons/solid';
import SignupProgressSteps from './SignupProgressSteps';
import FormInput from './FormInput';

export default function SignupStep1({
  onNext,
  onBack
}: {
  onNext: () => void;
  onBack?: () => void;
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretPin, setSecretPin] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);

  // Handle Android back button
  useEffect(() => {
    const backAction = () => {
      if (onBack) {
        onBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [onBack]);

  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {/* Progress Steps */}
      <SignupProgressSteps currentStep={1} />

      {/* Content */}
      <View className="flex-1 px-6">
        <Text
          className="mb-2 text-center text-[#222222]"
          style={{ fontSize: 24, fontWeight: '700' }}>
          Tell Us About Yourself
        </Text>

        <Text
          className="mb-8 text-center text-[#666666]"
          style={{ fontSize: 16, fontWeight: '400', lineHeight: 24 }}>
          Start by providing your personal information{'\n'}to personalize your account.
        </Text>

        {/* Upload Photo */}
        <TouchableOpacity
          className="mb-8 items-center"
          accessibilityLabel="Upload profile photo"
          accessibilityHint="Tap to select a photo from your device"
        >
          <View className="h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#E0E0E0] bg-[#F5F5F5]">
            <CameraIcon size={32} color="#BDBDBD" />
          </View>
        </TouchableOpacity>

        {/* Form Fields */}
        <View className="space-y-4">
          {/* Name */}
          <FormInput
            icon={<UserIcon size={20} color="#BDBDBD" />}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            accessibilityLabel="Name input"
            autoCapitalize="words"
            returnKeyType="next"
          />

          {/* Phone Number */}
          <FormInput
            icon={<PhoneIcon size={20} color="#BDBDBD" />}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            accessibilityLabel="Phone number input"
            returnKeyType="next"
          />

          {/* Email */}
          <FormInput
            icon={<EnvelopeIcon size={20} color="#BDBDBD" />}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            accessibilityLabel="Email input"
            returnKeyType="next"
          />

          {/* Password */}
          <FormInput
            icon={<LockClosedIcon size={20} color="#BDBDBD" />}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            accessibilityLabel="Password input"
            returnKeyType="next"
            rightIcon={
              showPassword ? (
                <EyeSlashIcon size={20} color="#BDBDBD" />
              ) : (
                <EyeIcon size={20} color="#BDBDBD" />
              )
            }
            onRightIconPress={() => setShowPassword(!showPassword)}
            rightIconLabel={showPassword ? "Hide password" : "Show password"}
          />

          {/* Secret Pin */}
          <FormInput
            icon={<LockClosedIcon size={20} color="#BDBDBD" />}
            placeholder="Secret Pin"
            secureTextEntry={!showPin}
            keyboardType="numeric"
            maxLength={4}
            value={secretPin}
            onChangeText={setSecretPin}
            accessibilityLabel="Secret pin input"
            returnKeyType="done"
            rightIcon={
              showPin ? (
                <EyeSlashIcon size={20} color="#BDBDBD" />
              ) : (
                <EyeIcon size={20} color="#BDBDBD" />
              )
            }
            onRightIconPress={() => setShowPin(!showPin)}
            rightIconLabel={showPin ? "Hide pin" : "Show pin"}
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          className="mt-8 mb-8 flex-row items-center justify-center rounded-lg bg-[#E36255]"
          style={{ paddingVertical: 16 }}
          onPress={onNext}
          activeOpacity={0.8}
          accessibilityLabel="Continue to next step"
          accessibilityRole="button"
        >
          <Text className="mr-2 text-white" style={{ fontSize: 16, fontWeight: '600' }}>
            Next
          </Text>
          <ArrowRightIcon size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
