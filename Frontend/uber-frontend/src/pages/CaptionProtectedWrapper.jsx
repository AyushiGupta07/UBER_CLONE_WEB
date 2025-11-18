import React, { use, useContext, useEffect, useState } from "react";
import { CaptionDataContext } from "../context/CaptionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptionProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { caption, setCaption } = useContext(CaptionDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/captionLogin");
    }
  }, [token]);

  const response = axios
    .get(`${import.meta.env.VITE_BASE_URL}/captions/captionProfile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setCaption(data.caption);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      navigate("/captionLogin");
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default CaptionProtectedWrapper;
