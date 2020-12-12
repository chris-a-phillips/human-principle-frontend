import React from 'react';
import { LoginForm, LoginPage } from './LoginElements';

const Login = ({ user, setUser, token, SetToken }) => {
	function handleClick(event) {
		event.preventDefault()
		setUser('Success')
		console.log('Button Clicked')
	}

	return (
		<LoginPage>
			<LoginForm>
		<div>
			<h1>Login</h1>
		</div>
		<button onClick={handleClick}>
			Click Me
		</button>
		{user}
			</LoginForm>
		</LoginPage>
	);
};

export default Login;
