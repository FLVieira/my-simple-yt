import youtubeSearch from 'youtube-api-v3-search';

import API_KEY from '../../services/api';

export function searchVideo(term) {
  return async (dispatch) => {
    try {
      dispatch(searchVideoRequest());
      const responseVideos = await youtubeSearch(API_KEY, { q: term, maxResults: 6 });
      dispatch(searchVideoSuccess(responseVideos.items));
    } catch (err) {
      dispatch(searchVideoFailed());
    }
  };
}

export function searchVideoRequest() {
  return {
    type: 'SEARCH_VIDEO_REQUEST',
    loading: true,
    error: false,
  };
}

export function searchVideoSuccess(videos) {
  return {
    type: 'SEARCH_VIDEO_SUCCESS',
    videos,
    loading: false,
    error: false,
  };
}

export function searchVideoFailed() {
  return {
    type: 'SEARCH_VIDEO_FAILED',
    loading: false,
    error: true,
  };
}
