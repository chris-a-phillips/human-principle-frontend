import { React, useState } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { ErrorMessage, FormInput, FormLabel, LoginForm, LoginPage, LoginPageButton, SubmitButton } from './LoginElements';

const Login = ({ setUser, setToken }) => {
	const [newUser, setNewUser] = useState(false)
	const [redirect, setRedirect] = useState(false)
	const [error, setError] = useState('')
	const [credentials, setCredentials] = useState({
		username: '',
		email: '',
		password: '',
		re_password: '',
	});
	const signUpURL = 'http://localhost:8000/users/';
	const signInURL = 'http://localhost:8000/token/login';

	const handleChange = (event) => {
		event.preventDefault();
		setCredentials({ ...credentials, [event.target.name]: event.target.value })
	}

	const handleClick = () => {
		setNewUser(true)
	}

	const handleSubmit = (event) => {
		if (!newUser) {
			event.preventDefault()
			axios({
				method: 'post',
				url: signInURL,
				data: credentials
			})
			.then((res) => {
				console.log(res)
				if (res.data.auth_token) {
					setToken(res.data.auth_token)
					setUser(credentials.email)
					setRedirect(true)
				} else {
					setError(res.data)
				}
			})
		} else if (newUser) {
			event.preventDefault();
			setUser(credentials.email);
			axios({
				method: 'post',
				url: signUpURL,
				data: credentials,
			}).then((res) => {
				console.log(res);
				setNewUser(false)
				setCredentials({
					email: '',
					password: ''
				});
				// create if statement for error if user is not created
			});
		}
	}
		
		if (redirect) {
			return <Redirect to='/profile' />;
		}

	return (
		<LoginPage>
			<div>
				<h1>Login</h1>
				<ErrorMessage>{error}</ErrorMessage>
			</div>
			{!newUser ? (
				<LoginForm onSubmit={handleSubmit}>
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
				<SubmitButton>Log In</SubmitButton>
			</LoginForm>
				) : null}
			{newUser ? (
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
				) : null}
				{
					!newUser ? (
						<LoginPageButton onClick={handleClick}>New Profile</LoginPageButton>
					) : null
				}
		</LoginPage>
		);
};

export default Login;