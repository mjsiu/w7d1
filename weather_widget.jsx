var React = require('react');
var ReactDOM = require('react-dom');

var WeatherWidget = React.createClass({
  getInitialState: function() {
    return { weather: ""};
  },

  componentDidMount: function() {
    this.longitude = "";
    this.latitude = "";

    navigator.geolocation.getCurrentPosition(function(position) {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
    });

    this.aJaxRequest();

  },

  aJaxRequest: function () {
    this.apiKey = '645c5d39c7603f17e23fcaffcea1a3c1';
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
           if(xmlhttp.status === 200){

               this.setState({ weather: JSON.parse(xmlhttp.responseText) });
           }
           else if(xmlhttp.status === 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    }.bind(this);
    xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=38&lon=-122&appid=645c5d39c7603f17e23fcaffcea1a3c1", true);
    // xmlhttp.open("GET", "api.openweathermap.org/data/2.5/weather?lat=" + this.latitude + "&lon=" + this.longitude + "&appid=" + this.apiKey, true);
    xmlhttp.send();
  },

  render: function () {
    var temp = '';
    var weather = '';
    if (this.state.weather !== "") {
      temp = this.state.weather.main.temp;
    }
    // var weather = this.state.weather.weather;
    return (
        <p>Temp: {Math.round((temp - 273.15)* 1.8000 + 32) + " Fahrenheit"}</p>
    );
  }

});

module.exports = WeatherWidget;
