import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  ExclamationTriangleIcon,
  UserIcon,
  MapPinIcon,
  ClockIcon,
} from 'react-native-heroicons/solid';
import { ScreenLayout, Card } from '../ui';

const historyData = [
  {
    time: '12:23am, 04/25/2024',
    responseTime: '23min',
    name: 'John Cooper',
    location: '2118 Thornridge Cir.\nSyracuse, Connecticut\n35624',
  },
  {
    time: '12:23am, 04/25/2024',
    responseTime: '23min',
    name: 'John Cooper',
    location: '2118 Thornridge Cir.\nSyracuse, Connecticut\n35624',
  },
  {
    time: '12:23am, 04/25/2024',
    responseTime: '23min',
    name: 'John Cooper',
    location: '2118 Thornridge Cir.\nSyracuse, Connecticut\n35624',
  },
];

export default function AccountHistory({ onBack }: { onBack: () => void }) {
  return (
    <ScreenLayout title="Account History" showBackButton onBackPress={onBack} scrollable>
      <View className="flex-1 px-6 py-2">
        {historyData.map((item, idx) => (
          <Card key={idx} variant="outlined" className="mb-4">
            <View className="space-y-3">
              {/* Emergency Type and Time */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <ExclamationTriangleIcon size={18} color="#E36255" className="mr-2" />
                  <Text className="text-sm font-medium text-[#222]">Emergency Needed</Text>
                </View>
                <Text className="text-xs text-[#666]">{item.time}</Text>
              </View>

              {/* Response Time */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <ClockIcon size={16} color="#E36255" className="mr-2" />
                  <Text className="text-sm text-[#666]">Response Time</Text>
                </View>
                <Text className="text-sm text-[#222]">{item.responseTime}</Text>
              </View>

              {/* Security Personnel */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <UserIcon size={16} color="#E36255" className="mr-2" />
                  <Text className="text-sm text-[#666]">Security Personnel</Text>
                </View>
                <Text className="text-sm text-[#222]">{item.name}</Text>
              </View>

              {/* Location */}
              <View className="flex-row items-start justify-between">
                <View className="flex-row items-start">
                  <MapPinIcon size={16} color="#E36255" className="mr-2 mt-0.5" />
                  <Text className="text-sm text-[#666]">Location</Text>
                </View>
                <Text className="ml-4 flex-1 text-right text-sm text-[#222]">{item.location}</Text>
              </View>
            </View>
          </Card>
        ))}
      </View>
    </ScreenLayout>
  );
}
