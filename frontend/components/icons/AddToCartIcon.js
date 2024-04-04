import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { LinearGradient, Path, Stop } from "react-native-svg";

export default function AddToCartIcon({ color }) {
    return (
        <View style={styles.container}>
            <Svg
                width="28"
                height="28"
                viewBox="1 0 26 26"
                fill="none"
                strokeWidth={2}
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    stroke={color}
                    d="M4.08 6.171a61.38 61.38 0 0 1-.203-1.084 888.116 888.116 0 0 1 2.812-.061c2.035-.042 4.748-.092 7.46-.125 2.713-.034 5.423-.05 7.452-.025a54.15 54.15 0 0 1 2.435.07c.172.011.317.023.434.035l-.018.18a47.782 47.782 0 0 1-.767 4.87c-.277 1.291-.62 2.535-1.025 3.446-.204.457-.41.801-.611 1.024-.202.223-.349.272-.442.272H7.357c-.096 0-.257-.055-.486-.3-.225-.24-.46-.608-.696-1.089-.47-.956-.896-2.254-1.255-3.578a54.933 54.933 0 0 1-.84-3.635Z"
                />
                <Path stroke={color} d="M7.857 18.045h13.714" />
                <Path
                    stroke={color}
                    d="M0-.5h5.549"
                    transform="matrix(-.61782 -.78632 .8131 -.58212 4.429 4.364)"
                />
                <Path
                    stroke={color}
                    d="M11.929 21.818c0 .907-.778 1.682-1.786 1.682-1.009 0-1.786-.774-1.786-1.682 0-.907.777-1.681 1.786-1.681 1.008 0 1.786.774 1.786 1.681ZM21.071 21.818c0 .907-.777 1.682-1.785 1.682-1.009 0-1.786-.774-1.786-1.682 0-.907.777-1.681 1.786-1.681 1.008 0 1.785.774 1.785 1.681Z"
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
