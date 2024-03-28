
import Login from "./pages/PageJs/Login";
import SignUp from "./pages/PageJs/SignUp";
import Home from "./pages/PageJs/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maintain from "./pages/PageJs/Maintain";
import PerCenter from "./pages/PageJs/PerCenter";
import Feedback from "./pages/PageJs/Feedback";
import Complain from "./pages/PageJs/Complain";
import Pay from "./pages/PageJs/Pay";
import Emergency from "./pages/PageJs/Emergency";
import UserRouter from "./pages/UserRouter";
import AdminRouter from "./admin/AdminRouter"
function App() {
  return (
    <>
    <UserRouter/>
    <AdminRouter/>
    </>
      );
}

export default App;
