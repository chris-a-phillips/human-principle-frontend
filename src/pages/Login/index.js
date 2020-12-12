import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { LoginForm, LoginPage } from './LoginElements';

const Login = ({ user, setUser, token, SetToken }) => {
	const [test, setTest] = useState();
	const [num, setNum] = useState(0);
	const url = 'http://localhost:8000/members';

	const handleClick = () => {
		setUser(`Button clicked ${num} times!`)
		console.log('Button Clicked')
		setNum(num + 1)

		// axios({
		// 	method: 'get',
		// 	url: url,
		// 	// data: setTest(data)
		// 	// headers: {'': ''}
		// })
		// .then(function(response) {
		// 	console.log(response.data)
		// })
	}



	return (
		<LoginPage>
			<LoginForm>
		<div>
			<h1>Login</h1>
		</div>
			</LoginForm>
		{user}
		{test}
		<button onClick={handleClick}>
			Click Me
		</button>
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