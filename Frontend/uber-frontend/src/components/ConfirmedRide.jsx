import React from "react";

const ConfirmedRide = () => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="text-3xl ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>
      <div className="flex gap-2justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://atlas-content-cdn.pixelsquid.com/stock-images/car-white-vnJKLP9-600.jpg"
        />

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-5-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm  -mt-1text-gray-600">
                KAnkariya talab,Ahemdabad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-map-pin-5-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm  -mt-1text-gray-600">
                KAnkariya talab,Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-map-pin-5-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm  -mt-1text-gray-600">
                KAnkariya talab,Ahemdabad
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-green-600 mt-5 text-white font-semibold p-2 rounded-lg">
          <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
          }} >Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedRide;
