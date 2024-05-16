import {
    Pressable,
    StatusBar,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
} from "react-native";
import { useContext } from "react";

import { AuthContext } from "../store/auth-context";
import BackButton from "../components/BackButton";
import { MenuButton } from "../components/HeaderButton";
import HeaderButton from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";


const ProfileScreen = ({ navigation }) => {
    const authCtx = useContext(AuthContext);
    const info = authCtx.userInfo;

    return (
        <ScrollView style={screenStyle}>
            <View style={headerStyle.container}>
                <BackButton onPress={() => navigation.goBack("Home")} />
                <Text style={headerStyle.text}>My Profile</Text>
                <HeaderButton
                    icon={<Ionicons name="reorder-three" size={30} color="black" />}
                    onPress={() => navigation.openDrawer('HomeMenu')}
                />
            </View>

            <View
                style={profileMenuStyles.view}
                onPress={() => navigation.navigate("Profile")}
            >
                <View style={profileMenuStyles.image.container}>
                    <Image
                        source={{
                            uri: "https://i.pinimg.com/564x/40/70/d9/4070d9574b34038f45af74f6221ec19a.jpg",
                        }}
                        style={profileMenuStyles.image.image}
                    />
                    <Pressable>
                        <Text style={profileMenuStyles.image.text}>Change photo</Text>
                    </Pressable>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={profileMenuStyles.text1}>{info.username}</Text>
                    <Text style={profileMenuStyles.text2}>{info.email}</Text>
                </View>
            </View>

            <View style={timeJoinTextStyle.container}>
                <Image
                    source={require("../assets/images/clock-icon.png")}
                    style={timeJoinTextStyle.image}
                />
                <Text style={timeJoinTextStyle.text}>Duck joined 1 day ago</Text>
            </View>

            <View style={formStyle.container}>
                <Text style={formStyle.text1}>Level</Text>
                <Image
                    source={require("../assets/images/level-1.png")}
                    style={formStyle.image}
                />
            </View>

            <View style={formStyle.container}>
                <Text style={formStyle.text1}>Badges</Text>
                <Text style={formStyle.text2}>No badges yet</Text>
            </View>

            <View style={formStyle.container}>
                <Text style={formStyle.text1}>Listings Offered</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={listFormStyle.container}>
                        <Text style={listFormStyle.text1}>0</Text>
                        <Text style={listFormStyle.text2}>Last 30 days</Text>
                    </View>
                    <View style={listFormStyle.container}>
                        <Text style={listFormStyle.text1}>0</Text>
                        <Text style={listFormStyle.text2}>All time</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const screenStyle = StyleSheet.create({
    flex: 1,
    marginTop: StatusBar.currentHeight,
});

const headerStyle = StyleSheet.create({
    container: {
        borderStyle: "solid",
        borderColor: "#D9D9D9",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginVertical: 10,
    },

    text: {
        fontSize: 26,
        fontWeight: "bold",
    },
});

const profileMenuStyles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginHorizontal: "5%",
        marginVertical: 30,
    },
    image: {
        container: {
            marginHorizontal: "5%",
            alignItems: "center",
        },
        image: {
            width: 130,
            height: 130,
            borderRadius: 30,
            marginVertical: 10,
        },
        text: {
            textDecorationLine: "underline",
        },
    },
    text1: {
        fontSize: 30,
        fontWeight: "bold",
    },
    text2: {
        fontSize: 20,
    },
});

const timeJoinTextStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: "#000000",
        paddingBottom: 10,
        marginHorizontal: "5%",
        marginVertical: 10,
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        marginHorizontal: 10,
        fontSize: 20,
        alignSelf: "flex-end",
    },
});

const formStyle = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "column",
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: "#000000",
        paddingBottom: 10,
        marginHorizontal: "5%",
        marginVertical: 10,
    },
    text1: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
    },
    text2: {
        fontSize: 20,
        alignSelf: "center",
        marginVertical: 20,
    },
    image: {
        alignSelf: "center",
        width: 100,
        height: 100,
    },
});

const listFormStyle = StyleSheet.create({
    container: {
        backgroundColor: "#E8E5E5",
        flexDirection: "column",
        marginHorizontal: "2%",
        marginVertical: 20,
        paddingVertical: 20,
        width: "45%",
    },
    text1: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
    },
    text2: {
        fontSize: 20,
        alignSelf: "center",
    },
});

export default ProfileScreen;
