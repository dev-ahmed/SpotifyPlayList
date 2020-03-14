import {types} from 'mobx-state-tree';

export const PlayListArtistItem = types.model('PlayListItem', {
  id: types.identifier,
  name: types.string,
  owner: types.frozen(),
  images: types.optional(types.array(types.frozen()), []),
});

export const PlayListArtists = types
  .model('PlayList', {
    items: types.optional(types.array(PlayListItem), []),
  })
  .actions(self => ({
    appendList(items) {
      self.items.push(items);
    },
  }));
