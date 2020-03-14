import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {metrics} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const PlayListItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({name: 'ArtistsList', params: {id: item.id}});
      }}
      style={styles.itemContainer}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: item.images[0].url}}
      />
      <Text style={styles.details}>
        <Text>{item.name}</Text>
        {'\n'}
        <Text>{item.owner.display_name}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: metrics.SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: 'rgba(128,128,128,0.5)',
    borderBottomWidth: 0.5,
  },
  image: {
    marginHorizontal: 10,
    height: 100,
    width: 100,
  },
  details: {
    letterSpacing: 0.2,
    flexWrap: 'wrap',
  },
});

export default React.memo(PlayListItem);
