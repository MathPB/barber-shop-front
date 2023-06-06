import { Appearance } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Entrance from './src/views/entrance';
import EntranceLogin from './src/views/entrance-login';
import CreateAccount from "./src/views/create-account";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          backgroundColor: Appearance.getColorScheme("dark")
        }}
      >
        <Stack.Screen name="Entrance" component={Entrance} />
        <Stack.Screen name="EntranceLogin" component={EntranceLogin} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
