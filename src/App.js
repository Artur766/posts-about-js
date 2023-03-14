import React, { useState } from "react";
import ClassCounter from "./component/ClassCounter";
import Counter from "./component/Counter";
import PostForm from "./component/PostForm";
import { PostItem } from "./component/PostItem";
import { PostList } from "./component/PostList";
import { MyButton } from "./component/UI/button/MyButton";
import { MyInput } from "./component/UI/input/MyInput";
import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
    { id: 3, title: "JavaScript", body: "Description" }
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Посты про JS" />
    </div >
  );
}

export default App;
