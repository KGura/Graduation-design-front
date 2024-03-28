import "../PageCss/complain.css"
import Aside from "../../components/Aside"
import Header from "../../components/Header"
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
const Complain = ()=>{
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
            <div className="context-box-cp">
            <Form
                {...layout} 
                form={form}
                name="complain"
                onFinish={onFinish}
                style={{ maxWidth: 500,marginTop:30 }}
              >
                <Form.Item
                  name="roomID"
                  label="房屋号"
                  rules={[
                    { required: true, message: '请输入投诉消息' }, 
                  ]}
                >
                  <Input/>
                </Form.Item>
                <Form.Item
                  name="complianInfom"
                  label="投诉消息"
                  rules={[
                    { required: true, message: '请输入投诉消息' }, 
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
                
                <Form.Item
                  name="cpClass"
                  label="类型"
                  rules={[
                    { required: true, message: '请输入类型' }, 
                  ]}
                >
                  <Select
                    placeholder="选择投诉类型"
                  >
                    <Option value="staff">物业人员</Option>
                    <Option value="watAndElet">水电维修</Option>
                    <Option value="trash">垃圾管理</Option>
                    <Option value="neibor">邻里纠纷</Option>
                    <Option value="fee">费用问题</Option>
                    <Option value="other">其他</Option>
                  </Select>
                </Form.Item>
                <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.cpClass !== currentValues.cpClass}
      >
        {({ getFieldValue }) =>
          getFieldValue('cpClass') === 'other' ? (
            <Form.Item
              name="diyComplain"
              label="问题描述"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          ) : null
        }
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
          </div>
        </>
      );
}
export default Complain;