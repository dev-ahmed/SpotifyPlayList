import {types} from 'mobx-state-tree';

export const PlayListItem = types.model('PlayListItem', {
  id: types.identifier,
  name: types.string,
  owner: types.frozen(),
  images: types.optional(types.array(types.frozen()), []),
});

export const PlayList = types.model('PlayList', {
  items: types.optional(types.array(PlayListItem), []),
});
