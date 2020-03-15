import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './views/HomeScreen'


 const Stack = createStackNavigator();
  


 function App() {
     return(
         <NavigationContainer>
         <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
         </NavigationContainer>
     )
 }

  
  