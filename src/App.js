import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './components/static/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { startUserLogout } from './actions/UserAction'
import Customers from './components/static/Customers'
import AddCustomer from './components/static/AddCustomer'
import CustomerShow from './components/static/CustomerShow'
import Departments from './components/static/Departments'
import AddDepartment from './components/static/AddDepartment'
import DepartmentShow from './components/static/DepartmentShow'
import Employees from './components/static/Employees'
import AddEmployee from './components/static/AddEmployee'
import EmployeeShow from './components/static/EmployeeShow'
import Tickets from './components/static/Tickets'
import AddTicket from './components/static/AddTicket'
import TicketShow from './components/static/TicketShow'
import EditCustomer from './components/static/EditCustomer'
import EditDepartment from './components/static/EditDepartment'
import EditEmployee from './components/static/EditEmployee'
import EditTicket from './components/static/EditTicket'
import {
	BsHouseFill,
	BsFillPersonFill,
	BsFillPersonLinesFill,
	BsFillPeopleFill,
	BsLayoutTextSidebarReverse,
	BsWindow,
} from 'react-icons/bs'
function App(props) {
	const handleLogout = () => {
		props.dispatch(startUserLogout())
	}
	return (
		<Router>
			<div>
				{Object.keys(props.user).length === 0 ? (
					<div>
						<nav class='navbar navbar-expand-sm bg-light'>
							<Link class='navbar-brand'>Ticket Master</Link>
							<button
								class='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#collapsibleNavbar'
							>
								<span class='navbar-toggler-icon'></span>
							</button>
							<div class='collapse navbar-collapse' id='collapsibleNavbar'>
								<ul class=' ml-auto navbar-nav'>
									<li class='nav-item'>
										<Link class='nav-link'>
											<BsHouseFill />
											<Link to='/'>Home</Link>
										</Link>
									</li>
									<li class='nav-item'>
										<Link class='nav-link'>
											{' '}
											<BsFillPersonFill />
											<Link to='/users/register'>Sign Up</Link>
										</Link>
									</li>
									<li class='nav-item'>
										<Link class='nav-link'>
											{' '}
											<BsFillPersonFill />
											<Link to='/users/login'>Sign In</Link>
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				) : (
					<div>
						<nav class='navbar navbar-expand-sm bg-light'>
							<Link class='navbar-brand'>Ticket Master</Link>
							<button
								class='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#collapsibleNavbar'
							>
								<span class='navbar-toggler-icon'></span>
							</button>
							<div class='collapse navbar-collapse' id='collapsibleNavbar'>
								<ul class=' ml-auto navbar-nav'>
									<li class='nav-item'>
										<Link class='nav-link'>
											<BsHouseFill />
											<Link to='/'>Home</Link>
										</Link>
									</li>
									<li class='nav-item'>
										<Link class='nav-link'>
											{' '}
											<BsFillPersonLinesFill />
											<Link to='/customers'>Customers</Link>
										</Link>
									</li>
									<li class='nav-item'>
										<Link class='nav-link'>
											{' '}
											<BsWindow />
											<Link to='/departments'>Departments</Link>
										</Link>
									</li>
									<li class='nav-item'>
										<Link class='nav-link'>
											{' '}
											<BsFillPeopleFill />
											<Link to='/employees'>Employees</Link>
										</Link>
									</li>
									<li class='nav-item'>
										<Link class='nav-link'>
											{' '}
											<BsLayoutTextSidebarReverse />
											<Link to='/tickets'>Tickets</Link>
										</Link>
									</li>
									<li class='nav-item'>
										<Link class='nav-link'>
											{' '}
											<BsFillPersonFill />
											<Link to='#' onClick={handleLogout}>
												Sign Out
											</Link>
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				)}
				<Switch>
					<Route path='/' component={Home} exact={true} />
					<Route path='/users/login' component={Login} />
					<Route path='/users/register' component={Register} />
					<Route path='/customers' component={Customers} exact={true} />
					<Route path='/customers/new' component={AddCustomer} />
					<Route path='/customers/:id' component={CustomerShow} exact={true} />
					<Route path='/customers/edit/:id' component={EditCustomer} />
					<Route path='/departments' component={Departments} exact={true} />
					<Route path='/departments/new' component={AddDepartment} />
					<Route
						path='/departments/:id'
						component={DepartmentShow}
						exact={true}
					/>
					<Route path='/departments/edit/:id' component={EditDepartment} />
					<Route path='/employees' component={Employees} exact={true} />
					<Route path='/employees/new' component={AddEmployee} />
					<Route path='/employees/:id' component={EmployeeShow} exact={true} />
					<Route path='/employees/edit/:id' component={EditEmployee} />
					<Route path='/tickets' component={Tickets} exact={true} />
					<Route path='/tickets/new' component={AddTicket} />
					<Route path='/tickets/:id' component={TicketShow} exact={true} />
					<Route path='/tickets/edit/:id' component={EditTicket} />
					<Route
						render={() => (
							<h1 style={{ fontSize: '50px', textAlignLast: 'center' }}>
								Error 404 Not Found
							</h1>
						)}
					/>
				</Switch>
				<ToastContainer />
			</div>
		</Router>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps)(App)
