import React from 'react'
import { connect } from 'react-redux'
import axios from '../../config/axios'
import { startGetDepartment } from '../../actions/departmentAction'
//import { Link } from 'react-router-dom'

import { startAddEmployee, startGetEmployee } from '../../actions/employeeAction'

class EmployeeForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			mobile: '',

			department: '',
		}
	}

	componentDidMount() {
		this.props.dispatch(startGetDepartment())

		{
			console.log('dept', this.state.department)
		}

		// axios
		// 	.get('/departments', {
		// 		headers: {
		// 			'x-auth': localStorage.getItem('authToken'),
		// 		},
		// 	})
		// 	.then((response) => {
		// 		console.log('after', response.data)
		// 		const department = response.data
		// 		this.setState({ department })
		// 		this.props.dispatch(startGetDepartment(department))
		// 		//console.log("from startrGetDepartment", customer)
		// 	})
		// 	.catch((err) => {
		// 		alert(err)
		// 	})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	handleDropChange = (e) => {
		this.setState({
			department: e.target.value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		{
			console.log(typeof this.state.department)
		}
		const formData = {
			name: this.state.name,
			email: this.state.email,
			mobile: this.state.mobile,
			department: this.state.department,
		}
		const redirect = () => {
			return this.props.history.push('/login/employees')
		}
		this.props.dispatch(startAddEmployee(formData, redirect))
		this.props.dispatch(startGetEmployee())
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
					<label htmlFor='department'>Department</label>
					<select onChange={this.handleDropChange} name='department'>
						<option>--Select--</option>
						{this.props.departments.map((department) => {
							return (
								<option key={department._id} value={department._id}>
									{' '}
									{department.name}{' '}
								</option>
							)
						})}
					</select>{' '}
					<br />
					<input type='submit' value='add' />
				</form>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		departments: state.departments,
	}
}

export default connect(mapStateToProps)(EmployeeForm)
