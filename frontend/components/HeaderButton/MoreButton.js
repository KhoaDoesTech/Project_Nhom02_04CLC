import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const MoreButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={require('../../assets/images/more.png')} style={{ width: 28, height: 25, position: 'absolute', top: 62, right: 20}} />
    </TouchableOpacity>
  );
};

export default MoreButton;