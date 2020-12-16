import './App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Questions from './pages/Questions';
import Footer from './components/Footer';
import { FooterWrapper, Header, LogoutButton, Main, NavLink, PageWrapper } from './AppElements';
import Profile from './pages/Profile';
import axios from 'axios'
import Landing from './pages/Landing';

function App() {
	const [user, setUser] = useState('');
	const [token, setToken] = useState('');
	const [newUser, setNewUser] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	const logout = () => {
		setUser('')
		setLoggedIn(false)
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
			setLoggedIn(false)
		});
		window.location.href='/'
	}

	return (
		<div className='App'>
				<PageWrapper>
					<Router>
						<Header>
							<NavLink>
								<Link to='/'>Home</Link>
							</NavLink>
							<NavLink>
								<Link to='/login'>Login</Link>
							</NavLink>
							<NavLink>
								<Link to='/profile'>Profile</Link>
							</NavLink>
							<NavLink>
								<Link to='/questions'>Questions</Link>
							</NavLink>
							{loggedIn ? (
								<LogoutButton onClick={logout}>Logout</LogoutButton>
							) : null }
						</Header>
						<Main>
							<Switch>
								<Route
									path='/'
									exact
									component={Landing}
								/>
								<Route
									path='/login'
									exact
									render={() => (
										<Login
											setUser={setUser}
											setToken={setToken}
											newUser={newUser}
											setNewUser={setNewUser}
											loggedIn={loggedIn}
											setLoggedIn={setLoggedIn}
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
										<Questions
											user={user}
											token={token}
										/>
									)}
								/>
							</Switch>
						</Main>
						<FooterWrapper>
						<Footer />
						</FooterWrapper>
					</Router>
				</PageWrapper>
		</div>
	);
}

export default App;
