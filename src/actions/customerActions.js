import axios from '../config/axios'

export const setCustomer = (customer) => {
	return {
		type: 'SET_CUSTOMER',
		payload: customer,
	}
}

export const setNewCustomer = (customer) => {
	return {
		type: 'SET_NEW_CUSTOMER',
		payload: customer,
	}
}

export const startGetCustomer = () => {
	return (dispatch) => {
		axios
			.get('/customers', {
				headers: {
					'x-auth': localStorage.getItem('authToken'),
				},
			})
			.then((response) => {
				const customer = response.data
				dispatch(setCustomer(customer))
				//console.log("from startrGetCustomer", customer)
			})
			.catch((err) => {
				alert(err)
			})
	}
}

export const startAddCustomer = (formData, redirect) => {
	return (dispatch) => {
		axios
			.post('/customers', formData, {
				headers: {
					'x-auth': localStorage.getItem('authToken'),
				},
			})
			.then((response) => {
				if (response.data.hasOwnProperty('errors')) {
					alert(response.data.message)
				} else {
					alert('Customer Added')
					const customer = response.data
					//console.log('new cust from addCust action', response.data )
					dispatch(setNewCustomer(customer))
					redirect()
				}
			})
			.catch((err) => {
				alert(err)
			})
	}
}

export const startCustomerRemove = (id) => {
	return (dispatch) => {
		axios
			.delete(`/customers/${id}`, {
				headers: {
					'x-auth': localStorage.getItem('authToken'),
				},
			})
			.then((response) => {
				if (response.data == {}) {
					alert('No Data to Delete')
				} else {
					alert('Are You Sure ?')
					alert(response.data.name.concat(' has been deleted'))
					dispatch(setCustomer({}))
				}
			})
	}
}

export const startCustomerShow = (id, redirect) => {
	return (dispatch) => {
		axios
			.get(`/customers/${id}`, {
				headers: {
					'x-auth': localStorage.getItem('authToken'),
				},
			})
			.then((response) => {
				if (response.data == {}) {
					alert('No Data to Show')
				} else {
					const customer = response.data
					console.log('from show action', customer)
					dispatch(setCustomer(customer))
					redirect()
				}
			})
	}
}
