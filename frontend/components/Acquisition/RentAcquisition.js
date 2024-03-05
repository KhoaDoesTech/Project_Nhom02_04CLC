import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { grayBackgroundStyles } from '../../styles';

const RentAcquisition = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={grayBackgroundStyles.button}>
      <Text style={grayBackgroundStyles.text}>Rent</Text>
    </TouchableOpacity>
  );
};

export default RentAcquisition;