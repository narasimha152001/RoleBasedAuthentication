import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';
import Userservicer from '../services/Userservicer';
import axios from "axios";


export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    /* console.log(fields); */
  }

  cancel() {
    // this.props.history.push("/users");
    <Navigate to="/" />
  }

 sendData() {
    console.log(this.state.fields);
   axios.post("http://localhost:8061/user/saveUsers", this.state.fields);
    // Userservicer.createUser(this.state.fields);
    alert("Form submitted");
    // <NavLink to="/" />;
     <Link to={`/`} ></Link>
    //  this.props.history.push("/users");
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["id"] = "";
      fields["firstName"] = "";
      fields["lastName"] = "";
      fields["gender"] = "";
      fields["emailId"] = "";
      fields["mobileNo"] = "";
      fields["city"] = "";
      fields["password"] = "";
      fields["confirmPassword"] = "";
      // fields["roles"] = "";
      this.setState({ fields: fields });
      console.log(fields);

      this.sendData()
      /* setCustomer({ ...customer, [e.target.name]: e.target.value }); */
      /* axios.post("http://localhost:8520/saveCust", fields); */
      alert("Form submitted");
        //<NavLink to="/"/> 
      //  this.props.history.push('/users');
    }
  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //   if(!fields["userId"]){
    //     formIsValid = false;
    //     errors["userId"] ="Please enter your Id";
    //     console.log(formIsValid)
    // }

    //   if(typeof fields["userId"] !=="undefined"){
    //     if(!fields["userId"].match(/^[0-9]*$/)){
    //         formIsValid = false;
    //         errors["userId"] = "Please Enter valid Id";
    //         console.log(formIsValid)
    //     }
    // }

    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your firstName.";
      console.log(formIsValid)
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
        console.log(formIsValid)
      }
    }

    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your lastName.";
      console.log(formIsValid)
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
        console.log(formIsValid)
      }
    }

    if (!fields["emailId"]) {
      formIsValid = false;
      errors["emailId"] = "*Please enter your email-ID.";
      console.log(formIsValid)
    }

    if (typeof fields["emailId"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailId"])) {
        formIsValid = false;
        errors["emailId"] = "*Please enter valid email-ID.";
        console.log(formIsValid)
      }
    }

    if (!fields["mobileNo"]) {
      formIsValid = false;
      errors["mobileNo"] = "*Please enter your contact no.";
      console.log(formIsValid)
    }

    if (typeof fields["mobileNo"] !== "undefined") {
      if (!fields["mobileNo"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileNo"] = "*Please enter valid mobile no.";
        console.log(formIsValid)
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
      console.log(formIsValid)
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
        console.log(formIsValid)
      }
    }

    if (!fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "*Please enter your password.";
      console.log(formIsValid)
    }

    if (typeof fields["confirmPassword"] !== "undefined") {
      if (!fields["confirmPassword"].match(fields["password"])) {
        formIsValid = false;
        errors["confirmPassword"] = "*Confirm Password Should be Match.";
        console.log(formIsValid)
      }
    }


    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Please enter your city.";
      console.log(formIsValid)
    }

    if (typeof fields["city"] !== "undefined") {
      if (!fields["city"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["city"] = "*Please enter alphabet characters only.";
        console.log(formIsValid)
      }
    }

    if (!fields["gender"]) {
      formIsValid = false;
      errors["gender"] = "*Please enter your gender.";
      console.log(formIsValid)
    }
    if (typeof fields["gender"] !== "undefined") {
      if ((fields["gender"] === 'male' || fields["gender"] === 'female')) {
        formIsValid = false;
        errors["gender"] = "Please Select One of the Options";
        console.log(formIsValid)
      }
    }


    // if (!fields["roles"]) {
    //   formIsValid = false;
    //   errors["roles"] = "*Please enter your role.";
    //   console.log(formIsValid)
    // }
    // if (typeof fields["roles"] !== "undefined") {
    //   if ((fields["roles"] === 'User' || fields["roles"] === 'Admin'))// || fields["roles"] === 'Anonymous'
    //    {
    //     formIsValid = false;
    //     errors["roles"] = "Please Select One of the Options";
    //     console.log(formIsValid)
    //   }
    // }

    this.setState({
      errors: errors
    });
    console.log(formIsValid)
    return formIsValid;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register Customer</h2>
            <form method="post" name="userRegistrationForm"onSubmit={this.submituserRegistrationForm} >
              <label>First Name</label>
              <input type="text" name="firstName" value={this.state.fields.firstName || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.firstName}</div>

              <label>Last Name</label>
              <input type="text" name="lastName" value={this.state.fields.lastName || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.lastName}</div>

              <label>Email ID:</label>
              <input type="text" name="emailId" value={this.state.fields.emailId || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.emailId}</div>

              <label>Mobile No:</label>
              <input type="text" name="mobileNo" value={this.state.fields.mobileNo || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.mobileNo}</div>

              <label>City</label>
              <input type="city" name="city" value={this.state.fields.city || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.city}</div>

              <label>Password</label>
              <input type="password" name="password" value={this.state.fields.password || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>

              <label>ConfirmPassword</label>
              <input type="confirmPassword" name="confirmPassword" value={this.state.fields.confirmPassword || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.confirmPassword}</div>

              <label>Gender</label>
              <input type="radio" name="gender" value="Male" checked={this.state.fields.gender === "Male"} onChange={this.handleChange} /> Male
              <input type="radio" name="gender" value="Female" checked={this.state.fields.gender === "Female"} onChange={this.handleChange} /> Female
              <div className="errorMsg">{this.state.errors.gender}</div>

              {/* <label><strong>Roles:</strong></label>
              <input type="radio" name="roles" value="User" checked={this.state.fields.roles === "User"} onChange={this.handleChange} /> User
              <input type="radio" name="roles" value="Admin" checked={this.state.fields.roles === "Admin"} onChange={this.handleChange} /> Admin
              <div className="errorMsg">{this.state.errors.roles}</div> */}


              <button className="button btn-success float-left" onSubmit={this.submituserRegistrationForm}><Link to="/">Save</Link></button>
              {/* <button className="button btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button> */}
              <Link className="btn btn-danger" to="/" style={{ marginLeft: "10px" }}>Cancel</Link>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register
