import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="post grid md:grid-cols-2">
      <div className="left-box pr-2 mb-2 md:mb-0">
        <img
          src="https://lahachhap.com/cdn-cgi/image/fit=contain/https://d3s5ccu7bhpcbp.cloudfront.net/fit-in/qnNh7Zjm6H-6543/sGGmo46cQmYKbYAiRthYMAOyhMRvqtuHqjzDE7ht.jpg"
          alt="article"
        />
      </div>
      <div className="right-box pl-2">
        <div className="title">
          <h1 className="font-bold text-xl dark:text-[#ffffff]">
            Three answers and three questions from Real Madrid’s Club World Cup
            win
          </h1>
        </div>
        <div className="date py-1">
          <p className="italic text-slate-500">
            Post Date: <span>2023/12/02</span>
          </p>
        </div>
        <div className="info">
          <p className="dark:text-[#ffffff]">
            Real Madrid are champions of the world! They overcame Al Hilal 5-3,
            with both teams putting on a show for the fans watching the Club
            World Cup final in Morocco.
          </p>
        </div>
        <div className="author flex justify-between pt-1">
          <p className="text-[#2980b9] font-semibold">
            Author: <span>Nepali Articles</span>
          </p>
          <Link to="" className="text-[#e67e22] font-semibold underline ">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
