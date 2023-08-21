import React, { Component } from 'react'
import Userservicer from '../services/Userservicer';
import { Link, Navigate } from 'react-router-dom';
import { removeUserSession } from '../utils/Common';
// import LoginUser from '../components/LoginUser';

export class ListUsers extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: null
        }
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.logout = this.logout.bind(this);
        /*   this.addUser=this.addUser.bind(this); */

    }

    componentDidMount() {
        this.getUsers();
    }  //life cycle method

    getUsers() {
        //it has a service called get the data and set the data to users list
        // Userservice.getAllUsers().then(response => {
         Userservicer.getAllUsers().then(response => {
            console.log(response);
            this.setState({ users: response.data });
        }
        );
    }//getUsers

    deleteUser(id) {
        console.log("UserListComponent.deleteEmployee" + id);
        Userservicer.deleteUser(id).then((response) => {
            console.log(response);
            this.setState({ message: response.data });
            this.getUsers();
        });
    }//deleteUser

    editUser(id) {
        console.log("UserListComponent.editUser  " + id);
        this.props.navigation.navigate(`/editUser/${id}`);
        // {/*<Navigate to="/editUser/:userId" exact element = {<UpdateUserComponent></UpdateUserComponent>}/>*/}
    }//editUser


    logout() {
        console.log("logout")
        removeUserSession();
        <Navigate to="/" />
        //<Link to="/"></Link>
    }//logout

    //to store the data using state, state nothing but stroing the data
    render() {
        return (
            <div className="row pb-5" style={{paddingTop:"1px", marginTop:"80px"}}>
                <h2 className="text-center pt-1"><strong>Admin Page</strong></h2>
                <h2 className="text-center pt-1"><strong>USER LIST DETAILS</strong></h2>
               <button><Link className="btn btn-primary" to="/addUser"> Add Employee</Link></button> 
                <br></br>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-hover table-bordered">
                      <thead>
                            <tr className="bg bg-info text-white">
                                <th><strong>Employee ID</strong></th>
                                <th><strong>FIRSTNAME</strong></th>
                                <th><strong>LASTNAME</strong></th>
                                <th><strong>GENDER</strong></th>
                                <th><strong>EMAILID</strong></th>
                                <th><strong>MOBILENO</strong></th>
                                <th><strong>CITY</strong></th>
                                <th><strong>Role</strong></th>
                                <th><strong>OPERATIONS</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map((u) =>
                                    <tr key={u.id}>
                                        <td> {u.id} </td>
                                        <td> {u.firstName}</td>
                                        <td> {u.lastName}</td>
                                        <td> {u.gender}</td>
                                        <td> {u.emailId}</td>
                                        <td> {u.mobileNo}</td>
                                        <td> {u.city}</td>
                                        <td>{u.roles}</td>

                                        <td>
                                            {/*  <button onClick={ () => this.editUser(u.userId)} className="btn btn-info">Update </button> */}
                                            <Link className="btn btn-info" to={`/editUser/${u.id}`} style={{ marginLeft: "10px" }}>update</Link>
                                            {/*  <Link className="btn btn-info" onClick={ () => this.editUser(u.userId)} style={{ marginLeft: "10px" }}>update</Link> */}
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteUser(u.id)} className="btn btn-danger">Delete </button>
                                            <Link className="btn btn-warning" to={`/view/${u.id}`} style={{ marginLeft: "10px" }}>View</Link>

                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {
                        this.state.message && (
                            <div className="alert alert-success">{this.state.message}</div>
                        )
                    }
                    <div className="flexGrow">
                        You have to signOut :
                        {/*  <button  onClick={this.logout}>Sign Out</button>  */}
                        <Link className="btn btn-info" to={`/`} style={{ marginLeft: "10px" }}>SignOut</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListUsers
