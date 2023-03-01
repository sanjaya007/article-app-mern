import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Article";
const BASE_URL = "http://localhost:5000/articles";

const Home = () => {
  const [articles, setArticles] = useState(null);
  const [totalArticles, setTotalArticles] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios({
        method: "get",
        url: BASE_URL + "/" + currentPage,
        withCredentials: true,
      });
      const data = response.data;
      console.log(data);
      setTotalArticles(data.total);

      if (!articles) {
        setArticles(data.data);
      } else {
        setArticles([...articles, ...data.data]);
      }
    };
    getArticles();
  }, [currentPage]);

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

      {articles?.length >= totalArticles ? (
        ""
      ) : (
        <div className="see-more flex justify-center items-center pt-4 pb-3">
          <div className="cursor-pointer flex flex-col justify-center items-center ">
            <h1
              className="text-md font-semibold dark:text-white"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              See More
            </h1>
            <i className="fa-solid fa-angles-down dark:text-white"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
