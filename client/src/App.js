 import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import  spark  from './Images/sperk.jpg';
import Posts from './components/Posts/posts';
import { getPosts } from './actions/posts';
import Form from './components/Form/form';
import useStyles from './style';
import { useDispatch } from 'react-redux';


const App =()=>{

    const [ currentId, setCurrentId ] = useState('null');

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return(
      <Container maxwidth="lg">
          <AppBar className={classes.appBar}  position="static" color="inherit">
              <Typography className={classes.heading} variant="h2" align="center">spark</Typography>
              <img className={classes.image} src={spark} alt="spark" height="70" />
              </AppBar>
              <Grow in>
                  <Container>
                      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                          <Grid item xs={12} sm={7}>
                             <Posts setCurrentId={setCurrentId} />
                          </Grid>
                          <Grid item xs={12} sm={4}>
                              <Form currentId={currentId} setCurrentId={setCurrentId} />
                          </Grid>
                      </Grid>
                  </Container>
              </Grow>
            

          </Container>
    )
}

export default App;