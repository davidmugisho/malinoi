import React from 'react';
import Splash from "./screens/Splash";
import Signup from './screens/Signup';
import Login from './screens/Login';
import Main from './screens/Main'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {

  return <NavigationContainer>

    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen options={{
        headerShown: false
      }} name="Splash" component={Splash} />
         <Stack.Screen name="Signup" component={Signup} options={{
        headerShown: false
      }} />

      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />

      <Stack.Screen name="Main" component={Main} options={{
        headerShown: false
      }} />

</Stack.Navigator>
</NavigationContainer>
}

export default App ;
