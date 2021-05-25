import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { addComments } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import axios from "../axiosFetch";
import { useParams } from "react-router-dom";
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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Comments = () => {
  const { id } = useParams();
  useEffect(() => {
    getComments();
  }, []);
  const comments = useSelector((state) => state.Comments);
  const dispatch = useDispatch();
  const classes = useStyles();
  const getComments = async () => {
    try {
      const response = await axios.get(`/comments`);
      addComments(dispatch, response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const postComments = comments.filter((comment) => {
    return comment.postId == id;
  });

  return postComments.map((comment) => (
    <div className={classes.divroot}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {comment.email}
          </Typography>
          <Typography variant="h5" component="h2">
            {comment.name}
          </Typography>

          <Typography variant="body2" component="p">
            {comment.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  ));
};

export default Comments;
