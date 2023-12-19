import CardControls from "@/app/components/CardControls";
import Logo from "@/app/components/Logo";
import Time from "@/app/components/Time";

interface Props {
  title: string;
  subtitle: string;
  onNavigate: () => void;
}

const Card = ({ title, subtitle, onNavigate }: Props) => {
  return (
    <div className="card w-1/2 bg-neutral text-neutral-content drop-shadow-lg p-5">
      <div className="card-body text-left">
        <Logo />
        <div className="py-10">
          <div className="py-10 h-full w-full">
            <div className="w-full text-center items-center">
              <Time />
            </div>
          </div>
        </div>
        <CardControls onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default Card;
