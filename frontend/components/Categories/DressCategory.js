import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { unSelectedCategoryStyles } from '../../styles';

const DressCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={unSelectedCategoryStyles.text}>Dress</Text>
    </TouchableOpacity>
  );
};

export default DressCategory;