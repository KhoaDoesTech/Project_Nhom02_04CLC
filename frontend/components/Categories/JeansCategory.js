import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { unSelectedCategoryStyles } from '../../styles';

const JeansCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={unSelectedCategoryStyles.text}>Jeans</Text>
    </TouchableOpacity>
  );
};

export default JeansCategory;