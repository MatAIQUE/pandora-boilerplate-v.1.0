"use client";
import { Button } from "@components";
import ButtonBack from "@components/ButtonBack";
import ButtonHome from "@components/ButtonHome";
import Label from "@components/Label";
import Logo from "@components/Logo";
import { useBookingContext } from "@context/BookingContext";
import { useWebSocket } from "@context/websocket/Websocket";
import { apiHeaders } from "@utils/apiHeaders";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qrIcon from "../../../assets/images/QR.svg";
import kmcLogoRound from "../../../assets/images/kmc-logo-circle.png";
import Spinner from "../../../assets/images/spinner.svg";
import PriceBreakdownIcon from "@assets/images/breakdown.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface Props {
  searchParams: {
    doorCount: string;
    months: string;
    days: string;
    totalAmount: string;
    monthly: string;
  };
}

const PaymentPage = ({ searchParams }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  // const []
  const sockets = useWebSocket();
  const {
    bookingNumber,
    mobileNumber,
    paymentId,
    setPaymentId,
    doorCount,
    hasRecurringInvoice,
    location,
    paymentMethod,
    setPaymentMethod,
  } = useBookingContext();

  const [priceHidden, setPriceHidden] = useState(true);

  const PriceButtonController = () => {
    priceHidden ? setPriceHidden(false) : setPriceHidden(true);
  };

  const doorCountInt = parseInt(searchParams.doorCount, 10);
  const monthly = parseInt(searchParams.monthly, 10);
  const months = searchParams.months;
  const days = searchParams.days;
  const totalAmount = parseInt(searchParams.totalAmount, 10);

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
          lockerId: location,
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
          const sortedDoors = data;
          sortedDoors.sort((a, b) => parseInt(a) - parseInt(b));
          const arrayLength = data.length;
          const stringifiedDoors =
            arrayLength === 1
              ? sortedDoors[0]
              : `${data.slice(0, -1).join(", ")} and ${data.slice(-1)}`;

          router.push(
            `/lockers/new/success?doors=${stringifiedDoors}&addingToInvoice=true`
          );
        } else if (paymentMethod === "qr_wallet") {
          const {
            data: {
              data: { paymentId, qrCodeBody, totalAmount },
            },
          } = response;

          // const qrCodeBody = response.data.data.qrCodeBody;
          setPaymentId(paymentId);

          if (paymentId) {
            router.push(
              `/lockers/new/qr-page?paymentId=${paymentId}&qrCodeBody=${qrCodeBody}&totalAmount=${totalAmount}`
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

  const onNavigateBack = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_UNRESERVE_DOOR as string,
        {
          doorCount: doorCount,
          lockerId: location,
          bookingNumber: bookingNumber,
          unreserve: true,
          mobileNumber,
        },
        {
          headers: apiHeaders(),
        }
      );

      if (response.status === 201) {
        setPaymentMethod("");
        router.back();
      }
    } catch (err) {
      if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data.message;
        setError(responseData);
        setIsLoading(false);
      }
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
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center">
                  <Label label="How do you want to pay" />
                  <div className="mb-5 mt-5">
                    <button
                      disabled={!hasRecurringInvoice}
                      onClick={() =>
                        handleSelectPaymentMethod("add_to_invoice")
                      }
                      className={`btn-outline btn font-weight-500 rounded-sm w-full justify-between px-10
                      ${
                        paymentMethod === "add_to_invoice"
                          ? "focus:border-primary focus:text-primary focus:bg-transparent focus:border-2 btn"
                          : ""
                      }
                      `}
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
                    <button
                      disabled
                      className={`btn-outline btn font-weight-500 rounded-sm w-full justify-between px-10
                      ${
                        paymentMethod === "qr_wallet"
                          ? "focus:border-primary focus:text-primary focus:bg-transparent focus:border-2 btn"
                          : ""
                      }
                      `}
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
                  {!hasRecurringInvoice && (
                    <div className={`font-medium my-2 flex justify-start`}>
                      <span className={`text-left text-error `}>
                        Please approach the frontdesk and/or admin to book a
                        locker
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card-actions justify-center">
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
                      isLoading || isContinueDisabled
                        ? "opacity-30 pointer-events-none"
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

      <div
        className="absolute bottom-0 transition-transform px-[300px] overflow-hidden right-0 w-full bg-white"
        onClick={PriceButtonController}
      >
        <div className="relative py-5">
          <div className="flex justify-center items-center py-4">
            <Image
              src={PriceBreakdownIcon}
              height={24}
              width={24}
              alt=""
              className="me-2"
            />
            <p className="font-bold text-center text-black text-2xl">
              Price Breakdown
            </p>
          </div>
          <div
            className={`transition-transform
          ${priceHidden ? "translate-y-full h-0 " : ""}
          `}
          >
            <div className="grid gap-y-4 text-black font-semibold py-4 text-lg">
              <div className="grid gap-y-2">
                <div className="flex justify-between">
                  <p className="text-gray-500">Lease Term</p>
                  <p>
                    {/* Map Months */}
                    {months}
                    <span className="mx-1">Mo. and</span>
                    {/* Map Days */}
                    {days}
                    <span className="ms-1">Days</span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">
                    {/* Map doors */}
                    <span className="font-bold text-black me-1">
                      {doorCount}
                    </span>
                    Lockers
                  </p>
                  {/* Map amount */}
                  <p>
                    {monthly.toLocaleString()}
                    <span className="ms-1">/Mo.</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-black text-xl font-bold">
                <p>Total</p>
                {/* Map Total Amount */}
                <p className="uppercase">
                  <span className="me-1">php</span>
                  {totalAmount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-5 top-5 text-black">
          <div
            className="p-4 flex items-center justify-center rounded"
            onClick={PriceButtonController}
          >
            <FaAngleDown
              className={`text-[24px]
            ${priceHidden ? "hidden" : ""}
            `}
            />
            <FaAngleUp
              className={`text-[24px]
            ${priceHidden ? "" : "hidden"}
            `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
