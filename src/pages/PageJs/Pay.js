import "../PageCss/pay.css"
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import React, { useState } from 'react';
import { Space, Table, Tag, Button} from 'antd';

const { Column } = Table;
const data = [
    {
        roomID: '8125',
        feeMoney: 25,
        payClass: '水费',
        payTime: 32,
        payState: [false],
      },
      {
        roomID: '8125',
        feeMoney: 25,
        payClass: '电费',
        payTime: 32,
        payState: [false],
      },
      {
        roomID: '8125',
        feeMoney: 25,
        payClass: '物业费',
        payTime: '2024-10-11',
        payState: [true],
      },
  ];
//   for (let i = 0; i < 46; i++) {
//     data.push({
//       key: i,
//       name: `Edward King ${i}`,
//       age: 32,
//       address: `London, Park Lane no. ${i}`,
//     });
//   }
const Pay = ()=> {
    return(
        <>
        <Header/>
        <div className="container">
            <div className="context-box-pay">
                <Table dataSource={data} pagination={{hideOnSinglePage:true}} size="large">
                    <Column title="房屋号" dataIndex="roomID" key="roomID"/> 
                    <Column title="缴费金额" dataIndex="feeMoney" key="feeMoney" />
                    <Column title="缴费类型" dataIndex="payClass" key="payClass" />
                    <Column title="应缴时间" dataIndex="payTime" key="payTime" />
                    <Column
                        title="缴费状态"
                        dataIndex="payState"
                        key="payState"
                        render={(payState) => (
                            <>
                            {payState.map((paystate) => {
                                let color = 'volcano';
                                let title = '未缴费'
                                if (paystate === true) {
                                color = 'geekblue';
                                title = '已缴费';
                                }
                                return (
                                <Tag color={color} key={paystate}>
                                    {title}
                                </Tag>
                                );
                            })}
                            </>
                        )}
                        />
                    <Column
                        title="自主缴费"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <Button type="primary">缴费</Button>
                            </Space>
                        )}
                    />
                </Table>
            </div>
            <div className="left-box">
                <Aside/>
            </div>
        </div>
        </>
    );
}
export default Pay;