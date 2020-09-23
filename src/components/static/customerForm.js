import React from 'react'
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'

import {
	startAddCustomer,
	startGetCustomer,
} from '../../actions/customerActions'

class CustomerForm extends React.Component {
	constructor(props) {
		super(props)
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
		const redirect = () => {
			return this.props.history.push('/login/customers')
		}
		this.props.dispatch(startAddCustomer(formData, redirect))
		this.props.dispatch(startGetCustomer())

		//  this.setState({
		//      name : "",
		//      email : "",
		//      mobile : ""
		//  })
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label> Name </label>
					<input
						type='text'
						value={this.state.name}
						onChange={this.handleChange}
						name='name'
					/>{' '}
					<br />
					<label> e-mail </label>
					<input
						type='text'
						value={this.state.email}
						onChange={this.handleChange}
						name='email'
					/>{' '}
					<br />
					<label> Mobile </label>
					<input
						type='text'
						value={this.state.mobile}
						onChange={this.handleChange}
						name='mobile'
					/>{' '}
					<br />
					<input type='submit' value='add' />
				</form>
			</div>
		)
	}
}

export default connect()(CustomerForm)
