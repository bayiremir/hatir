import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SquadScreen from '../../components/match/SquadScreen';
import TableScreen from '../../components/match/TableScreen';
import MatchTabPicker from '../../components/match/MatchTabPicker';
import {StyleSheet, View} from 'react-native';
import OverviewScreen from '../../components/match/OverviewScreen';

const Tab = createMaterialTopTabNavigator();

const MatchTabs = () => {
  const [activeTab, setActiveTab] = useState<string>('Overview');

  return (
    <Tab.Navigator
      screenListeners={{
        state: ({data}) => {
          const index = data.state.index;
          const tabRoutes = ['Overview', 'Squad', 'Table'];
          setActiveTab(tabRoutes[index]);
        },
      }}
      screenOptions={{
        tabBarStyle: {display: 'none'},
      }}
      tabBar={({navigation}) => (
        <View style={styles.tabBar}>
          <MatchTabPicker
            activeTab={activeTab}
            onTabChange={tabName => {
              navigation.navigate(tabName);
            }}
          />
        </View>
      )}>
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
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
