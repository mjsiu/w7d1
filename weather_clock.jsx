var React = require('react');
var ReactDOM = require('react-dom');
var ClockWidget = require('./clock_widget.jsx');
var WeatherWidget = require('./weather_widget.jsx');

var WeatherClock = React.createClass({
  getInitialState: function() {
    return {input: ""};
  },

  render: function () {
    return (
      <div>
        <ClockWidget></ClockWidget>
        <WeatherWidget></WeatherWidget>
      </div>
    );
  }

});

module.exports = WeatherClock;
