import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCvy0cgdHAMQUsNLxtChMolPuhMNQ84UhU';

// Create a new component. This component should produce some HTML

// const App = function() {
//   return <div>Hi!</div>;
// }
//
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
