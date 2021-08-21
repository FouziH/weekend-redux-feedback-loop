import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { responsiveFontSizes } from "@material-ui/core";
import Button from '@material-ui/core/Button'


function Admin() {

    // let dispatch = useDispatch()
    
    useEffect(() => {
        getSurveyResults()
    }, [])

    const [survey, setSurveyResults] = useState([])
    const getSurveyResults = () => {
        axios({
            method:'GET',
            url: "/api/survey"
        }).then(response => {
            setSurveyResults(response.data)
        }).catch(error =>{
            console.log("/GET error is", error)
        })
    }
    const onDeleteButton = (event) =>{
        console.log("on Delete Button", event.target)

    }


  return (
    <>
      <h1>FeedbAck Results!</h1>
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Feeling</TableCell>
              <TableCell align="center">Comprehension</TableCell>
              <TableCell align="center">Support</TableCell>
              <TableCell align="center">Comments</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {survey.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.feeling}</TableCell>
                <TableCell align="center">{item.understanding}</TableCell>
                <TableCell align="center">{item.support}</TableCell>
                <TableCell align="center">{item.comments}</TableCell>
                <TableCell align="center">
                  <Button onClick={onDeleteButton}
                    size="small"
                    color="primary"
                    variant="contained"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  ); 
}

export default Admin;
