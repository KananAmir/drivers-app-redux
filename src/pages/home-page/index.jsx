import { Button, notification, Space, Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/loading';
import { addToFavoritesAction, getAllDriversAction } from '../../redux/actions/drivers.action';
import './index.scss'

const HomePage = () => {
  const dispatch = useDispatch();
  const drivers = useSelector(state => state.driversReducer);
  const favoriteDrivers = useSelector(state => state.favoriteDriversReducer);

  useEffect(() => {
    dispatch(getAllDriversAction())
  }, [dispatch])

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
      title: "Add to Favorites",
      dataIndex: "driverId",
      key: "driverId",
      render: (value, data) => <Button onClick={() => addToFavorites(data)} type='primary' ghost>Add to Favorites</Button>,
    }

  ];

  const addToFavorites = (driver) => {
    if (!favoriteDrivers.includes(driver)) {
      dispatch(addToFavoritesAction(driver))
      notification.success({
        message: 'Driver added to Favorites',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    } else {
      notification.info({
        message: 'This Driver is already in Favorites',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }
  }

  return (
    <div id='home-page'>
      {drivers.loading
        ?
        <Loading />
        :
        <Content style={{ padding: '0 100px' }}>
          <Table
            columns={columns}
            dataSource={drivers.data?.MRData?.DriverTable.Drivers}
            rowKey='driverId'
            rowClassName={(record, index) => !record.permanentNumber ? 'row-bg' : ''}
          />
        </Content>
      }

    </div>
  )
}

export default HomePage