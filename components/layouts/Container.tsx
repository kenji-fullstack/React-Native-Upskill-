import React from 'react';
import { SafeAreaView, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  keyboardAvoiding?: boolean;
  safeArea?: boolean;
  className?: string;
  contentContainerStyle?: object;
}

export default function Container({
  children,
  scrollable = false,
  keyboardAvoiding = false,
  safeArea = true,
  className = '',
  contentContainerStyle = {},
}: ContainerProps) {
  const baseClassName = `flex-1 ${className}`;
  
  let content = (
    <View className={baseClassName} style={contentContainerStyle}>
      {children}
    </View>
  );

  if (scrollable) {
    content = (
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, ...contentContainerStyle }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className={baseClassName}>
          {children}
        </View>
      </ScrollView>
    );
  }

  if (keyboardAvoiding) {
    content = (
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {content}
      </KeyboardAvoidingView>
    );
  }

  if (safeArea) {
    content = (
      <SafeAreaView className="flex-1 bg-white">
        {content}
      </SafeAreaView>
    );
  }

  return content;
}