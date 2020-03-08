import React, { useState, useEffect } from 'react';
import { Form,  Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
//import { Dispatch, AnyAction } from 'redux';
//import { useSelector, useDispatch } from 'react-redux';
//import loginActions from '../../reducers/login';

 export const LoginContainer = () => {
//	const dispatch = useDispatch();
	//   const redux = useSelector(state  => state);
	return (
		<Col style={{ marginTop: '200px' }} span={12} offset={8}>
			<Form className="login-form" style={{ width: '400px' }}>
				<Form.Item>
					<Input  placeholder="Username" />
				</Form.Item>
				<Form.Item>
					
					
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Checkbox>Remember me</Checkbox>
					<Row>
						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Row>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
				
					>
						Log in
					</Button>
					{/* Or <a href="">register now!</a> */}
				</Form.Item>
			</Form>
		</Col>
	);
};

export default LoginContainer;
