import Aside from "../../components/Aside";
import Header from "../../components/Header";
import {
    Button,
    // DatePicker,
    Form,
    Input,
    Mentions,
    Divider,
    
  } from 'antd';
import React from 'react';
import "../PageCss/percenter.css"

const formItemLayout = {
    labelCol: {
    xs: {
      span: 20,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 20,
    },
    sm: {
      span: 14,
    },
  },
};
const PerCenter = () => {
    return (
      <>
        <Header />
        <div className="container">
          <div className="context-box-pc">
            <div className="user-area">
                <div style={{width:"100%"}}>
                    <h1>个人中心</h1>
                </div>
                <Divider plain>概要</Divider>
                <p>账号:{"KGura"}</p>   
                <p>用户ID:{"helloworld"}</p>
                <p>房间号：{"8125"}</p>
            </div>
            
            <Form
              className="form"
              {...formItemLayout}
              variant="filled"
              style={{
                minWidth: 500,
                minHeight: 500,
                
              }}
            >
            <h1 style={{textAlign:"center",marginBottom:"25px"}}>修改信息</h1>
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
  
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
  
              <Form.Item
                label="房号"
                name="roomID"
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
                  },
                ]}
              >
                <Mentions />
              </Form.Item>
  
              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="left-box">
            <Aside />
          </div>
          
        </div>
      </>
    );
  };
export default PerCenter;