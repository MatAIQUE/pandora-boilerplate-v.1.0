"use client";
import { Button } from "@/app/components";
import DoorInputOTP from "@/app/components/DoorInputOTP";
import LabelDesc from "@/app/components/LabelDesc";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

const VerifyPIN = () => {
  const router = useRouter();
  const [pinCode, setPinCode] = useState("");

  const onNavigate = () => {
    router.push("/lockers/open/success");
  };

  const onNavigateBack = () => {
    router.back();
  };

  const handleKeyClick = (value: string) => {
    if (pinCode.length < 6) {
      setPinCode((prevPin) => prevPin + value);
    }
  };

  const handleDeleteClick = () => {
    setPinCode((prevPin) => prevPin.slice(0, -1));
  };

  console.log(pinCode);

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
                  <LabelTitle label="Enter your Locker PIN code" />
                  <LabelDesc
                    label="Enter the 6-digit credential code sent to your"
                    position="justify-start"
                  />
                  <LabelDesc label="mobile number." position="justify-start" />
                  <div className="w-full text-center items-center mt-10">
                    <DoorInputOTP pinCode={pinCode} />
                    <div className="text-danger font-medium flex justify-start">
                      <button className="btn btn-ghost pl-0">
                        <span className="text-primary text-lg">
                          Forgot PIN Code?
                        </span>
                      </button>
                    </div>

                    <div className="flex justify-center items-center gap-1 mt-10 my-1  w-full">
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("1")}
                      >
                        1
                      </kbd>
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("2")}
                      >
                        2
                      </kbd>
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("3")}
                      >
                        3
                      </kbd>
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-2 my-1 w-full">
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("4")}
                      >
                        4
                      </kbd>
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("5")}
                      >
                        5
                      </kbd>
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("6")}
                      >
                        6
                      </kbd>
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-2 my-1 w-full">
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("7")}
                      >
                        7
                      </kbd>
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("8")}
                      >
                        8
                      </kbd>
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("9")}
                      >
                        9
                      </kbd>
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-2 my-1 w-full">
                      <kbd className="kbd2 text-xl w-full"></kbd>
                      <kbd
                        className="keypad text-xl w-full"
                        onClick={() => handleKeyClick("0")}
                      >
                        0
                      </kbd>
                      <kbd
                        className="kbd2 text-xl w-full"
                        onClick={() => handleDeleteClick()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.34546 11.1196C8.33078 11.1332 8.30196 11.1616 8.27017 11.1934C8.24712 11.2165 8.22871 11.2351 8.19059 11.2739L6.08119 13.4177C6.02595 13.4765 5.98758 13.516 5.89844 13.6066C5.8487 13.6572 5.81218 13.696 5.73359 13.7809C5.58748 13.9246 5.43341 14.0962 5.28903 14.2773C5.1529 14.4236 5.04413 14.5941 4.96816 14.7804C4.81176 15.2646 4.81176 15.7354 4.95108 16.1725L4.96974 16.2235C5.04632 16.4078 5.15444 16.5767 5.28901 16.7225C5.43351 16.9023 5.58757 17.0739 5.75049 17.2367C5.81218 17.304 5.8487 17.3428 5.89844 17.3934L6.08119 17.5791L8.00438 19.5369C8.09432 19.6283 8.13848 19.6727 8.18964 19.7223C8.24417 19.7807 8.30144 19.8387 8.35893 19.8937C8.36921 19.903 10.8204 22.3926 10.8204 22.3926C10.8961 22.4696 10.9571 22.53 11.0945 22.6648C11.1091 22.6793 11.1312 22.7022 11.138 22.7094C11.1734 22.7472 11.1939 22.7691 11.2075 22.783C11.4934 23.0739 11.822 23.3184 12.1815 23.5076C12.5499 23.694 12.9332 23.8222 13.3286 23.8929C13.7021 23.955 14.0721 23.9882 14.443 23.9936C14.5068 23.9949 14.5598 23.9956 14.678 23.9968C14.7921 23.998 14.8424 23.9986 14.9042 23.9999L22.2081 24C22.2834 23.9986 22.3343 23.998 22.4496 23.9968C22.5689 23.9956 22.6225 23.9949 22.691 23.9936C23.0634 23.9869 23.436 23.9526 23.8047 23.8909C24.2089 23.8214 24.5976 23.691 24.9605 23.5035C25.3261 23.3148 25.6599 23.0679 25.9492 22.7724C26.2369 22.4788 26.4785 22.1413 26.665 21.7724C26.8491 21.3978 26.9757 21.0045 27.0437 20.5988C27.1056 20.2196 27.1384 19.839 27.1423 19.4576C27.1456 19.3791 27.1471 19.3041 27.1492 19.138C27.1502 19.0591 27.1507 19.0244 27.1515 18.9816L27.1517 11.9898C27.1507 11.9353 27.1502 11.9007 27.1492 11.8233L27.1481 11.7428C27.1466 11.6413 27.1449 11.5651 27.1419 11.4893C27.1378 11.1302 27.1063 10.7546 27.0479 10.3827C26.9767 9.9709 26.8506 9.58132 26.6717 9.21602C26.4838 8.84294 26.2438 8.50805 25.9573 8.21693C25.6717 7.92442 25.34 7.67857 24.9765 7.49042C24.6153 7.30653 24.2338 7.17811 23.8401 7.10724C23.4625 7.04612 23.0919 7.01407 22.7205 7.00949C22.5976 7.00425 22.4889 7.00315 22.2483 7.00315C22.1695 7.00173 22.0773 7.00084 21.9737 7.0004C21.8957 7.00007 21.8337 7 21.6939 7H15.471C15.1919 7 15.0655 7.00054 14.9062 7.00324C14.676 7.00315 14.5672 7.00425 14.4272 7.00995C14.0741 7.01378 13.7041 7.04588 13.3379 7.10553C12.9332 7.17782 12.5499 7.30602 12.1905 7.48777C11.822 7.68162 11.4934 7.92613 11.2073 8.21728C11.1939 8.2309 11.1734 8.25276 11.1394 8.2891C11.1312 8.29781 11.0945 8.33519 11.0945 8.33519C10.9571 8.46999 10.8961 8.53044 10.8204 8.60738L10.5044 8.92849L8.40309 11.0673C8.38468 11.0822 8.36498 11.0998 8.34546 11.1196ZM21.6939 8.25926C21.832 8.25926 21.8928 8.25932 21.9685 8.25965C22.0673 8.26007 22.1544 8.2609 22.238 8.26232C22.4724 8.26241 22.5701 8.2634 22.6882 8.2682C23.0167 8.27249 23.3273 8.29936 23.6347 8.34904C23.8999 8.39687 24.1673 8.48689 24.4179 8.61444C24.6604 8.73995 24.885 8.90644 25.0795 9.10572C25.2765 9.3058 25.4399 9.53389 25.5657 9.78352C25.6883 10.034 25.7771 10.3082 25.826 10.5909C25.8732 10.8923 25.8996 11.2069 25.9034 11.5221C25.9064 11.6029 25.9079 11.6696 25.9092 11.7615L25.9103 11.8399C25.9114 11.9202 25.9119 11.9567 25.9128 12.0024L25.9127 18.9693C25.9119 19.0033 25.9114 19.0399 25.9103 19.1216C25.9083 19.2767 25.907 19.3444 25.9038 19.4263C25.9001 19.7612 25.8729 20.0774 25.8219 20.39C25.7748 20.6708 25.6863 20.9458 25.5598 21.2033C25.4349 21.4503 25.2689 21.6821 25.0711 21.884C24.8743 22.085 24.6477 22.2526 24.3993 22.3809C24.1479 22.5107 23.8787 22.601 23.6008 22.6488C23.2942 22.7001 22.9814 22.7289 22.6679 22.7345C22.6036 22.7358 22.5527 22.7365 22.4373 22.7376C22.318 22.7388 22.2644 22.7395 22.1959 22.7409L14.9166 22.7407C14.8617 22.7395 14.8087 22.7388 14.6904 22.7376C14.5763 22.7365 14.5261 22.7358 14.4643 22.7346C14.1509 22.73 13.8418 22.7022 13.5358 22.6514C13.2651 22.6029 12.9953 22.5127 12.7424 22.3848C12.505 22.2598 12.2799 22.0923 12.0839 21.8928L12.0355 21.8413C11.9875 21.7902 11.9667 21.7684 11.9427 21.7468C11.8193 21.6256 11.7631 21.5699 11.6965 21.5022L9.24015 19.0057L9.24002 19.0056C9.21767 18.9849 9.20413 18.9724 9.19477 18.964C9.15039 18.9206 9.11408 18.8833 9.07976 18.8463C9.00884 18.7764 8.96999 18.7374 8.88084 18.6468L6.95765 16.689L6.77454 16.5029C6.73652 16.4643 6.70593 16.4318 6.63583 16.3561C6.48327 16.203 6.35526 16.0598 6.23552 15.9096L6.19805 15.8667C6.16683 15.8341 6.1409 15.7967 6.1212 15.756C6.07354 15.5881 6.07372 15.4099 6.12174 15.2421C6.14031 15.203 6.16512 15.1672 6.19519 15.1362L6.23742 15.088C6.35519 14.9388 6.48188 14.7971 6.61678 14.6636C6.70593 14.5682 6.73652 14.5357 6.77454 14.4971C6.87125 14.3988 6.91445 14.3543 6.96838 14.2966L8.88084 12.3532L9.06669 12.1643C9.10368 12.1267 9.11955 12.1106 9.13966 12.0905L9.1806 12.0531C9.21036 12.026 9.22687 12.0109 9.24325 11.9943L11.3808 9.8186L11.6965 9.49781C11.7631 9.43006 11.8193 9.37439 11.9427 9.25325C11.9667 9.23164 11.9875 9.20984 12.0339 9.16039L12.0837 9.10744C12.2799 8.90772 12.505 8.74022 12.7513 8.61058C12.9953 8.48729 13.2651 8.39708 13.5433 8.34733C13.84 8.29907 14.1491 8.27225 14.459 8.26866C14.5948 8.2634 14.6925 8.26241 14.9166 8.26241C15.077 8.25978 15.1988 8.25926 15.471 8.25926H21.6939ZM15.8259 18.8325C15.7757 18.8825 15.7158 18.9232 15.6484 18.9515C15.4397 19.0391 15.1997 18.9902 15.0405 18.8276C14.8239 18.6065 14.8239 18.2491 15.0405 18.028C15.0721 17.9957 15.1069 17.9679 15.144 17.9448L17.5495 15.4973L15.0405 12.95L15.048 12.9423C14.9988 12.8913 14.9587 12.8305 14.9309 12.7619C14.8447 12.5499 14.8929 12.3059 15.0528 12.1441C15.2704 11.9239 15.6221 11.9239 15.8396 12.1441C15.8713 12.1761 15.8986 12.2114 15.9213 12.249L18.3349 14.6981L20.771 12.2195C20.7891 12.1931 20.8097 12.1678 20.8328 12.1441C20.9914 11.9821 21.2305 11.9334 21.4383 12.0206C21.6462 12.1078 21.7817 12.3138 21.7817 12.5423C21.7817 12.6946 21.7215 12.8369 21.6198 12.9407L21.6258 12.9469L19.1208 15.4956L21.5655 17.9763C21.5876 17.9927 21.6088 18.011 21.6288 18.0311C21.7882 18.1923 21.8362 18.4353 21.7503 18.6466C21.6645 18.8578 21.4619 18.9956 21.237 18.9956C21.0871 18.9956 20.9471 18.9344 20.8449 18.831L20.839 18.837L18.3351 16.2949L15.8335 18.8402L15.8259 18.8325Z"
                            fill="white"
                          />
                        </svg>
                      </kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-center mt-3">
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
                    onClick={onNavigate}
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

export default VerifyPIN;
