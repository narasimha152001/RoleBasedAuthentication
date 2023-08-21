import { useRef, useState, useEffect } from 'react';
// import useAuth from './useAuth';
import { Link, useNavigate, navigate } from 'react-router-dom';
import axios from "axios";
import { setUserSession } from '../utils/Common';

const LoginUser = () => {
  //  const { setAuth } = useAuth();

    const navigate = useNavigate();
    // const location = useLocation();
  //  const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [emailId, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [emailId, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit()");
           try {
            console.log("try");
            console.log(JSON.stringify({ emailId, password }));
            // const response = await axios.post(`http://localhost:8061/user/login`, JSON.stringify({ emailId, password }),
            const response = await axios.post("http://localhost:8061/user/login", JSON.stringify({ emailId, password }),

             {
                headers: { 'Content-Type': 'application/json' },
               // withCredentials:true
             });
            console.log("ok");

            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const id = response?.data?.id;
            const user = response?.data?.user;
            const roles = response?.data?.roles;
            const isAdmin=response?.data?.isAdmin;
            const finalrole=response?.data?.finalrole;
            console.log(accessToken);
            console.log(roles);
            console.log(user);
            // const id = id;
            /* setAuth({ emailId, password, roles, accessToken, cid }); */
            setUserSession(emailId, password, accessToken, id, finalrole, isAdmin, user);
            console.log("UserSession Set Successfully");
            sessionStorage.setItem('emailId', emailId);
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('id', id);
            sessionStorage.setItem('finalrole', finalrole);
            sessionStorage.setItem('isAdmin', isAdmin);
            sessionStorage.setItem('user', user);
            setUser('');
            setPwd('');
                 if(isAdmin===true){
                    console.log("end of try block before navigate statement");
                    console.log("isAdmin  " + isAdmin);
                    navigate('/getAll');
                  }else{
                    console.log("isAdmin  " + isAdmin);
                      navigate('/home');
                  }
       
         
            } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        } //end of try & catch block
        console.log("methodCompleted");
    } // end handleSubmit()

    return (
        <section>
            <p ref={errRef} style={{color:"red"}} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 style={{color:"black", paddingTop:"1px",  marginTop:"80px",marginLeft:"60px"}}><strong>SIGN IN</strong></h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emailId">EmailId :</label>
                <input
                    type="text"
                    id="emailId"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={emailId}
                    required
                />
                 <br></br>
                 <br></br>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    required
                />
                <br></br><br></br>
                <button className="button btn-success">Sign In</button>
            </form>
           
            <div className="flexGrow">
                Need an Account?     <button className="button btn-success"><Link to="/addUser">Sign Up</Link></button>
                </div>
        </section>

    )
}

export default LoginUser