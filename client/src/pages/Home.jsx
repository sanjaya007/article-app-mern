import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Article";
const BASE_URL = "http://localhost:5000/articles";

const Home = () => {
  const [articles, setArticles] = useState([]);
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

  if (!articles) return "";

  return (
    <div className="article-wrapper pt-[20px] grid gap-y-10">
      {articles.map((article) => (
        <Article {...article} />
      ))}
    </div>
  );
};

export default Home;
