import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StatusBar } from 'react-native';
import { BlurView } from 'expo-blur';

interface HomeExtraInformationProps {
    visible: boolean;
    onClose: () => void;
    onSendAlert: (info: string) => void;
}

export default function HomeExtraInformation({
    visible,
    onClose,
    onSendAlert
}: HomeExtraInformationProps) {
    const [emergencyInfo, setEmergencyInfo] = useState('');

    const handleSendAlert = () => {
        onSendAlert(emergencyInfo);
        setEmergencyInfo('');
    };

    const handleSkip = () => {
        onSendAlert('');
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.3)" translucent />
            
            {/* Blurred Background */}
            <BlurView intensity={50} className="flex-1">
                <TouchableOpacity 
                    className="flex-1" 
                    activeOpacity={1}
                    onPress={onClose}
                />
                
                {/* Bottom Popup Container */}
                <View className="absolute bottom-0 left-0 right-0">
                    <View className="bg-white rounded-t-3xl px-6 pt-6 pb-8 mx-0">
                        {/* Handle bar */}
                        <View className="items-center mb-4">
                            <View className="w-10 h-1 bg-gray-300 rounded-full" />
                        </View>

                        {/* Header */}
                        <View className="items-center mb-6">
                            <Text className="text-xl font-bold text-gray-900">Emergency Details</Text>
                        </View>

                        {/* Description */}
                        <View className="mb-6">
                            <Text className="text-gray-600 text-center leading-6">
                                Enter Additional information for your{'\n'}
                                Security Personal
                            </Text>
                        </View>

                        {/* Text Input */}
                        <View className="mb-8">
                            <TextInput
                                className="border border-gray-200 rounded-xl p-4 h-32 text-gray-900"
                                placeholder="Type here..."
                                placeholderTextColor="#9CA3AF"
                                multiline
                                textAlignVertical="top"
                                value={emergencyInfo}
                                onChangeText={setEmergencyInfo}
                            />
                        </View>

                        {/* Buttons */}
                        <View className="space-y-3">
                            <TouchableOpacity
                                className="bg-red-500 rounded-xl py-4"
                                onPress={handleSendAlert}
                            >
                                <Text className="text-white font-semibold text-center text-lg">Send Alert</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleSkip}>
                                <Text className="text-blue-500 font-medium text-center">Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </BlurView>
        </Modal>
    );
}
