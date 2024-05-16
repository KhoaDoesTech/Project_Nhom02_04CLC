import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AccountScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFirstName}
          value={firstName}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setLastName}
          value={lastName}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Save account"
          color="#38A59F"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-between',
    padding: 16,
  },
  row: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    borderRadius: 50,
    flex: 3,
    justifyContent: 'flex-end',
  },
});
