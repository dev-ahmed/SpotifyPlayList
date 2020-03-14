import {types} from 'mobx-state-tree';
import {PlayList} from './Playlist';

export const RootStore = types
  .model({
    PlayList: types.array(PlayList),
  })
  .create({
    PlayList: [],
  });
