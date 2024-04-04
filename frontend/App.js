import "react-native-gesture-handler";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import AppLoading from "expo-app-loading";

import {
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  WelcomeScreen,
} from "./screens";
import * as screens from "./screens";
import MenuComponent from "./components/MenuComponent";
import AuthConTextProvider, { AuthContext } from "./store/auth-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView>
      <MenuComponent />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={screens.WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={screens.LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={screens.SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FogotPassword"
        component={screens.ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function HomeMenu() {
  const authCtx = useContext(AuthContext);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerLeft: false,
        headerRight: () => <DrawerToggleButton />,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={screens.HomeScreen}
        options={({ navigation }) => ({
          //receive navigation here
          //navigation is defined  now you can use it
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingLeft: 20 }}
              onPress={() => navigation.navigate("Home")}
            ></TouchableOpacity>
          ),
          drawerPosition: "right",
          headerShown: false,
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={screens.ProfileScreen}
        options={({ navigation }) => ({
          //receive navigation here
          //navigation is defined  now you can use it
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingLeft: 20 }}
              onPress={() => navigation.navigate("Profile")}
            ></TouchableOpacity>
          ),
          drawerPosition: "right",
          headerShown: false,
        })}
      />

      <Drawer.Screen
        name="Account"
        component={screens.AccountScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 20 }}
              onPress={authCtx.logout}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Logout</Text>
            </TouchableOpacity>
          ),
          drawerPosition: "right",
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen
        name="Friend"
        component={screens.FriendScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Cart"
        component={screens.CartScreen}
        options={{ headerSxhown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Level"
        component={screens.LevelScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Revenue"
        component={screens.RevenueScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
      <Drawer.Screen
        name="Map"
        component={screens.MapScreen}
        options={{ headerShown: false, drawerPosition: "right" }}
      />
    </Drawer.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeMenu"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="HomeMenu"
        component={HomeMenu}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={screens.HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={screens.MapScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={screens.ProductScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Message"
        component={screens.MessageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={screens.ProductDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <Auth />}
      {authCtx.isAuthenticated && <HomeStack />}
    </NavigationContainer>
  );
}

function Root() {
  // const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("accessToken");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      // setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  // if (isTryingLogin) {
  //   return <AppLoading />;
  // }

  return <Navigation />;
}

export default function App() {
  return (
    <AuthConTextProvider>
      <Root />
    </AuthConTextProvider>
  );
}
