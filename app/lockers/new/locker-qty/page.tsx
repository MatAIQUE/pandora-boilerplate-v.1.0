"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { Button } from "@components";
import ButtonBack from "@components/ButtonBack";
import ButtonHome from "@components/ButtonHome";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import { useBookingContext } from "@context/BookingContext";
import { useWebSocket } from "@context/websocket/Websocket";
import { apiHeaders } from "@utils/apiHeaders";
import Image from "next/image";
import Spinner from "../../../assets/images/spinner.svg";

const LockerQTY = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingDoor, setIsLoadingDoor] = useState(false);
  const [errorDoor, setErrorDoor] = useState("");
  const {
    bookingNumber,
    mobileNumber,
    price,
    doorCount,
    setDoorCount,
    availableDoors,
    setAvailableDoors,
    lockerQtySession,
    setLockerQtySession,
    location,
    setBookingNumber,
    setMobileNumber,
  } = useBookingContext();

  const sockets = useWebSocket();
  const lockerId = location;
  const targetRoute = `door-status/${lockerId}`;
  const socket = sockets[targetRoute];

  const availableDoorsCount = async () => {
    const requestBody: Record<any, string> = {
      location: "one ayala",
      lockerId,
    };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_GET_AVAILABLE_DOORS as string,
        requestBody,
        {
          headers: apiHeaders(),
        }
      );

      if (response.status === 200) {
        setAvailableDoors(response.data.data.locker.available);
      }
      setIsLoadingDoor(false);
    } catch (error) {
      setIsLoadingDoor(true);
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 416) {
          setErrorDoor("No available doors");
        }
      }
      setIsLoadingDoor(false);
    }
  };

  useEffect(() => {
    availableDoorsCount();

    const establishConnection = () => {
      socket.addEventListener("open", onOpen);
      socket.addEventListener("error", onError);
      socket.addEventListener("close", onClose);
      socket.addEventListener("message", onMessage);
      const messageToSend = {
        endpoint: "door-status",
      };
      socket.send(JSON.stringify(messageToSend));
    };

    const onOpen = (event) => {
      console.log("Door status - WebSocket opened:", event);
    };

    const onError = (event) => {
      console.log("Door status - WebSocket error:", event);
    };

    const onClose = (event) => {
      console.log("Door status - WebSocket closed:", event);
      establishConnection();
    };

    const onMessage = (event) => {
      console.log(
        `Received message on route ${event.currentTarget.url}:`,
        event.data
      );
      if (event.data) {
        const data = JSON.parse(event.data);

        if (data.status === 200) {
          availableDoorsCount(); // TODO: Optimization
        }
      }
    };

    if (socket) {
      if (socket.readyState === WebSocket.OPEN) {
        establishConnection();
      } else {
        socket.addEventListener("open", establishConnection);
      }
    }

    return () => {
      // Cleanup: Remove event listeners on component unmount
      if (socket) {
        socket.removeEventListener("open", onOpen);
        socket.removeEventListener("message", onMessage);
        socket.removeEventListener("error", onError);
      }
    };
  }, [socket]);

  // useEffect(() => {
  //   availableDoorsCount();
  // }, []);

  const onNavigate = async () => {
    try {
      setLockerQtySession(true);
      setIsLoading(true);
      setIsLoadingDoor(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_RESERVE_DOOR as string,
        {
          bookingNumber: bookingNumber,
          lockerId: location,
          doorCount: doorCount,
          mobileNumber,
        },
        {
          headers: apiHeaders(),
        }
      );

      setIsLoading(false);
      if (response.status === 201) {
        const {
          data: {
            data: { months, days, totalAmount, monthly },
          },
        } = response;
        const url = `/lockers/new/payment?doorCount=${doorCount}&months=${months}&days=${days}&totalAmount=${totalAmount}&monthly=${monthly}`;
        router.push(url);
      }
    } catch (error) {
      setIsLoading(true);

      if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data.message;
        setError(responseData);
        setIsLoading(false);
      }
    }
  };

  const onNavigateBack = () => {
    setBookingNumber("KMC-");
    setMobileNumber("+63");
    setDoorCount(1);
    router.push("/lockers/new");
  };

  const addCart = () => {
    if (doorCount < availableDoors) setDoorCount((prev) => prev + 1);
  };

  const subtractCart = () => {
    if (doorCount > 1) {
      setDoorCount((prev) => prev - 1);
    }
  };

  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <div className="px-5 my-4 absolute w-full">
        <div className="flex justify-between">
          <ButtonBack />
          <ButtonHome />
        </div>
      </div>
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <div className="card w-1/2 bg-secondary text-secondary-content drop-shadow-lg p-5">
          <div className="card-body text-left">
            <Logo />

            <div className="py-10">
              <LabelTitle label="Locker quantity" />
            </div>

            <div className="w-full flex pb-10">
              <div className="w-1/2">
                <div className="h-full w-full">
                  <div className="w-full text-center items-center">
                    <div className="flex items-start justify-between w-[160px]">
                      <button
                        onClick={subtractCart}
                        className={
                          doorCount > 1
                            ? `btn btn-circle btn-primary btn-sm`
                            : `btn btn-circle btn-outline btn-sm`
                        }
                      >
                        <FaMinus />
                      </button>
                      <div className="font-medium text-3xl mx-2">
                        {doorCount}
                      </div>
                      <button
                        onClick={addCart}
                        className={
                          doorCount >= availableDoors
                            ? `btn btn-circle btn-outline btn-sm`
                            : `btn btn-circle btn-primary btn-sm`
                        }

                        // disabled={quantity >= availableDoorsCount}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="h-full w-full">
                  <div className="w-full text-right">
                    <div className="flex items-end justify-end text-end">
                      <div className="font-bold text-4xl">
                        ₱{(Number(doorCount) * Number(price)).toLocaleString()}
                      </div>
                      <span>
                        <p className="ms-2">/mo</p>
                      </span>
                    </div>
                    <div className="h-[50px]">
                      {doorCount > 1 && (
                        <span>
                          <p>&#8369; 700 each</p>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full pb-5">
              {errorDoor ? (
                <div className={`font-medium my-2 flex justify-start`}>
                  <span className={`text-left text-primary`}>{errorDoor}</span>
                </div>
              ) : (
                <p className="text-white text-xl">
                  [{availableDoors}]
                  <span className="opacity-60">Available Lockers</span>
                </p>
              )}
            </div>

            <div className="card-actions justify-center mt-3">
              <div className="grid grid-cols-2 gap-4 w-full items-center text-center">
                <div className="w-full">
                  <button
                    className={`btn btn-outline  rounded-sm w-full text-white font-500 ${
                      isLoading && "opacity-30 pointer-events-none"
                    }`}
                    onClick={onNavigateBack}
                  >
                    Back
                  </button>
                </div>
                <div className="w-full">
                  <button
                    className={`btn btn-primary rounded-sm w-full text-white font-500 ${
                      isLoading ? "opacity-30 pointer-events-none" : ""
                    }`}
                    onClick={onNavigate}
                  >
                    Continue
                    {isLoading && (
                      <span className="animate-spin text-white">
                        <Image
                          src={Spinner}
                          height={30}
                          width={30}
                          alt="spinner loading"
                        />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockerQTY;
