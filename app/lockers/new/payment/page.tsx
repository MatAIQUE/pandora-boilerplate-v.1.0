"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@components";
import Label from "@components/Label";
import Logo from "@components/Logo";
import Menu from "@components/Menu";
import { useRouter } from "next/navigation";
import Image from "next/image";
import kmcLogoRound from "../../../assets/images/kmc-logo-circle.png";
import qrIcon from "../../../assets/images/QR.svg";
import { useWebSocket } from "@context/websocket/Websocket";

interface Props {
  searchParams: { bookingNum: string; doorCount: string; mobileNumber: string };
}

const PaymentPage = ({ searchParams }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const sockets = useWebSocket();

  const bookingNum = searchParams.bookingNum;
  const doorCount = parseInt(searchParams.doorCount, 10);
  const mobileNumber = searchParams.mobileNumber;

  const paymentAction = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_ADD_TO_INVOICE as string,
        {
          doorCount: doorCount,
          mobileNumber: mobileNumber,
          bookingNumber: bookingNum,
          paymentMethod: paymentMethod,
          lockerId: "locker000001",
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
            "x-api-secret": process.env.NEXT_PUBLIC_X_API_SECRET,
            "Content-Type": "application/json",
          },
        }
      );

      setIsLoading(false);
      if (response.status === 200) {
        if (paymentMethod === "add_to_invoice") {
          const url = `/lockers/new/success`;
          router.push(url);
        } else if (paymentMethod === "qr_wallet") {
          const {
            data: {
              data: { paymentId },
            },
          } = response;

          const qrCodeBody = response.data.data.qrCodeBody;
          setPaymentId(paymentId);

          if (paymentId) {
            router.push(
              `/lockers/new/qr-page?paymentId=${paymentId}&qrCodeBody=${qrCodeBody}`
            );
            // console.log("Response:", response.data.data.qrCodeBody);
          }
        }
      }
    } catch (error) {
      setIsLoading(true);
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data.message;
        setError(responseData);
        setIsLoading(false);
      }
    }
  };

  const handleSelectPaymentMethod = (paymentMethod) => {
    // other shenanigans here ...
    setPaymentMethod(paymentMethod);
  };

  useEffect(() => {
    try {
      const targetRoute = "payments";

      const socket = sockets[targetRoute];
      if (paymentId) {
        console.log("Payment ID:", paymentId);

        socket.addEventListener("open", (event) => {
          console.log("opened");
          // Send a message when connected
          // const messageToSend = {
          //   endpoint: "payment",
          //   paymentId: paymentId,
          // };

          // socket.send(JSON.stringify(messageToSend));
        });

        socket.addEventListener("message", (event) => {
          console.log(
            `Received message on route ${event.currentTarget.url}:`,
            event.data
          );
        });

        socket.addEventListener("close", (event) => {
          console.log("WebSocket closed:", event);
        });

        socket.addEventListener("error", (event) => {
          console.error("WebSocket error:", event);
        });
      }

      return () => {
        // Cleanup: Remove event listeners on component unmount
        if (socket) {
          socket.removeEventListener("open", () => {});
          socket.removeEventListener("message", () => {});
          socket.removeEventListener("close", () => {});
          socket.removeEventListener("error", () => {});
        }
      };
    } catch (err) {
      console.log(err);
    }
  }, [paymentId]);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, [sockets, paymentId]);

  const onNavigateBack = () => {
    router.back();
  };
  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      {isMounted ? (
        <p>The component is mounted!</p>
      ) : (
        <p>The component is not mounted.</p>
      )}
      <Menu />
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <div className="card w-1/2 bg-secondary text-secondary-content drop-shadow-lg p-5">
          <div className="card-body text-left">
            <Logo />
            <div className="py-10">
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center">
                  <Label label="How do you want to pay" />
                  <div className="mb-5 mt-5">
                    {/* <Button
                      label="Add to Booking Invoice"
                      bgColor="btn-outline"
                      color="gray-800"
                      weight="500"
                      outline="btn-outline"
                    /> */}
                    <button
                      onClick={() =>
                        handleSelectPaymentMethod("add_to_invoice")
                      }
                      className="btn-outline btn gray-800 font-weight-500 rounded-sm w-full justify-evenly"
                    >
                      <label>Add to Booking Invoice</label>
                      <span>
                        <Image
                          src={kmcLogoRound}
                          alt="kmc logo round"
                          height={30}
                          width={30}
                        />
                      </span>
                    </button>
                  </div>
                  <div className="mb-5 mt-5">
                    {/* <Button
                      label="Pay with Maya/Gcash"
                      bgColor="btn-outline"
                      color="gray-800"
                      weight="500"
                      outline="btn-outline"
                    /> */}
                    <button
                      className="btn-outline btn gray-800 font-weight-500 rounded-sm w-full justify-evenly"
                      onClick={() => handleSelectPaymentMethod("qr_wallet")}
                    >
                      <label>Pay with Maya/GCash</label>
                      <span>
                        <Image
                          src={qrIcon}
                          alt="kmc logo round"
                          height={30}
                          width={30}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-center">
              <div className="grid grid-cols-2 gap-4 w-full items-center text-center">
                <div className="w-full">
                  <Button
                    label="Back"
                    bgColor="btn-outline"
                    color="gray-800"
                    weight="500"
                    outline="btn-outline"
                    onClick={onNavigateBack}
                  />
                </div>
                <div className="w-full">
                  <Button
                    label="Continue"
                    bgColor="btn-primary"
                    color="white"
                    weight="500"
                    outline=""
                    onClick={paymentAction}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
