import React from "react";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className="post-wrapper pt-[20px] grid gap-y-10">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Home;
