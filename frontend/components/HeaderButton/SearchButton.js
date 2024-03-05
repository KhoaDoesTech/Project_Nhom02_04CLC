import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const SearchButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={require('../../assets/images/search.png')} style={{ width: 30, height: 30, position: 'absolute', top: 60, right: 120}} />
    </TouchableOpacity>
  );
};

export default SearchButton;