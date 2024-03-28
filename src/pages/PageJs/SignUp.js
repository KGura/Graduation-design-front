import { useState } from "react";
import { Alert } from 'antd';
import "../PageCss/SignUp.css";
import axios from "axios";

const SignUp = () => {
const randomNum = Math.floor(Math.random() * 900) + 100;
const [formData,setFormData] = useState({});
const [showError, setShowError] = useState(false);
const [isBtnAble,setIsBtnAble] =useState(false);
const onSubmit = async ()=>{
  try{
      await axios.post('/signup',formData
      ).then((response)=>{
        console.log(response.data);
      })
      //写成接口，用来接受是否登陆成功的bool值
    }catch{
      console.error();
    }
    console.log(formData);
  }
  return (
    <div className='sign-container'>
      <div className='frame-container'>
        <form>
          <div className="sign-title">
            <p className="title">小区物业管理系统
              <span>技术——改变世界</span>
            </p>
          </div>
          <hr className="sign-line"></hr>
          <div className="check-box">
          <div>
          <i class="bi bi-file-person"></i>
            <input type="text" id="userName" name="userName" placeholder="请输入账号" autoComplete="off" required
            value={formData.userName}
            onChange={(e)=>setFormData({...formData, userName: e.target.value})} 
            >
            </input>
          </div>
          <div>
          <i class="bi bi-file-lock2"></i>
            <input type="password" id="userPwd" name="userPwd" placeholder="请输入密码" required
            value={formData.userPwd}
            onChange={(e)=>
              {
                const newPassword = e.target.value;
                const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
              
                if(passwordRegex.test(newPassword)){
                  setFormData({...formData, userPwd: e.target.value});
                  setShowError(false);
                }
                else{
                  setFormData({...formData, userPwd: e.target.value});
                  setShowError(true);
                }
                }
              }
            />
            {showError && (
                <Alert message="密码必须包含至少一个数字、一个大写字母、一个小写字母，并且至少有8个字符" type="error" />
            )}
            </div>
          <div>
            <i class="bi bi-person-badge-fill"></i>
            <input type="text" id="roomID" name="roomID" placeholder="请输入房号" required
            onChange={(e)=>setFormData({...formData, roomID:e.target.value,userID:randomNum+e.target.value})}
            >
            </input>
          </div>
          <div className="id-menu">
            <i class="bi bi-person-fill-lock"></i>
              <select>
                <option value={"resident"}>住户</option>
              </select>
            </div>
          <div>
            <button type="submit" onClick={onSubmit} disabled={isBtnAble}>点击注册</button>
          </div>
          </div>
        </form>
      </div>
    </div>
    );
  };
export default SignUp; 