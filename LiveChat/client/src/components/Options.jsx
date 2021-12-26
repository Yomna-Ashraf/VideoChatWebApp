
import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    btn:{
      width:'150px'
    },
    input:{
      backgroundColor:'white',
      borderRadius:'5px',
      padding:'10px 0px'
    },
    container: {
      width: '1040px',
      margin: '5px 0',
      padding: 0,
      background:'#242424',
      boxShadow:"2px 10px 40px 5px #000000",
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 10,
    },
    padding: {
      padding: 10,
    },
    paper: {
      padding: '10px 20px',
      border: '2px solid black',
      background:'#242424',
      boxShadow:"2px 10px 40px 5px #000000",
      color:'white'
    },
  }));
  const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();
  
    return (
      <Container className={classes.container}>
        <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Account Info, Copy ID</Typography>
                <TextField label="" value={name} onChange={(e) => setName(e.target.value)} className={classes.input} fullWidth />
                <CopyToClipboard text={me} className={classes.margin}>
                  <Button variant="contained" color="black"  fullWidth startIcon={<Assignment fontSize="large"  />} >
                    Copy Your ID
                  </Button>
                </CopyToClipboard>
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Make a call, Paste ID</Typography>
                <TextField label="" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} className={classes.input} fullWidth />
                {callAccepted && !callEnded ? (
                  <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                    Hang Up
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                    Call
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
          {children}
        </Paper>
      </Container>
    );
  };
  

export default Options;