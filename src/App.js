import './App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Questions from './pages/Questions';
import { Footer, Header, Main, NavLink, PageWrapper } from './AppElements';
import Profile from './pages/Profile';

function App() {
	const [user, setUser] = useState('');
	const [token, setToken] = useState(null);

	return (
		<div className='App'>
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
					</Header>
					<Main>
						<Switch>
							<Route
								path='/'
								exact
								render={() => (
									<Login
										user={user}
										setUser={setUser}
										token={token}
										setToken={setToken}
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
							<Route path='/questions' component={Questions} />
						</Switch>
					</Main>
					<Footer></Footer>
				</Router>
			</PageWrapper>
		</div>
	);
}

export default App;
