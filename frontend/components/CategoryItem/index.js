import React, { Children } from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

export default function CategoryItem({ onPress, children }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>

    );
};
const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
        backgroundColor: '#38A59F',
        justifyContent: 'center',
        borderRadius: 20,
    },
    text: {
        marginVertical: 4,
        fontWeight: 'bold',
        fontSize: 16, // For text-base equivalent
        color: 'white',
    },


});