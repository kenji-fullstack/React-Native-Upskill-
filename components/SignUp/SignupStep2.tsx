import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export default function SignupStep2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly' | null>(null);

  return (
    <View className="flex-1 bg-white">
      {/* Status Bar */}
      <View className="absolute left-0 right-0 top-0 z-10 flex-row items-center justify-between px-6 pt-12">
        <Text className="text-base font-semibold text-black">10:00</Text>
        <View className="flex-row items-center space-x-1">
          <View className="h-4 w-4 rounded-sm bg-black/60" />
          <View className="h-4 w-4 rounded-sm bg-black/60" />
          <View className="h-3 w-6 rounded-sm bg-black/60" />
        </View>
      </View>

      {/* Progress Steps */}
      <View className="px-6 pb-6 pt-16">
        <View className="mb-6 flex-row items-center justify-between">
          {/* Step 1 - Completed */}
          <View className="flex-1 items-center">
            <View className="mb-2 h-8 w-8 items-center justify-center rounded-full bg-[#E36255]">
              <Text className="text-sm font-semibold text-white">1</Text>
            </View>
            <Text className="text-center text-xs font-medium text-[#222222]">
              Personal{'\n'}Information
            </Text>
          </View>

          {/* Connector Line - Active */}
          <View className="mx-2 h-0.5 flex-1 bg-[#E36255]" />

          {/* Step 2 - Active */}
          <View className="flex-1 items-center">
            <View className="mb-2 h-8 w-8 items-center justify-center rounded-full bg-[#E36255]">
              <Text className="text-sm font-semibold text-white">2</Text>
            </View>
            <Text className="text-center text-xs font-medium text-[#222222]">
              Subscription{'\n'}Plans
            </Text>
          </View>

          {/* Connector Line - Inactive */}
          <View className="mx-2 h-0.5 flex-1 bg-[#E0E0E0]" />

          {/* Step 3 - Inactive */}
          <View className="flex-1 items-center">
            <View className="mb-2 h-8 w-8 items-center justify-center rounded-full bg-[#E0E0E0]">
              <Text className="text-sm font-semibold text-[#BDBDBD]">3</Text>
            </View>
            <Text className="text-center text-xs font-medium text-[#BDBDBD]">
              Payment{'\n'}Details
            </Text>
          </View>
        </View>
      </View>

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
            activeOpacity={0.8}>
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
            activeOpacity={0.8}>
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

        {/* Spacer */}
        <View className="flex-1" />

        {/* Proceed Button */}
        <TouchableOpacity
          className="mb-8 flex-row items-center justify-center rounded-lg bg-[#E36255]"
          style={{ paddingVertical: 16 }}
          onPress={onNext}
          activeOpacity={0.8}>
          <Text className="mr-2 text-sm text-white">💳</Text>
          <Text className="text-white" style={{ fontSize: 16, fontWeight: '600' }}>
            Proceed to payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
