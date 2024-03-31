import loaderImg from "../assets/images/WeatherIcons.gif";

const Loader = () => {
  return (
    <div className="bg-black bg-opacity-20 text-center">
      <img src={loaderImg} alt="loader image" className="w-1/2 mx-auto" />
      <h3 className="text-white text-2xl font-semibold">
        Detecting your location
      </h3>
      <h3 className="text-white mt-3">
        Your current location wil be displayed on the App <br></br> & used for
        calculating Real time weather.
      </h3>
    </div>
  );
};

export default Loader;
