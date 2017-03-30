var React = require('react');

var WeatherForm = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    var city = this.refs.city.value;
    if (city.length > 0) {
      this.refs.city.value = '';
      this.props.onUpdate(city);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onSearch}>
          <input type="text" placeholder="Stadt" ref="city"></input>
          <button type="submit">GO!</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
