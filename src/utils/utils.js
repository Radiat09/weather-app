export const apikeys = {
  key: "9361b9b89e2d8ea4bd3b7b4a02f23bf0",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const getDate = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[new Date().getDay()];
  let date = new Date().getDate();
  let month = months[new Date().getMonth()];
  let year = new Date().getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

export const iconDefaults = {
  color: "white",
  size: 112,
  animate: true,
};
