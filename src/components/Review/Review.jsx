import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
import Button from "@material-ui/core/Button";


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
  const onBackButton = () => {
    //When this button is clicked, the user will go back to the previous page and edit their response differently
    history.push("/comment");
    console.log("on back button");
  };
  
    return (
      <>
        <h1>Review Your Feedback</h1>
        <ul>
          <li>Feelings:{customerFeeling}</li>
          <li>Understanding:{customerUnderStanding}</li>
          <li>Support: {customerSupport}</li>
          <li>Comments: {customerComment} </li>
        </ul>
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
            onClick={onSubmitButton}
          >
            SUBMIT
          </Button>
        </div>
      </>
    );
}

export default Review