import {StyleSheet} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

const WebViewNews = () => {
  const route = useRoute();
  const {url} = route.params;

  const {sourceStr, page} = url;

  let finalUrl = '';

  if (sourceStr === '90min') {
    finalUrl = `https://www.fotmob.com/tr${page.url}`;
  } else if (sourceStr === 'SkySports') {
    finalUrl = page.url;
  } else {
    const originalUrl = page.url;
    if (!originalUrl.startsWith('http')) {
      finalUrl = `https://www.90min.com${originalUrl}`;
    } else {
      finalUrl = originalUrl;
    }

    finalUrl = finalUrl.replace(/\/embed\/news\/[^/]+\//, '/');
  }

  return <WebView source={{uri: finalUrl}} style={{flex: 1}} />;
};

export default WebViewNews;
