import React from 'react';
import {FlatList} from 'react-native';
import {PlayListItem} from '../';

const PlayList = ({items, ...rest}) => {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <PlayListItem item={item} />}
      {...rest}
    />
  );
};

export default React.memo(PlayList);
