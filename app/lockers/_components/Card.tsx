import CardControls from "@/app/components/CardControls";
import Input from "@/app/components/Input";
import InputErr from "@/app/components/InputErr";
import Label from "@/app/components/Label";
import LabelDesc from "@/app/components/LabelDesc";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";

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
              <LabelTitle />
              <Label label="Booking Number*" />
              <Input placeholder="Enter booking number" />
              <Label label="Contact Number*" />
              <Input placeholder="Enter contact number" />
            </div>
          </div>
        </div>
        <CardControls />
      </div>
    </div>
  );
};

export default Card;
