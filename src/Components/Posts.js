import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {} from "react-redux";

import axios from "../axiosFetch";
import { addPosts } from "../redux/actions";

const useStyles = makeStyles({
  root: {
    minWidth: 700,
    maxWidth: 750,
  },
  divroot: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1%",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    display: "inline-flex",
    marginRight: "20px",
    backgroundColor: "#1769aa",
  },
  NameSpan: {
    color: "#1769aa",
    fontSize: "20px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
  buttonColor: {
    backgroundColor: "#009688",
    color: "white",
  },
  buttonColor: {
    backgroundColor: "#009688",
    color: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "#transparent",
    },
  },
  body: {
    color: "#b09fa5",
  },
  emailSpan: {
    fontSize: "14px",
    color: "#b09fa5",
  },
});

const Posts = () => {
  const History = useHistory();
  const posts = useSelector((state) => state.Posts);
  const classes = useStyles();
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const response = await axios.get("/posts");
      addPosts(dispatch, response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();

  const ReadComments = (id) => {
    History.push({
      pathname: `/comments/${id}`,
    });
  };

  return posts.map((post) => (
    <div key={post.id} className={classes.divroot}>
      {posts.length > 0 && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div style={{ marginBottom: "2%" }}>
              <Avatar className={classes.avatar}>{"a"}</Avatar>
              <span className={classes.NameSpan}>
                {"Anonymos"}
                <span className={classes.emailSpan}>{"   Anonymos"}</span>
              </span>
            </div>

            <Typography variant="h6" component="h2">
              {post.title}
            </Typography>
            <Typography className={classes.body} variant="body2" component="p">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions className={classes.button}>
            <Button
              className={classes.buttonColor}
              variant="outlined"
              onClick={() => ReadComments(post.id)}
              fullWidth
            >
              Read Comments
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  ));
};

export default Posts;
