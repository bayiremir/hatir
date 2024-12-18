import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MatchTabPicker from '../../components/match/MatchTabPicker';
import {StyleSheet, View} from 'react-native';
import OverviewScreen from '../../screens/match/OverviewScreen';
import SquadScreen from '../../screens/match/SquadScreen';
import TableScreen from '../../screens/match/TableScreen';
import HeadToHeadScreen from '../../screens/match/HeadToHeadScreen';

const Tab = createMaterialTopTabNavigator();

const MatchTabs = ({data}) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');

  return (
    <Tab.Navigator
      screenListeners={{
        state: ({data}) => {
          const index = data.state.index;
          const tabRoutes = ['Overview', 'Squad', 'Table', 'HeadToHead'];
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
        initialParams={{data}}
        component={OverviewScreen}
        options={{title: 'Önizleme'}}
      />
      <Tab.Screen
        name="Squad"
        initialParams={{data}}
        component={SquadScreen}
        options={{title: 'Kadro'}}
      />
      <Tab.Screen
        name="Table"
        component={TableScreen}
        options={{title: 'Tablo'}}
      />
      <Tab.Screen
        name="HeadToHead"
        component={HeadToHeadScreen}
        options={{title: 'Karşılaşmalar'}}
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
