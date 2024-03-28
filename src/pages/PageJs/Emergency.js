import "../PageCss/emergency.css"
import Aside from "../../components/Aside"
import Header from "../../components/Header"
import React from 'react';
import { Collapse, theme } from 'antd';

const items = [
    {
      key: '1',
      label: <h3>老人特别救助服务联系</h3>,
      children:
      <p>
        <span>负责人电话: 12345678</span><br/>
        <span>救助服务电话: 12345</span><br/>
        <span>志愿者服务电话: 1234</span><br/>
        <span>社会帮扶电话: 11231234</span><br/>
      </p>,
    },
    {
      key: '2',
      label: <h3>紧急消防联系</h3>,
      children:  
      <p>
        <span>负责人电话: 12345678</span><br/>
        <span>辖区消防局电话: 12345</span><br/>
      </p>,
    },
    {
        key: '3',
        label: <h3>联系警察</h3>,
        children: 
        <p>
        <span>负责人电话: 12345678</span><br/>
        <span>辖区派出所电话: 12345</span><br/>
        </p>,
    },
    {
        key: '4',
        label: <h3>重要小区设备损坏</h3>,
        children:  
        <p>
        <span>负责人电话: 12345678</span><br/>
        <span>维修服务电话: 12345</span><br/>
        </p>,
      },
  ];
const Emergency= ()=>{
    return(
        <>
            <Header/>
            <div className="container">
                <div className="context-box-emer">
                <Collapse
                    size="large"    
                    items={items}
                    bordered={true}
                    />
                </div>
                <div className="left-box"><Aside/></div>
            </div>
        </>
    );
}
export default Emergency;