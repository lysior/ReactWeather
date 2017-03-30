var React = require('react');

var WeatherMessage = ({city,temperature}) => {
  return (
    <div><p>Die aktuelle Temperatur in {city} ist {temperature}.</p></div>
  )
};


module.exports = WeatherMessage;
