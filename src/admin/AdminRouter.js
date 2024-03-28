import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import HandleBulletin from './Pages/HandleBulletin';
import MaintainInform from './Pages/MaintainInform';
import FeedbackInform from './Pages/FeedbackInform';
import Resident from './Pages/Resident';

const AdminRouter = ()=>{
    return(
    <>
    <Router>
        <Routes>
        <Route path="/admin" Component={Dashboard}></Route>
        <Route path="/handlebulletin" Component={HandleBulletin}></Route>
        <Route path="/maintaininform" Component={MaintainInform}></Route>
        <Route path="/feedbackinform" Component={FeedbackInform}></Route>
        <Route path="/resident" Component={Resident}></Route>
        </Routes>
    </Router>
    </>
    );
}
export default AdminRouter;