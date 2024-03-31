import { useState } from "react";
import { apikeys } from "../utils/utils";

// !== "[object Object]" ? city : query
const GetWeatherData = (city) => {
  const [weathers, setWeathers] = useState([]);
  fetch(`${apikeys.base}weather?q=${city}&APPID=${apikeys.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeathers(result);
    });
  return { weathers };
};

export default GetWeatherData;
