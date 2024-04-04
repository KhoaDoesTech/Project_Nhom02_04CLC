import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Don't have account?</Text>
            <Pressable onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={styles.text}>Sign up Now</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 10
    },

    text: {
        color: '#38A59F',
        paddingHorizontal: 4
    }
});


