"use client";
import Label from "@components/Label";
import Logo from "@components/Logo";
import Menu from "@components/Menu";
import QRPHLogo from "../../../assets/images/qrph.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import QRCode from "react-qr-code";

interface Props {
  searchParams: { qrCodeBody: string };
}

const QRPage = ({ searchParams }) => {
  const router = useRouter();

  const qrCodeBody = searchParams.qrCodeBody;

  // console.log("Payment ID :", paymentId);

  const onNavigateBack = () => {
    router.back();
  };
  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      {/* <Menu/> */}

      {/* Timer */}
      {/* <div className="mt-60 w-full items-center absolute justify-center flex flex-col">
                <div className="alert animate-pulse w-1/2 flex justify-between px-10">
                    <p className="text-xl">Are you still there?</p>
                    <button className="btn btn-neutral end-0">Yes</button>
                </div>
                <div className="justify-center mt-10 w-full">Returning home in 10</div>
            </div> */}

      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <div className="card w-1/2 bg-white text-black drop-shadow-lg p-5">
          <div className="card-body justify-start flex text-left">
            <div className="">
              <div className="w-full">
                <div className="w-full text-center items-center">
                  <div className="items-start">
                    <div className="justify-center mb-4 items-center flex">
                      <h1 className="text-3xl font-semibold me-3 ">Scan </h1>
                      <span>
                        <Image
                          src={QRPHLogo}
                          alt="qrph logo"
                          width={135}
                          height={32}
                        />
                      </span>
                      <h1 className="text-3xl font-semibold ms-3"> to Pay</h1>
                    </div>

                    <p className="text-xl opacity-70">
                      Use your Maya App or Banking/Wallet app to scan QR
                    </p>
                  </div>
                  <div className="text-secondary text-lg my-10 justify-center flex">
                    <div className="w-full border">
                      <QRCode
                        size={500}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        value={qrCodeBody}
                        viewBox={`0 0 256 256`}
                      />
                    </div>
                  </div>
                  <div className="items-end text-black">
                    <div className="w-full text-4xl font-semibold mb-4">
                      P 1,400
                      {/* Display amout here */}
                    </div>
                    <div className="w-full text-xl opacity-70">
                      KMC Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-1/2 pt-60 w-full bottom-0">
        <p
          className=" btn bg-transparent border-transparent btn-lg text-error text-2xl font-semibold"
          onClick={onNavigateBack}
        >
          Cancel Payment
        </p>
      </div>
    </div>
  );
};

export default QRPage;
