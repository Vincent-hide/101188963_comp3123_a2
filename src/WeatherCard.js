import React, {useState} from "react";
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Divider,
  Grid
} from "@material-ui/core"

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {red} from "@material-ui/core/colors";
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginBottom: theme.spacing(4)
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function WeatherCard ({weatherData}) {
  const {weather, temp, feels_like} = weatherData;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='weather icon'/>
          // <Avatar aria-label="recipe" className={classes.avatar}>
          //   R
          // </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon/>
        //   </IconButton>
        // }
        title={`Main: ${weather[0].main}`}
        // subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        title="Paella dish"
      />

      <CardContent>
        <Typography variant="h4" color="textSecondary" component="p">
          Weather Description: <Divider light component='hr'/>
          {weather[0].description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {/*<IconButton aria-label="add to favorites">*/}
        {/*  <FavoriteIcon/>*/}
        {/*</IconButton>*/}
        {/*<IconButton aria-label="share">*/}
        {/*  <ShareIcon/>*/}
        {/*</IconButton>*/}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider light component='hr'/>
          <Typography variant="h4">Weather Description:</Typography>
          <Divider light component='hr'/>
          <Grid container justify='center' alignItems='center'>
            <Grid container item justify='center'>
              humidity: {weatherData.humidity}
            </Grid>
            <Grid container item justify='center'>
              pressure: {weatherData.pressure}
            </Grid>
            <Grid container item justify='center'>
              clouds: {weatherData.clouds}
            </Grid>
            <Grid container item justify='center'>
              wind speed: {weatherData.speed}
            </Grid>
          </Grid>

          <Divider light component='hr'/>
          <Typography variant="h4">
            feels like
          </Typography>
          <Divider light component='hr'/>

          <Grid container justify='center' alignItems='center'>
            <Grid container item justify='center'>
              day: {feels_like.day}
            </Grid>
            <Grid container item justify='center'>
              night: {feels_like.night}
            </Grid>
            <Grid container item justify='center'>
              eve: {feels_like.eve}
            </Grid>
            <Grid container item justify='center'>
              morn: {feels_like.morn}
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}