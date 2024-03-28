import React from "react";
import { Layout, Menu, theme, Table } from "antd";
import { Link } from "react-router-dom";
const { Header, Content } = Layout;

const columns = [
  {
    title: "用户ID",
    dataIndex: "userID",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.userID - b.userID,
  },
  {
    title: "房屋号",
    dataIndex: "roomID",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.roomID - b.roomID,
  },
  {
    title: "房屋状态",
    dataIndex: "roomSitu",
    filters: [
      {
        text: "居住中",
        value: "居住中",
      },
      {
        text: "出租中",
        value: "出租中",
      },
      {
        text: "空置",
        value: "空置",
      },
    ],
    onFilter: (value, record) => record.roomSitu.indexOf(value) === 0,
  },
  {
    title: "房屋面积/立方米",
    dataIndex: "roomSquare",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.roomSquare - b.roomSquare,
  },
  {
    title: "房屋产权",
    dataIndex: "roomRight",
    defaultSortOrder: "descend",
    filters: [
      {
        text: "完全产权",
        value: "完全产权",
      },
      {
        text: "共有产权",
        value: "共有产权",
      },
      {
        text: "公有产权",
        value: "公有产权",
      },
    ],
    onFilter: (value, record) => record.roomRight.indexOf(value) === 0,
  },
];
const data = [
  {
    key: "1",
    userID: "81020",
    roomID: 32,
    roomSitu: "居住中",
    roomSquare: "143",
    roomRight: "共有产权",
  },
  {
    key: "2",
    userID: "80919",
    roomID: 32,
    roomSitu: "出租中",
    roomSquare: "143",
    roomRight: "公有产权",
  },
  {
    key: "3",
    userID: "80918",
    roomID: 32,
    roomSitu: "空置",
    roomSquare: "143",
    roomRight: "完全产权",
  },
];
const Resident = () => {
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
          <Table columns={columns} dataSource={data} />
        </div>
      </Content>
    </Layout>
  );
};
export default Resident;
