import React, { useState, useRef, useContext, useEffect } from "react";
import {
    SafeAreaView,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
} from "react-native";
import OtpIcon from "../components/icons/OtpIcon";
import { verifyAccount } from "../API/auth";
import { resendOtp } from "../API/auth";
import { AuthContext } from "../store/auth-context";

const OTPScreen = () => {
    const [otp, setOTP] = useState("");
    const [sendOtp, setSendOtp] = useState(false);
    const [isAbleToSend, setIsAbleToSend] = useState(true);
    const otpTextInputRefs = useRef([]);
    const authCtx = useContext(AuthContext);
    const userEmail = authCtx.userInfo.email;
    const displayEmail = userEmail.split("@");

    useEffect(() => {
        if (!sendOtp) {
            return;
        }

        const id = setTimeout(() => {
            setSendOtp(false);
        }, 1000)

        return (() => {
            clearTimeout(id);
        })
    }, [sendOtp])

    const handleOTPChange = (index, value) => {
        setOTP((prevOTP) => {
            const newOTP = [...prevOTP];
            newOTP[index] = value;
            return newOTP;
        });

        // Focus next input field
        if (value && index < otpTextInputRefs.current.length - 1) {
            otpTextInputRefs.current[index + 1].focus();
        }
    };

    const handleOTPFilled = async () => {

        const otpCode = otp.join("");
        try {
            const response = await verifyAccount({
                email: userEmail,
                otpCode: otpCode,
            });
            authCtx.authenticate({
                refreshToken: response.tokens.refreshToken,
                accessToken: response.tokens.accessToken,
                userId: response.user._id,
                username: response.user.usr_name,
                email: response.user.usr_email,
            });
        } catch (error) {
        }
    };

    const handleResendOtp = async () => {
        try {

            setTimeout(() => {
                setIsAbleToSend(false);
            }, 1000)
            if (isAbleToSend) {
                const response = await resendOtp({ email: userEmail })
                return response;
            }
            setTimeout(() => {
                setIsAbleToSend(true);
            }, 7000)
            setSendOtp(true);
        } catch (error) {
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <OtpIcon width={150} height={150} />
            <Text style={styles.title}>Enter verification code</Text>
            <Text style={styles.notify}>
                A verification code has been send to ****
                {displayEmail[0].slice(3, displayEmail[0].length)}@{displayEmail[1]}
            </Text>
            <View style={styles.otpContainer}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        ref={(ref) => (otpTextInputRefs.current[index] = ref)}
                        onChangeText={(value) => handleOTPChange(index, value)}
                        value={otp[index]}
                        maxLength={1}
                        keyboardType="numeric"
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleOTPFilled}>
                <Text style={styles.submitButtonText}>Verify</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 8, display: !sendOtp ? 'none' : 'inline' }}>
                <Text>{isAbleToSend ? 'The OTP has been resent to your email!' : 'Please wait 1 miniute before you want to resend OTP!'}</Text>
            </View>
            <View style={styles.resendOtpContainer}>
                <Text>Don't receive OTP code? </Text>
                <TouchableOpacity onPress={handleResendOtp}>
                    <Text style={styles.confirmResendOtp}>resend OTP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        flex: 1,
        marginBottom: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
    notify: {
        width: "100%",
        marginBottom: 12,
        fontSize: 15,
        textAlign: "center",
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    otpInput: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "15%",
    },
    submitButton: {
        width: "100%",
        marginTop: 20,
        backgroundColor: "#38A59F",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
    },
    submitButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    resendOtpContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 12
    },
    confirmResendOtp: {
        color: '#38A59F'
    }
});

export default OTPScreen;
