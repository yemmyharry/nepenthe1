import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import {useDispatch} from 'react-redux'

import useStyles from "./styles";
import {createPost} from '../../actions/post'


export default function Form() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(postData))
  };

  const clear = () => {};


  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setPostData({ ...postData, selectedFile: base64})
    console.log(base64)
  
  }


  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> Welcome To Nepenthe. </Typography>
        <Typography variant="subtitle1">Create your event. </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className={classes.fileInput}>
          <input
                type="file"
                label="Image"
                name="selectedFile"
                accept=".jpeg, .png, .jpg"
                onChange={e => handleFileUpload(e)}
               
              />
        </div>
      
     

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button> 
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> 
      </form>
    </Paper>
  );
}
