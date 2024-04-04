import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function RateIcon({ color }) {
    return (
        <View style={styles.container}>
            <Svg
                width="17"
                height="20"
                viewBox="2 -2 52 36"
                strokeWidth={2}
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M24 34.54 36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z"
                    stroke={color}
                    wid stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24
    },
});
