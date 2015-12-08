var React = require('react');
var ReactDOM = require('react-dom');
var AutoComplete = require('./auto_complete.jsx');
var WeatherClock = require('./weather_clock.jsx');
var Tabs = require('./tabs.jsx');

var tabs = [
  {title: "Google", content: "Search Engine"},
  {title: "Ebay", content: "Auction Site"},
  {title: "Facebook", content: "Social Media"}
];

var Widgets = React.createClass({
  render: function() {
    return (
      <div>
        <AutoComplete names={['marcus', 'mack']}/>
        <WeatherClock/>
        <Tabs tabs={tabs}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('widget'));

});
