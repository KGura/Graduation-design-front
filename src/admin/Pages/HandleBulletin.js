import React, { useState } from 'react';
import "../PageCss/HB.css";
import { Layout, Menu, theme,Button, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Col, DatePicker, Drawer, Form, Input, Row, Space } from 'antd';

const { Header, Content, } = Layout;
const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '日期',
      dataIndex: 'date',
    },
    {
      title: '内容',
      dataIndex: 'context',
    },
    {
      title:'概要',
      dataIndex:'profile'
    }
  ];
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    title: `Edward King ${i}`,
    date: 32,
    context: `London, Park Lane no. ${i}`,
    profile:'hello'
  });
}
const HandleBulletin= ()=>{
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        setTimeout(() => {
          setSelectedRowKeys([]);
          setLoading(false);
        }, 1000);
      };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
    const hasSelected = selectedRowKeys.length > 0;
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
        <div>
            <h2>公告栏</h2>
            <div
                style={{
                marginBottom: 16,
                }}
                >
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                  删除项目
                </Button>
                <span
                    style={{
                    marginLeft: 8,
                    marginRight:8,
                    }}>
                  {hasSelected ? `选择了${selectedRowKeys.length}项` : ''}
                  </span>

                <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                  添加新项
                </Button>
                <Drawer
                    title="Create a new account"
                    width={450}
                    onClose={onClose}
                    open={open}
                    styles={{
                      body: {
                        paddingBottom: 80,
                      },
                    }}
                    extra={
                      <Space>
                        <Button onClick={onClose}>
                          取消
                        </Button>
                        <Button onClick={onClose} type="primary">
                          Submit
                        </Button>
                      </Space>
                    }
                  >
                     <Form layout="vertical">
                      <Row gutter={16}>
                        <Col span={12}>
                        <Form.Item
                            name="title"
                            label="标题"
                            rules={[
                              {
                                required: true,
                                message: '请输入标题',
                              },
                            ]}
                          >
                          <Input placeholder="请输入标题" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Form.Item
                          label="发布日期"
                          name="DatePicker"
                          rules={[{ required: true, message: '请输入发布日期' }]}
                        >
                          <DatePicker />
                          </Form.Item>
                      </Row>
                      <Col span={10}>
                      <Form.Item
                            name="profile"
                            label="概要"
                            rules={[
                              {
                                required: true,
                                message: '请输入公告概要',
                              },
                            ]}
                          >
                          <Input placeholder="请输入公告概要" />
                          </Form.Item>
                          </Col>
                          <Form.Item
                          label="公告内容"
                          name="bullet"
                          rules={[{ required: true, message: 'Please input!' }]}
                        >
                          <Input.TextArea />
                        </Form.Item>
                     </Form>
                  </Drawer>
                    
                    </div>
                   
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false}/>
              </div>
            </div>
          </Content>
        </Layout>
      );
}
export default HandleBulletin;