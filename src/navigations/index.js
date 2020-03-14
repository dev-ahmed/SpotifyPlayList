import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../containers/Home';
import ArtistsList from '../containers/ArtistsList';

const Stack = createStackNavigator();

const Root = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ArtistsList" component={ArtistsList} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
