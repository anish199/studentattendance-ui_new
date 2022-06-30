import {Table} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import LeaveService from "../DBServices/LeaveService";
function ViewStudentLeave() {
const [data, getData] = useState([]);
    useEffect(() => {
      GetData();
    }, []);
      const GetData = () => {
        LeaveService.getAllLeaves().then((result) => {
          getData(result.data);
          console.log(result.data);
        });
      };
      


  return (
    <div>
      <center>
      <h1 style={{ color: "black" }}>View Leave</h1>
      </center>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Leave Apply Date</th>
            <th>Leave Start Date</th>
            <th>Leave End Date</th>
            <th>Student Id</th>
          </tr>
        </thead>
        <tbody>
            {data &&
              data.length > 0 &&
              data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.leaveApplyDate}</td>
                    <td>{item.leaveStartDate}</td>
                    <td>{item.leaveEndDate}</td>
                    <td>{item.studentId}</td>
                  </tr>
                );
              })}
          </tbody>
      </Table>
    </div>
  );
}
export default ViewStudentLeave;
