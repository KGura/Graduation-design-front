import Aside from "../../components/Aside";
import Header from "../../components/Header";
import { Button, Form, Input, Select, Space } from 'antd';
import "../PageCss/maintain.css"
const { Option } = Select;
 const layout = {
        labelCol: {
          offset:5,
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
const Maintain = ()=>{
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
      };
    const onReset = () => {
        form.resetFields();
      };
   
    return (
        <>
        <Header/>
        <div className="container">
            <div className="context-box-m">
                <h2>设施报修</h2>
                <Form
                {...layout} 
                form={form}
                name="complain"
                onFinish={onFinish}
                style={{ maxWidth: 500 }}
              >
                <Form.Item  
                    hasFeedback 
                    validateStatus="warning"
                    label="房屋号"
                    name="roomID"
                    rules={[{ required: true, message: '请输入五位数字房间号' },
                            { pattern: /[1-9](0[1-9]|1[0-9]|20)(0[1-9]|10)/, message: "请输入正确房号" }]}
                >
                    <Input/>
                </Form.Item>
               
                <Form.Item
                  name="mtClass"
                  label="类型"
                  rules={[
                    { required: true, message: '请输入类型' }, 
                  ]}
                >
                  <Select
                    placeholder="选择维修类型"
                  >
                    <Option value="watAndElet">水电维修</Option>
                    <Option value="gas">燃气设备</Option>
                    <Option value="elevator">电梯故障</Option>
                    <Option value="fire">消防设施</Option>
                    <Option value="other">其他</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="complianInfom"
                  label="具体描述"
                  rules={[
                    { required: true, message: '请输入对问题的具体描述' }, 
                  ]}
                >
                  <Input.TextArea />
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
export default Maintain;