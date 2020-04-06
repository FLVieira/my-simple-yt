const INITIAL_STATE = {
  video: {
    etag: null,
    id: {
      kind: null,
      videoId: null,
    },
    kind: null,
    snippet: {
      publishedAt: null,
      channelId: null,
      title: null,
      description: null,
      thumbnails: {
        default: {
          url: null,
          width: 0,
          height: 0,
        },
        medium: {
          url: null,
          width: 0,
          height: 0,
        },
        high: {
          url: null,
          width: 0,
          height: 0,
        },
      },
      channelTitle: null,
      liveBroadcastContent: null,
    },
  },
};

export default function playVideo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAY_VIDEO': {
      const newState = { ...state };
      newState.video = action.video;
      return newState;
    }
    default:
      return state;
  }
}
