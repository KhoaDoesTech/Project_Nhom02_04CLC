import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Delete() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  deleteButton: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
});
