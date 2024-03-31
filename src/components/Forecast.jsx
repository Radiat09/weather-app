import { useCallback, useEffect, useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { apikeys, iconDefaults } from "../utils/utils";

const Forecast = ({ wMain }) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoding, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //search functionality function
  const search = useCallback(
    (city) => {
      if (city || query) {
        fetch(
          `${apikeys.base}weather?q=${
            query ? query : city
          }&units=metric&APPID=${apikeys.key}`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeather(result);
            setIsLoading(false);
            if (result.cod == 404) {
              setError(result.message);
            }
          })
          .catch((err) => setError(err.message));
      }
    },
    [query]
  );

  //side effect for default data
  useEffect(() => {
    search("rangpur");
  }, [search]);

  const iconCase = (weather) => {
    let icon = "CLEAR_DAY";

    //check if weather is undefined or not
    if (
      !weather ||
      !weather.weather ||
      !weather.weather[0] ||
      !weather.weather[0].main
    ) {
      // Handle the case where weather data is missing or not in the expected format
      return (icon = "CLEAR_DAY"); // Or whatever default icon you want to use
    }

    switch (weather?.weather[0]?.main) {
      case "Haze":
        icon = "CLEAR_DAY";
        break;
      case "Clouds":
        icon = "CLOUDY";
        break;
      case "Rain":
        icon = "RAIN";
        break;
      case "Snow":
        icon = "SNOW";
        break;
      case "Dust":
        icon = "WIND";
        break;
      case "Drizzle":
        icon = "SLEET";
        break;
      case "Fog":
        icon = "FOG";
        break;
      case "Smoke":
        icon = "FOG";
        break;
      case "Tornado":
        icon = "WIND";
        break;
      default:
        icon = "CLEAR_DAY";
    }

    return icon;
  };

  // console.log(weather);

  return (
    <div className="w-full space-y-8">
      <div className=" flex justify-center mt-3">
        <ReactAnimatedWeather
          icon={iconCase(weather)}
          color={iconDefaults.color}
          size={iconDefaults.size}
          animate={iconDefaults.animate}
        />
      </div>
      <div className="space-y-4">
        {weather &&
        weather?.weather &&
        weather?.weather[0] &&
        weather?.weather[0]?.main ? (
          <h3 className="text-white text-4xl font-medium text-center">
            {weather.weather[0].main}
          </h3>
        ) : (
          <h3 className="text-white text-4xl font-medium text-center">Haze</h3>
        )}
        <div className=" h-[1px] bg-white mx-5"></div>
        <div className="relative flex justify-center">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search any city"
            className="w-3/4 px-2 h-10 rounded-3xl bg-transparent border border-white text-white focus:outline-none"
          />
          <button>
            <img
              className="w-6 absolute right-[16%] top-[16%]"
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              onClick={() => search(query ? query : "rangpur")}
              alt="search button"
            />
          </button>
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="space-y-2">
            <div className="flex justify-center items-center gap-3">
              <p className="text-white text-xl font-medium">
                {weather.name}, {weather.sys.country}
              </p>
              <ReactAnimatedWeather
                icon={iconCase(weather)}
                color={iconDefaults.color}
                size={32}
                animate={iconDefaults.animate}
              />
            </div>
            <div className=" h-[1px] bg-white opacity-35 mx-5"></div>
            <div className="flex justify-between items-center text-white text-lg px-8">
              <p>Temarature</p>
              <p>
                {Math.round(weather?.main?.temp)}°c ({weather.weather[0].main})
              </p>
            </div>
            <div className=" h-[1px] bg-white opacity-35 mx-5"></div>
            <div className="flex justify-between items-center text-white text-lg px-8">
              <p>Humedity</p>
              <p>{Math.round(weather?.main?.humidity)}%</p>
            </div>
            <div className=" h-[1px] bg-white opacity-35 mx-5"></div>
            <div className="flex justify-between items-center text-white text-lg px-8">
              <p>Visibility</p>
              <p>{Math.round(weather?.visibility)} mi</p>
            </div>
            <div className=" h-[1px] bg-white opacity-35 mx-5"></div>
            <div className="flex justify-between items-center text-white text-lg px-8">
              <p>Wind Speed</p>
              <p>{Math.round(weather.wind.speed)} Km/h</p>
            </div>
          </div>
        ) : (
          <p className="text-white text-center text-xl font-medium mt-4">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Forecast;
