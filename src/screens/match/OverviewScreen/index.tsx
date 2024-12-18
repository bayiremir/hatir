import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import WhoWinThisMatch from '../../../components/match/WhoWinThisMatch';
import MatchDetails from '../../../components/match/MatchDetails';

const OverviewScreen = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <WhoWinThisMatch matchDetail={data} />
      <MatchDetails matchDetail={data} />
    </View>
  );
};

export default OverviewScreen;
