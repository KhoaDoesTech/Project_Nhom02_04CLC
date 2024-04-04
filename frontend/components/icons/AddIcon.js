import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function AddIcon() {
    return (
        <View style={styles.container}>
            <Svg
                width="50"
                height="50"
                viewBox="0 0 39 39"
                fill="none"
                strokeWidth={2}
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M19.5 8.125V30.875"
                    stroke="#FFFDFD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M8.125 19.5H30.875"
                    stroke="#FFFDFD"
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
