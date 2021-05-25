export const addPosts = (dispatch, posts) => {
  console.log(posts);
  dispatch({ type: "addposts", payload: posts });
};
export const addUsers = (dispatch, users) => {
  dispatch({ type: "addusers", payload: users });
};
export const addTodos = (dispatch, todos) => {
  dispatch({ type: "addtodos", payload: todos });
};
export const addComments = (dispatch, comments) => {
  dispatch({ type: "addcomments", payload: comments });
};
