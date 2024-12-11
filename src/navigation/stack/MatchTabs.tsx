import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SquadScreen from '../../components/match/SquadScreen';
import TableScreen from '../../components/match/TableScreen';
import MatchTabPicker from '../../components/match/MatchTabPicker';
import {StyleSheet, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const MatchTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {display: 'none'}, // Varsayılan Material Tab çubuğunu gizle
      }}
      tabBar={({navigation}) => (
        <View style={styles.tabBar}>
          <MatchTabPicker
            onTabChange={tabName => {
              navigation.navigate(tabName); // Seçilen sekmeye geçiş yap
            }}
          />
        </View>
      )}>
      <Tab.Screen
        name="Overview"
        component={SquadScreen} // Örnek bileşen
        options={{title: 'Önizleme'}}
      />
      <Tab.Screen
        name="Squad"
        component={SquadScreen}
        options={{title: 'Kadro'}}
      />
      <Tab.Screen
        name="Table"
        component={TableScreen}
        options={{title: 'Tablo'}}
      />
    </Tab.Navigator>
  );
};

export default MatchTabs;

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    shadowOpacity: 0,
  },
});
