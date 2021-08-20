import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import logger from 'redux-logger'

//Step 1:
    //Create a store 
    //One or more reducers
    //A Provider



//step 2: 
    //Create a Reducer feeling reducer 👇
    const feeling = (state = 0, action) => {
        
        return state
    };
     //Create a Reducer understanding reducer 👇
    const understanding = (state = 0, action) => {
        return state
    };
     //Create a Reducer support reducer 👇
    const support = (state = 0, action) => {
        return state
    };
     //Create a Reducer comment reducer 👇
    const comment = (state = [], action) => {
        return state
    }

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comment
    }, applyMiddleware(logger))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

 // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
