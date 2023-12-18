import Menu from "@/app/components/Menu";
import Card from "../_components/Card";

const GetLockers = () => {
  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <Menu />
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <Card title="Good Morning!" subtitle="" />
      </div>
    </div>
  );
};

export default GetLockers;
