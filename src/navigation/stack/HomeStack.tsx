import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/tab/HomeScreen';
import GiftDetails from '../../components/gift/GiftDetails';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GiftDetails" component={GiftDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
