import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

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
      {/* Header Image Container */}
      <View
        className="relative"
        style={{ height: screenHeight * 0.57 }} // ~57% of screen height
      >
        <Image source={onboardingData[index].image} className="h-full w-full" resizeMode="cover" />
      </View>

      {/* Content Container */}
      <View
        className="absolute bottom-0 left-0 right-0 rounded-t-[32px] bg-white px-6"
        style={{
          height: screenHeight * 0.48, // ~48% of screen height
          paddingTop: 32,
          paddingBottom: 40,
        }}>
        {/* Pagination Dots */}
        <View className="mb-8 flex-row items-center justify-center">
          {onboardingData.map((_, i) => (
            <View
              key={i}
              className={`mx-1 rounded-full ${
                i === index ? 'h-3 w-6 bg-[#E36255]' : 'h-3 w-3 bg-[#E0E0E0]'
              }`}
            />
          ))}
        </View>

        {/* Content */}
        <View className="flex-1 justify-between">
          <View>
            {/* Title */}
            <Text
              className="mb-4 text-center leading-7 text-[#222222]"
              style={{
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 28.8,
              }}>
              {onboardingData[index].title}
            </Text>

            {/* Description */}
            <Text
              className="px-2 text-center leading-6 text-[#222222]"
              style={{
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                opacity: 0.8,
              }}>
              {onboardingData[index].description}
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="mt-8">
            {index < onboardingData.length - 1 ? (
              <View className="flex-row items-center justify-between">
                <TouchableOpacity onPress={handleSkip} className="px-4 py-3" activeOpacity={0.7}>
                  <Text
                    className="text-[#230806]"
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      textDecorationLine: 'underline',
                    }}>
                    Skip
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-row items-center rounded-lg bg-[#E36255] px-8 py-3"
                  onPress={handleNext}
                  activeOpacity={0.8}
                  style={{ minWidth: 100 }}>
                  <Text
                    className="mr-2 text-white"
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Next
                  </Text>
                  {/* <View className="h-4 w-4 translate-x-0.5 rotate-45 transform border-b-2 border-r-2 border-white" />  */}
                  {/* Arrow Icon */}
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                className="w-full rounded-lg bg-[#E36255] py-4"
                onPress={onGetStarted}
                activeOpacity={0.8}>
                <Text
                  className="text-center text-white"
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
