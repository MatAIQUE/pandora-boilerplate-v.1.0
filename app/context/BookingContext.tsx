"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface BookingContextProps {
  bookingNumber: string | null;
  setBookingNumber: Dispatch<SetStateAction<string | null>>;
  mobileNumber: string | null;
  setMobileNumber: Dispatch<SetStateAction<string | null>>;
  secretKey: string | null;
  setSecretKey: Dispatch<SetStateAction<string | null>>;
  paymentId: string | null;
  setPaymentId: Dispatch<SetStateAction<string | null>>;
  price: string | null;
  setPrice: Dispatch<SetStateAction<string | null>>;
  availableDoors: number[];
  setAvailableDoors: Dispatch<SetStateAction<number[]>>;
  lockerId: string | null;
  setLockerId: Dispatch<SetStateAction<string | null>>;
  available: Record<string, any> | null;
  setAvailable: Dispatch<SetStateAction<Record<string, any> | null>>;
  reserve: Record<string, any> | null;
  setReserve: Dispatch<SetStateAction<Record<string, any> | null>>;
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
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>("700");
  const [availableDoors, setAvailableDoors] = useState<number[]>([]);
  const [lockerId, setLockerId] = useState<string | null>(null);
  const [available, setAvailable] = useState<Record<string, any> | null>(null);
  const [reserve, setReserve] = useState<Record<string, any> | null>(null);

  const contextValue: BookingContextProps = {
    bookingNumber,
    setBookingNumber,
    mobileNumber,
    setMobileNumber,
    secretKey,
    setSecretKey,
    paymentId,
    setPaymentId,
    price,
    setPrice,
    availableDoors,
    setAvailableDoors,
    lockerId,
    setLockerId,
    available,
    setAvailable,
    reserve,
    setReserve,
  };

  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
};
