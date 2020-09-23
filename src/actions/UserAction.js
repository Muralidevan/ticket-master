import axios from '../config/axios'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

export const setUser = (user) => {
	return { type: 'SET_USER', payload: user }
}

export const startLoginUser = (formData, redirect) => {
	return (dispatch) => {
		axios
			.post('/users/login', formData)
			.then((response) => {
				if (response.data.hasOwnProperty('error')) {
					toast.error(' Invalid Username Or Password', {
						position: 'top-center',
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
					})
				} else {
					const Toast = Swal.mixin({
						toast: true,
						position: 'top',
						showConfirmButton: false,
						timer: 2000,
						timerProgressBar: true,
						onOpen: (toast) => {
							toast.addEventListener('mouseenter', Swal.stopTimer)
							toast.addEventListener('mouseleave', Swal.resumeTimer)
						},
					})

					Toast.fire({
						icon: 'success',
						title: 'Signed In Successfully',
					})
					localStorage.setItem('authToken', response.data.token)
					axios
						.get('/users/account', {
							headers: {
								'x-auth': localStorage.getItem('authToken'),
							},
						})
						.then((response) => {
							console.log(response.data)
							const user = response.data
							dispatch(setUser(user))

							redirect()
						})
						.catch((err) => {
							console.log(err)
						})
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const startGetUser = () => {
	return (dispatch) => {
		axios
			.get('users/account', {
				headers: {
					'x-auth': localStorage.getItem('authToken'),
				},
			})
			.then((response) => {
				const user = response.data
				dispatch(setUser(user))
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const startRegisterUser = (data, redirect) => {
	return (dispatch) => {
		axios
			.post('/users/register', data)
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
					const Toast = Swal.mixin({
						toast: true,
						position: 'top',
						showConfirmButton: false,
						timer: 3000,
						timerProgressBar: true,
						onOpen: (toast) => {
							toast.addEventListener('mouseenter', Swal.stopTimer)
							toast.addEventListener('mouseleave', Swal.resumeTimer)
						},
					})

					Toast.fire({
						icon: 'info',
						title: 'You Have Registered Successfully',
					})
					redirect()
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const startUserLogout = () => {
	return (dispatch) => {
		axios
			.delete('/users/logout', {
				headers: {
					'x-auth': localStorage.getItem('authToken'),
				},
			})
			.then((response) => {
				if (response.data.notice) {
					const Toast = Swal.mixin({
						toast: true,
						position: 'top',
						showConfirmButton: false,
						timer: 2000,
						timerProgressBar: true,
						onOpen: (toast) => {
							toast.addEventListener('mouseenter', Swal.stopTimer)
							toast.addEventListener('mouseleave', Swal.resumeTimer)
						},
					})

					Toast.fire({
						icon: 'success',
						title: 'Signed Out Successfully',
					})
				}
				localStorage.removeItem('authToken')
				dispatch(setUser({}))

				window.location.href = '/'
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
