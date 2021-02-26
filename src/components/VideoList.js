import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({ videos, setSelectedVideo }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem key={id} video={video} setSelectedVideo={setSelectedVideo} />
  ));

  return (
    <Grid container spacing={2}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
