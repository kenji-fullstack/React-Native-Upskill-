import React from 'react';
import { View, Text } from 'react-native';
import { CheckCircleIcon } from 'react-native-heroicons/solid';

import { Modal, Button } from '../ui';

export default function PasswordSuccessScreen({
  onContinue,
  visible = true,
}: {
  onContinue: () => void;
  visible?: boolean;
}) {
  return (
    <Modal
      visible={visible}
      onClose={() => {}}
      blurBackground
      dismissOnBackdropPress={false}
    >
      <View className="w-full max-w-sm bg-white rounded-2xl p-6 items-center shadow-2xl">
        {/* Success Icon */}
        <View className="mb-6 items-center">
          <View className="h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50]">
            <CheckCircleIcon size={32} color="#FFFFFF" />
          </View>
        </View>

        {/* Success Message */}
        <Text className="mb-2 text-center text-[#E36255]" style={{ fontSize: 20, fontWeight: '700' }}>
          Success!
        </Text>

        <Text className="mb-1 text-center text-[#222222]" style={{ fontSize: 16, fontWeight: '600' }}>
          Password Updated
        </Text>

        <Text className="mb-8 text-center text-[#666666]" style={{ fontSize: 14, fontWeight: '400', lineHeight: 20 }}>
          Your password has been successfully{'\n'}updated. You can now log in with your{'\n'}new password.
        </Text>

        <Button
          title="Continue"
          onPress={onContinue}
          fullWidth
        />
      </View>
    </Modal>
  );
}