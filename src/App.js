// import logo from './logo.svg';
import './App.css';

import ListUsers from './components/ListUsers';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateUser from './components/UpdateUser';
import ViewUser from './components/ViewUser';
import LoginUser from './components/LoginUser';
import Home from './components/Home';
import Lounge from './components/Lounge';

function App() {
  return (
    <div className="App">
     <div>
        <Router>
            <HeaderComponent />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact element = {<LoginUser></LoginUser>}></Route>
                          <Route path = "/getAll" exact element = {<ListUsers></ListUsers>}></Route>
                          <Route path = "/addUser" exact element = {<Register></Register>}></Route>
                          <Route path ="/view/:id" exact element = {<ViewUser></ViewUser>}></Route>
                          <Route path = "/editUser/:id"  exact element = {<UpdateUser></UpdateUser>}></Route>
                          <Route path="lounge" element={<Lounge></Lounge>} ></Route>
                          <Route path ="/home" exact element = {<Home></Home>}></Route>
                    </Routes>
                </div>
           <FooterComponent />
        </Router>
    </div>
    </div>
  );
}

export default App;
