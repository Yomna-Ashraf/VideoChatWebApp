import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  name1:{
    fontFamily:"cursive",
    color:"white",
    fontSize:"20px",
    paddingTop:"-40px",
    letterSpacing:'3px',
    textAlign:"center",
    fontWeight:'bold'
  },
  video1: {
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '250px',

    },
    marginBottom:'0px',
    boxShadow:"2px 10px 40px 5px #000000",

  },
  video2: {
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '250px',
    },
    marginBottom:'0px',
    boxShadow:"2px 10px 40px 5px #000000",

  },
  gridContainer: {
    
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      
    },
  },
  paper: {
    padding: '5px',
    paddingTop:'10px',
    paddingBottom:'0px',
    margin: '10px',
    borderRaduis:'0px',
    backgroundColor:'#242424',
    [theme.breakpoints.down('xs')]: {
      textAlign:'center',
      display:"flex",
      justifyContent:'center'
    }
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6} className={classes.align} >
            <Typography variant="h5" className={classes.name1} gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video1} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6} className={classes.align} >
            <Typography variant="h5" className={classes.name1} gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video2} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;