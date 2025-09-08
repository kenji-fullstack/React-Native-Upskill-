import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { InformationCircleIcon } from 'react-native-heroicons/solid';
import { ScreenLayout } from '../ui';

export default function AboutUs({ onBack }: { onBack: () => void }) {
  return (
    <ScreenLayout title="About us" showBackButton onBackPress={onBack} scrollable>
      <View className="flex-1 px-6 py-4">
        {/* Header Icon and Title */}
        <View className="mb-8 items-center">
          <View className="mb-4 rounded-full bg-[#FFF5E0] p-4">
            <InformationCircleIcon size={32} color="#FBBF24" />
          </View>
          <Text className="text-2xl font-bold text-[#230806]">About us</Text>
        </View>

        {/* Content */}
        <View className="space-y-4">
          <Text className="text-base leading-6 text-[#222]">
            At TruAlert, we are committed to creating safer communities through innovative
            technology and dedicated service. Whether you`re a user seeking security assistance or a
            security personnel ensuring public safety, TruAlert is here for you.
          </Text>

          <View>
            <Text className="mb-2 text-base font-bold text-[#222]">Our Mission</Text>
            <Text className="text-base leading-6 text-[#222]">
              Our mission is to empower individuals and communities with the tools and support
              needed to stay safe and secure. We believe in leveraging technology for the greater
              good and fostering collaboration between users and security personnel to build safer,
              more resilient communities.
            </Text>
          </View>

          <View>
            <Text className="mb-2 text-base font-bold text-[#222]">For users</Text>
            <Text className="text-base leading-6 text-[#222]">
              TruAlert is your trusted companion for instant security assistance. With just a tap,
              you can connect with nearby security personnel and receive prompt support in times of
              need. Our mission is to provide you with peace of mind and reassurance, wherever you
              go.
            </Text>
          </View>

          <View>
            <Text className="mb-2 text-base font-bold text-[#222]">For Security Personnel</Text>
            <Text className="text-base leading-6 text-[#222]">
              Joining TruAlert means becoming a vital part of our community safety network. As a
              security personnel, you play a crucial role in responding to emergencies and ensuring
              the well-being of our users. Together, we strive to create a safer environment for
              everyone.
            </Text>
          </View>

          <View>
            <Text className="mb-2 text-base font-bold text-[#222]">Contact us</Text>
            <Text className="text-base leading-6 text-[#E36255]">
              Have questions or feedback? We`d love to hear from you! Reach out to us at
              support@trualert.com.
            </Text>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
}
