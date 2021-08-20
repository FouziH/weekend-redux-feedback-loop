import React from 'react'
import {useHistory} from 'react-router-dom'
import { useState } from 'react'

function Understanding () {
let [understanding, setUnderstanding] = useState(0)
let history = useHistory()

const onNextButton = () => {
  //This -if statement- is responsible for checking wether the
  //input value doesn't equal to null
  console.log(understanding);
  if (
    understanding.length != null &&
    understanding.length < 2 &&
   understanding >= 0 &&
    understanding <= 5
  ) {
    history.push("/support"); //if it meats the condition, we will proceed to the next  page.
  } else {
    alert("Please enter a value between 0-5"); // if the condition has not been met, the user will be alerted to reevaluate the input;
  }
}
    return (
      <>
        <h3>How well are you understanding the content?</h3>
        <h4>Understanding?</h4>
        <input type="number" min="0" max="10" placeholder="Enter number between 0-10"
        onChange={(event) =>setUnderstanding(event.target.value)}/>
        <button onClick={onNextButton}>NEXT</button>
      </>
    );
}

export default Understanding