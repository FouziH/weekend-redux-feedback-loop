import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";

function  Feeling () {
  //declaring my local state
  let [feeling, setFeeling] = useState(0);
  //declaring my history
  const history = useHistory();
  //declaring my dispatch
  const dispatch = useDispatch();
  const onNextButton = () => {
    //This -if statement- is responsible for checking wether the
    //input value doesn't equal to null
    console.log(feeling);
    if (
      feeling.length != null &&
      feeling.length < 2 &&
      feeling >= 0 &&
      feeling <= 5
    ) {
      //dispatch local state to global state
      dispatch({
        typ: "CUSTOMER_FEELING_INPUTS",
        payload: feeling,
      });

      history.push("/understanding"); //if it meats the condition, we will proceed to the next  page.
    } else {
      alert("Please enter a value between 0-5"); // if the condition has not been met, the user will be alerted to reevaluate the input;
    }
  };

  return (
    <>
      <h1>How are you feelings today?</h1>
      <h4>Comments</h4>
      <input
        type="number"
        min="0"
        max="10"
        onChange={(evt) => setFeeling(evt.target.value)}
      />
      <button onClick={onNextButton}>NEXT</button>
    </>
  );
}

export default Feeling