import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Questions from './pages/Questions';
import { Footer, Header, Main, NavItem, PageWrapper } from './AppElements';
import Profile from './pages/Profile';

function App() {
	return (
		<div className='App'>
			<PageWrapper>
				<Header>
					<NavItem href='/'>Login</NavItem>
					<NavItem href='/profile'>Profile</NavItem>
					<NavItem href='/questions'>Questions</NavItem>
				</Header>
				<Main>
					<Router>
						<Switch>
							<Route path='/profile' component={Profile} />
							<Route path='/questions' component={Questions} />
							<Route path='/' exact component={Login} />
						</Switch>
					</Router>
				</Main>
				<Footer></Footer>
			</PageWrapper>
		</div>
	);
}

export default App;
