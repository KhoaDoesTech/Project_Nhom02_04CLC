import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

export default function HeaderButton({ onPress, icon }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
            {icon}
        </TouchableOpacity>
    );
};
