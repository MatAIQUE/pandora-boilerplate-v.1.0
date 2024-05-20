import { Button } from "@components";
import Logo from "@components/Logo";
import Time from "@components/Time";
import Spinner from "@/assets/images/spinner.svg";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  onNavigate?: () => void;
  onNavigateToOpenLocker?: () => void;
  errorDoor: boolean;
  isLoadingDoor: boolean;
}

const Card = ({
  title,
  subtitle,
  onNavigate,
  onNavigateToOpenLocker,
  errorDoor,
  isLoadingDoor,
}: Props) => {
  return (
    <div className="card w-1/2 bg-secondary text-secondary-content drop-shadow-lg p-5">
      <div className="card-body text-left">
        <Logo />
        <div className="py-10">
          <div className="py-10 h-full w-full">
            <div className="w-full text-center items-center">
              <Time />
              {errorDoor && (
                <div className={`font-2xl my-2 flex justify-center`}>
                  <span className={`text-left text-error`}>
                    No available doors
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="card-actions justify-center mt-3">
          {isLoadingDoor ? (
            <span className="animate-spin text-white">
              <Image
                src={Spinner}
                height={30}
                width={30}
                alt="spinner loading"
              />
            </span>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 w-full items-center text-center">
                <div className="w-full">
                  <Button
                    label="Get a Locker"
                    bgColor="btn-outline"
                    color="white"
                    weight="500"
                    outline="btn-outline"
                    onClick={onNavigate}
                  />
                </div>
                <div className="w-full">
                  <Button
                    label="Open Locker"
                    bgColor="btn-primary"
                    color="white"
                    weight="500"
                    outline=""
                    onClick={onNavigateToOpenLocker}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
