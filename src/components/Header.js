import { Link } from "react-router-dom";
import "../components/header.css"
const Header = ()=>{
    return (
        <header>
          <a href="#logo"><img id="logo"src="" alt="logo" className="logo"></img></a>
          <nav>
            <ul className="nav-links">
                <Link to="/home"><li>公告</li></Link>
                <Link to="/maintain"><li>设施报修</li></Link>
                <Link to="/pay"><li>费用缴纳</li></Link>
                <Link to="/complain"><li>投诉意见</li></Link>
            </ul>
          </nav>
      </header>
    );
}
export default Header;