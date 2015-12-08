var React = require('react');
var ReactDOM = require('react-dom');

var Tabs = React.createClass({
  getInitialState: function() {
    return { selected: -1};
  },

  handleClick: function (idx, event) {
    this.setState({selected: idx});
  },

  render: function () {
    var tabs = this.props.tabs;

    var mapped = tabs.map(function(tab) {
      var idx = tabs.indexOf(tab);
      if (tabs.indexOf(tab) === this.state.selected) {
        return <li key={tabs.indexOf(tab)}
          onClick={this.handleClick.bind(this, idx)}><b>{tab.title}</b></li>;
      } else {
        return <li key={tabs.indexOf(tab)} onClick={this.handleClick.bind(this, idx)}>{tab.title}</li>;
      }
    }.bind(this));

    var tab = "";
    if (this.props.tabs[this.state.selected]) {
      tab = this.props.tabs[this.state.selected].content;
    }

    return (
      <div>
      <ul>
      {
        mapped
      }
      </ul>
      <article> {tab} </article>
      </div>
    );
  }

});

module.exports = Tabs;
