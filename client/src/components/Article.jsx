import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const BASE_URL = "http://localhost:5000/";

const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

const Article = ({
  _id,
  title,
  introduction,
  author,
  image,
  views,
  createdAt,
}) => {
  return (
    <div className="post grid md:grid-cols-2 bg-white dark:bg-transparent">
      <div className="left-box mb-2 md:mb-0">
        <img
          src={`${BASE_URL}${image}`}
          className="h-[300px] w-[100%] object-cover"
          alt="article"
        />
      </div>
      <div className="right-box px-3 py-2">
        <div className="title">
          <h1 className="font-bold text-xl dark:text-[#ffffff]">
            {truncateText(title, 85)}
          </h1>
        </div>
        <div className="date py-1 flex justify-between items-center">
          <p className="italic text-slate-500">
            Posted: <span>{moment(createdAt).fromNow()}</span>
          </p>
          <p className="text-green-700 font-semibold">
            <i class="fa-solid fa-eye"></i> <span>{views}</span>
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
            to={`/article/${_id}`}
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
