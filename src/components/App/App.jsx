import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import SurveyHomePage from '../SurveyHomePage/SurveyHomePage';
import Review from '../Review/Review';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <SurveyHomePage />
        </Route>
        <Route path="/feeling" exact>
          <Feeling />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        <Route path="/support" exact>
          <Supported />
        </Route>
        <Route path="/comment" exact>
          <Comments />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
      </Router>
    </div>
  );
}

export default App;
