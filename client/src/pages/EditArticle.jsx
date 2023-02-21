import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const BASE_URL = "http://localhost:5000/";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const EditArticle = () => {
  const { profile } = useContext(UserContext);
  const [input, setInput] = useState({
    title: "",
    introduction: "",
    description: "",
    image: "",
  });
  const [preview, setPreview] = useState(null);
  const param = useParams();

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //   useEffect(() => {
  // const objectUrl = URL.createObjectURL(input.image);
  // setPreview(objectUrl);
  // return () => URL.revokeObjectURL(objectUrl);
  //   }, [input.image]);

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await axios({
        method: "get",
        url: BASE_URL + "article/" + param.id,
        withCredentials: true,
      });
      const data = response.data.data;
      setInput({
        title: data.title,
        introduction: data.introduction,
        description: data.description,
        image: data.image,
      });
      setPreview(`${BASE_URL}${data.image}`);
    };
    getSingleArticle();
  }, []);

  const editArticle = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required !");
        return false;
      }
    }

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("introduction", input.introduction);
    formData.append("description", input.description);
    formData.append("image", input.image);

    const response = await axios({
      method: "put",
      url: BASE_URL + "article/edit/" + param.id,
      data: formData,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = response.data;

    if (!data.success) {
      setError(data.message);
      return false;
    }

    navigate("/");
  };

  return (
    <form className="pt-[50px] max-w-xl mx-auto" onSubmit={editArticle}>
      <h1 className="text-3xl font-bold text-center mb-[20px] dark:text-white">
        Edit Article
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
            introduction: prev.introduction,
            description: prev.description,
            image: prev.image,
          }))
        }
      />
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="introduction"
        placeholder="Introduction"
        value={input.introduction}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            introduction: e.target.value,
            description: prev.description,
            image: prev.image,
          }))
        }
      />
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3 bg-white"
        type="file"
        name="image"
        onChange={(e) => {
          setInput((prev) => ({
            title: prev.title,
            introduction: prev.introduction,
            description: prev.description,
            image: e.target.files[0],
          }));
          const objectUrl = URL.createObjectURL(e.target.files[0]);
          setPreview(objectUrl);
        }}
      />
      <div className="image-preview grid items-center justify-center mb-3">
        <img className="max-h-[100px]" src={preview} alt="preview" />
      </div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={input.description}
        onChange={(value) =>
          setInput((prev) => ({
            title: prev.title,
            introduction: prev.introduction,
            description: value,
            image: prev.image,
          }))
        }
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

export default EditArticle;
