
import { useEffect } from 'react';
import { Form, Button, Input, Row, Col, message } from 'antd';

import { ROW_GUTTER } from 'constants/ThemeConstant';
import { connect } from 'react-redux';
import { fetchedUser } from 'redux/actions/Users';
import { useHistory, useParams } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const EditProfile = ({ dispatch, user }) => {
	const { id } = useParams();
	const history = useHistory();

	const onFinish = values => {
		const key = 'updatable';
		message.loading({ content: 'Updating...', key });
		setTimeout(() => {
			message.success({ content: 'Done!', key, duration: 2 });
			history.push(`${APP_PREFIX_PATH}/users/list`)
		}, 1000);
	};

	useEffect(() => {
		dispatch(fetchedUser(id))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	const form = (data) => (
		<Form
			name="basicInformation"
			layout="vertical"
			initialValues={{
				'name': data.name,
				'email': data.email,
				'userName': data.username,
				'phone': data.phone,
				'website': data.website,
				'address': data.address.street,
				'city': data.address.city,
				'zipcode': data.address.zipcode
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Row>
				<Col xs={24} sm={24} md={24} lg={16}>
					<Row gutter={ROW_GUTTER}>
						<Col xs={24} sm={24} md={12}>
							<Form.Item
								label="Name"
								name="name"
								rules={[
									{
										required: true,
										message: 'Please input your name!',
									},
								]}
							>
								<Input />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<Form.Item
								label="Username"
								name="userName"
								rules={[
									{
										required: true,
										message: 'Please input your username!'
									},
								]}
							>
								<Input />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<Form.Item
								label="Email"
								name="email"
								rules={[{
									required: true,
									type: 'email',
									message: 'Please enter a valid email!'
								}]}
							>
								<Input />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<Form.Item
								label="Phone Number"
								name="phone"
							>
								<Input />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<Form.Item
								label="Website"
								name="website"
							>
								<Input />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={24}>
							<Form.Item
								label="Address"
								name="address"
							>
								<Input />
							</Form.Item>
						</Col>
						<Col xs={24} sm={24} md={12}>
							<Form.Item
								label="City"
								name="city"
							>
								<Input />
							</Form.Item>
						</Col>
					</Row>
					<Button type="primary" htmlType="submit">
						Save Change
					</Button>
				</Col>
			</Row>
		</Form>
	)


	if (!!user.loading) {
		return <Loading />
	}

	return (
		<>
			<div className="mt-4">
				{!!user.data && form(user.data)}
			</div>
		</>
	)
}

const mapStateToProps = (state) => {
	const { user } = state.users;
	return { user }
}


export default connect(mapStateToProps)(EditProfile)
