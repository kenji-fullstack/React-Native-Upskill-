import React from 'react';
import { View, Text } from 'react-native';
import { ExclamationTriangleIcon } from 'react-native-heroicons/solid';
import { Modal, Button } from '../ui';

export default function LogoutConfirmation({
  visible,
  onCancel,
  onLogout,
}: {
  visible: boolean;
  onCancel: () => void;
  onLogout: () => void;
}) {
  return (
    <Modal visible={visible} onClose={onCancel} dismissOnBackdropPress={false} blurBackground>
      <View className="w-full max-w-sm items-center rounded-2xl bg-white p-6 shadow-2xl">
        {/* Warning Icon */}
        <View className="mb-6 items-center">
          <View className="h-16 w-16 items-center justify-center rounded-full bg-[#FFF5E0]">
            <ExclamationTriangleIcon size={32} color="#FBBF24" />
          </View>
        </View>

        {/* Message */}
        <Text className="mb-8 text-center text-base font-semibold text-[#222]">
          Are you sure you want to logout?
        </Text>

        {/* Buttons */}
        <View className="w-full flex-row space-x-3">
          <Button title="Cancel" variant="outline" onPress={onCancel} className="flex-1" />
          <Button title="Logout" variant="primary" onPress={onLogout} className="flex-1" />
        </View>
      </View>
    </Modal>
  );
}
