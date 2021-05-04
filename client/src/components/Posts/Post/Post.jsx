import React from "react";
import {
  CardActions,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./styles";

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <div>
      {post.length === undefined ? <h1></h1> : post.map((eachP) => (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={
              eachP.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            title={post.title}
          />
          <div className={classes.overlay}>
            <Typography variant="h6">{eachP.creator}</Typography>
            <Typography variant="body2">
              {moment(eachP.createdAt).fromNow()}
            </Typography>
          </div>
          <div className={classes.overlay2}>
            <Button style={{ color: "white" }} size="small" onClick={() => {}}>
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">
              
              {eachP.tags.map((tag) => `#${tag} `)}
            </Typography>
          </div>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {eachP.title}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {eachP.message}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => {}}>
              <ThumbUpAltIcon fontSize="small" />
              Like {eachP.likeCount}
            </Button>
            <Button size="small" color="primary" onClick={() => {}}>
              <ThumbDownAltIcon fontSize="small" />
              Unlike {eachP.unlikeCount}
            </Button>
            <Button size="small" color="primary" onClick={() => {}}>
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
