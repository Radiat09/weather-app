import { getDate } from "../utils/utils";
import LiveClock from "./LiveClock";

const PresCast = () => {
  const clock = LiveClock();
  const date = getDate();
  return (
    <div className="text-white p-6 md:p-10 h-full flex flex-col justify-between">
      <div className="text-right">
        <p className="text-2xl font-medium">Rangpur</p>
        <p className="text-xl">IN</p>
      </div>
      <div className="flex justify-between items-center ">
        <div>
          <p className="text-2xl md:text-3xl whitespace-nowrap">{clock}</p>
          <p className="whitespace-nowrap text-sm">{date}</p>
        </div>
        <p className="text-right text-5xl">23&deg;C</p>
      </div>
    </div>
  );
};

export default PresCast;
