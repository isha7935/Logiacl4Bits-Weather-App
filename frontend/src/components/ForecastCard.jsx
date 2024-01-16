import PropTypes from "prop-types";

export default function ForecastCard({
  date,
  time,
  icon,
  description,
  temperature,
  maxTemp,
  minTemp,
  humidity,
  wind,
  visibility,
  pressure,
  seaLevel,
  groundLevel,
}) {
  return (
    <div className=" p-2 dark:bg-lighter bg-dark-lighter">
      <div className="flex gap-1 justify-between items-center">
        <p className="font-bold">{date}</p>
        <p className="font-bold">{time}</p>
        <p className="font-bold text-xl">{temperature}</p>
      </div>
      <div>
        <div className="flex justify-center items-center ">
          <img src={icon} alt="" width="70px"/>
          <p>{description}</p>
        </div>
        <div>
        
          <div className="flex justify-between">
            <span className="font-bold text-sm">Max Temp.</span>
            <p>{maxTemp}</p>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-sm">Min Temp.</span>
            <p>{minTemp}</p>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-sm">Humidity</span>
            <p>{humidity}</p>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-sm">Wind</span>
            <p>{wind}</p>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-sm">Visibilty</span>
            <p>{visibility}</p>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-sm">Pressure</span>
            <p>{pressure}</p>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-sm">Sea Level</span>
            <p>{seaLevel}</p>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-sm">Ground Level</span>
            <p>{groundLevel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ForecastCard.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  temperature: PropTypes.string,
  maxTemp: PropTypes.string,
  minTemp: PropTypes.string,
  humidity: PropTypes.string,
  wind: PropTypes.string,
  visibility: PropTypes.string,
  pressure: PropTypes.string,
  seaLevel: PropTypes.string,
  groundLevel: PropTypes.string,
};
