import React from 'react';
import Splash from "./screens/Splash";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {

  return <NavigationContainer>

    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen options={{
        headerShown: false
      }} name="Splash" component={Splash} />

</Stack.Navigator>
</NavigationContainer>
}

export default App ;
