import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { grayBackgroundStyles } from '../../styles';

const FilterAcquisition = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={grayBackgroundStyles.button}>
      <Image source={require('../../assets/images/sliders.png')} />
    </TouchableOpacity>
  );
};

export default FilterAcquisition;