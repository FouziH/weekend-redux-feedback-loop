import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Review () {
  const customerFeeling = useSelector (store => store.feeling)
  const customerUnderStanding = useSelector (store => store.understanding )
  const customerSupport = useSelector (store => store.support)
  const customerComment = useSelector(store => store.comment)
  let history = useHistory()
    return (
      <>
        <h1>Review Your Feedback</h1>
        <p>Feelings:{customerFeeling}</p>
        <p>Understanding:{customerUnderStanding} </p>
        <p>Support: {customerSupport}</p>
        <p>Comments: {customerComment} </p>
        <button>INCOMPLETE</button>
      </>
    );
}

export default Review