import { useState } from "react";
import img1 from "../assets/images/background.jpg";
import img3 from "../assets/images/city.jpg";
import Forecast from "../components/Forecast";
import PresCast from "../components/PresCast";

const MainLayout = () => {
  const [currentCityMain, setCurrentCityMain] = useState("");
  return (
    <div
      className="w-full bg-slate-400 min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url("${img1}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1600px] w-full min-h-[800px] grid grid-cols-1 md:grid-cols-5 mx-3 justify-center items-center">
        <div
          className="md:col-span-3 h-full w-full"
          style={{
            backgroundImage: `url("${img3}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          {/* Rendering users Curent date, time, and some weather Info */}
          <PresCast setCurrentCityMain={setCurrentCityMain} />
        </div>
        <div className="md:col-span-2 h-full  w-full bg-black opacity-80">
          {/* Dynamically showing weather data of any region */}
          <Forecast wMain={currentCityMain} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
