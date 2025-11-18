import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstname,
        lastName: lastname,
      },
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png?20180913054426"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              placeholder="first name"
            />
            <input
              required
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              placeholder="last name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create account
          </button>
          <p className="text-center">
            Already have a account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the
          <span className="underline"> Google privacy policy </span>and{" "}
          <span className="underline">Terms of Service apply </span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
