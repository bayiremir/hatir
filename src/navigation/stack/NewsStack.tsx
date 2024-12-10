import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from '../../screens/tab/NewsScreen';
import WebViewNews from '../../components/news/WebViewNews';

const Stack = createStackNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="WebViewNews" component={WebViewNews} />
    </Stack.Navigator>
  );
};

export default NewsStack;
