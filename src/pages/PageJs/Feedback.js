import Aside from "../../components/Aside"
import Header from "../../components/Header"
import "../PageCss/feedback.css"
import { useState } from "react";
import { Button, Form, Input, Select, Space } from 'antd';
const { Option } = Select;

const layout = {
    labelCol: {
      offset:2,
      span: 10,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 12,
      span: 16,
    },
  };
const Feedback = ()=>{
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
      };
    const onReset = () => {
        form.resetFields();
      };
   
    return (
        <>
          <Header /> 
          <div className="container">
            <div className="context-box-fb">
              <h1>用户反馈</h1>
              <Form
                {...layout} 
                form={form}
                name="feedback"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
              >
                <Form.Item
                  name="feedbackInform"
                  label="反馈信息"
                  rules={[
                    { required: true, message: '请输入反馈信息，最大不超过200字' }, 
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="联系电话"
                  rules={[
                    { required: true, message: '请输入联系电话' }, 
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="room"
                  label="房号"
                  rules={[
                    { required: true, message: '请输入房号' }, 
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="fbClass"
                  label="类型"
                  rules={[
                    { required: true, message: '请输入类型' }, 
                  ]}
                >
                  <Select
                    placeholder="选择反馈类型"
                  >
                    <Option value="device">设施/设备</Option>
                    <Option value="service">物业服务</Option>
                    <Option value="system">系统管理</Option>
                  </Select>
                </Form.Item>
                <Form.Item {...tailLayout}> 
                  <Space>
                    <Button type="primary" htmlType="submit">
                      提交
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      重置
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </div>
            <div className="left-box">
                <Aside/>
            </div>
            <div className="right-box">
              
            </div>
          </div>
        </>
      );
}
export default Feedback;