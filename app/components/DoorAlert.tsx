import { FaCheckCircle, FaBellSlash } from "react-icons/fa";
import Image from "next/image";
import Spinner from "../assets/images/spinner.svg"
const DoorAlert = () => {

    return (
      <>        
        {/* Success Page */}
        {/* <div className="h-40">
            <div className="h-full flex flex-col">
                <div className="flex h-1/2 items-start w-full">
                    <span className="mr-5">
                        <FaCheckCircle className="text-success" size={30} />
                    </span>
                    <p className="text-left text-2xl text-white">Door Opened!</p>
                </div>
                <div className="justify-center text-center flex h-1/2 items-end pt-40 w-full">
                    <div className="w-full">
                        <div className="w-full justify-center text-center flex pb-5">
                            <Image className="animate-spin" src={Spinner} alt="" height={30} width={30}/>
                        </div>
                        <p className="text-white">Returning to homepage in 5</p>
                    </div>
                </div>
            </div>
        </div> */}
        {/* End of Success Page */}

        {/* Error Page */}
        <div className="h-60">
            <div className="h-full">
                <div className="flex mb-10 items-start w-full">
                    <span className="mr-5">
                        <FaBellSlash className="text-error" size={30} />
                    </span>
                    <p className="text-left text-2xl text-white">Please try again later</p>
                </div>
                <div className="text-center w-full">
                    <div className="w-full">
                        <div className="w-full justify-center text-left flex pb-5">
                            <p className="text-xl text-white">Incorrect PIN</p>
                        </div>
                        <div className="w-full justify-center text-left flex pb-5">
                            <p className="text-white">Sorry we’ve locked your Locker for 5 Minutes. If you forgot you’re PIN Code you can reset it below or talk to our Admin on Site</p>
                        </div>
                        <p className="text-primary mt-10">Forgot PIN Code?</p>
                    </div>
                </div>
            </div>
        </div>
        {/* End of Error Page */}

      </>
    );
  };
  
  export default DoorAlert;
  