import { Appearance } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Entrance from './src/views/entrance';
import EntranceLogin from './src/views/entrance/entrance-login';
import CreateAccount from "./src/views/entrance/create-account";
import AccountCreated from "./src/views/entrance/create-account/components/account-created"
import RecoverPassword from "./src/views/entrance/recover-password";

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
        <Stack.Screen name="AccountCreated" component={AccountCreated} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
