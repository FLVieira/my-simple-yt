import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';

import Video from '../Video';
import { playVideo } from '../../store/actions/playVideo';

export default function VideoList() {
  const { videos, loading, error } = useSelector((state) => state.searchVideo);
  const dispatch = useDispatch();

  function handleVideoClick(vid) {
    dispatch(playVideo(vid));
  }

  return (
    <div className="video-list">
      {
      loading ? (
        <Dimmer active inverted>
          <Loader size="medium">Loading ... </Loader>
        </Dimmer>
      ) : null
      }
      { error ? alert('Erro inesperado') : null}
      {videos.map((vid) => (
        <Video onClick={() => handleVideoClick(vid)} video={vid} key={vid.etag} />
      ))}
    </div>
  );
}
