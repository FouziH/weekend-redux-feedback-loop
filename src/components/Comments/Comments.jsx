import {useHistory} from 'react-router-dom';
import React from 'react';
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
function  Comments () {
  //declaring my history
  const history = useHistory();
  //declaring my dispatch
  const dispatch = useDispatch();
  //declaring my local state 
  let [comment, setComment] = useState('');
  const onNextButton = () => {
    //This -if statement- is responsible for checking wether the
    //input value doesn't equal to null
    console.log(comment);
    if (comment.length != "" && comment.length <= 140 && comment.length >= 3) {
      //dispatch local state to global state
      dispatch({
        type: "CUSTOMER_COMMENT_INPUTS",
        payload: comment,
      });
      history.push("/review"); //if it meats the condition, we will proceed to the next  page.
    } else {
      alert(
        "You have enter your comments here incorrectly. Please enter a minimum character of 3 and max of 140."
      ); // if the condition has not been met, the user will be alerted to reevaluate the input;
    }
  };
  const onBackButton = () => {
    //When this button is clicked, the user will go back to the previous page and edit their response differently
    history.push("/support");
    console.log("on back button");
  };
  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <TextField
        required
        label="Please leave comments!"
        variant="outlined"
        InputLabelProps={{
        shrink: true,
        }}
        style={{
          width: 600,
        }}
        className="commentInput"
        type="text"
        maxLength="140"
        onChange={(event) => setComment(event.target.value)}
      />
      <br />
      <br />
      <div className="myButtons">
        <Button size="small" color="primary" variant="contained" onClick={onBackButton}>BACK</Button>
      </div>
      <div className="myButtons">
        <Button size="small" color="primary" variant="contained" className="commentButton" onClick={onNextButton}>NEXT</Button>
      </div>
    </>
  );
}
export default Comments