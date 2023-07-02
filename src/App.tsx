import React from 'react';
import  Header  from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
       
       
          <Form />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React hello there
        </a>
      </header>
    </div>
  );
}

export default App;
