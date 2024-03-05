import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { unSelectedCategoryStyles } from '../../styles';

const JacketCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={unSelectedCategoryStyles.text}>Jacket</Text>
    </TouchableOpacity>
  );
};

export default JacketCategory;