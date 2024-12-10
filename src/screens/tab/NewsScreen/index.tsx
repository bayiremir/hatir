import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HighlightNews from '../../../components/news/HighlightNews';
import NewsShow from '../../../components/news/NewsShow';
import {useGetTrandingNewsQuery} from '../../../redux/services/mobileApi';
import Lottie from '../../../components/other_components/Lottie';
import NewsTabBar from '../../../components/news/NewsTabBar';

// Reanimated importları
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

const NewsScreen = () => {
  const {data, isLoading} = useGetTrandingNewsQuery();
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <NewsTabBar scrollY={scrollY} />
      {isLoading ? (
        <Lottie />
      ) : (
        <Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16}>
          <HighlightNews data={data?.response.news[0]} />
          <NewsShow data={data?.response.news} />
          <NewsShow data={data?.response.news} />
          <NewsShow data={data?.response.news} />
        </Animated.ScrollView>
      )}
    </View>
  );
};

export default NewsScreen;
