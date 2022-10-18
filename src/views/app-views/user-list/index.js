import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import EditProfile from './setting/EditProfile';
import Users from './Users';

const UserList = ({ match }) => {
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
			<Route path={`${match.url}/list`} exact component={Users} />
			<Route path={`${match.url}/list/:id`} component={EditProfile} />
		</Switch>
	)
}

export default UserList

