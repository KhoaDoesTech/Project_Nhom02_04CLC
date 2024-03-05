import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { grayBackgroundStyles } from '../../styles';

const BuyAcquisition = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={grayBackgroundStyles.button}>
      <Text style={grayBackgroundStyles.text}>Buy</Text>
    </TouchableOpacity>
  );
};

export default BuyAcquisition;