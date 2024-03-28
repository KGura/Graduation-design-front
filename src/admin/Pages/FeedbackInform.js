import React from "react";
import { Layout, Menu, theme, Table, Divider } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;
const fbcolumns = [
  {
    title: "房号",
    dataIndex: "roomID",
    sorter: (a, b) => a.roomID - b.roomID,
    sortDirections: ["descend"],
  },
  {
    title: "联系电话",
    dataIndex: "phone",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.phone - b.phone,
  },
  {
    title: "反馈类型",
    dataIndex: "fbClass",
    filters: [
      {
        text: "设施/设备",
        value: "London",
      },
      {
        text: "物业服务",
        value: "service",
      },
      {
        text: "系统管理",
        value: "system",
      },

    ],
    onFilter: (value, record) => record.cpClass.indexOf(value) === 0,
  },
  {
    title: "反馈消息",
    dataIndex: "fbInform",
  },
];

const cpcolumns = [
  {
    title: "房号",
    dataIndex: "roomID",
    sorter: (a, b) => a.roomID - b.roomID,
    sortDirections: ["descend"],
  },
  {
    title: "投诉类型",
    dataIndex: "cpClass",
    filters: [
      {
        text: "物业人员",
        value: "staff",
      },
      {
        text: "水电维修",
        value: "watAndElet",
      },
      {
        text: "垃圾管理",
        value: "trash",
      },
      {
        text: "邻里纠纷",
        value: "neibor",
      },
      {
        text: "费用问题",
        value: "fee",
      },
      {
        text: "其他",
        value: "other",
      },
    ],
    onFilter: (value, record) => record.cpClass.indexOf(value) === 0,
  },
  {
    title: "投诉消息",
    dataIndex: "cpInform",
  },
];

const fbdata = [
  {
    key: "1",
    roomID: "John Brown",
    phone: 32,
    fbClass: "New York No. 1 Lake Park",
    fbInform:"hello world"
  },
];
const cpdata = [
    {
     key:"1",
     roomID: "John Brown",
     cpClass:"english",
     cpInform:"hello world"
    },        
]
const FeedbackInform = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: 20,
            margin: "0 50px",
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
          padding: "0 20px",
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
          <h1>用户反馈</h1>
          <Divider></Divider>
          <Table columns={fbcolumns} dataSource={fbdata} />
          <h1>用户投诉</h1>
          <Divider></Divider>
          <Table columns={cpcolumns} dataSource={cpdata} />
        </div>
      </Content>
    </Layout>
  );
};
export default FeedbackInform;
