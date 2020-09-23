import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { startGetUser } from './actions/UserAction'
import { startGetCustomers } from './actions/customerActions'
import { startGetDepartments } from './actions/departmentAction'
import { startGetEmployees } from './actions/employeeAction'
import { startGetTickets } from './actions/ticketAction'

//import { ticketsCompleted } from './actions/ticketCompleted'
import './style.css'
import 'react-toastify/dist/ReactToastify.css'
const store = configureStore()

console.log('initial state', store.getState())

//updated
store.subscribe(() => {
	console.log('updated state', store.getState())
})

//handle page reload

if (localStorage.getItem('authToken')) {
	store.dispatch(startGetUser())
}
store.dispatch(startGetCustomers())
store.dispatch(startGetDepartments())
store.dispatch(startGetEmployees())
store.dispatch(startGetTickets())
const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
