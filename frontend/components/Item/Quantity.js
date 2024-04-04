import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Quantity() {
    return (
        <TouchableOpacity style={styles.quantityContainer}>
            {/* <Ionicons name="remove-circle-outline" size={24} color="black" />
            <Text style={styles.quantityText}>2</Text>
            <Ionicons name="add-circle-outline" size={24} color="black" /> */}
            <Feather name="minus-square" size={20} color="black" />
                <Text style={styles.quantityText}>2</Text>
            <Feather name="plus-square" size={20} color="black" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityText: {
        fontSize: 15,
        color: 'black',
        marginHorizontal: 8,
    }
});