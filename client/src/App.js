import React,{useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import memories from './images/memories.png';
import Form from './Form/Form';
import Posts from './Posts/Posts';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {getPosts} from './Action/Post';

  const  App=()=>{
      const classes=useStyles();
      const dispatch=useDispatch();
      useEffect(()=>{
          dispatch(getPosts);
      },[dispatch]);
    return(
       <Container maxWidth="lg">
        <AppBar   className={classes.appBar} position="static" color="static">
            <Typography className={classes.heading} variant="h2" align="center"> Memories</Typography>
            <img  className={classes.image} src={memories} alt="Memories" height="60"/>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItem="stretch">
                    <Grid item xs={12} sm={7}>
                        <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
       </Container> 
    )
}


export default App;