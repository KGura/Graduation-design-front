import React from 'react';
import "../components/notif.css"
import { Space, Card  } from 'antd';

const Notif = ({notif}) => {
  return (
    <Space direction="vertical" size={20}>
      <ul>
        {notif.map(notif => (
          <li key={notif.id}>
            <Card
              title={notif.title}
              extra={<p>{notif.date}</p>}
              style={{ width: 300 }}
            >
              <p>{notif.profile}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Space>
  )
}

export default Notif;