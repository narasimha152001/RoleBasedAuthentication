import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
// import ViewUser from "./ViewUser";

export default function UpdateUser() {

  let navigate = useNavigate();

  const isAdmin = sessionStorage.getItem('isAdmin');

  const { id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    emailId: "",
    mobileNo: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, gender, emailId, mobileNo, city, password, confirmPassword } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    console.log("UpdateUserComponent.onSubmit()");
    e.preventDefault();
    const up = await axios.put(`http://localhost:8061/user/update/${id}`, user);
    console.log(up.data);
    navigate(`/view/${id}`);
    //  <Navigate to={`/view/${id}`} exact element = {<ViewUser></ViewUser>}/>
  };//onSubmit

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8086/user/getById/${id}`);
    setUser(result.data);
    console.log(result.data);
  };//loadUser

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAdmin.match("true")) {
      console.log("admin"+isAdmin);
      navigate('/getAll');
    } else {
      console.log("admin"+isAdmin);
      navigate('/home');
    }
  };//handleSubmit

  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-2 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <table></table>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                userId
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your userId"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                FirstName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your FirstName"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                lastName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="emailId"
                value={emailId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Mobile" className="form-label">
                Mobile
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Mobile"
                name="mobileNo"
                value={mobileNo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your city"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/*  <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
              confirmPassword
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => onInputChange(e)}
              />
              </div> */}
            {/*   <div className="mb-3">
              <label htmlFor="roles" className="form-label">
                Roles
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="roles"
                value={roles}
                onChange={(e) => onInputChange(e)}
              />
              </div> */}


            <button type="submit" className="btn btn-outline-primary">Submit</button>
            {/* <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link> */}
            <button type="button"  className="btn btn-outline-danger" onClick={handleSubmit}>Back to Home</button>
          </form>
        </div>
      </div>
    </div>
  );
}