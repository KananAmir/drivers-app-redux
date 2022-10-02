import { Button, notification, Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeDriverAction } from '../../redux/actions/drivers.action';

const FavoriteDrivers = () => {

  const dispatch = useDispatch();
  const favoriteDrivers = useSelector(state => state.favoriteDriversReducer);

  const columns = [
    {
      title: 'Driver Id',
      dataIndex: 'driverId',
      key: 'driverId',
    },
    {
      title: 'Name',
      dataIndex: 'givenName',
      key: 'givenName',
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
    },
    {
      title: 'Permanent Number',
      dataIndex: 'permanentNumber',
      key: 'permanentNumber',
    },
    {
      title: 'Information',
      dataIndex: 'url',
      key: 'url',
      render: (value) =>
        <a style={{ textDecoration: 'underline' }}
          href={`${value}`}
          target={'_blank'}
          rel="noopener noreferrer" >
          Biography
        </a >,
    },
    {
      title: "Remove Driver",
      dataIndex: "driverId",
      key: "driverId",
      render: (value) => <Button onClick={() => removeDriver(value)} type='primary' danger>Remove Driver</Button>,
    }

  ];

  const removeDriver = (id) => {
    if (window.confirm('Are you sure??')) {
      dispatch(removeDriverAction(id));
      notification.error({
        message: 'Driver Removed',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }
  }

  return (
    <Content style={{ padding: '0 100px' }}>
      <Table columns={columns} dataSource={favoriteDrivers} rowKey='driverId' />
    </Content>
  )
}

export default FavoriteDrivers