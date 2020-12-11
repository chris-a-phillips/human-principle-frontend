import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Questions from './pages/Questions';
import { Footer, Header, Main, PageWrapper } from './AppElements';

function App() {
	return (
		<div className='App'>
			<PageWrapper>
				<Header></Header>
				<Main>
					<Router>
						<Switch>
							<Route path='/profile' component={Home} />
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
