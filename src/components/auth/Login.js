import React from 'react'
import { connect } from 'react-redux'
import { startLoginUser } from '../../actions/UserAction'
import { Card, Button } from 'bootstrap-4-react'
import { ToastContainer } from 'react-toastify'

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const formdata = {
			email: this.state.email,
			password: this.state.password,
		}
		const redirect = () => {
			return this.props.history.push('/')
		}
		this.props.dispatch(startLoginUser(formdata, redirect))

		// this.setState({
		// 	email: '',
		// 	password: '',
		// })
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	render() {
		const { email, password } = this.state
		return (
			<div className='login-img'>
				<div className='overall-align'>
					<Card>
						<div className='inner-align'>
							<h1 className='register' style={{ color: 'white' }}>
								SIGN IN
							</h1>
							<form onSubmit={this.handleSubmit}>
								<div className='form-group'>
									<label htmlFor='email' className='label-dialog'>
										Email
									</label>
									<input
										type='email'
										value={email}
										onChange={this.handleChange}
										id='email'
										name='email'
										placeholder='Enter your email'
										className='input-dialog'
										required
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
										placeholder='Enter your password'
										className='input-dialog'
										min='6'
										max='16'
										required
										style={{
											background: 'rgba(0, 0, 0, 0.6)',
											border: 'none',
											color: 'white',
										}}
									/>
								</div>
								<div className='button-align' style={{ margin: '10px' }}>
									<Button type='submit' primary>
										SUBMIT
									</Button>
								</div>
							</form>
						</div>
					</Card>
				</div>
				<ToastContainer />
			</div>
		)
	}
}

export default connect()(Login)
