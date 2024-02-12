"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface BookingContextProps {
  bookingNumber: string | null;
  setBookingNumber: Dispatch<SetStateAction<string | null>>;
  mobileNumber: string | null;
  setMobileNumber: Dispatch<SetStateAction<string | null>>;
  secretKey: string | null;
  setSecretKey: Dispatch<SetStateAction<string | null>>;
  doorCount: number | null;
  setDoorCount: Dispatch<SetStateAction<number | null>>;
  allDoors: number | null;
  setAllDoors: Dispatch<SetStateAction<number | null>>;
  paymentId: string | null;
  setPaymentId: Dispatch<SetStateAction<string | null>>;
  price: string | null;
  setPrice: Dispatch<SetStateAction<string | null>>;
  lockerId: string | null;
  setLockerId: Dispatch<SetStateAction<string | null>>;
  availableDoors: number | null;
  setAvailableDoors: Dispatch<SetStateAction<number | null>>;
  reserve: Record<string, any> | null;
  setReserve: Dispatch<SetStateAction<Record<string, any> | null>>;
  lockerQtySession: boolean | null;
  setLockerQtySession: Dispatch<SetStateAction<boolean | null>>;
  hasRecurringInvoice: boolean | null;
  setHasRecurringInvoice: Dispatch<SetStateAction<boolean | null>>;
  setLocation: Dispatch<SetStateAction<number | null>>;
  location: number | null;
}

const BookingContext = createContext<BookingContextProps | undefined>(
  undefined
);

export const useBookingContext = (): BookingContextProps => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider = ({
  children,
}: BookingProviderProps): JSX.Element => {
  const [bookingNumber, setBookingNumber] = useState<string | null>("KMC-");
  const [mobileNumber, setMobileNumber] = useState<string | null>("+63");
  const [secretKey, setSecretKey] = useState<string | null>(null);
  const [doorCount, setDoorCount] = useState<number | null>(1);
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>("700");
  const [allDoors, setAllDoors] = useState<number>(null);
  const [availableDoors, setAvailableDoors] = useState<number>(null);
  const [lockerId, setLockerId] = useState<string | null>(null);
  const [reserve, setReserve] = useState<Record<string, any> | null>(null);
  const [lockerQtySession, setLockerQtySession] = useState<boolean | null>(
    false
  );
  const [hasRecurringInvoice, setHasRecurringInvoice] = useState<
    boolean | null
  >(false);

  const [location, setLocation] = useState<number | null>(4001);

  const pathname = usePathname();

  const contextValue: BookingContextProps = {
    bookingNumber,
    setBookingNumber,
    mobileNumber,
    setMobileNumber,
    secretKey,
    setSecretKey,
    allDoors,
    setAllDoors,
    doorCount,
    setDoorCount,
    paymentId,
    setPaymentId,
    price,
    setPrice,
    availableDoors,
    setAvailableDoors,
    lockerId,
    setLockerId,
    reserve,
    setReserve,
    lockerQtySession,
    setLockerQtySession,
    hasRecurringInvoice,
    setHasRecurringInvoice,
    location,
    setLocation,
  };

  // reset all state on in homepage
  useEffect(() => {
    if (pathname === "/") {
      setBookingNumber("KMC-");
      setMobileNumber("+63");
      setSecretKey(null);
      setDoorCount(1);
      setPaymentId(null);
      setPrice("700");
      setAvailableDoors(null);
      setLockerId(null);
      setReserve(null);
      setLockerQtySession(false);
      setHasRecurringInvoice(false);
    }
  }, [pathname]);

  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
};
