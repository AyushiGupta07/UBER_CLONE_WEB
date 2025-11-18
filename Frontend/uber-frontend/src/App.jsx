import React from "react";
import Start from "./pages/Start.jsx";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignUp from "./pages/UserSignUp";
import CaptionLogin from "./pages/CaptionLogin";
import CaptionSignUp from "./pages/CaptionSignUp";
import { UserDataContext } from "./context/userContext.jsx";
import { useContext } from "react";
import Home from "./pages/home.jsx";
import UserProtectedWrapper from "./pages/UserProtectedWrapper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptionHome from "./pages/CaptionHome.jsx";
import CaptionProtectedWrapper from "./pages/CaptionProtectedWrapper.jsx";

const App = () => {
  const ans = useContext(UserDataContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signUp" element={<UserSignUp />} />
        <Route path="/captionLogin" element={<CaptionLogin />} />
        <Route path="/captionSignUp" element={<CaptionSignUp />} />
        <Route
          path="/captainHome"
          element={
            <CaptionProtectedWrapper>
              <CaptionHome />
            </CaptionProtectedWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
