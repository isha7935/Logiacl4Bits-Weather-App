import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import Navbar from "./components/Navbar";
import useGlobalState from "./hooks/useGlobalState";
import { useEffect } from "react";

function App() {
  const { themeClass, weather, forecast, city,location,setLocation } = useGlobalState();

  useEffect(() => {
    if (!location && !weather && !forecast) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        localStorage.setItem("location", JSON.stringify({ latitude, longitude }));
      });
    }
  },[location])
  
  const isNew = !weather && !forecast && !city && !location;

  return (
    <div className={themeClass}>
      <Navbar />

      <div className="text-white hide-scrollbar md:flex justify-center w-full md:h-[calc(100svh-50px)] bg-gradient-light dark:bg-gradient-dark ">
        {!isNew && (
          <>
            <Weather />
            <Forecast />
          </>
        )}
        {
          isNew && (
            <div className="flex justify-center items-center flex-1 h-[100svh] sm:h-auto text-center">
              Welcome to Weather App, please search for a city to get started or give access to your location and reload.
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
