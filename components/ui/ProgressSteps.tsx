import React from 'react';
import { View, Text } from 'react-native';

interface Step {
  label: string;
  sublabel?: string;
}

interface ProgressStepsProps {
  steps: Step[];
  currentStep: number;
  activeColor?: string;
  inactiveColor?: string;
  containerClassName?: string;
}

export default function ProgressSteps({
  steps,
  currentStep,
  activeColor = '#E36255',
  inactiveColor = '#E0E0E0',
  containerClassName = '',
}: ProgressStepsProps) {
  
  const getStepStyle = (stepIndex: number) => {
    const isActive = stepIndex < currentStep;
    const isCurrent = stepIndex === currentStep - 1;
    
    return {
      circle: `mb-2 h-8 w-8 items-center justify-center rounded-full ${
        isActive || isCurrent 
          ? 'bg-[#E36255]' 
          : 'border border-[#E0E0E0] bg-white'
      }`,
      text: `text-center text-xs font-medium ${
        isActive || isCurrent ? 'text-[#222222]' : 'text-[#BDBDBD]'
      }`,
      number: `text-sm font-semibold ${
        isActive || isCurrent ? 'text-white' : 'text-[#BDBDBD]'
      }`,
    };
  };

  const getConnectorStyle = (stepIndex: number) => {
    return stepIndex < currentStep - 1 
      ? `mx-2 h-0.5 flex-1 bg-[${activeColor}]` 
      : `mx-2 h-0.5 flex-1 bg-[${inactiveColor}]`;
  };

  return (
    <View className={`px-6 pb-6 pt-16 ${containerClassName}`}>
      <View className="mb-6 flex-row items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step */}
            <View className="flex-1 items-center">
              <View className={getStepStyle(index).circle}>
                <Text className={getStepStyle(index).number}>
                  {index + 1}
                </Text>
              </View>
              <Text className={getStepStyle(index).text}>
                {step.label}
                {step.sublabel && `\n${step.sublabel}`}
              </Text>
            </View>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <View className={getConnectorStyle(index)} />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}