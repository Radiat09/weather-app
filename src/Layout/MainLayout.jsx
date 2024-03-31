// import { apikeys, getDate, iconDefaults } from "../utils/utils";
// import { useEffect, useState } from "react";
import img1 from "../assets/images/background.jpg";
import img2 from "../assets/images/background1.jpg";
import img3 from "../assets/images/city.jpg";
import img4 from "../assets/images/city1.jpg";

import Forecast from "../components/Forecast";

const MainLayout = () => {
  // const [currWeather, setCurrWeather] = useState(null);
  // const [cIcon, setCIcon] = useState("CLEAR_DAY");

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     this.getPosition()
  //       //If user allow location service then will fetch data & send it to get-weather function.
  //       .then((position) => {
  //         this.getWeather(position.coords.latitude, position.coords.longitude);
  //       })
  //       .catch((err) => {
  //         //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
  //         this.getWeather(28.67, 77.22);
  //         alert(
  //           "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
  //         );
  //       });
  //   } else {
  //     alert("Geolocation not available");
  //   }

  //   setInterval(() => this.getWeather(this.state.lat, this.state.lon), 600000);
  // }, []);
  //Get user location
  // const getPosition = (options) => {
  //   return new Promise(function (resolve, reject) {
  //     navigator.geolocation.getCurrentPosition(resolve, reject, options);
  //   });
  // };

  //Get user location wather
  // const getWeather = async (lat, lon) => {
  //   const api_call = await fetch(
  //     `${apikeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apikeys.key}`
  //   );
  //   const data = await api_call.json();
  //   setCurrWeather(data);
  // };

  // switch (currWeather.main) {
  //   case "Haze":
  //     setCIcon({ icon: "CLEAR_DAY" });
  //     break;
  //   case "Clouds":
  //     setCIcon({ icon: "CLOUDY" });
  //     break;
  //   case "Rain":
  //     setCIcon({ icon: "RAIN" });
  //     break;
  //   case "Snow":
  //     setCIcon({ icon: "SNOW" });
  //     break;
  //   case "Dust":
  //     setCIcon({ icon: "WIND" });
  //     break;
  //   case "Drizzle":
  //     setCIcon({ icon: "SLEET" });
  //     break;
  //   case "Fog":
  //     setCIcon({ icon: "FOG" });
  //     break;
  //   case "Smoke":
  //     setCIcon({ icon: "FOG" });
  //     break;
  //   case "Tornado":
  //     setCIcon({ icon: "WIND" });
  //     break;
  //   default:
  //     setCIcon({ icon: "CLEAR_DAY" });
  // }

  // const currentDate = getDate();
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
      <div className="max-w-7xl min-h-[80vh] grid grid-cols-5  justify-center items-center">
        <div
          className="col-span-3 h-full w-full"
          style={{
            backgroundImage: `url("${img3}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div className="col-span-2 h-full min-w-[320px] w-full bg-black opacity-80">
          <Forecast wMain={"Hazy"} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
{
  /* <div className="city">
  <div className="title">
    <h2>{currWeather.city}</h2>
    <h3>{currWeather.country}</h3>
  </div>
  <div className="mb-icon">
    {" "}
    <ReactAnimatedWeather
      icon={cIcon}
      color={iconDefaults.color}
      size={iconDefaults.size}
      animate={iconDefaults.animate}
    />
    <p>{currWeather.main}</p>
  </div>
  <div className="date-time">
    <div className="dmy">
      <div id="txt"></div>
      <div className="current-time">
        <Clock format="HH:mm:ss" interval={1000} ticking={true} />
      </div>
      <div className="current-date">{currentDate}</div>
    </div>
    <div className="temperature">
      <p>
        {currWeather.temperatureC}°<span>C</span>
      </p>
      {/* <span className="slash">/</span>
                {this.state.temperatureF} &deg;F */
}
//     </div>
//   </div>
// </div>; */ }
