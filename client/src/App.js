import React,{useEffect} from "react";
import { Container, AppBar, Grid, Grow, Typography } from "@material-ui/core";
import {useDispatch} from 'react-redux'

import nepenthe from '../src/images/nepenthe.jpg'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import { getPosts } from "./actions/post";


function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Nepenthe
        </Typography>
        <img className={classes.image} src={nepenthe} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}> <Posts /></Grid>
            <Grid item xs={12} sm={4}> <Form /></Grid>
          
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
