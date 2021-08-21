import React from 'react'
import {useHistory} from 
'react-router-dom';
import Button from "@material-ui/core/Button";
function SurveyHomePage () {
  //declaring my history
  const history = useHistory();

  const onNextButton = () => {
      history.push('/feeling')
  };
  return (
    <>
      <h3>Thank You!</h3>
      <Button
        size="medium"
        color="primary"
        variant="contained"
        className="surveyHomePage"
        onClick={onNextButton}
      >
        Leave New Feedback
      </Button>
    </>
  );
}

export default SurveyHomePage