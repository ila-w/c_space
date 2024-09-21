import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login.js';
import MainScreen from '../screens/MainScreen.js';
import ProfileEditor from '../screens/ProfileEditor.js';
import Messages from '../screens/Messages.js';
import TitleBar from '../components/TitleBar.jsx';
  
export default function MainStackNavigator() {
  
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name = "ProfileEditor"
            component={ProfileEditor}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name = "MainScreen"
            component = {MainScreen}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name = "Messages"
            component = {Messages}
            // options={{headerShown: false}}
          />

          
        </Stack.Navigator>
      </NavigationContainer>
    );
}