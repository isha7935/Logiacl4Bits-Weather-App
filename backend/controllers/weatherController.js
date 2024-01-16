const axios = require('axios');
const dayjs = require('dayjs');
const API_KEY = process.env.OW_API_KEY;

const formatTime = (time) => {
    const formattedTime = dayjs(time * 1000).format('hh:mm a');
    return formattedTime;
}

const getWeather = async (req, res) => {
    const city = req.query.city;
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    let weather;
    if(!city && !latitude && !longitude) return;
    // //(latitude, longitude);
    try {
        if (city) {
            weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        }
        else { weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`); }

        if (weather) {
            const transformedData = [
                { title: 'City', value: weather.data.name || null },
                { title: 'Country', value: weather.data.sys.country || null },
                { title: 'Icon', value: `http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png` || null },
                { title: 'Description', value: weather.data.weather[0].description || null },
                { title: 'Temperature', value: weather.data.main.temp ? `${weather.data.main.temp} °C` : null },
                { title: 'Feels Like', value: weather.data.main.feels_like ? `${weather.data.main.feels_like} °C` : null },
                { title: 'Sunrise', value: weather.data.sys.sunrise ? formatTime(weather.data.sys.sunrise) : null },
                { title: 'Sunset', value: weather.data.sys.sunset ? formatTime(weather.data.sys.sunset) : null },
                { title: 'Max Temperature', value: weather.data.main.temp_max ? `${weather.data.main.temp_max} °C` : null },
                { title: 'Min Temperature', value: weather.data.main.temp_min ? `${weather.data.main.temp_min} °C` : null },
                { title: 'Humidity', value: weather.data.main.humidity ? `${weather.data.main.humidity} %` : null },
                { title: 'Wind', value: weather.data.wind.speed ? `${weather.data.wind.speed} m/s` : null },
                { title: 'Visibility', value: weather.data.visibility ? `${weather.data.visibility} m` : null },
                { title: 'Ground Level', value: weather.data.main.grnd_level ? `${weather.data.main.grnd_level} hPa` : null },
                { title: 'Pressure', value: weather.data.main.pressure ? `${weather.data.main.pressure} hPa` : null },
                { title: 'Sea Level', value: weather.data.main.sea_level ? `${weather.data.main.sea_level} hPa` : null },
            ];
            res.json({ list: transformedData });
        }
    } catch (error) {
        if (error.response.status === 404) {
            res.status(404).json({ message: 'City not found' });
        } 
        else {
            //(error);
        }
    }
}

const getForecast = async (req, res) => {
    const city = req.query.city;
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    let forecastList = null;
    //(latitude, longitude);
    if(!city && !latitude && !longitude) return;
    // //('=== city weatherController.js [61] ===', city);
    try {
        if (city) {
            forecastList = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        }
        if (latitude && longitude) {
            forecastList = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        }
        if (forecastList) {
            const transformedData = forecastList.data.list.map((item) => {
                return {
                    date: dayjs(item.dt_txt).format('d MMM'),
                    time: formatTime(item.dt),
                    icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                    description: item.weather[0].description,
                    temperature: `${item.main.temp} °C`,
                    feels_like: `${item.main.feels_like} °C`,
                    max_temp: `${item.main.temp_max} °C`,
                    min_temp: `${item.main.temp_min} °C`,
                    humidity: `${item.main.humidity} %`,
                    wind: `${item.wind.speed} m/s`,
                    visibility: `${item.visibility} m`,
                    ground_level: `${item.main.grnd_level} hPa`,
                    pressure: `${item.main.pressure} hPa`,
                    sea_level: `${item.main.sea_level} hPa`,
                };
            });
            res.json({ list: transformedData });
        }
        // //('=== transformedData weatherController.js [82] ===', transformedData[0]);
    } catch (error) {
        //('=== error weatherController.js [85] ===', error);
        if (error.response.status === 404) {
            res.status(404).json({ message: 'City not found' });
        } 
        else {
            //(error);
        }
    }
}



module.exports = {
    getWeather,
    getForecast,
}