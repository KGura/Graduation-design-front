import "../PageCss/Home.css"
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Notif from "../../components/Notif";
import { useState } from "react";
const Home = ()=>{
  const [notif, setnotif] = useState([{id:"1",title:"公告",date:"2024-3-20",profile:"电梯维修"}]);
    return(
      <>
      <Header />
      <div className="container">
        <div className="context-box">
          <Test notif={notif}/>
        </div>
        <div className="left-box">
          <Aside/>
        </div>
        <div className="right-box">
          <Notif notif={notif}/>
          <Notif notif={notif}/>
        </div>
      </div>
    </>
    )
}
const Test = ({notif})=>{
  return(
    <>
    {notif.map(notif =>(
      <>
      <h1>{notif.title}</h1>
      <hr className="title-line" /> 
      <p>{notif.profile}</p>
      </>
    ))}
    </>
  )
}
export default Home;