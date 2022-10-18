
import { Card, Table, } from 'antd';

import AvatarStatus from 'components/shared-components/AvatarStatus';
import { fetchedUsers } from 'redux/actions/Users';
import { connect } from 'react-redux';
import Loading from 'components/shared-components/Loading';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Users = ({ users, dispatch, match }) => {
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchedUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeUser = (id) => {
    history.push(`${match.url}/${id}`)
  }

  if (users.loading) {
    return <Loading />
  }

  const tableColumns = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex" onClick={() => changeUser(record.id)} >
          {/* <Link to={`/${record.id}`} > */}
          <AvatarStatus src={'none'} name={record.name} subTitle={record.email} />
          {/* </Link> */}
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Username',
      dataIndex: 'username',
      sorter: {
        compare: (a, b) => {
          a = a.username.toLowerCase();
          b = b.username.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'City',
      dataIndex: 'address',
      sorter: {
        compare: (a, b) => {
          a = a.address.city.toLowerCase();
          b = b.address.city.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
      render: (_, user) => (
        <span>
          {user.address.city}
        </span>
      )
    },
  ];
  return (
    <Card bodyStyle={{ 'padding': '0px' }}>
      <Table columns={tableColumns} dataSource={users.data} rowKey='id' />
    </Card>
  )
}


const mapStateToProps = (state) => {
  const { users } = state;
  return users;
}

export default connect(mapStateToProps)(Users)
