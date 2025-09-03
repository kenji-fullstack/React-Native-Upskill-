import React from 'react';
import { View, Text } from 'react-native';

interface SignupProgressStepsProps {
    currentStep: 1 | 2 | 3;
}

export default function SignupProgressSteps({ currentStep }: SignupProgressStepsProps) {
    const getStepStyle = (step: number) => {
        if (step <= currentStep) {
            return {
                circle: 'mb-2 h-8 w-8 items-center justify-center rounded-full bg-[#E36255]',
                text: 'text-center text-xs font-medium text-[#222222]',
                number: 'text-sm font-semibold text-white',
            };
        }
        return {
            circle: 'mb-2 h-8 w-8 items-center justify-center rounded-full border border-[#E0E0E0] bg-white',
            text: 'text-center text-xs font-medium text-[#BDBDBD]',
            number: 'text-sm font-semibold text-[#BDBDBD]',
        };
    };

    const getConnectorStyle = (step: number) => {
        return step < currentStep ? 'mx-2 h-0.5 flex-1 bg-[#E36255]' : 'mx-2 h-0.5 flex-1 bg-[#E0E0E0]';
    };

    return (
        <View className="px-6 pb-6 pt-16">
            <View className="mb-6 flex-row items-center justify-between">
                {/* Step 1 */}
                <View className="flex-1 items-center">
                    <View className={getStepStyle(1).circle}>
                        <Text className={getStepStyle(1).number}>1</Text>
                    </View>
                    <Text className={getStepStyle(1).text}>
                        Personal{'\n'}Information
                    </Text>
                </View>

                {/* Connector Line 1-2 */}
                <View className={getConnectorStyle(1)} />

                {/* Step 2 */}
                <View className="flex-1 items-center">
                    <View className={getStepStyle(2).circle}>
                        <Text className={getStepStyle(2).number}>2</Text>
                    </View>
                    <Text className={getStepStyle(2).text}>
                        Subscription{'\n'}Plans
                    </Text>
                </View>

                {/* Connector Line 2-3 */}
                <View className={getConnectorStyle(2)} />

                {/* Step 3 */}
                <View className="flex-1 items-center">
                    <View className={getStepStyle(3).circle}>
                        <Text className={getStepStyle(3).number}>3</Text>
                    </View>
                    <Text className={getStepStyle(3).text}>
                        Payment{'\n'}Details
                    </Text>
                </View>
            </View>
        </View>
    );
}
