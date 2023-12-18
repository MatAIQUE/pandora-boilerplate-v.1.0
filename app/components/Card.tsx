import CardControls from "./CardControls";
import CardTitle from "./CardTitle";
import DoorAlert from "./DoorAlert";
import Input from "./Input";
import Logo from "./Logo";
import Time from "./Time";

interface Props {
  title: string;
  subtitle: string;
}

const Card = ({ title, subtitle }: Props) => {
  return (
    <div className="card w-1/2 bg-neutral text-neutral-content drop-shadow-lg p-5">
      <div className="card-body text-left">
        <Logo />
        <div className="py-10">
          <div className="py-10 h-full w-full">
            <div className="w-full text-center items-center">
              {/* <Time /> */}
              {/* <Input/> */}
              <DoorAlert/>
            </div>
          </div>
        </div>
        <CardControls />
      </div>
    </div>
  );
};

export default Card;
