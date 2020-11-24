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
  Typography
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
          Weather Description: <hr />
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
          <Typography paragraph>Weather Description:</Typography>
          <Typography paragraph>
            day: {temp.day}{" "}
            night: {temp.night}{" "}
            eve: {temp.eve}{" "}
            morn: {temp.morn}{" "}
          </Typography>
          <Typography paragraph>
            humidity: {weatherData.humidity}{" "}
            pressure: {weatherData.pressure}{" "}
            rain: {weatherData.rain}{" "}
            wind speed: {weatherData.speed}{" "}
          </Typography>
          <Typography paragraph>
            feels like
          </Typography>
          <Typography>
            day: {feels_like.day}{" "}
            night: {feels_like.night}{" "}
            eve: {feels_like.eve}{" "}
            morn: {feels_like.morn}{" "}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}