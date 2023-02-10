import React from "react";

const Register = () => {
  return (
    <form className="pt-[50px] max-w-sm mx-auto">
      <h1 className="text-3xl font-bold text-center mb-[20px] dark:text-white">
        Register
      </h1>
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        placeholder="Full Name"
      />
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        placeholder="Email"
      />
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        placeholder="Password"
      />
      <div className="error-box hidden">
        <p className="text-red-500 font-semibold text-sm">
          All fields required!
        </p>
      </div>
      <div className="grid place-items-center">
        <button className="mt-3 bg-[#ced6e0] w-[100%] py-[10px] px-[10px] rounded-md hover:bg-[#b0bdce] hover:font-semibold">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
