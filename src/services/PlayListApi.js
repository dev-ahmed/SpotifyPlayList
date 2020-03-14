import axios from 'axios';
import {api} from '../constants';

const {baseURl, Authorization} = api;

const getPlayList = (limit = 20, offset = 5) => {
  try {
    return axios({
      url: 'browse/featured-playlists',
      baseURL: baseURl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: Authorization,
      },
      params: {limit, offset},
      method: 'get',
    });
  } catch (e) {
    throw new Error(e);
  }
};

const getUserTracks = (playListId, offset) => {
  try {
    return axios({
      url: `playlists/${playListId}/tracks`,
      baseURL: baseURl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: Authorization,
      },
      params: {
        fields: 'items(track.album.artists,track.name)',
        offset: offset,
        limit: 30,
      },
    });
  } catch (e) {}
};

export default {getPlayList, getUserTracks};
