import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000/user";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required !");
        return false;
      }
    }

    const response = await axios({
      method: "post",
      url: BASE_URL + "/add",
      data: input,
    });

    const data = response.data;

    if (!data.success) {
      setError(data.message);
      return false;
    }

    navigate("/login");
  };

  return (
    <form className="pt-[50px] max-w-sm mx-auto" onSubmit={registerUser}>
      <h1 className="text-3xl font-bold text-center mb-[20px] dark:text-white">
        Register
      </h1>
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="name"
        placeholder="Full Name"
        value={input.name}
        onChange={(e) =>
          setInput((prev) => ({
            name: e.target.value,
            email: prev.email,
            password: prev.password,
          }))
        }
      />
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="email"
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
        name="password"
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
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
