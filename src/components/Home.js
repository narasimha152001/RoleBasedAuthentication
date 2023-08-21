import { useNavigate, Link } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "./AuthProvider";
// import { removeUserSession } from '../utils/Common';
import { removeUserSession } from '../utils/Common';

const Home = () => {
    //  const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const id = sessionStorage.getItem('id');

    const logout = async () => {
        console.log("logout()")
        //  setAuth({});
        removeUserSession();
        navigate('/');
    }//logout

    const navigateProfile = () => {
        navigate('/view/' + id);
        // navigate("/view/${id}");
    }//navigateProfile

    const navigateEditProfile = () => {
        navigate('/editUser/' + id);
    }//navigateEditProfile

    return (
        <div className="container">
            <section>
                <h1 style={{ color: "green" }}>Welcome </h1>
                <br />
                <h3>You are logged in!</h3>
                <br />
                 <nav>
                    <button className="btn btn-info" onClick={navigateProfile} style={{ marginLeft: "10px" }}>View profile</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-info" onClick={navigateEditProfile} style={{ marginLeft: "10px" }}>Edit profile</button>
                </nav>
                <br></br>
                <br></br>
                <Link to="/lounge">Go to the Lounge</Link>
                <br />
                <br></br>
                <div className="flexGrow">
                    You have to signOut :    <button onClick={logout}>Sign Out</button>
                </div>
            </section>
        </div>
    )
}

export default Home
