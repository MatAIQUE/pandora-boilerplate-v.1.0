import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Spinner from "../assets/images/spinner.svg"
const DoorAlert = () => {

    return (
      <>
        {/* <div className="flex flex-row justify-center">
            <span className="mr-5">
                <FaCheckCircle className="text-success" size={30} />
            </span>
            <p className="text-left text-2xl text-white">Door Opened!</p>
        </div>
        <div className="flex justify-center items-end py-20 mt-30 mb-10">
            <Image src={Spinner} alt="" height={30} width={30}/>
        </div> */}
        

        <div className="h-40">
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
                            <Image className="loading" src={Spinner} alt="" height={30} width={30}/>
                        </div>
                        <p className="text-white">Returning to homepage in 5</p>
                    </div>
                </div>
            </div>
        </div>

      </>
    );
  };
  
  export default DoorAlert;
  