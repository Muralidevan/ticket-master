import React from 'react'
import { connect } from 'react-redux'
import { startPostCustomer } from '../../actions/customerActions'
import { Container, Row, Col, Button, Card } from 'bootstrap-4-react'
import { Link } from 'react-router-dom'

class AddCustomer extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			mobile: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
			name: this.state.name,
			email: this.state.email,
			mobile: this.state.mobile,
		}
		console.log(formData)
		const redirect = () => {
			this.props.history.push('/customers')
		}
		//to-do alert

		this.props.dispatch(startPostCustomer(formData, redirect))
		this.setState({
			name: '',
			email: '',
			mobile: '',
		})
	}

	render() {
		const { name, email, mobile } = this.state
		return (
			<Container>
				<div>
					<Link to={`/customers`}>
						<Button primary style={{ marginTop: '20px' }}>
							GO BACK
						</Button>
					</Link>

					<h1 className='header'>Add New Customer</h1>
					<Card className='align-card'>
						<form onSubmit={this.handleSubmit}>
							<div className='form-group'>
								<Row>
									<Col col='col-lg-2 col-sm-3 col-12'>
										<label
											htmlFor='name'
											style={{ width: '100%', textAlignLast: 'right' }}
										>
											Name
										</label>
									</Col>
									<Col col='col-lg-10 col-sm-9 col-12'>
										<input
											type='text'
											value={name}
											onChange={this.handleChange}
											id='name'
											name='name'
											placeholder='Enter your name'
											style={{ width: '100%' }}
											className='form-control'
										/>
									</Col>
								</Row>
							</div>
							<div className='form-group'>
								<Row>
									<Col col='col-lg-2 col-sm-3 col-12'>
										<label
											htmlFor='email'
											style={{ width: '100%', textAlignLast: 'right' }}
										>
											Email
										</label>
									</Col>
									<Col col='col-lg-10 col-sm-9 col-12'>
										<input
											type='text'
											value={email}
											onChange={this.handleChange}
											id='email'
											name='email'
											placeholder='Enter your email'
											style={{ width: '100%' }}
											className='form-control'
										/>
									</Col>
								</Row>
							</div>
							<div className='form-group'>
								<Row>
									<Col col='col-lg-2 col-sm-3 col-12'>
										<label
											htmlFor='password'
											style={{ width: '100%', textAlignLast: 'right' }}
										>
											Mobile
										</label>
									</Col>
									<Col col='col-lg-10 col-sm-9 col-12'>
										<input
											type='number'
											value={mobile}
											onChange={this.handleChange}
											id='mobile'
											name='mobile'
											placeholder='Enter your mobile number'
											style={{ width: '100%' }}
											className='form-control'
										/>
									</Col>
								</Row>
							</div>
							<div className='button-align' style={{ marginTop: '20px' }}>
								<Button primary type='submit'>
									SUBMIT
								</Button>
							</div>
						</form>
						<p className='success-message'>{this.state.success}</p>
					</Card>
				</div>
			</Container>
		)
	}
}

export default connect()(AddCustomer)
