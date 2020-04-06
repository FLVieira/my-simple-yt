import React from 'react';
import { List, Image } from 'semantic-ui-react';

export default function Video(props) {
  const { video } = props;
  return (
    <List animated verticalAlign="middle">
      <List.Item onClick={props.onClick}>
        <Image src={video.snippet.thumbnails.default.url} />
        <List.Content>
          <List.Header>{video.snippet.title}</List.Header>
        </List.Content>
      </List.Item>
    </List>
  );
}
