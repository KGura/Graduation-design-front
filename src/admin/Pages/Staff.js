import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
const { Header, Content, } = Layout;


const Staff = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{
            flex: 1,
            minWidth: 0,
            fontSize:20,
            margin:"0 50px"
          }}
        >
          <Menu.Item>
            <Menu.Item key="1">
              <Link to="/handleBulletin">公告发布</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/maintainInform">维修信息</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/feedbackInform">反馈消息</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/resident">住户信息</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/staff">物业人员信息</Link>
            </Menu.Item>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 20px',
          
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: 350,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
         {/* 在这里填写主要内容 */}
        </div>
      </Content>
    </Layout>
  );
};
export default Staff;