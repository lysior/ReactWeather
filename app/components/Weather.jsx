var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
      return {
        isLoading: false
      }
    },
    handleUpdate: function (location) {
      var that = this;
      this.setState({
        isLoading: true,
        errorMessage: undefined
      });

      openWeatherMap.getTemp(location).then(function(temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
		 });
      }, function (e) {
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
      });
    },
    render: function () {
      var {location, temp, isLoading, errorMessage} = this.state;
      debugger;

      function renderMessage() {
        if (isLoading) {
          return <p className="text-center">Auf der Suche ...</p>;
        } else if (location && temp) {
          return <WeatherMessage location={location} temp= {temp}></WeatherMessage>;
        }
      }
      function renderErrorMessage() {
        if (typeof errorMessage === 'string' ) {
          return (
			<ErrorModal></ErrorModal>
		  );
        }
      }
      return (
        <div>
          <h1 className="text-center">Weather Component</h1>
          <WeatherForm onUpdate={this.handleUpdate}></WeatherForm>
          {renderMessage()}
          {renderErrorMessage()}
        </div>
      );
    }
});

module.exports = Weather;
