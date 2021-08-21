import React from 'react'
import {useHistory} from 'react-router-dom'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

function Understanding () {
  //declaring my local state
  let [understanding, setUnderstanding] = useState('');
  //declaring my history
  const history = useHistory();
  //declaring my dispatch
  const dispatch = useDispatch();

  const onNextButton = () => {
    //This -if statement- is responsible for checking wether the
    //input value doesn't equal to null
    console.log(understanding);
    if (
      understanding.length != null &&
     understanding.length < 2 &&
     understanding.length === 1 &&
      understanding >= 0 &&
      understanding <= 5
    ) {
      //dispatch local state to global state
      dispatch({
        type: "CUSTOMER_UNDERSTANDING_INPUTS",
        payload: Number(understanding),
      });

      history.push("/support"); //if it meats the condition, we will proceed to the next  page.
    } else {
      alert("Please enter a value between 0-5"); // if the condition has not been met, the user will be alerted to reevaluate the input;
    }
  };
  const onBackButton = () => {
    //When this button is clicked, the user will go back to the previous page and edit their response differently 
    history.push('/feeling')
    console.log("on back button")
  }
  return (
    <>
      <h3>How well are you understanding the content?</h3>
      <h4>Understanding?</h4>
      <input
        type="number"
        min="0"
        max="10"
        value={understanding}
        placeholder="Enter number between 0-5"
        onChange={(event) => setUnderstanding(event.target.value)}
      />
      <br />
      <br />
      <button onClick={onBackButton}>BACK</button>
      <button onClick={onNextButton}>NEXT</button>
    </>
  );
}

export default Understanding