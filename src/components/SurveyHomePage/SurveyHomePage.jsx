import React from 'react'
import {useHistory} from 
'react-router-dom';
function SurveyHomePage () {
  //declaring my history
  const history = useHistory();

  const onNextButton = () => {
      history.push('/feeling')
  };
  return (
    <>
      <h3>Thank You!</h3>
      <button className="surveyHomePage" onClick={onNextButton}>Leave New Feedback</button>
    </>
  );
}

export default SurveyHomePage