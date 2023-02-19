import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BASE_URL = "http://localhost:5000/";

const ArticleView = () => {
  const [article, setArticle] = useState(null);
  console.log(article);
  const param = useParams();
  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await axios({
        method: "get",
        url: BASE_URL + "article/" + param.id,
        withCredentials: true,
      });
      const data = response.data;
      setArticle(data.data);
    };
    getSingleArticle();
  }, []);

  if (!article) return "";

  return (
    <div>
      <div className="title py-5">
        <h1 className="text-center text-3xl font-bold dark:text-white">
          {article.title}
        </h1>
      </div>
      <div className="image mb-4 grid items-center justify-center">
        <img
          className="max-h-[400px]"
          src={BASE_URL + article.image}
          alt="poster"
        />
      </div>
      <div className="description">
        <div dangerouslySetInnerHTML={{ __html: article.description }}></div>
      </div>
    </div>
  );
};

export default ArticleView;
