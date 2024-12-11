import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MatchScreen from '../../../components/home/MatchScreen';
import DatePicker from '../../../components/home/DatePicker';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSelectedDate} from '../../../redux/slices/userSlice';
import HomeTabBar from '../../../components/home/HomeTabBar';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const currentDate = new Date();
  const dispatch = useDispatch();

  const formatDate = (offset: number) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + offset);
    return date.toISOString().split('T')[0];
  };

  const handleTabChange = (offset: number) => {
    const formattedDate = formatDate(offset);

    dispatch(setSelectedDate(formattedDate));
  };

  return (
    <View style={styles.container}>
      <HomeTabBar />
      <Tab.Navigator
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBar={({navigation}) => (
          <View style={styles.tabBar}>
            <DatePicker
              onDateChange={(offset: number) => {
                handleTabChange(offset);
                navigation.navigate(formatDate(offset));
              }}
            />
          </View>
        )}
        screenListeners={{
          state: e => {
            const newIndex = e.data.state.index;
            handleTabChange(newIndex);
          },
        }}
        screenOptions={{
          swipeEnabled: true,
        }}>
        {[...Array(7)].map((_, index) => {
          const offset = index;
          const date = formatDate(offset);
          return (
            <Tab.Screen
              key={date}
              name={date}
              children={({route}: {route: {params?: {offset?: number}}}) => (
                <MatchScreen
                  selectedDate={formatDate(route.params?.offset || offset)}
                />
              )}
              initialParams={{offset}}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'black',
    paddingTop: 10,
  },
});
