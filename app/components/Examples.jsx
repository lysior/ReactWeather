var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 classname="text-centered">Examples Component!</h1>
      <ol>
        <li>
          <Link to="/?location=koeln">Köln</Link>
        </li>
        <li>
          <Link to="/?location=toronto">Toronto</Link>
        </li>
        <li>
          <Link to="/?location=moskau">Moskau</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
