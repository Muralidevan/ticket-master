import React from 'react'
import { connect } from 'react-redux'
import { startRegisterUser } from '../../actions/UserAction'
import { Card, Button } from 'bootstrap-4-react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import registerSchema from './Schemas/RegisterSchema'

const initialValues = {
	username: '',
	email: '',
	password: '',
}

class Register extends React.Component {
	constructor() {
		super()
		this.state = initialValues
	}

	redirect = () => {
		return this.props.history.push('/users/login')
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const formdata = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
		}

		this.props.dispatch(startRegisterUser(formdata, this.redirect))
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	render() {
		const { username, email, password } = this.state

		return (
			<div className='background-img'>
				<div className='overall-align'>
					<Card>
						<div className='inner-align'>
							<h1 className='register' style={{ color: 'white' }}>
								Create New Account
							</h1>

							<form onSubmit={this.handleSubmit}>
								<div className='form-group'>
									<label htmlFor='username' className='label-dialog'>
										Username
									</label>
									<input
										type='text'
										value={username}
										onChange={this.handleChange}
										id='username'
										name='username'
										placeholder='Enter your name'
										className='input-dialog'
										style={{
											background: 'rgba(0, 0, 0, 0.6)',
											border: 'none',
											color: 'white',
										}}
									/>
								</div>

								<div className='form-group'>
									<label htmlFor='email' className='label-dialog'>
										Email
									</label>
									<input
										type='text'
										value={email}
										onChange={this.handleChange}
										id='email'
										name='email'
										placeholder='Enter your email'
										className='input-dialog'
										style={{
											background: 'rgba(0, 0, 0, 0.6)',
											border: 'none',
											color: 'white',
										}}
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='password' className='label-dialog'>
										Password
									</label>
									<input
										type='password'
										value={password}
										onChange={this.handleChange}
										id='password'
										name='password'
										placeholder='Enter your password '
										className='input-dialog'
										style={{
											background: 'rgba(0, 0, 0, 0.6)',
											border: 'none',
											color: 'white',
										}}
									/>
								</div>
								<div className='button-align' style={{ margin: '10px' }}>
									<Button type='submit' primary>
										REGISTER
									</Button>
								</div>
							</form>
						</div>
					</Card>
				</div>
			</div>
		)
	}
}

export default connect()(Register)
