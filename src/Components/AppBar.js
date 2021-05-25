import React, { useEffect } from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import axios from "../axiosFetch";
import { addPosts, addUsers, addTodos } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#009688",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {},
  ButtonGroup: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  useEffect(() => {
    getUsers();
  }, []);

  const dispatch = useDispatch();

  const getUsers = async () => {
    try {
      const response = await axios.get("/users");
      addUsers(dispatch, response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getTodo = async () => {
    try {
      const response = await axios.get("/todos");
      addTodos(dispatch, response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.tools}>
          <Typography variant="h6" className={classes.title}>
            discussion App
          </Typography>
          <ButtonGroup
            className={classes.ButtonGroup}
            variant="outlined"
            aria-label="contained primary button group"
            color="inherit"
          >
            <Button>
              <Link to="/posts" style={{ color: "white" }}>
                {" "}
                Posts
              </Link>
            </Button>
          </ButtonGroup>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
