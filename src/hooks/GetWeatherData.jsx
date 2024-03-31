import { useEffect, useState } from "react";
import { apikeys } from "../utils/utils";

// !== "[object Object]" ? city : query
const GetWeatherData = (city, query) => {
  const [data, setData] = useState(null);
  const [isLoding, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (city || query) {
      setIsLoading(true);
      fetch(
        `${apikeys.base}weather?q=${
          city !== "[object Object]" ? city : query
        }&APPID=${apikeys.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setIsLoading(false);
        })
        .catch((err) => setError(err.message));
    }
  }, [city, query]);
  return { data, isLoding, error };
};

export default GetWeatherData;
