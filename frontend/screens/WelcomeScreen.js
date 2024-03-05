import React from 'react';
import { SafeAreaView, View, ImageBackground, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const backgroundImage = require('../assets/images/startApp.png');

const WelcomeScreen = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <SafeAreaView style={styles.PressableContainer}>
                    <Pressable style={styles.loginPressable}
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.loginPressableText}>Login</Text>
                    </Pressable>

                    <Pressable style={styles.signUpPressable}
                        onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.signUpPressableText}>Sign Up</Text>
                    </Pressable>
                </SafeAreaView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    PressableContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 30,
    },
    loginPressable: {
        width: '45%',
        backgroundColor: '#38A59F',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
    },
    signUpPressable: {
        width: '45%',
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
    },
    loginPressableText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 26,
    },
    signUpPressableText: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 26,
    },
});

export default WelcomeScreen;