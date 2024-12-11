import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../constants/COLORS';
import LeagueScreen from '../screens/tab/LeagueScreen';
import FollowScreen from '../screens/tab/FollowScreen';
import MoreScreen from '../screens/tab/MoreScreen';
import {Image} from 'react-native';
import NewsStack from './stack/NewsStack';
import HomeStack from './stack/HomeStack';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.macizCinnabar,
          tabBarLabelPosition: 'below-icon',
          tabBarStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Maçlar',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../assets/icons/football-field.png')}
                style={{width: 25, height: 25, tintColor: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="NewsScreen"
          component={NewsStack}
          options={{
            tabBarLabel: 'Haberler',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../assets/icons/newspaper.png')}
                style={{width: 20, height: 20, tintColor: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="LeagueScreen"
          component={LeagueScreen}
          options={{
            tabBarLabel: 'Ligler',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../assets/icons/trophy.png')}
                style={{width: 20, height: 20, tintColor: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FollowScreen"
          component={FollowScreen}
          options={{
            tabBarLabel: 'Takip ediliyor',
            tabBarIcon: ({color}) => (
              <Image
                source={require('../../assets/icons/star.png')}
                style={{width: 20, height: 20, tintColor: color}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MoreScreen"
          component={MoreScreen}
          options={{
            tabBarLabel: 'Daha fazla',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
