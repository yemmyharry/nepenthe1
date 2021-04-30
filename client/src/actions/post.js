import * as api from "../api";

//because we'll fetch data asyncronously, we'll use thunk to dispatch the action hence we'll make our action creator return another function(viz the dispatch function)
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
