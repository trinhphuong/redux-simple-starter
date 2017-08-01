import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA7VHRys3EX_nG5bZD_bJjSs2grLU7-9MA';

// Create a new component. This compoent should produce some
// HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));