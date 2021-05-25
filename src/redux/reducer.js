import React from "react";
const intialState = {
  Posts: [],
  Users: [],
  Todos: [],
  Comments: [],
};
const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case "addposts":
      return { ...state, Posts: [...action.payload] };
      console.log(state.Posts);

    case "addusers":
      return { ...state, Users: action.payload };
    case "addtodos":
      return { ...state, Todos: [...action.payload] };
    case "addcomments":
      return { ...state, Comments: [...action.payload] };
    default:
      return state;
  }
};

export default Reducer;
