import React from "react";

const VehiclePanel = (props) => {
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
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
        }}
        className="flex w-full p-3 mb-2 active:border-black border-2 rounded-xl items-center justify-between"
      >
        <img
          className="h-12"
          src="https://atlas-content-cdn.pixelsquid.com/stock-images/car-white-vnJKLP9-600.jpg"
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-fill"> 4 </i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">Rs 193</h2>
      </div>

      {/* second verhicle */}
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
        }}
        className="flex w-full p-3 mb-2 acitve:border-black border-2  rounded-xl items-center justify-between"
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80YjI4ZjExZS1jOTdiLTQ5NWEtYmFjMS0xNzFhZTliMjkzNjIucG5n"
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            Uber Premier
            <span>
              <i className="ri-user-fill"> 6 </i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">Rs 193</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
        }}
        className="flex w-full p-3 mb-2 acitve:border-black border-2  rounded-xl items-center justify-between"
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            Moto
            <span>
              <i className="ri-user-fill"> 1 </i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motor cyble ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">Rs 65</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
