import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import SignupProgressSteps from './SignupProgressSteps';

export default function SignupStep2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly' | null>(null);

  // Handle Android back button
  useEffect(() => {
    const backAction = () => {
      onBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [onBack]);

  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      {/* Progress Steps */}
      <SignupProgressSteps currentStep={2} />

      {/* Content */}
      <View className="flex-1 px-6">
        <Text
          className="mb-2 text-center text-[#222222]"
          style={{ fontSize: 24, fontWeight: '700' }}>
          Choose Your Plan
        </Text>

        <Text
          className="mb-8 text-center text-[#666666]"
          style={{ fontSize: 16, fontWeight: '400', lineHeight: 24 }}>
          Select the subscription plan that best suits{'\n'}your needs and preferences.
        </Text>

        {/* Plan Cards */}
        <View className="mb-8 space-y-4">
          {/* Annual Guardian Plan */}
          <TouchableOpacity
            className={`rounded-lg border-2 p-4 ${
              selectedPlan === 'annual'
                ? 'border-[#E36255] bg-[#FFF5F4]'
                : 'border-[#E5E5E5] bg-white'
            }`}
            onPress={() => setSelectedPlan('annual')}
            activeOpacity={0.8}
            accessibilityLabel="Annual Guardian Plan"
            accessibilityRole="radio"
            accessibilityState={{ checked: selectedPlan === 'annual' }}>
            <View className="mb-3 flex-row items-center justify-between">
              <Text className="text-[#222222]" style={{ fontSize: 18, fontWeight: '600' }}>
                Annual Guardian
              </Text>
              {selectedPlan === 'annual' && (
                <View className="rounded bg-[#E36255] px-2 py-1">
                  <Text className="text-xs font-medium text-white">Recommended</Text>
                </View>
              )}
            </View>

            <View className="mb-2 flex-row items-center">
              <Text className="mr-2 text-sm text-[#E36255]">⚡</Text>
              <Text className="text-sm text-[#666666]">3 Emergency responses/month</Text>
            </View>

            <View className="mb-3 flex-row items-center">
              <Text className="mr-2 text-sm text-[#E36255]">📅</Text>
              <Text className="text-sm text-[#666666]">2 Months Free</Text>
            </View>

            <Text className="font-bold text-[#222222]" style={{ fontSize: 24 }}>
              $129.99
            </Text>
          </TouchableOpacity>

          {/* Monthly Shield Plan */}
          <TouchableOpacity
            className={`rounded-lg border-2 p-4 ${
              selectedPlan === 'monthly'
                ? 'border-[#E36255] bg-[#FFF5F4]'
                : 'border-[#E5E5E5] bg-white'
            }`}
            onPress={() => setSelectedPlan('monthly')}
            activeOpacity={0.8}
            accessibilityLabel="Monthly Shield Plan"
            accessibilityRole="radio"
            accessibilityState={{ checked: selectedPlan === 'monthly' }}>
            <Text className="mb-3 text-[#222222]" style={{ fontSize: 18, fontWeight: '600' }}>
              Monthly Shield
            </Text>

            <View className="mb-3 flex-row items-center">
              <Text className="mr-2 text-sm text-[#E36255]">⚡</Text>
              <Text className="text-sm text-[#666666]">3 Emergency responses/month</Text>
            </View>

            <Text className="font-bold text-[#222222]" style={{ fontSize: 24 }}>
              $12.99
            </Text>
          </TouchableOpacity>
        </View>

        {/* Proceed Button */}
        <TouchableOpacity
          className={`mb-8 mt-8 flex-row items-center justify-center rounded-lg ${
            selectedPlan ? 'bg-[#E36255]' : 'bg-[#BDBDBD]'
          }`}
          style={{ paddingVertical: 16 }}
          onPress={onNext}
          activeOpacity={0.8}
          disabled={!selectedPlan}
          accessibilityLabel="Proceed to payment"
          accessibilityRole="button"
          accessibilityState={{ disabled: !selectedPlan }}>
          <Text className="mr-2 text-sm text-white">💳</Text>
          <Text className="text-white" style={{ fontSize: 16, fontWeight: '600' }}>
            Proceed to payment
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
