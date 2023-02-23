import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Article";
const BASE_URL = "http://localhost:5000/articles";

const Home = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios({
        method: "get",
        url: BASE_URL,
        withCredentials: true,
      });
      const data = response.data;
      setArticles(data.data);
    };
    getArticles();
  }, []);

  if (!articles) {
    return (
      <div className="loading grid justify-center items-center min-h-[300px]">
        <img src="assets/spinner.gif" className="h-[50px] " alt="spinner" />
      </div>
    );
  }

  if (articles.length <= 0)
    return (
      <div className="no-data text-2xl font-bold grid justify-center items-center min-h-[300px]">
        <h1 className="dark:text-white">No articles found !</h1>
      </div>
    );

  return (
    <>
      <div className="article-wrapper pt-[20px] grid gap-y-10">
        {articles.map((article, index) => (
          <Article {...article} key={index} />
        ))}
      </div>

      {articles.length > 10 && (
        <div className="see-more flex justify-center items-center pt-4 pb-3">
          <div className="cursor-pointer flex flex-col justify-center items-center ">
            <h1 className="text-md font-semibold">See More</h1>
            <i className="fa-solid fa-angles-down"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
