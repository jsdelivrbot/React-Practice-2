var React = require('react');
var Popular = require('./Popular');

// Component concerned with 3 things:
// state
// lifecycle event
// UI

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
