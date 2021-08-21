import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'


function Review () {
  const customerFeeling = useSelector (store => store.feeling)
  const customerUnderStanding = useSelector (store => store.understanding )
  const customerSupport = useSelector (store => store.support)
  const customerComment = useSelector(store => store.comment)
  let history = useHistory()

  const onSubmitButton = () => {
    console.log("on submit button");

    axios
      ({
        method: "POST",
        url: "/api/survey",
        data: {
          customerFeeling,
         customerUnderStanding,
          customerSupport,
          customerComment,
        },
      })
      .then((response) => {
        console.log("response from the db is:", response);
           
      })
      .catch((error) => {
        console.log("error from the POST /survey is:", error);
      });

    history.push("/");
  }
    return (
      <>
        <h1>Review Your Feedback</h1>
        <p>Feelings:{customerFeeling}</p>
        <p>Understanding:{customerUnderStanding} </p>
        <p>Support: {customerSupport}</p>
        <p>Comments: {customerComment} </p>
        <button onClick={onSubmitButton}>SUBMIT</button>
      </>
    );
}

export default Review