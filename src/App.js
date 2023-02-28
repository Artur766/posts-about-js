import React, { useState } from "react";
import ClassCounter from "./component/ClassCounter";
import Counter from "./component/Counter";
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
  const [title, setTitle] = useState("")
  const addNewPost = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <form>
        {/* управляемый компонент */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Описание поста поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div >
  );
}

export default App;
