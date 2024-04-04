import { StyleSheet, View, Image, Text } from 'react-native';

import MapIcon from '../icons/MapIcon';

export default function Status() {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <MapIcon width={18} height={18} />
            </View>
            <Text style={styles.distance}>500m</Text>
            <Text style={styles.postedTime}>Just added</Text>
            <Image source={require('../../assets/images/share.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    icon: {
        width: 16,
        height: 16
    },

    distance: {
        fontWeight: '500',
        color: '#858585'
    },

    postedTime: {
        fontWeight: '500',
        color: '#38A59F'
    }

});