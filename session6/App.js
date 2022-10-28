import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

const VideoCard = (props) => {
  return (
    <Card>
      <CardMedia component="img" image={props.previewImage} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {props.genre}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {props.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function App(props) {
  const [videos, updateVideos] = useState([]);

  const fetchVideos = () => {
    fetch('https://crio-xflix.herokuapp.com/v1/videos')
      .then((r) => r.json())
      .then((data) => updateVideos(data.videos));
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <Grid container spacing={2}>
      {videos.map((v) => (
        <Grid item md={4} xs={12} key={v.title}>
          <VideoCard {...v} />
        </Grid>
      ))}
    </Grid>
  );
}
