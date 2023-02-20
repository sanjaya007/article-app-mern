import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const BASE_URL = "http://localhost:5000/user";

const Login = () => {
  const { setProfile } = useContext(UserContext);

  console.log(setProfile);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required !");
        return false;
      }
    }

    const response = await axios({
      method: "post",
      url: BASE_URL + "/login",
      data: input,
      withCredentials: true,
    });

    const data = response.data;
    console.log(data);

    if (!data.success) {
      setError(data.message);
      return false;
    }

    setProfile({
      user_id: data.data.user_id,
      name: data.data.name,
      email: data.data.email,
    });

    navigate("/");
  };

  return (
    <form className="pt-[50px] max-w-sm mx-auto" onSubmit={loginUser}>
      <h1 className="text-3xl font-bold text-center mb-[20px] dark:text-white ">
        Login
      </h1>
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        placeholder="Email"
        value={input.email}
        onChange={(e) =>
          setInput((prev) => ({
            name: prev.name,
            email: e.target.value,
            password: prev.password,
          }))
        }
      />
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        placeholder="Password"
        value={input.password}
        onChange={(e) =>
          setInput((prev) => ({
            name: prev.name,
            email: prev.email,
            password: e.target.value,
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
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
