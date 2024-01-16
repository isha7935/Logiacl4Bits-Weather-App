import { useState } from "react";
import axios from "axios";
import useGlobalState from "./useGlobalState";

const useWeather = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { setWeather } = useGlobalState();

    const getWeather = async (city) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://weather-app-testing.onrender.com/api/weather`, { params: { city } });
            const data = response.data;
            //('=== data useWeather.js [23] ===', data);
            setIsLoading(false);
            setWeather(data.list);
             // Set the weather data in the global state
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                setError(error.response.data.message);
                //(error.response.data.message);
            } else {
                setError("Network Error");

            }
        }
    };

    const getWeatherByCoordinates = async (latitude, longitude) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://weather-app-testing.onrender.com/api/weather`, { params: { latitude, longitude } });
            const data = response.data;
            setIsLoading(false);
            setWeather(data.list); // Set the weather data in the global state
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                setError(error.response.data.message);
                //(error.response.data.message);
            } else {
                setError("Network Error");

            }
        }
    }

    return { error, setError, isLoading, getWeather, getWeatherByCoordinates };
}
export default useWeather;