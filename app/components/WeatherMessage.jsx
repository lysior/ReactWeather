var React = require('react');

var WeatherMessage = ({location,temp}) => {
  return (
    <div><p className="text-center">Die aktuelle Temperatur in {location} ist {temp}.</p></div>
  )
};


module.exports = WeatherMessage;
