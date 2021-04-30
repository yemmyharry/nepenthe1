import React from "react";
import Post from "./Post/Post";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

export default function Posts() {
  const classes = useStyles();
  //state.posts here implies the global posts from the reducer
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (!posts.length ? <CircularProgress /> : (
  <Grid className={classes.container} container alignItems="stretch" spacing={3} >
    {posts.map((post)=>(
      <Grid key={post._id} item xs={12} sm={6} >
        <Post post={post} />
      </Grid>
    ))}
  </Grid>))
}
