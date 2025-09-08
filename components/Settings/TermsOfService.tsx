import React from 'react';
import { View, Text } from 'react-native';
import { DocumentTextIcon } from 'react-native-heroicons/solid';
import { ScreenLayout } from '../ui';

export default function TermsOfService({ onBack }: { onBack: () => void }) {
  return (
    <ScreenLayout title="Terms of Service" showBackButton onBackPress={onBack} scrollable>
      <View className="flex-1 px-6 py-4">
        {/* Header Icon and Title */}
        <View className="mb-8 items-center">
          <View className="mb-4 rounded-full bg-[#FFF5E0] p-4">
            <DocumentTextIcon size={32} color="#FBBF24" />
          </View>
          <Text className="text-2xl font-bold text-[#230806]">Terms of Service</Text>
        </View>

        {/* Terms Content */}
        <View className="space-y-6">
          <View>
            <Text className="mb-3 text-base font-semibold text-[#222]">1. Heading lorem ipsum</Text>
            <Text className="text-base leading-6 text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
            </Text>
          </View>

          <View>
            <Text className="mb-3 text-base font-semibold text-[#222]">2. Heading lorem ipsum</Text>
            <Text className="text-base leading-6 text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
            </Text>
          </View>

          <View>
            <Text className="mb-3 text-base font-semibold text-[#222]">3. Heading lorem ipsum</Text>
            <Text className="text-base leading-6 text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
            </Text>
          </View>

          <View>
            <Text className="mb-3 text-base font-semibold text-[#222]">4. Heading lorem ipsum</Text>
            <Text className="text-base leading-6 text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
            </Text>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
}
