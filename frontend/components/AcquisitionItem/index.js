import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

export default function AcquisitionItem({ onPress, children }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.unSelectedText}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    unSelectedText: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 20,
        color: 'gray'
    },
    SelectedText: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 20,
        borderBottomWidth: 4,
    }
});
