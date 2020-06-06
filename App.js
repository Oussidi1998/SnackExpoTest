import * as React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ForgetPassword";
import NewPassword from "./components/NewPassword";
import Slides from "./components/SlidesFirstTime";
import BottomTabs from "./components/BottomTabs";
import SplashPage from "./components/SplashScreen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default class App extends React.Component {
  async componentDidMount() {
    try {
      await Font.loadAsync({
        MontserratBold: require("./assets/fonts/Montserrat-Bold.otf"),
        MontserratItalic: require("./assets/fonts/Montserrat-Italic.otf"),
        MontserratLight: require("./assets/fonts/Montserrat-Light.otf"),
        MontserratMedium: require("./assets/fonts/Montserrat-Medium.otf"),
        MontserratRegular: require("./assets/fonts/Montserrat-Regular.otf"),
      });
    } catch (error) {
      console.log(error);
      return;
    }
  }
  render() {
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashPage} />
          <Stack.Screen name="getStarted" component={Slides} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="reset_password" component={ResetPassword} />
          <Stack.Screen name="new_password" component={NewPassword} />
          <Stack.Screen name="home" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
