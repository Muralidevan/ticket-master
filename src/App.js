import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import home from './components/static/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

import { startuserLogOut } from './actions/UserAction'

import { connect } from 'react-redux'

function App(props) {
	const handleLogout = () => {
		props.dispatch(startuserLogOut())
	}
	return (
		<BrowserRouter>
			<div>
				<h1>welcome to ticket master</h1>
				<Link to='/'>Home</Link>
				{Object.keys(props.user).length !== 0 ? (
					<div>
						<Link to='/account'>Account</Link>
						<Link to='#' onClick={handleLogout}>
							LogOut
						</Link>
					</div>
				) : (
					<div>
						<Link to='/users/register'>Register</Link>
						<Link to='/users/login'>Login</Link>
					</div>
				)}

				<Switch>
					<Route path='/' component={home} exact={true} />
					<Route path='/users/register' component={Register} />
					<Route path='/users/login' component={Login} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps)(App)
