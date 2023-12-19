import { Button } from "@/app/components";
import CardControls from "@/app/components/CardControls";
import Logo from "@/app/components/Logo";
import Time from "@/app/components/Time";

interface Props {
  title: string;
  subtitle: string;
  onNavigate?: () => void;
  onNavigateBack?: () => void;
}

const Card = ({ title, subtitle, onNavigate, onNavigateBack }: Props) => {
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
        <div className="card-actions justify-center mt-3">
          <div className="grid grid-cols-2 gap-4 w-full items-center text-center">
            <div className="w-full">
              <Button
                label="Get a Locker"
                bgColor="btn-outline"
                color="gray-800"
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
