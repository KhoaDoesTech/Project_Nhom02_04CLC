import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function RightArrowIcon() {
    return (
        <View style={styles.container}>
            <Svg
                width="50"
                height="50"
                viewBox="0 0 39 50"
                fill="none"
                strokeWidth={2}
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M8.306 18.694c.408.408 1.07.408 1.478 0l5.913-5.9A1.04 1.04 0 0 0 16 11.97a1.04 1.04 0 0 0-.306-.761l-5.91-5.904a1.046 1.046 0 0 0-1.478 0 1.043 1.043 0 0 0 0 1.476l5.227 5.22-5.227 5.217a1.042 1.042 0 0 0 0 1.475Z"
                    stroke="#898989"
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
        height: 24,
    },
});