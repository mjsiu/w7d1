var React = require('react');
var ReactDOM = require('react-dom');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return {input: ""};
  },

  onChange: function(event) {
    // event.preventDefault();
    this.setState({input: event.target.value});
  },

  onClick: function(event) {
    this.setState({input: event.target.innerHTML});
  },

  render: function () {
    var filteredNames = this.props.names.filter(function(name) {
      if (this.state.input === '') {
        return false;
      }
      return this.state.input === name.slice(0, this.state.input.length);
    }.bind(this));

    return(
      <div className='autoComplete'>
        <input
          className='user-input'
          onChange={this.onChange}
          value={this.state.input}>
        </input>
        <ul>
          {
            filteredNames.map(function(name) {
            return <li key={name} onClick={this.onClick}>{name}</li>;
          }.bind(this))
         }
        </ul>
      </div>
    );
  }
});

module.exports = AutoComplete;
