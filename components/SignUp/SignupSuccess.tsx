import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    BackHandler,
} from 'react-native';
import { CheckCircleIcon } from 'react-native-heroicons/solid';
import { BlurView } from 'expo-blur';

export default function SignupSuccess({
    onContinue,
    onBack,
    visible = true,
}: {
    onContinue: () => void;
    onBack?: () => void;
    visible?: boolean;
}) {
    // Handle Android back button
    useEffect(() => {
        const backAction = () => {
            if (onBack) {
                onBack();
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove();
    }, [onBack]);

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onBack}
        >
            {/* Blurred Background Overlay */}
            <BlurView
                intensity={12}
                tint="default"
                className="flex-1 items-center justify-center px-8"
                style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)' }}
            >
                {/* Modal Content */}
                <View className="w-full max-w-sm bg-white rounded-2xl p-6 items-center shadow-2xl">
                    {/* Success Icon */}
                    <View className="mb-6 items-center">
                        <View className="h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50]">
                            <CheckCircleIcon size={32} color="#FFFFFF" />
                        </View>
                    </View>

                    {/* Success Message */}
                    <Text
                        className="mb-2 text-center text-[#E36255]"
                        style={{ fontSize: 20, fontWeight: '700' }}>
                        Congratulations!
                    </Text>

                    <Text
                        className="mb-1 text-center text-[#222222]"
                        style={{ fontSize: 16, fontWeight: '600' }}>
                        You&apos;re all set!
                    </Text>

                    <Text
                        className="mb-8 text-center text-[#666666]"
                        style={{ fontSize: 14, fontWeight: '400', lineHeight: 20 }}>
                        Your account has been successfully{'\n'}created. Welcome to TruAlert! Get ready to{'\n'}experience peace of mind with our security{'\n'}assistance services.
                    </Text>

                    {/* Login Button */}
                    <TouchableOpacity
                        className="w-full items-center justify-center rounded-lg bg-[#E36255]"
                        style={{ paddingVertical: 14 }}
                        onPress={onContinue}
                        activeOpacity={0.8}
                        accessibilityLabel="Login to continue"
                        accessibilityRole="button"
                    >
                        <Text className="text-white" style={{ fontSize: 16, fontWeight: '600' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </BlurView>
        </Modal>
    );
}