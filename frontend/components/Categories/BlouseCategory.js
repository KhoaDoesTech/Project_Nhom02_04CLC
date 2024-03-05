import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { unSelectedCategoryStyles } from '../../styles';

const BlouseCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={unSelectedCategoryStyles.text}>Blouse</Text>
    </TouchableOpacity>
  );
};

export default BlouseCategory;