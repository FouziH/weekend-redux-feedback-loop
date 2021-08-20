import {useHistory} from 'react-router-dom';
import React from 'react';

function  Comments () {
  const history =useHistory()

  const onNextButton = () => {
    history.push('/comment')
  }
  return(
     <>
       <h1>Any comments you want to leave?</h1>
       <h4>comments?</h4>
       <input type="text" placeholder="Enter your comments"/>
       <button onClick={onNextButton}>NEXT</button>
     </>
  )
}

export default Comments