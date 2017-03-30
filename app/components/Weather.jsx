var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass(
  {
    getDefaultProps: function () {
      return {
        city: 'Garching',
        temperature: 'unbekannt'
      }
    },
    getInitialState: function () {
      return {isLoading: false}
    },
    handleUpdate: function (city) {
      var that = this;
      this.setState({isLoading: true})
      openWeatherMap.getTemp(city).then(function(temp) {
        that.setState({
          city: city,
          temperature: temp,
          isLoading: false
        });
      }, function (erroMessage) {
        that.setState({isLoading: false})
        alert(erroMessage)
      })
    },
    render: function () {
      var {city, temperature, isLoading} = this.state;

      function renderMessage() {
        if (isLoading) {
          return <h3>Auf der Suche ...</h3>;
        } else if (city && temperature) {
          return <WeatherMessage city={city} temperature= {temperature}></WeatherMessage>;
        }
      }
      return (
        <div>
          <h2>Weather Component</h2>
          <WeatherForm onUpdate={this.handleUpdate}></WeatherForm>
          {renderMessage()}
        </div>
      );
    }
  }
)


module.exports = Weather;
