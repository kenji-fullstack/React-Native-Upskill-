import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const onboardingData = [
  {
    image: require('../../assets/images/Image box-1.png'),
    title: 'Emergency Aid, Just a Tap Away',
    description:
      'Experience peace of mind knowing that help is just a tap away. TruAlert connects you with security professionals for prompt assistance in any emergency situation.',
  },
  {
    image: require('../../assets/images/Image box-2.png'),
    title: 'Unified Protection: Building Safer Communities',
    description:
      'From helping the elderly to supporting vulnerable individuals, TruAlert’s compassionate security personnel are dedicated to ensuring the safety and well-being of all community members.',
  },
  {
    image: require('../../assets/images/Image box-3.png'),
    title: 'Trusted Security Personnel at Your Service',
    description:
      'With TruAlert, you’re never alone. Our vigilant security professionals are always on standby, ready to respond swiftly to any emergency situation and ensure your safety on the go.',
  },
];

export default function Onboarding({ onGetStarted }: { onGetStarted: () => void }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < onboardingData.length - 1) setIndex(index + 1);
  };

  const handleSkip = () => {
    setIndex(onboardingData.length - 1);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header Image */}
      <Image
        source={onboardingData[index].image}
        className="h-[309px] w-full"
        style={{ height: 309, opacity: 1, top: 24 }}
        resizeMode="cover"
      />

      {/* Main Container */}
      <View
        className="absolute left-0 right-0 rounded-t-3xl bg-white px-6 pt-8"
        style={{
          width: '100%',
          height: 340,
          top: 276,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}>
        {/* Dots */}
        <View className="mb-4 flex-row items-center justify-center">
          {onboardingData.map((_, i) => (
            <View
              key={i}
              className={`mx-1 h-3 w-3 rounded-full ${i === index ? 'bg-[#E36255]' : 'bg-[#E0E0E0]'}`}
            />
          ))}
        </View>

        {/* Title */}
        <Text className="mb-2 text-center text-xl font-bold text-[#222]">
          {onboardingData[index].title}
        </Text>

        {/* Description */}
        <Text className="mb-6 text-center text-base text-[#222]">
          {onboardingData[index].description}
        </Text>

        {/* Spacer to push buttons to bottom */}
        <View className="flex-1" />

        {/* Buttons at Bottom */}
        {index < onboardingData.length - 1 ? (
          <View className="flex-row items-center justify-between">
            <TouchableOpacity onPress={handleSkip}>
              <Text className="text-base text-[#230806] underline">Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="ml-auto rounded-lg bg-[#E36255] px-8 py-3"
              onPress={handleNext}>
              <Text className="text-base font-bold text-white">Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity className="w-full rounded-lg bg-[#E36255] py-3" onPress={onGetStarted}>
            <Text className="text-center text-base font-bold text-white">Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
