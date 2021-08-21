import React from "react";
import { useHistory } from "react-router-dom";
import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
function Supported() {
  //declaring my local state 
  let [support, setSupport] = useState('');
  //declaring my history
  const history = useHistory();
  //declaring my dispatch
  const dispatch = useDispatch();
  const onNextButton = () => {
    //This -if statement- is responsible for checking wether the
    //input value doesn't equal to null
    console.log(support);
    if ((support.length != null ) 
    && (support.length < 2 && support.length === 1) 
    && (support >= 0 && support <= 5)
    ) {
      //Dispatching out local state to the global
      dispatch({
        type: "CUSTOMER_SUPPORT_INPUTS",
        payload: Number(support),
      });
      history.push("/comment"); //if it meats the condition, we will proceed to the next  page.
    } else {
      alert("Please enter a value between 0-5"); // if the condition has not been met, the user will be alerted to reevaluate the input;
    }
  };
  const onBackButton = () => {
    //When this button is clicked, the user will go back to the previous page and edit their response differently
    history.push("/understanding");
    console.log("on back button");
  };
  
  return (
    <>
      <h3>How well are you being supported?</h3>
      <TextField
        required
        label="0 to 5?"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        style={{
          width:300,
        }}
        type="number"
        min="0"
        max="10"
        maxLength="1"
        onChange={(event) => setSupport(event.target.value)}
      />
      <br />
      <br />
      <div className="myButtons">
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={onBackButton}
        >
          BACK
        </Button>
      </div>
      <div className="myButtons">
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={onNextButton}
        >
          NEXT
        </Button>
      </div>
    </>
  );
}

export default Supported;
