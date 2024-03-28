import {useState} from "react";
import { Link } from "react-router-dom";
import "../PageCss/Login.css"
import axios from "axios";


//连接数据库并且判断是否存在
const Login = ()=>{
const [formData,setFormData] = useState({})
const Login = async ()=>{
    try{
        const response = await axios.post(
            {
                url:'/login',
                data:formData,
            }
        )
        //写成接口，用来接受是否登陆成功的bool值
        console.log(response.data);
    }catch{
        console.error();
    }
}

return(
    <div className='reg-container'>       
        <div className='reg-frame'> 
            <div className='reg-title-f'>
            <p className="reg-title">
                小区物业管理系统
              <span>技术——改变世界</span>
            </p>
            </div>
            <hr className="reg-line"></hr>
            <div className="check-box">
                <form method="POST" onSubmit={e => {e.preventDefault()}}>
                <div className='userName'>
                    <input type="text" id="userName" name="userName" placeholder="请输入账号" required
                    value={formData.userName}
                    onChange={(e)=>setFormData({...formData, userName: e.target.value})} 
                    ></input>
                </div>
                <div className='userPwd'>
                    <i></i>
                    <input type="password" id="userPwd" name="userPwd" placeholder="请输入密码" required
                    value={formData.userPwd}
                    ///对象被解构后，可以在后面添加新的key-value进行更新 
                    onChange={(e)=>setFormData({...formData, userPwd: e.target.value})} 
                    ></input>
                </div>
                <div>
                    <div className='sign-btn'>
                        <button type="submit" onClick={Login}>登陆</button>
                    </div>
                </div>
            </form>
                <div className='sign-btn'>
                    <Link to="/signup">
                    <button type="submit">注册</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);   
}
export default Login;