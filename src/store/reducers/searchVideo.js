const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: false,
};

export default function searchVideo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO_REQUEST': {
      const newState = { ...state };
      newState.loading = action.loading;
      newState.error = action.error;
      return newState;
    }
    case 'SEARCH_VIDEO_SUCCESS': {
      const newState = { ...state };
      newState.loading = action.loading;
      newState.error = action.error;
      newState.videos = action.videos;
      return newState;
    }
    case 'SEARCH_VIDEO_FAILED': {
      const newState = { ...state };
      newState.loading = action.loading;
      newState.error = action.error;
      return newState;
    }
    default:
      return state;
  }
}
