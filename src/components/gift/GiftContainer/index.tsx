import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Root} from '../../../interfaces/resturant.inteface';
import {HeartIcon as HeartIconOutline} from 'react-native-heroicons/outline';
import {StarIcon as StarIconOutline} from 'react-native-heroicons/outline';

const GiftContainer = ({data}: {data: Root}) => {
  const vendors = data[0]?.data?.rlp?.swimlanes?.data?.items[4]?.vendors;
  return (
    <View style={styles.container}>
      <FlatList
        style={{paddingBottom: 70}}
        data={vendors}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.innercontainer}>
            <TouchableOpacity style={styles.icon}>
              <HeartIconOutline color={'white'} size={24} />
            </TouchableOpacity>
            <Image
              source={{uri: item.vendor.hero_listing_image}}
              style={styles.image}
            />
            <Text style={styles.title}>{item.vendor.name}</Text>
            <View style={styles.innerowcontainer}>
              <Text style={styles.rating}>{item.vendor.rating}</Text>
              <StarIconOutline color={'gold'} size={20} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.vendor.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default GiftContainer;
