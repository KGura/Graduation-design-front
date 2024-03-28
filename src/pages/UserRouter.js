import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./PageJs/Login";
import SignUp from "./PageJs/SignUp";
import Home from "./PageJs/Home"
import Maintain from "./PageJs/Maintain";
import PerCenter from "./PageJs/PerCenter";
import Feedback from "./PageJs/Feedback";
import Complain from "./PageJs/Complain";
import Pay from "./PageJs/Pay";
import Emergency from "./PageJs/Emergency";

function UserRouter() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path="/maintain" Component={Maintain}></Route>
        <Route path="/percenter" Component={PerCenter}></Route>
        <Route path="/feedback" Component={Feedback}></Route>
        <Route path="/complain" Component={Complain}></Route>
        <Route path="/pay" Component={Pay}></Route>
        <Route path="/emergency" Component={Emergency}></Route>
      </Routes>  
    </Router>
    </>
    );
}
export default UserRouter;