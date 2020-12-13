import './App.css';
import { React, useState } from 'react';
import { UserContext } from './components/UserContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Questions from './pages/Questions';
import { Footer, Header, Main, NavLink, PageWrapper } from './AppElements';
import Profile from './pages/Profile';

function App() {
	const [user, setUser] = useState("");
	const [token, setToken] = useState("");

	return (
		<div className='App'>
			<UserContext.Provider value={user}>

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
									</UserContext.Provider>
		</div>
	);
}

export default App;
