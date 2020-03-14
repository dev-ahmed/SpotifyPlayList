import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {PlayListComponent} from '../components/';
import {PlayList} from '../models/Playlist';
import {observer} from 'mobx-react';
import {playListApi} from '../services';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    const res = await playListApi.getPlayList(30, 5);
    const _list = PlayList.create({items: res.data.playlists.items});
    setList(_list.items);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <SafeAreaView>
      <PlayListComponent items={list} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default observer(Home);
