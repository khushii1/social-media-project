import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let NEWPOSTLIST = currPostList;
  if (action.type === "DELETEPOST") {
    NEWPOSTLIST = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADDPOST") {
    NEWPOSTLIST = [action.payload, ...currPostList];
  }
  return NEWPOSTLIST;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    Default_Post_List
  );
  const addPost = (userId, postBody, postTitle, tags, reactions) => {
    dispatchpostList({
      type: "ADDPOST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        reactions: reactions,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETEPOST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const Default_Post_List = [
  {
    id: "1",
    title: "going to mumbaii",
    body: "hii friendss....going to mumbaii for chilll lets go together",
    reactions: "4",
    userId: "user01",
    tags: ["vacation", "mumbaii"],
  },
  {
    id: "2",
    title: "going to goa",
    body: "hii friendss....going to mumbaii for chilll lets go together",
    reactions: "18",
    userId: "user21",
    tags: ["vacation", "goa"],
  },
];
export default PostListProvider;
