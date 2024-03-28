import React from 'react';
import { Link } from "react-router-dom";
import { Table } from 'antd';
import { Layout, Menu, theme } from 'antd';


const { Header, Content, } = Layout;
const columns = [
    {
      title: '缴费类型',
      dataIndex: 'feeClass',
      filters: [
        {
          text: '水费',
          value: '水费',
        },
        {
          text: '电费',
          value: '电费',
        },
        {
            text: '物业费',
            value: '物业费',
          },
      ],
      onFilter: (value, record) => record.feeClass.indexOf(value) === 0,
      sorter: (a, b) => a.feeClass.length - b.feeClass.length,
      sortDirections: ['descend'],
    },
    {
      title: '缴费金额',
      dataIndex: 'feeMoney',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.feeMoney - b.feeMoney,
    },
    {
      title: '缴费状态',
      dataIndex: 'feeState',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
        title: '缴费日期',
        dataIndex: 'feeDate',
        defaultSortOrder: 'descend',
      },
  ];
  const data = [
    {
        key: '1',
        feeClass: 'John Brown',
        feeMoney: 32,
        feeState: 'New York No. 1 Lake Park',
        feeDate:'2024-3-11'
    },
    {
        key: '1',
        feeClass: 'John Brown',
        feeMoney: 32,
        feeState: 'New York No. 1 Lake Park',
        feeDate:'2024-3-12'
    },
   
  ];
const MaintainInform = () => {
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
        <div className="demo-logo" />
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
         <Table columns={columns} dataSource={data}/>
        </div>
      </Content>
    </Layout>
  );
};
export default MaintainInform;