import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";

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
      <TextField
        required
        label="0 to 5?"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        type="number"
        min="0"
        max="5"
        value={feeling}

        onChange={(evt) => setFeeling(evt.target.value)}
      />
      <br />
      <br />
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={onNextButton}
      >
        NEXT
      </Button>
    </form>
  );
}

export default Feeling