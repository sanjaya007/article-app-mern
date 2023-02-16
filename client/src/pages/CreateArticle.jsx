import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000/article/add";

const CreateArticle = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    author: "",
    image: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const postArticle = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required !");
        return false;
      }
    }

    const response = await axios({
      method: "post",
      url: BASE_URL,
      data: input,
    });

    const data = response.data;

    if (!data.success) {
      setError(data.message);
      return false;
    }

    navigate("/");
  };

  return (
    <form className="pt-[50px] max-w-sm mx-auto" onSubmit={postArticle}>
      <h1 className="text-3xl font-bold text-center mb-[20px] dark:text-white">
        Create Article
      </h1>
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="title"
        placeholder="Title"
        value={input.title}
        onChange={(e) =>
          setInput((prev) => ({
            title: e.target.value,
            description: prev.description,
            author: prev.author,
            image: prev.image,
          }))
        }
      />
      <textarea
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="description"
        placeholder="Description"
        value={input.description}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            description: e.target.value,
            author: prev.author,
            image: prev.image,
          }))
        }
      />
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="author"
        placeholder="Author"
        value={input.author}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            description: prev.description,
            author: e.target.value,
            image: prev.image,
          }))
        }
      />
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3 bg-white"
        type="file"
        name="image"
        onChange={(e) => {
          console.log();
          setInput((prev) => ({
            title: prev.title,
            description: prev.description,
            author: prev.author,
            image: e.target.files[0],
          }));
        }}
      />
      <div className="error-box">
        <p className="text-red-500 font-semibold text-sm">
          {error ? error : ""}
        </p>
      </div>
      <div className="grid place-items-center">
        <button
          type="submit"
          className="mt-3 bg-[#ced6e0] w-[100%] py-[10px] px-[10px] rounded-md hover:bg-[#b0bdce] hover:font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateArticle;
