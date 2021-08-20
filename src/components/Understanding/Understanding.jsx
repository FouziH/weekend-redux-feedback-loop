import React from 'react'
import {useHistory} from 'react-router-dom'
function Understanding () {
let history = useHistory()

const onNextButton = () => {
  history.push('/support')
}
    return (
      <>
        <h3>How well are you understanding the content?</h3>
        <h4>Understanding?</h4>
        <input type="number" min="0" max="10"/>
        <button onClick={onNextButton}>NEXT</button>
      </>
    );
}

export default Understanding