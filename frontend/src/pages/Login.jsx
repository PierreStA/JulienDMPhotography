import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import pictureAPI from "../services/pictureApi";
import { userCurrentContext } from "../context/userContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setName, setUserEmail, setUserId } = userCurrentContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      pictureAPI
        .post("/api/login", { email, password })
        .then((res) => {
          // setUser(res.data);
          setUserName(res.data.name);
          setUserEmail(res.data.email);
          setUserId(res.data.userId);

          localStorage.setItem("userName", JSON.stringify(res.data.name)); // set dans le local storage
          localStorage.setItem("userEmail", JSON.stringify(res.data.name));
          localStorage.setItem("userId", JSON.stringify(res.data.name));
          navigate("/");
        })
        .catch((err) => console.log(err.response.data));
    } else {
      alert("Please specify email and password");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50"></div>
    </div>
    // <form onSubmit={handleSubmit} className="m-auto mt-5">
    //   <div className="mb-3">
    //     <label htmlFor="email" className="">
    //       Email
    //     </label>
    //     <input
    //       onChange={(e) => setEmail(e.target.value)}
    //       type="email"
    //       name="email"
    //       className=""
    //       id="email"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="password" className="">
    //       Password
    //     </label>
    //     <input
    //       onChange={(e) => setPassword(e.target.value)}
    //       type="password"
    //       name="password"
    //       className=""
    //       id="password"
    //     />
    //   </div>
    //   <button type="submit" className="">
    //     Connexion
    //   </button>
    // </form>
  );
}

export default Login;
