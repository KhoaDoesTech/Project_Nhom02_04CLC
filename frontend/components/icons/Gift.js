import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Gift() {
    return (
        <View style={styles.container}>
            <Svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                strokeWidth={1.5}
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M13.3334 8V14.6667H2.66669V8"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M14.6666 4.66663H1.33331V7.99996H14.6666V4.66663Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M8 14.6666V4.66663"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M7.99998 4.66671H4.99998C4.55795 4.66671 4.13403 4.49111 3.82147 4.17855C3.50891 3.86599 3.33331 3.44207 3.33331 3.00004C3.33331 2.55801 3.50891 2.13409 3.82147 1.82153C4.13403 1.50897 4.55795 1.33337 4.99998 1.33337C7.33331 1.33337 7.99998 4.66671 7.99998 4.66671Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M8 4.66671H11C11.442 4.66671 11.866 4.49111 12.1785 4.17855C12.4911 3.86599 12.6667 3.44207 12.6667 3.00004C12.6667 2.55801 12.4911 2.13409 12.1785 1.82153C11.866 1.50897 11.442 1.33337 11 1.33337C8.66667 1.33337 8 4.66671 8 4.66671Z"
                    stroke="black"
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
