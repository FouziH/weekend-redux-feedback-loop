import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import AdminItems from "../AdminItems/AdminItems";
import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { responsiveFontSizes } from "@material-ui/core";

function Admin() {
    // let dispatch = useDispatch()
    
    //use useEffect to render my page 
    useEffect(() => {
        getSurveyResults(); //calling my getSurveyResults function 
    }, [])

    //using useState 
    const [survey, setSurveyResults] = useState([])
    const getSurveyResults = () => {

      //making axios get request to my server
      axios({
            method:'GET',
            url: "/api/survey"
        }).then(response => {
            //passing response to my local state
            setSurveyResults(response.data)
        }).catch(error =>{
            console.log("/GET error is", error); //login error
        })
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
              <AdminItems key={item.id} item={item}  getSurveyResults={getSurveyResults}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  ); 
}

export default Admin;
