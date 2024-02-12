import { useBookingContext } from "@context/BookingContext";
import { apiHeaders } from "@utils/apiHeaders";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaAngleLeft, FaHome } from "react-icons/fa";

const ButtonHome = () => {
  const router = useRouter();

  const { lockerQtySession, setLockerQtySession } = useBookingContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { bookingNumber, doorCount, location } = useBookingContext();

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
    <button onClick={onNavigateHome} className="btn btn-accent">
      <FaHome color="white" size={30} />
    </button>
  );
};

export default ButtonHome;
