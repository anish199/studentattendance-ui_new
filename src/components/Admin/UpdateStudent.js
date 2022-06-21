import React, { useState, useEffect} from "react";
import { useHistory} from "react-router-dom";
import axios from "axios";

function UpdateEmployee() {
  let history = useHistory();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    tel: "",
    username: "",
    password: "",
  });
  useEffect(() => {
    //GetData();
  });
  const UpdateEmployee = (e) => {
    e.preventDefault();
    const data = {
      employeeId: user.id,
      employeeName: user.name,
      employeeEmail: user.email,
      employeeContact: user.tel,
      employeeUsername: user.username,
      employeePassword: user.password,
      employeeType: "Employee",
    };
    
    axios.put(
      "https://localhost:44381/api/Employees/UpdateEmployee",
      data
    ).then((result) => {
     console.log(result);
     
     history.push("/Admin/EmployeeDetails");
      
      if (result.data == "failed") alert("Employee Not Preset");
      else alert("Employee Updated successfully ");
    });
  };
  const onChange = (e) => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  return (
    <div>
      <center>
        <h1>Update Details</h1>
      </center>
      <div className="form">
        <form>
          <label>Employee Id</label>
          <input
            type="text"
            name="id"
            value={user.id}
            className="form-control"
            placeholder=" Enter Employee Id"
            required
            onChange={onChange}
          />
          <label>Employee Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            className="form-control"
            placeholder="Enter Name"
            required
            onChange={onChange}
          />
          <label>Employee Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control"
            placeholder="Enter Email"
            required
            onChange={onChange}
          />
          <label>Employee PhoneNumber</label>
          <input
            type="tel"
            name="tel"
            value={user.tel}
            className="form-control"
            placeholder="Enter PhoneNumber"
            onChange={onChange}
            required
          />
          <br />
          <label>Employee Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            name="username"
            value={user.username}
            required
            onChange={onChange}
          />
          <br />
          <div class="inputbox">
            <input type="submit" value="Update" onClick={UpdateEmployee} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default UpdateEmployee;
