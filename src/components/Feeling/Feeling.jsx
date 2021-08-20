import React from 'react'
import {useHistory} from 'react-router-dom'
function  Feeling () {
    let history = useHistory()
    const onNextButton = () => {

        history.push('/understanding')
    }
    return(
        <>
        <h1>How are you feelings today?</h1>
        <h4>Comments</h4>
        <input type="number" min="0" max="10"/>
        <button onClick={onNextButton}>NEXT</button>
        </>

    )
}

export default Feeling