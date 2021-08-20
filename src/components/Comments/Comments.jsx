import {useHistory} from 'react-router-dom';
import React from 'react';
import {useState} from 'react'

function  Comments () {
  const history =useHistory()
  let [comment, setComment] = useState("")

  const onNextButton = () => {
    //This -if statement- is responsible for checking wether the
    //input value doesn't equal to null
    console.log(comment);
    if (comment.length != "" && comment.length <= 140 && comment.length >= 3 ) {
      history.push("/comment"); //if it meats the condition, we will proceed to the next  page.
    } else {
      alert("You have enter your comments here incorrectly. Please enter a minimum character of 3 and max of 140."); // if the condition has not been met, the user will be alerted to reevaluate the input;
    }
  }
  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <h4>comments?</h4>
      <input
        className="commentInput"
        type="text"
        placeholder="Enter your comments"
        maxLength="140"
        onChange={(event) => setComment(event.target.value)}
      />
      <br />
      <button className="commentButton" onClick={onNextButton}>NEXT</button>
    </>
  );
}

export default Comments