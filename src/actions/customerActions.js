import axios from '../config/axios'
import { toast } from 'react-toastify'

export const setPostCustomer = (customer) => {
	return { type: 'SET_CUSTOMER', payload: customer }
}

export const startPostCustomer = (data, redirect) => {
	return (dispatch) => {
		axios
			.post('/customers', data, {
				headers: {
					'x-auth': localStorage.getItem('authToken'),
				},
			})
			.then((response) => {
				console.log(response)
				if (response.data.hasOwnProperty('errors')) {
					toast.error(response.data.message, {
						position: 'top-center',

						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
					})
				} else {
					const customer = response.data
					dispatch(setPostCustomer(customer))
					toast.success('Customer Added Successfully', {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
					})
					redirect()
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const setCustomers = (customers) => {
	return { type: 'GET_CUSTOMERS', payload: customers }
}

export const startGetCustomers = () => {
	return (dispatch) => {
		axios
			.get('/customers', {
				headers: {
					'x-auth': localStorage.getItem('authToken'),
				},
			})
			.then((response) => {
				console.log(response)
				const customers = response.data
				dispatch(setCustomers(customers))
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const setRemoveCustomer = (id) => {
	return { type: 'REMOVE_CUSTOMER', payload: id }
}

export const startRemoveCustomer = (id) => {
	return (dispatch) => {
		const confirm = window.confirm('Are you sure u want to delete')
		if (confirm) {
			axios
				.delete(`/customers/${id}`, {
					headers: {
						'x-auth': localStorage.getItem('authToken'),
					},
				})
				.then((response) => {
					console.log(response.data._id)
					const id = response.data._id
					dispatch(setRemoveCustomer(id))
					toast('Customer Removed', {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
					})
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}
}

export const setEditCustomer = (id, data) => {
	return {
		type: 'EDIT_CUSTOMER',
		payload: {
			id,
			data,
		},
	}
}

export const startEditCustomer = (data, id, redirect) => {
	return (dispatch) => {
		axios
			.put(`/customers/${id}`, data, {
				headers: {
					'x-auth': localStorage.getItem('authToken'),
				},
			})
			.then((response) => {
				//console.log(response)
				if (response.data.hasOwnProperty('errors')) {
					toast.error(response.data.message, {
						position: 'top-center',

						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
					})
				} else {
					const cust = response.data
					dispatch(setEditCustomer(id, cust))
					toast.success('Customer Details Have Been Updated Successfully', {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
					})
					redirect()
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
