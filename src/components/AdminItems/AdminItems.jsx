import React from 'react'
import TableRow from "@material-ui/core/TableRow"; 
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import FlagIcon from "@material-ui/icons/Flag";
import axios from 'axios';
//This function is responsible for displaying items, and refreshing the page with the new items
function AdminItems({ item, getSurveyResults }) {
    //this function will allow me to make a delete request to the server using item.id
  const onDeleteButton = () => {
    //Prompt the user to confirm prior to deleting the feedback from the database.
    if (confirm("Are You Sure?")) {
      let deleteId = item.id;
      console.log("on Delete Button", deleteId);
      //making request for deletion
      axios({
        method: "DELETE",
        url: `/api/survey/${deleteId}`, //passing the item id
      })
        .then((response) => {
          console.log("DELETE /api/survey/ response is:", response);
          getSurveyResults(); // will refresh page with current data from my db
        })
        .catch((error) => {
          // will catch error
          //this will log the error to the console.
          console.log("DELETE /api/survey/ error is:", error);
        });
    } else { // alert that delete request is cancelled
      alert("Delete request cancelled.");
    }
  };
  const flagComment = () => {
    let flagItemId = item.id
    console.log('on flag comment button', flagItemId)
    axios({
      method: "PUT",
      url: `/api/survey/${flagItemId}`,
    }).then(response => {
      console.log("PUT /api/survey/ response is:", response);
    } ).catch(error => {
      console.log("PUT /api/survey/ error is:", error);
    })
  }
  return (
    <>
      <TableRow>
        <TableCell align="center">{item.feeling}</TableCell>
        <TableCell align="center">{item.understanding}</TableCell>
        <TableCell align="center">{item.support}</TableCell>
        <TableCell align="center">{item.comments}</TableCell>
        <TableCell align="center">
          <div className="myAdmin">
            <Button onClick={flagComment}
              endIcon={<FlagIcon />}
              size="small"
              color="primary"
              variant="outlined"
            >
              Flag
            </Button>
          </div>
          <div className="myAdmin">
            <Button
              onClick={onDeleteButton}
              size="small"
              color="secondary"
              variant="contained"
              endIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
}
export default AdminItems