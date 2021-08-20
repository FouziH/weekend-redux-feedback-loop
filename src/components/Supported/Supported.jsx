import React from "react";
import { useHistory } from "react-router-dom";
import {useState} from "react";
function Supported() {
  let [support, setSupport] = useState (0)
    let history = useHistory();
const onNextButton = () => {
  //This -if statement- is responsible for checking wether the
  //input value doesn't equal to null
   console.log(support);
  if ((support.length != null && support.length < 2) && (support >= 0 && support <= 5)) {

    history.push("/comment"); //if it meats the condition, we will proceed to the next  page.
  } else {

    alert("Please enter a value between 0-5"); // if the condition has not been met, the user will be alerted to reevaluate the input;
       
  }
 
   setSupport(0);
}
    return (
      <>
        <h3>How well are you being supported?</h3>
        <h4>Support?</h4>
        <input
          type="number"
          min="0"
          max="10"
          maxLength="1"
          placeholder="Enter number between 0-10"
          onChange={(event) => setSupport(event.target.value)}
        />
        <button onClick={onNextButton}>NEXT</button>
      </>
    );
}

export default Supported;
