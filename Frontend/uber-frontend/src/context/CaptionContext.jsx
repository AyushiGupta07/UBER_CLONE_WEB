import React from "react";
import { createContext, useState } from "react";

export const CaptionDataContext = createContext();

const CaptionContext = ({ children }) => {
  const [caption, setCaption] = useState({
    email: "",
    password: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
  });
  return (
    <div>
      <CaptionDataContext.Provider value={{ caption, setCaption }}>
        {children}
      </CaptionDataContext.Provider>
    </div>
  );
};

export default CaptionContext;
