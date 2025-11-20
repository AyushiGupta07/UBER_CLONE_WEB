import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);
  const locations = [
    "119,Gemini solution,udyog vihar phase 1",
    "594/d out side bada gaon ghate bahar verma coloy",
    "1457,deepak pg sector 21",
  ];

  return (
    <div>
      {locations.map(function (elem,idx) {
        return (
          <div key={idx} onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} className="flex gap-4 border-2 p-3 rounded-xl border-gray-200 active:border-black items-center my-2 justify-start">
            <h2 className="bg-[#eee] h-10 w-10 flex items-center jusitfy-center rounded-full p-3 mr-3">
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
