import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/tab/HomeScreen';
import MatchDetailScreen from '../../components/home/MatchDetailScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MatchDetailScreen" component={MatchDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
