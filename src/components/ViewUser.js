import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import { removeUserSession } from "../utils/Common";


export default function ViewUser() {

  const [user, setUser] = useState({
    id:null,
    firstName: "",
    lastName: "",
    gender: "",
    emailId: "",
    mobileNo: null,
    city: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  const isAdmin = sessionStorage.getItem('isAdmin');
  console.log(isAdmin);
  

  // let tempId = undefined;
  let tempId = undefined;

  console.log(tempId);

  console.log(!(sessionStorage.getItem('isAdmin') === false))

    /* !isAdmin ? tempId = sessionStorage.getItem('cid') : tempId = id; */

  console.log(tempId);
  console.log(id);
  console.log(isAdmin === false);


//-->
  if (isAdmin) {
    console.log(tempId);
    /* tempId = sessionStorage.getItem('cid') */
    tempId = id
    console.log(tempId === ":id")
    /* (tempId===":id")? tempId */
    console.log(tempId);
  }
  else {
    console.log(tempId)
    tempId = id
    console.log(tempId)
  }


  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("accessToken") === undefined && sessionStorage.getItem("accessToken") === null) {
      navigate("/");
    }

  }, []);


  const loadUser = async () => {
    console.log("ViewUser.loadUser()");
    // const result = await axios.get("http://localhost:8061/user/getById/${id}");

    const result = await axios.get(`http://localhost:8061/user/getById/${tempId}`);
    setUser(result.data);
  };//loadUser

//-->New
  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    // setAuth({});
    removeUserSession();
    navigate('/');
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (isAdmin.match("true")) {
  //     console.log("Admin"+isAdmin);
  //     navigate('/getAll');
  //   } else {
  //     console.log("Admin"+isAdmin);
  //     navigate('/home');
  //   }
  // };//handleSubmit

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-5">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>FirstName:</b>
                  {user.firstName}
                </li>
                <li className="list-group-item">
                  <b>LastName:</b>
                  {user.lastName}
                </li>
                <li className="list-group-item">
                  <b>Gender:</b>
                  {user.gender}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.emailId}
                </li>
                <li className="list-group-item">
                  <b>Mobile:</b>
                  {user.mobileNo}
                </li>
                <li className="list-group-item">
                  <b>city:</b>
                  {user.city}
                </li>
                <li className="list-group-item">
                  <b>Password:</b>
                  {user.confirmPassword}
                </li>


              </ul>
            </div>
          </div>
          {/* <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link> */}

    <Link className="btn btn-primary my-2" to={"/editUser/" + tempId}>
            Update
          </Link>

          <button type="submit" onClick={logout}>Back to Home</button>
        </div>
      </div>
    </div>
  );
}