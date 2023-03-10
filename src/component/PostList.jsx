import React from "react";

import { PostItem } from "./PostItem";

export const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAligin: "center" }}>
        {title}
      </h1>
      {posts.map((post) =>
        <PostItem post={post} key={post.id} />
      )}
    </div>
  )
}