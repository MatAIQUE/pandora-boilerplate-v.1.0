"use client";
import { Button } from "@components";
import Label from "@components/Label";
import Logo from "@components/Logo";
import Menu from "@components/Menu";
import { useBookingContext } from "@context/BookingContext";
import { useWebSocket } from "@context/websocket/Websocket";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qrIcon from "../../../assets/images/QR.svg";
import kmcLogoRound from "../../../assets/images/kmc-logo-circle.png";
import { apiHeaders } from "@utils/apiHeaders";
import Spinner from "../../../assets/images/spinner.svg";

interface Props {
  searchParams: { doorCount: string };
}

const PaymentPage = ({ searchParams }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const sockets = useWebSocket();
  const {
    bookingNumber,
    setBookingNumber,
    mobileNumber,
    setMobileNumber,
    paymentId,
    setPaymentId,
    secretKey,
    setSecretKey,
    doorCount,
    setDoorCount,
    setAvailableDoors,
  } = useBookingContext();

  const doorCountInt = parseInt(searchParams.doorCount, 10);

  const paymentAction = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_ADD_TO_INVOICE as string,
        {
          doorCount: doorCountInt,
          mobileNumber: mobileNumber,
          bookingNumber: bookingNumber,
          paymentMethod: paymentMethod,
          lockerId: "4000",
        },
        {
          headers: apiHeaders(),
        }
      );

      setIsLoading(false);
      if (response.status === 200) {
        if (paymentMethod === "add_to_invoice") {
          const {
            data: { data: data },
          } = response;
          const arrayLength = data.length;
          const stringifiedDoors =
            arrayLength === 1
              ? data[0]
              : `${data.slice(0, -1).join(", ")} and ${data.slice(-1)}`;

          router.push(`/lockers/new/success?doors=${stringifiedDoors}`);
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

  console.log("payment", paymentMethod);

  useEffect(() => {
    if (!paymentMethod) {
      setIsContinueDisabled(true);
    } else {
      setIsContinueDisabled(false);
    }

    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, [sockets, paymentId, paymentMethod]);

  const onNavigateBack = () => {
    router.back();
  };
  return (
    <div className="h-screen relative flex flex-col w-full text-center">
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
                  <button
                    className={`btn btn-primary rounded-sm w-full text-white font-500 ${
                      isLoading || isContinueDisabled
                        ? "opacity-70 pointer-events-none"
                        : ""
                    }`}
                    onClick={paymentAction}
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

export default PaymentPage;
