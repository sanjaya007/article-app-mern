import React from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000/";

const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

const Article = ({ id, title, introduction, author, image, createdAt }) => {
  return (
    <div className="post grid md:grid-cols-2">
      <div className="left-box pr-2 mb-2 md:mb-0">
        <img
          src={`${BASE_URL}${image}`}
          className="h-[300px] w-[100%] object-cover"
          alt="article"
        />
      </div>
      <div className="right-box pl-2">
        <div className="title">
          <h1 className="font-bold text-xl dark:text-[#ffffff]">
            {truncateText(title, 85)}
          </h1>
        </div>
        <div className="date py-1">
          <p className="italic text-slate-500">
            Posted: <span>{createdAt}</span>
          </p>
        </div>
        <div className="info">
          <p className="dark:text-[#ffffff]">
            {truncateText(introduction, 300)}
          </p>
        </div>
        <div className="author flex justify-between pt-1">
          <p className="text-[#2980b9] font-semibold">
            Author: <span>{author}</span>
          </p>
          <Link
            to={`/article/${id}`}
            className="text-[#e67e22] font-semibold underline "
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
