import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Home from './src/screens/Home';
import Component1 from './src/Component1';
import ColorScreen from './src/screens/ColorScreen';
import ReducerComp from './src/Components/ReducerComp';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Color Screen' component={ReducerComp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}