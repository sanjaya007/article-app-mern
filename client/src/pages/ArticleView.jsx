import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:5000/";

const ArticleView = () => {
  const { profile } = useContext(UserContext);
  const [article, setArticle] = useState(null);
  const param = useParams();
  const navigate = useNavigate();
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

  const deleteArticle = async () => {
    const response = await axios({
      method: "delete",
      url: BASE_URL + "article/delete/" + param.id,
      withCredentials: true,
    });
    const data = response.data;
    if (data.success) {
      navigate("/");
    }
  };

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
              to={`/edit-article/${article._id}`}
              className="min-w-[80px] py-2 px-4 bg-[#2980b9] text-white rounded-md font-semibold"
            >
              <i className="fa-regular fa-pen-to-square mr-1"></i>
              Edit
            </Link>
            <Link
              to=""
              className="min-w-[80px] py-2 px-4 bg-[#c0392b] text-white rounded-md font-semibold"
              onClick={() =>
                window.confirm("Are you sure?") ? deleteArticle() : ""
              }
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
