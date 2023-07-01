//variables
const REMOVE_POST = 'app/posts/REMOVE_POST';
const ADD_POST = 'app/posts/ADD_POST';
const EDIT_POST = 'app/posts/EDIT_POST';
//selectors
export const getPosts = (state) => state.posts;

export const getPostById = (state, postId) => {
  return state.posts.find((post) => post.id === postId);
}
export const getPostsByCategory = (state, category) => {
  return state.posts.filter((post) => post.category === category);
}
// action creators
export const removePost = (payload) => ({
  type: REMOVE_POST,
  payload
})
export const addPost = (payload) => ({
  type: ADD_POST,
  payload
})
export const editPost = (payload) => ({
  type: EDIT_POST,
  payload
})
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, action.payload];
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    case EDIT_POST:
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    default:
      return statePart;
  }
};

export default postsReducer;
