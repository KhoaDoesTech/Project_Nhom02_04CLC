import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { grayBackgroundStyles } from '../../styles';

const BorrowAcquisition = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={grayBackgroundStyles.button}>
      <Text style={grayBackgroundStyles.text}>Borrow</Text>
    </TouchableOpacity>
  );
};

export default BorrowAcquisition;