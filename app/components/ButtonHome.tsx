import { useBookingContext } from "@context/BookingContext";
import { apiHeaders } from "@utils/apiHeaders";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

const ButtonHome = () => {
  const router = useRouter();

  const { lockerQtySession, setLockerQtySession } = useBookingContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const { bookingNumber, doorCount, location, mobileNumber } =
    useBookingContext();

  const onNavigateHome = async () => {
    if (lockerQtySession && bookingNumber && doorCount) {
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
          router.push("/");
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const responseData = error.response.data.message;
          setError(responseData);
          setIsLoading(false);
        }
      }
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <button
        onClick={() => setDialogOpen(true)}
        className="flex items-center justify-center p-2  text-white font-bold py-2 px-4 rounded"
      >
        <FaHome color="white" size={30} />
      </button>
      {isDialogOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900">Return to Home</h2>
            <p className="text-gray-700 text-2xl m-5">
              Are you sure you want to go to the main screen? <br /> By clicking
              &quot;Confirm&quot; ongoing transaction will be cancelled.
            </p>
            <div className="mt-10 flex justify-center space-x-3">
              <button
                onClick={() => setDialogOpen(false)}
                className="btn btn-outline text-gray-800 font-bold py-3 px-6 rounded"
              >
                Cancel
              </button>
              <button
                onClick={onNavigateHome}
                className="btn btn-primary text-white font-bold py-3 px-6 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonHome;
