import React from 'react'
import {useHistory} from 'react-router-dom'
function Review () {
    let history = useHistory()
    return (
      <>
        <h1>Review Your Feedback</h1>
        <p>Feelings: </p>
        <p>Understanding: </p>
        <p>Support: </p>
        <p>Comments: </p>
        <button>INCOMPLETE</button>
      </>
    );
}

export default Review