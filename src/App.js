import React, { useMemo, useState } from "react";
import PostForm from "./component/PostForm";
import { PostItem } from "./component/PostItem";
import { PostList } from "./component/PostList.jsx";
import { MyButton } from "./component/UI/button/MyButton";
import { MyInput } from "./component/UI/input/MyInput";
import MySelect from "./component/UI/select/MySelect.jsx";
import "../src/styles/App.css"
import PostFilter from "./component/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "гыв", body: "Description" },
    { id: 2, title: "авфвыф", body: "Description" },
    { id: 3, title: "юывыф", body: "Description" }
  ])

  const [filter, setFilter] = useState({ sort: "", query: "" })


  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {

    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {
        sortedAndSearchedPosts.length
          ?
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
          :
          <h1 style={{ textAlign: "center" }}>
            Посты не найдены!
          </h1>
      }

    </div >
  );
}

export default App;
