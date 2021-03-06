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
        errorMessage: undefined,
        location: undefined,
        temp: undefined
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
    componentDidMount: function (){
      var location = this.props.location.query.location;
      if (location && location.length > 0) {
        this.handleUpdate(location);
        window.location.hash = '#/'
      }
    },
    componentWillReceiveProps: function (newProps){
      var location = newProps.location.query.location;
      if (location && location.length > 0) {
        this.handleUpdate(location);
        window.location.hash = '#/'
      }
    },
    render: function () {
      var {location, temp, isLoading, errorMessage} = this.state;

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
			         <ErrorModal message={errorMessage}></ErrorModal>
             );
        }
      }
      return (
        <div>
          <h1 className="text-center page-title">Weather Component</h1>
          <WeatherForm onUpdate={this.handleUpdate}></WeatherForm>
          {renderMessage()}
          {renderErrorMessage()}
        </div>
      );
    }
});

module.exports = Weather;
