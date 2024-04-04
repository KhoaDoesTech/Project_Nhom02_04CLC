import { StyleSheet, View, Modal, Image, Text, Pressable } from 'react-native';
import ButtonLogin from '../components/Auth/components/Button'
import InputField from '../components/Auth/InputField'

export default function ForgotPasswordScreen(props) {
    return (
        <View animationType="slide">
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable onPress={props.isClose}>
                        <Image style={styles.header__image} source={require("../assets/images/icons-back-arrow.png")} />
                    </Pressable>
                    <Text style={styles.header__content}>Reset Password</Text>
                </View>
                <View>
                    <Text style={styles.notify}>At least 9 character, with uppercase and lowercase letter.</Text>
                    <InputField placeHolder="Enter User Name" isShowed={false} source={require("../assets/images/icons-user.png")} />
                    <InputField placeHolder="Enter Password" isShowed={true} source={require("../assets/images/icons-lock.png")} />
                    <InputField placeHolder="Confirm Password" isShowed={true} source={require("../assets/images/icons-lock.png")} />
                    <ButtonLogin content="Reset password" />
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
    },

    header__image: {
        marginRight: 8,
        width: 35
    },

    header__content: {
        fontSize: 20,
        fontWeight: '700'
    },

    notify: {
        marginTop: 16,
        marginBottom: 32,
        marginHorizontal: 9,
        width: '70%',
        color: '#ccc'
    }
});