import { View, Text, Pressable, StyleSheet } from "react-native";
import CheckBox from 'expo-checkbox';
import { useState } from 'react';

export default function Option() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.autosignin}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={{ marginLeft: 5 }}>Auto sign in</Text>
            </View>
            <Pressable >
                <Text style={{ color: '#38A59F' }}>Forgot Password?</Text>
            </Pressable>
        </View >
    ); A
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 8
    },

    autosignin: {
        flexDirection: 'row',
        alignItems: 'center'
    }

});
