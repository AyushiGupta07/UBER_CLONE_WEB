import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";    
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptionDataContext } from "../context/CaptionContext";

const CaptionLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {caption, setCaption} = React.useContext(CaptionDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const caption = {
      email: email,
      password: password,
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captions/captionLogin`, caption);
    if(response.status ===200){
      const data = response.data;
      setCaption(data.caption);
      localStorage.setItem('token',data.token);
      navigate('/captainHome');
    }
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
          <h3 className="text-lg font-medium mb-3">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
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
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Join a fleet?{" "}
            <Link to="/CaptionsignUp" className="text-blue-600">
              Register as a caption
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center mb-5 text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptionLogin;
