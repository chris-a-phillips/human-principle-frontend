import './App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Questions from './pages/Questions';
import { Footer, FooterLink, FooterSection, FooterText, Header, LogoutButton, Main, NavLink, PageWrapper } from './AppElements';
import Profile from './pages/Profile';
import axios from 'axios'
import Landing from './pages/Landing';

function App() {
	const [user, setUser] = useState('');
	const [token, setToken] = useState('');
	const [newUser, setNewUser] = useState(false);

	const logout = () => {
		setUser('')
		setToken('')
		const logoutURL = 'http://localhost:8000/token/logout/';

		axios({
			method: 'post',
			url: logoutURL,
			headers: {
				Authorization: `Token ${token}`
			}
		}).then((res) => {
			console.log(res)
		});
		window.location.href='/'
	}

	return (
		<div className='App'>
			<PageWrapper>
				<Router>
					<Header>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/login'>Login</NavLink>
						<NavLink to='/profile'>Profile</NavLink>
						<NavLink to='/questions'>Questions</NavLink>
						{user ? (
							<LogoutButton onClick={logout}>Logout</LogoutButton>
						) : null}
					</Header>
					<Main>
						<Switch>
							<Route path='/' exact component={Landing} />
							<Route
								path='/login'
								exact
								render={() => (
									<Login
										setUser={setUser}
										setToken={setToken}
										newUser={newUser}
										setNewUser={setNewUser}
									/>
								)}
							/>
							<Route
								path='/profile'
								exact
								render={() => (
									<Profile
										user={user}
										setUser={setUser}
										token={token}
										setToken={setToken}
									/>
								)}
							/>
							<Route
								path='/questions'
								exact
								render={() => (
									<Questions user={user} token={token} />
								)}
							/>
						</Switch>
					</Main>
					<Footer>
						<FooterSection>
							<FooterText>Contact Me</FooterText>
						<FooterLink
							target={'blank'}
							href='https://www.linkedin.com/in/chris-a-phillips/'>
							LinkedIn
						</FooterLink>

						</FooterSection>
						<FooterSection>
							<FooterText>Other Projects</FooterText>
						<FooterLink
							target={'blank'}
							href='https://github.com/chris-a-phillips'>
							Github
						</FooterLink>
						</FooterSection>
					</Footer>
				</Router>
			</PageWrapper>
		</div>
	);
}

export default App;
