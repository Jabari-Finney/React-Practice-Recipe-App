import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {


const APP_ID = '355822c1';
const APP_KEY= 'f59bf5a935e9a9869cfe1a4dce53fe12'

const exampleReq =
 `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div classname='App'>
      <form>
        <input type= 'text'/>
        <button type= 'submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
