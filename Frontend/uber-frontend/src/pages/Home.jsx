import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const home = () => {
    const [pickup, setPickup] = useState();
    const [destination, setDestination] = useState();
    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
    const vehiclePanelRef = useRef(null);
    const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
    const confirmedRidePanelRef = useRef(null);
    const waitingForDriverRef = useRef(null);
    const [waitingForDriver, setwaitingForDriver] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false);
    const vehicleFoundRef = useRef(null);
    const submitHandler = (e) => {
        e.preventDefault();
    };
    useGSAP(
        function () {
            if (panelOpen) {
                gsap.to(panelRef.current, {
                    height: "70%",
                    padding: 24,
                    opacity: 1,
                });
                gsap.to(panelCloseRef.current, {
                    // Corrected
                    opacity: 1,
                });
            } else {
                gsap.to(panelRef.current, {
                    height: "0%",
                    padding: 24,
                    opacity: 0,
                });
                gsap.to(panelCloseRef.current, {
                    // Corrected
                    opacity: 0,
                });
            }
        },
        [panelOpen]
    );
    useGSAP(
        function () {
            if (vehiclePanelOpen) {
                gsap.to(vehiclePanelOpen.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(vehiclePanelOpen.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [vehiclePanelOpen]
    );

    useGSAP(
        function () {
            if (confirmedRidePanel) {
                gsap.to(confirmedRidePanelRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(confirmedRidePanelRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [confirmedRidePanel]
    );

    useGSAP(
        function () {
            if (vehicleFound) {
                gsap.to(vehicleFoundRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(vehicleFoundRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [vehicleFound]
    );
    useGSAP(
        function () {
            if (waitingForDriver) {
                gsap.to(waitingForDriverRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(waitingForDriverRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [waitingForDriver]
    );
    return (
        <div className="h-screen relative overflow-hidden">
            <img
                className="w-16 absolute left-5 top-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png?20180913054426"
            />
            <div className="h-screen w-screen">
                <img
                    className="h-full w-full object-cover"
                    src="https://blog.uber-cdn.com/wp-content/uploads/2022/08/Carbon_Maps_Figure-07.png"
                />
            </div>
            <div className="flex flex-col justify-end absolute top-0 h-screen w-full">
                <div className="h-[30%] bg-white p-6 relative">
                    <h5
                        ref={panelCloseRef}
                        onClick={() => {
                            setPanelOpen(false);
                        }}
                        className="absolute opacity-0 right-6 top-6 text-2xl"
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>

                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form
                        onSubmit={(e) => {
                            submitHandler(e);
                        }}
                    >
                        <div className="line absolute h-14 w-1 top-[41%] bg-gray-900 rounded-full left-10">
                            {" "}
                        </div>
                        <input
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value);
                            }}
                            onClick={() => {
                                setPanelOpen(true);
                            }}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
                            type="text"
                            placeholder="Add a pick-up location"
                        ></input>
                        <input
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                            }}
                            onClick={() => {
                                setPanelOpen(true);
                            }}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
                            type="text"
                            placeholder="Enter your destination"
                        ></input>
                    </form>
                </div>
                <div ref={panelRef} className="bg-white h-0 bg-yellow">
                    <LocationSearchPanel
                        panelOpen={panelOpen}
                        setPanelOpen={setPanelOpen}
                        vehiclePanelOpen={vehiclePanelOpen}
                        setVehiclePanelOpen={setVehiclePanelOpen}
                    />
                </div>
            </div>
            <div
                ref={vehiclePanelRef}
                className="fixed z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12 w-full"
            >
                <VehiclePanel
                    setVehiclePanelOpen={setVehiclePanelOpen}
                    setConfirmedRidePanel={setConfirmedRidePanel}
                />
            </div>
            <div
                ref={confirmedRidePanelRef}
                className="fixed z-10 bg-white bottom-0 translate-y-full px-3 py-16 pt-12 w-full"
            >
                <ConfirmedRide
                    setConfirmedRidePanel={setConfirmedRidePanel}
                    setVehicleFound={setVehicleFound}
                />
            </div>
            <div
                ref={vehicleFoundRef}
                className="fixed z-10 bg-white bottom-0 translate-y-full px-3 py-16 pt-12 w-full"
            >
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>
            <div
                ref={waitingForDriverRef}
                className="fixed z-10 bg-white bottom-0 translate-y-full px-3 py-16 pt-12 w-full"
            >
                <WaitingForDriver  waitingForDriver={waitingForDriver}   setwaitingForDriver={setwaitingForDriver}/>
            </div>
        </div>
    );
};

export default home;
