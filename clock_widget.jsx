var React = require('react');
var ReactDOM = require('react-dom');

var ClockWidget = React.createClass({
  getInitialState: function() {
    return {time: new Date()};
  },

  componentDidMount: function() {
    this.handle = setInterval(this.tick, 50);
  },

  componentWillUnmount: function() {
    clearInterval(this.handle);
    this.handle = 0;
  },

  tick: function() {
    this.setState({time: new Date()});
  },

  render: function () {
    return (
      <div>{ this.state.time.toString() }</div>
    );
  }

});

module.exports = ClockWidget;
