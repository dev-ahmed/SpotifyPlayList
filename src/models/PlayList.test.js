import {PlayListItem, PlayList} from './Playlist';
import DummyList from '../row_data';

it('can create an instance of a model', () => {
  const item = PlayListItem.create({
    id: '37i9dQZF1DWXJfnUiYjUKT',
    name: 'New Music Friday',
    owner: 'Spotify',
  });

  expect(item.name).toBe('New Music Friday');
});

it('can create a playlist', () => {
  const list = PlayList.create({
    items: [
      {
        id: '37i9dQZF1DWXJfnUiYjUKT',
        name: 'New Music Friday',
        owner: 'Spotify',
      },
    ],
  });
  expect(list.items.length).toBe(1);
  expect(list.items[0].name).toBe('New Music Friday');
});
