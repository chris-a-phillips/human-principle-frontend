import './App.css';
import { React, useState } from 'react';
import { UserContext } from './components/UserContext';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Login from './pages/Login';
import Questions from './pages/Questions';
import { Footer, Header, LogoutButton, Main, NavLink, PageWrapper } from './AppElements';
import Profile from './pages/Profile';
import axios from 'axios'

function App() {
	const [user, setUser] = useState('');
	const [token, setToken] = useState('');
	const [newUser, setNewUser] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const history = useHistory()

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
		// history.push('/')
	}

	return (
		<div className='App'>
			<UserContext.Provider value={token}>
				<PageWrapper>
					<Router>
						<Header>
							<NavLink>
								<Link to='/'>Login</Link>
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
									render={() => (
										<Login
										history={history}
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
						<Footer></Footer>
					</Router>
				</PageWrapper>
			</UserContext.Provider>
		</div>
	);
}

export default App;
