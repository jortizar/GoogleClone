import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPage from './components/SearchPage';
import Search from './components/Search';
import reportWebVitals from './reportWebVitals';

// Here we import all necessary components from react-router to move between components
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* The switch component allows us to move from components depending on the path */}
      <Switch>
        <Route path="/search" component={Search}/>
        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
