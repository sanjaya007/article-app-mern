import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { UserContext } from "../contexts/UserContext";
const BASE_URL = "http://localhost:5000/";

const ArticleView = () => {
  const { profile } = useContext(UserContext);
  const [article, setArticle] = useState(null);
  console.log(profile);
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
      <div className="date">
        <p className="text-center text-md font-semibold text-[#7f7f7f] mt-[-10px]">
          {moment(article.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
      <div className="author pt-2 pb-4 flex justify-between">
        <p className="font-bold dark:text-white">
          Posted by: {article.author}{" "}
        </p>
        {profile?.user_id === article?.author_id && (
          <div className="action flex gap-3">
            <Link
              to=""
              className="min-w-[80px] py-2 px-4 bg-[#2980b9] text-white rounded-md font-semibold"
            >
              <i className="fa-regular fa-pen-to-square mr-1"></i>
              Edit
            </Link>
            <Link
              to=""
              className="min-w-[80px] py-2 px-4 bg-[#c0392b] text-white rounded-md font-semibold"
            >
              <i className="fa-solid fa-trash mr-1"></i>
              Delete
            </Link>
          </div>
        )}
      </div>
      <div className="image mb-4 grid items-center justify-center">
        <img
          className="max-h-[400px]"
          src={BASE_URL + article.image}
          alt="poster"
        />
      </div>
      <div className="introduction">
        <p className="text-lg font-semibold dark:text-white">
          {article.introduction}
        </p>
      </div>
      <hr className="border-[#767676] my-4" />
      <div className="description">
        <div
          dangerouslySetInnerHTML={{ __html: article.description }}
          className="dark:text-white"
        ></div>
      </div>
    </div>
  );
};

export default ArticleView;
