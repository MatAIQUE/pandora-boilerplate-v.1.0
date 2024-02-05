import { useBookingContext } from "@context/BookingContext";
import { apiHeaders } from "@utils/apiHeaders";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaAngleLeft, FaHome } from "react-icons/fa";

const Menu = () => {
  const router = useRouter();

  const { lockerQtySession, setLockerQtySession } = useBookingContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { bookingNumber, doorCount } = useBookingContext();

  const onNavigateBack = () => {
    router.back();
  };

  const onNavigateHome = async () => {
    if (lockerQtySession && bookingNumber && doorCount) {
      try {
        const response = await axios.post(
          process.env.NEXT_PUBLIC_UNRESERVE_DOOR as string,
          {
            doorCount: doorCount,
            lockerId: "4000",
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
    <div className="my-4 absolute w-full">
      <div className="px-5 flex justify-between">
        <button onClick={onNavigateBack} className="btn btn-accent">
          <FaAngleLeft color="white" size={30} />
        </button>

        <button onClick={onNavigateHome} className="btn btn-accent">
          <FaHome color="white" size={30} />
        </button>
      </div>
    </div>
  );
};

export default Menu;
