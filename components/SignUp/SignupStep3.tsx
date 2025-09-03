import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    BackHandler,
} from 'react-native';
import {
    CreditCardIcon,
    CalendarIcon,
    LockClosedIcon,
} from 'react-native-heroicons/solid';
import SignupProgressSteps from './SignupProgressSteps';
import FormInput from './FormInput';

export default function SignupStep3({
    onNext,
    onBack,
}: {
    onNext: () => void;
    onBack: () => void;
}) {
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    // Handle Android back button
    useEffect(() => {
        const backAction = () => {
            onBack();
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove();
    }, [onBack]);

    // Format card number with spaces
    const formatCardNumber = (text: string) => {
        const cleaned = text.replace(/\s/g, '');
        const match = cleaned.match(/.{1,4}/g);
        return match ? match.join(' ') : '';
    };

    // Format expiry date
    const formatExpiryDate = (text: string) => {
        const cleaned = text.replace(/\D/g, '');
        if (cleaned.length >= 2) {
            return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
        }
        return cleaned;
    };

    const handleCardNumberChange = (text: string) => {
        const cleaned = text.replace(/\s/g, '');
        if (cleaned.length <= 16) {
            setCardNumber(formatCardNumber(cleaned));
        }
    };

    const handleExpiryDateChange = (text: string) => {
        const formatted = formatExpiryDate(text);
        if (formatted.length <= 5) {
            setExpiryDate(formatted);
        }
    };

    return (
        <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
            {/* Progress Steps */}
            <SignupProgressSteps currentStep={3} />

            {/* Content */}
            <View className="flex-1 px-6">
                <Text
                    className="mb-2 text-center text-[#222222]"
                    style={{ fontSize: 24, fontWeight: '700' }}>
                    Payment Confirmation
                </Text>

                <Text
                    className="mb-8 text-center text-[#666666]"
                    style={{ fontSize: 16, fontWeight: '400', lineHeight: 24 }}>
                    Enter payment details to complete subscription{'\n'}setup and start enjoying our services
                </Text>

                {/* Card Preview */}
                <View className="mb-8 items-center">
                    <View className="relative h-48 w-80 overflow-hidden rounded-xl shadow-lg">
                        <Image
                            source={require('../../assets/images/Card.png')}
                            className="h-full w-full"
                            resizeMode="cover"
                        />
                    </View>
                </View>

                {/* Form Fields */}
                <View className="space-y-4">
                    {/* Card Holder Name */}
                    <FormInput
                        icon={<CreditCardIcon size={20} color="#BDBDBD" />}
                        placeholder="Card Holder Name"
                        value={cardHolderName}
                        onChangeText={setCardHolderName}
                        accessibilityLabel="Card holder name input"
                        autoCapitalize="words"
                        returnKeyType="next"
                    />

                    {/* Card Number */}
                    <FormInput
                        icon={<CreditCardIcon size={20} color="#BDBDBD" />}
                        placeholder="Card Number"
                        keyboardType="numeric"
                        value={cardNumber}
                        onChangeText={handleCardNumberChange}
                        accessibilityLabel="Card number input"
                        returnKeyType="next"
                    />

                    {/* CVV and Expiry Date Row */}
                    <View className="mb-4 flex-row space-x-4">
                        {/* CVV */}
                        <View className="flex-1">
                            <FormInput
                                icon={<LockClosedIcon size={20} color="#BDBDBD" />}
                                placeholder="CVV"
                                keyboardType="numeric"
                                value={cvv}
                                onChangeText={setCvv}
                                maxLength={4}
                                accessibilityLabel="CVV input"
                                secureTextEntry={true}
                                returnKeyType="next"
                            />
                        </View>

                        {/* Expiry Date */}
                        <View className="flex-1">
                            <FormInput
                                icon={<CalendarIcon size={20} color="#BDBDBD" />}
                                placeholder="MM/YY"
                                keyboardType="numeric"
                                value={expiryDate}
                                onChangeText={handleExpiryDateChange}
                                accessibilityLabel="Expiry date input"
                                returnKeyType="done"
                            />
                        </View>
                    </View>
                </View>

                {/* Buy Subscription Button */}
                <TouchableOpacity
                    className={`mt-8 mb-8 flex-row items-center justify-center rounded-lg ${cardHolderName && cardNumber.length >= 19 && cvv.length >= 3 && expiryDate.length === 5
                        ? 'bg-[#E36255]'
                        : 'bg-[#BDBDBD]'
                        }`}
                    style={{ paddingVertical: 16 }}
                    onPress={onNext}
                    activeOpacity={0.8}
                    disabled={!(cardHolderName && cardNumber.length >= 19 && cvv.length >= 3 && expiryDate.length === 5)}
                    accessibilityLabel="Buy subscription"
                    accessibilityRole="button"
                    accessibilityState={{
                        disabled: !(cardHolderName && cardNumber.length >= 19 && cvv.length >= 3 && expiryDate.length === 5)
                    }}
                >
                    <Text className="mr-2 text-white" style={{ fontSize: 16, fontWeight: '600' }}>
                        🛒 Buy Subscription
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}