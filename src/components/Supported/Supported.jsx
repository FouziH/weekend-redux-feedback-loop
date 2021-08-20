import React from "react";
import { useHistory } from "react-router-dom";
function Supported() {
    let history = useHistory();
const onNextButton = () => {
    history.push("/comment");
     
}
    return (
      <>
        <h3>How well are you being supported?</h3>
        <h4>Support?</h4>
        <input type="number" min="0" max="10" placeholder="Enter number between 0-10"/>
        <button onClick={onNextButton}>NEXT</button>
      </>
    );
}

export default Supported;
