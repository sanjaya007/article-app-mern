import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const BASE_URL = "http://localhost:5000/user";

const Login = () => {
  const { setProfile } = useContext(UserContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [googleUser, setGoogleUser] = useState(null);
  const [error, setError] = useState(null);
  const [passwordPreview, setPasswordPreview] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (googleUser) {
      const googleApiLogin = async () => {
        const response = await axios({
          method: "post",
          url: BASE_URL + "/google-login",
          data: googleUser,
          withCredentials: true,
        });
        const data = response.data;
        setProfile({
          user_id: data.data.user_id,
          name: data.data.name,
          email: data.data.email,
        });

        navigate("/");
      };
      googleApiLogin();
    }
  }, [googleUser]);

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
      <div className="input-box relative">
        <input
          className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
          type={passwordPreview ? "text" : "password"}
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
        <div
          className="icon absolute top-[7px] right-[8px] cursor-pointer"
          onClick={() => setPasswordPreview(!passwordPreview)}
        >
          {passwordPreview ? (
            <i class="fa-solid fa-eye text-sm"></i>
          ) : (
            <i class="fa-solid fa-eye-slash text-sm"></i>
          )}
        </div>
      </div>
      <div className="error-box">
        <p className="text-red-500 font-semibold text-sm">
          {error ? error : ""}
        </p>
      </div>
      <div className="grid place-items-center">
        <button
          type="submit"
          className="mt-3 mb-2 bg-[#ced6e0] w-[100%] py-[10px] px-[10px] rounded-md hover:bg-[#b0bdce] hover:font-semibold"
        >
          Login
        </button>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            if (credentialResponse) {
              var decoded = jwt_decode(credentialResponse.credential);
              setGoogleUser({
                name: decoded.name,
                email: decoded.email,
                googleId: decoded.sub,
              });
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </div>
    </form>
  );
};

export default Login;
