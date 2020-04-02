import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './views/HomeScreen'
import SplashScreen from './views/SplashScreen'
import IntroScreen from './views/IntroScreen'
import ThemeSelector from './views/ThemeSelector'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name="Intro"  component={IntroScreen} />
      <Stack.Screen  name="Splash" component={SplashScreen} />
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen name="ThemeSelector" component={ThemeSelector}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;