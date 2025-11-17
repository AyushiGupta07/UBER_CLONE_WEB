import React from "react";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignUp from "./pages/UserSignUp";
import CaptionLogin from "./pages/captionLogin";
import CaptionSignUp from "./pages/captionSignUp";
import { UserDataContext } from "./context/userContext.jsx";

const App = () => {
  const ans = useContext(UserDataContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signUp" element={<UserSignUp />} />
        <Route path="/captionLogin" element={<CaptionLogin />} />
        <Route path="/captionSignUp" element={<CaptionSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
