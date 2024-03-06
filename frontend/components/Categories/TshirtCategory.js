import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { selectedCategoryStyles } from '../../styles';

const TshirtCategory = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={selectedCategoryStyles.text}>T-shirt</Text>
    </TouchableOpacity>
  );
};

export default TshirtCategory;