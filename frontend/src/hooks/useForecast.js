import { useState } from "react"
import axios from "axios"
import useGlobalState from "./useGlobalState"

const useForecast = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { setForecast } = useGlobalState()

    const getForecast = async (city) => {
        setError(null);
        setIsLoading(true);
        try {
            const response = await axios.get(`https://weather-app-testing.onrender.com/api/forecast`, { params: { city } });
            const data = response.data;
            setIsLoading(false);
            setForecast(data.list); // Set the weather data in the global state

        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("Network Error");
            }
        }
    };

    const getForecastByCoordinates = async (latitude, longitude) => {
        setError(null);
        setIsLoading(true);
        try {
            const response = await axios.get(`https://weather-app-testing.onrender.com/api/forecast`, { params: { latitude, longitude } });
            const data = response.data;
            setIsLoading(false);
            setForecast(data.list); // Set the weather data in the global state
            //('=== data useForecast.js [37] ===', data);
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("Network Error");
            }
        }
    };

    return { error, isLoading, getForecast, getForecastByCoordinates }
}

export default useForecast