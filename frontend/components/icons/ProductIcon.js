import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function ProductIcon({ color }) {
    return (
        <View style={styles.container}>
            <Svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2}
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M10 3H3V10H10V3Z"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M21 3H14V10H21V3Z"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M21 14H14V21H21V14Z"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M10 14H3V21H10V14Z"
                    stroke={color}
                    stroke-width="2"
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
