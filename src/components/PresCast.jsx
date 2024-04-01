import PropTypes from "prop-types";
import { useGeolocated } from "react-geolocated";
import { apikeys, getDate } from "../utils/utils";
import LiveClock from "./LiveClock";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const PresCast = ({ setCurrentCityMain }) => {
  const [currLocation, setCurrLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  //get realtime clock time
  const clock = LiveClock();
  //get current date
  const date = getDate();

  //geo location function
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  //handling sideeffects
  useEffect(() => {
    //fetching current location weather data
    fetch(
      `${apikeys.base}weather?lat=${coords?.latitude}&lon=${coords?.longitude}&units=metric&APPID=${apikeys.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        //updating state
        setCurrLocation(result);

        //updating state for shareing to sibling component
        setCurrentCityMain(currLocation);

        //loading state
        setIsLoading(false);

        //err state
        if (result.cod == 404) {
          setErr(result.message);
        }
      })
      .catch((err) => setErr(err.message));
  }, [coords, setCurrentCityMain, currLocation]);

  //celsius to Farenheit function with logic
  const celsiusToFahrenheit = (clesius) => {
    const fahrenheit = (clesius * 9) / 5 + 32;
    return fahrenheit;
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !isGeolocationAvailable ? (
        <Loader err={err || "Your browser does not support Geolocation"} />
      ) : !isGeolocationEnabled ? (
        <Loader err={"Geolocation is not enabled"} />
      ) : coords ? (
        <div className="text-white p-6 md:p-10 h-full flex flex-col justify-between">
          <div className="text-right">
            <p className="text-2xl font-medium">
              {currLocation?.name || "Rangpur"}
            </p>
            <p className="text-xl">{currLocation?.sys?.country}</p>
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <p className="text-2xl md:text-3xl whitespace-nowrap">{clock}</p>
              <p className="whitespace-nowrap text-sm">{date}</p>
            </div>
            <p className="text-right text-3xl md:text-5xl flex flex-col gap-1">
              <span>{currLocation?.main?.temp}&deg;C</span>
              <span>{celsiusToFahrenheit(currLocation?.main?.temp)}&deg;F</span>
            </p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

PresCast.propTypes = {
  setCurrentCityMain: PropTypes.func,
};
export default PresCast;
