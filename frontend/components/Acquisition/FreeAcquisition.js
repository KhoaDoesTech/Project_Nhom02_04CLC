import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { blueBackgroundStyles } from '../../styles';

const FreeAcquisition = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={blueBackgroundStyles.button}>
      <Text style={blueBackgroundStyles.text}>Free</Text>
    </TouchableOpacity>
  );
};

export default FreeAcquisition;