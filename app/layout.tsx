import "./globals.css";
import { Inter } from "next/font/google";
import { WebSocketProvider } from "@context/websocket/Websocket";
import { BookingProvider } from "@context/BookingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KMC-Panel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WebSocketProvider>
      <BookingProvider>
        <html lang="en" data-theme="kmc">
          <body className={inter.className}>{children}</body>
        </html>
      </BookingProvider>
    </WebSocketProvider>
  );
}
