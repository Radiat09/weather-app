import GetWeatherData from "./hooks/GetWeatherData";
import { getDate } from "./utils/utils";

function App() {
  const { weathers } = GetWeatherData("rangpur");
  const date = getDate();
  return (
    <>
      <h1>Weather</h1>
    </>
  );
}

export default App;
