var React = require('react');
var {IndexLink, Link} = require('react-router');

var Nav = React.createClass ({
  onSearch: function (e) {
    e.preventDefault();
    alert('Not yet implemented');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className='menu-text'>React Weather App</li>
            <li><IndexLink to="/" activeClassNmae="active" activeStyle={{fontWeight: 'bold'}}>GetWeather</IndexLink></li>
            <li><Link to="/examples" activeClassNmae="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
            <li><Link to="/about" activeClassNmae="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
          </ul>

        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search"></input></li>
              <li><input type="submit" className="button" value="Get Weather"></input></li>
            </ul>
          </form>
        </div>

      </div>
    );

  }
})

module.exports = Nav;
