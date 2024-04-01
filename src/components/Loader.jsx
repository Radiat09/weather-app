import PropTypes from "prop-types";
import loaderImg from "../assets/images/WeatherIcons.gif";

const Loader = ({ err }) => {
  return (
    <div className="bg-black bg-opacity-20 text-center">
      <img src={loaderImg} alt="loader image" className="w-1/2 mx-auto" />
      <h3 className="text-white text-2xl font-semibold">
        Detecting your location
      </h3>
      <h3 className="text-white mt-3">
        {err ? (
          err
        ) : (
          <>
            <span>Your current location wil be displayed on the App </span>
            <br />
            <span> & used for calculating Real time weather.</span>
          </>
        )}
      </h3>
    </div>
  );
};

Loader.propTypes = {
  err: PropTypes.string,
};
export default Loader;
