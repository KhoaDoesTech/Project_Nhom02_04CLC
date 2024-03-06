import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { blueBackgroundStyles } from '../../styles';

const DistanceAcquisition = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={blueBackgroundStyles.button}>
      <Image source={require('../../assets/images/arrow-down.png')} styles={{margin: 3, width: 7}} />
      <Text style={blueBackgroundStyles.text}>Km</Text>
    </TouchableOpacity>
  );
};

export default DistanceAcquisition;