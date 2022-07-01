import React, { useState, useEffect} from "react";
import { useHistory, withRouter} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function UpdateStudent() {
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
  const UpdateStudent = (e) => {
    e.preventDefault();
    const data = {
      studentId: user.id,
      studentName: user.name,
      studentEmail: user.email,
      studentContact: user.tel,
      studentUsername: user.username,
      studentPassword: user.password,
      studentType: "Student",
    };
    
    axios.put(
      "http://20.124.158.6/api/Students/UpdateStudent",user)
      .then((result) => {
     console.log(result);
     
     history.push("/Admin/StudentDetails");
      
      if (result.user == "failed") swal("Error","Student Not Present","error");
      else swal("Done","Student Updated successfully","success");
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
          <label>Student Id</label>
          <input
            type="text"
            name="id"
            value={user.id}
            className="form-control"
            placeholder=" Enter Student Id"
            required
            onChange={onChange}
          />
          <label>Student Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            className="form-control"
            placeholder="Enter Name"
            required
            onChange={onChange}
          />
          <label>Student Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control"
            placeholder="Enter Email"
            required
            onChange={onChange}
          />
          <label>Student PhoneNumber</label>
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
          <label>Student Username</label>
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
            <input type="submit" value="Update" onClick={UpdateStudent} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default withRouter(UpdateStudent);
