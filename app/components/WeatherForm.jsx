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
          <input type="search" placeholder="Suche nach Stadt" ref="city"></input>
          <button className="button hollow expanded" type="submit">GO!</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
