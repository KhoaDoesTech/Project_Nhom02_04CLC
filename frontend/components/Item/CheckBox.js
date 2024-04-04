// CheckBox.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CheckBox({ label, isChecked, onCheck }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onCheck}>
            <Ionicons name={isChecked ? 'checkbox' : 'square-outline'} size={24} color="black" />
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 3,
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        marginHorizontal: 4
    }
});
