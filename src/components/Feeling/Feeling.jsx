import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";

function  Feeling () {
  //declaring my local state
  let [feeling, setFeeling] = useState('');
  //declaring my history
  const history = useHistory();
  //declaring my dispatch
  const dispatch = useDispatch();
  const onNextButton = (event) => {
    event.preventDefault()
    //This -if statement- is responsible for checking wether the
    //input value doesn't equal to null
    console.log(feeling);
    if (
     feeling.length != null &&
      feeling.length < 2 &&
      feeling.length === 1 &&
      feeling >= 0 &&
      feeling <= 5
    ) {
      //dispatch local state to global state
      dispatch({
        type: "CUSTOMER_FEELING_INPUTS",
        payload: Number(feeling),
      });

      history.push("/understanding"); //if it meats the condition, we will proceed to the next  page.
    } else {
      alert("Please enter a value between 0-5"); // if the condition has not been met, the user will be alerted to reevaluate the input;
    }
  };

  return (

    <form>
   
      <h1>How are you feelings today?</h1>
      <h4>Feelings</h4>
      <input
        type="number"
        min="0"
        max="5"
        value={feeling}
        placeholder="Enter number between 0-5"
        onChange={(evt) => setFeeling(evt.target.value)}
      />
      <button onClick={onNextButton}>NEXT</button>
    </form>
  );
}

export default Feeling