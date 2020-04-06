import React from 'react';
import { useSelector } from 'react-redux';
import { Advertisement, Embed } from 'semantic-ui-react';

function formatDate(date) {
  const aux = ['Published at ', '/'];
  return [
    [aux[0] + date[8] + date[9] + aux[1] + date[5]
    + date[6] + aux[1] + date[0] + date[1]
    + date[2] + date[3]],
  ];
}

export default function VideoPlayer() {
  const { video } = useSelector((state) => state.playVideo);
  const { publishedAt } = video.snippet;
  let formattedDate = '';
  if (publishedAt) {
    formattedDate = formatDate(Array.from(publishedAt));
  }

  return (
    <div className="video-player">
      {
        video.id ? (
          <div>
            <Embed
              id={video.id.videoId}
              source="youtube"
            />
            <p className="video-title">{video.snippet.title}</p>
            <p className="video-publishedAt">{formattedDate}</p>
            <p className="video-description">{video.snippet.description}</p>
          </div>
        ) : (
          <Advertisement style={{ height: '433px' }} unit="top banner" test="Escolha um vídeo para reproduzir" />
        )
      }
    </div>
  );
}

// Fazer uma nav e terminar de mostrar o publishedAt formatado;
