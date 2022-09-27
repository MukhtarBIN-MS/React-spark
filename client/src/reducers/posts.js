export default  (posts = [], action) => {
  switch (action.type) {
    case "LIKE_POST":
      return posts.map((post) => post._id === action.payload._id ? action.payload : posts);
    case "UPDATE_POST":
       return posts.map((post) => post._id === action.payload._id ? action.payload : posts);
    case "FETCH_ALL":
      return action.payload;
    case "CREATE_POST":
      return [...posts, action.payload
      ];
    default:
      return posts;
  }
};
