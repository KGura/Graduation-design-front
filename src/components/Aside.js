import "../components/aside.css";
import ai from "../assets/icon/icon.png";
import { Link } from "react-router-dom";
const Aside = ()=>{
return(
  <div className="left-aside">
    <div className="brand">
      <img src={ai} alt="..."></img>
        <p>8125
          <span>全员</span>
        </p>
    </div>
  <hr className="line"></hr>
  <ul className="list">
    <Link to="/percenter">
      <li className="active">
      <i className="bi bi-person-circle"></i>
      <span>个人中心</span>
    </li>
    </Link>
    <Link to="/feedback">
      <li className="active">
        <i className="bi bi-chat-dots"></i>
      <span>反馈消息</span>
      </li>
    </Link>
    <Link to="/emergency" >
      <li className="active">
        <i class="bi bi-telephone-forward"></i>
      <span>紧急联系</span>
    </li>
    </Link>
  </ul>
  </div>
);
}
export default Aside;