import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
const useStyles = makeStyles((theme) => ({
    text1:{
      color:"white",
      paddingTop:"10px",
      fontFamily: 'cursive',
      letterSpacing:'3px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '25px',
        letterSpacing:"1px",
        paddingTop:'17px'
  
      },
      
    },
    text2:{
      fontFamily:"cursive",
      color:"white",
      fontSize:"20px",
      paddingTop:"-40px",
      letterSpacing:'3px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '10px',
        letterSpacing:"0.5px"
  
      },
    },
    appBar: {
      
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      background:'#242424',
      padding:"15px 0px",
      marginBottom:"5px",
      boxShadow:"2px 10px 40px 5px #000000",
      
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    head1:{
      display:"flex",
      flexDirection:"row-reverse"
    },
    vidCon:{
      display:'flex',
      flexDirection:'row'
    },
    img1:{
      paddingRight:"10px"
    }
}));
const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
              <div className={classes.head1}>
                <Typography variant="h2" align="center" className={classes.text1} >Video Chat</Typography>
                <img className={classes.img1} src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-video-call-notifications-justicon-lineal-color-justicon.png"/>

              </div>
                <Typography variant="h2" align="center" className={classes.text2} >Best Chat App Ever</Typography>
            </AppBar>
              <VideoPlayer/>
              <Options>
                  <Notifications></Notifications>
              </Options>              

        </div>
    );
  };
  
  export default App;