import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { FormInput, FormLabel, LoginForm, LoginPage, SubmitButton } from './LoginElements';

const Login = ({ user, setUser, token, SetToken }) => {
	const [credentials, setCredentials] = useState({
		username: '',
		email: '',
		password: '',
		re_password: '',
	});
	const url = 'http://localhost:8000/users/';

	const handleChange = (event) => {
		event.preventDefault();
		setCredentials({ ...credentials, [event.target.name]: event.target.value })
		console.log(credentials)
	}

	const handleSubmit = (event) => {
		console.log('Button Clicked')
		event.preventDefault()
		axios({
			method: 'post',
			url: url,
			data: credentials
		})
		.then(function(response) {
			console.log(response)
		})
	}



	return (
		<LoginPage>
			<div>
				<h1>Login</h1>
				{user}
			</div>
			<LoginForm onSubmit={handleSubmit}>
				<FormLabel htmlFor='username'>Username</FormLabel>
				<FormInput
					type='text'
					name='username'
					placeholder='Enter Username'
					value={credentials.username}
					onChange={handleChange}></FormInput>
				<FormLabel htmlFor='email'>Email</FormLabel>
				<FormInput
					type='email'
					name='email'
					placeholder='name@email.com'
					value={credentials.email}
					onChange={handleChange}></FormInput>
				<FormLabel htmlFor='password'>Password</FormLabel>
				<FormInput
					type='password'
					name='password'
					placeholder='Enter Password'
					value={credentials.password}
					onChange={handleChange}></FormInput>
				<FormLabel htmlFor='retypePassword'>Retype Password</FormLabel>
				<FormInput
					type='password'
					name='re_password'
					placeholder='Re-Enter Password'
					value={credentials.re_password}
					onChange={handleChange}></FormInput>
				<SubmitButton>Register</SubmitButton>
			</LoginForm>
		</LoginPage>
	);
};

export default Login;


// from stack overflow may be useful later
        // headers: {
        //     "Authorization": `Token ${localStorage.getItem('token')}`,
        //     "Content-Type": 'application/x-www-form-urlencoded',
        //     'X-Requested-With': 'XMLHttpRequest'   
        // },
        // credentials: 'include'