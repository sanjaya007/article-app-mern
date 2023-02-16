import React from "react";
import Article from "../components/Article";

const Home = () => {
  return (
    <div className="article-wrapper pt-[20px] grid gap-y-10">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default Home;
