import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const NotificationButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={require('../../assets/images/notification.png')} style={{ width: 31, height: 30, position: 'absolute', top: 60, right: 70}} />
    </TouchableOpacity>
  );
};

export default NotificationButton;