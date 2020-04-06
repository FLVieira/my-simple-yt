import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Video from '../Video';

export default function VideoList(props) {
  const { videos, loading, error } = useSelector((state) => state.searchVideo);

  return (
    <div className="video-list">
      {videos.map((vid) => (
        <Video video={vid} key={Math.random()} />
      ))}
    </div>
  );
}
