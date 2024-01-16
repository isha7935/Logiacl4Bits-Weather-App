import ForecastCard from "./ForecastCard";
import useForecast from "../hooks/useForecast";
import useGlobalState from "../hooks/useGlobalState";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const Forecast = () => {
  const { error, isLoading, getForecast, getForecastByCoordinates } =
    useForecast();
  const { city, forecast } = useGlobalState();

  const setWeather = async (city) => {
    getForecast(city);
  };

  const setWeatherByCoordinates = async (latitude, longitude) => {
    getForecastByCoordinates(latitude, longitude);
  };

  useEffect(() => {
    setWeather(city);
  }, [city]);

  useEffect(() => {
    const location = localStorage.getItem("location");
    if (location && !city && !forecast) {
      const { latitude, longitude } = JSON.parse(location);
      setWeatherByCoordinates(latitude, longitude);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100svh] flex-1">
        <FaSpinner className=" animate-spin" size={50} />
      </div>
    );
  }

  if (error || !forecast) {
    return <></>;
  }

  return (
    <div className="w-full h-full overflow-y-auto sm:flex justify-center ">
      <div className="flex-1 m-2 mb-2">
        <div className="text-xl font-bold my-4">Forecast</div>
        <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {forecast.map((record, i) => (
            <ForecastCard
              key={i}
              date={record.date}
              time={record.time}
              icon={record.icon}
              description={record.description}
              temperature={record.temperature}
              sunrise={record.sunrise}
              sunset={record.sunset}
              maxTemp={record.max_temp}
              minTemp={record.min_temp}
              humidity={record.humidity}
              wind={record.wind}
              visibility={record.visibility}
              pressure={record.pressure}
              seaLevel={record.sea_level}
              groundLevel={record.ground_level}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
