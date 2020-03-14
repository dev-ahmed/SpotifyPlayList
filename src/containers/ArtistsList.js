import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {playListApi} from '../services';
import {FlatList} from 'react-native-gesture-handler';
import {metrics} from '../constants';

const ArtistsList = ({route}) => {
  const {
    params: {id},
  } = route;

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    const res = await playListApi.getUserTracks(id);
    setArtists(res.data.items);
  };

  const loadMore = async () => {
    const res = await playListApi.getUserTracks(id);
    setArtists([...artists, ...res.data.items]);
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          onEndReached={() => loadMore()}
          keyExtractor={item => item.id}
          data={artists}
          renderItem={({item}) => (
            <Text style={styles.item}>
              <Text style={styles.title}>{item.track.name}</Text>
              {'\n'}
              <Text>{item.track.album.artists[0].type}</Text>
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 100,
    width: metrics.SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: 'rgba(128,128,128,0.5)',
    borderBottomWidth: 0.5,
    marginHorizontal: 15,
    lineHeight: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default React.memo(ArtistsList);
