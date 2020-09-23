import React, { Component } from 'react'
// import { selectEmployeesByDepartment } from '../../selectors/empsele'
import { connect } from 'react-redux'
// import { startEditTicket } from '../../Actions/ticketsAction'

class EditTicket extends Component {
	constructor(props) {
		super(props)
		this.state = {
			code: this.props.tickets?.code,
			customer: this.props.tickets?.customer,
			department: this.props.tickets?.department,
			employees: this.props.tickets?.employees,
			priority: this.props.tickets?.priority,
			message: this.props.tickets?.message,
			selectedOption: false,
		}
	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleRadio = (e) => {
		this.setState({ priority: e.target.value })
	}
	handleDepartmentChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			employees: [],
		})
	}

	handleEmployeeSelection = (e) => {
		const id = e.target.value
		if (!this.state.employees.includes(id)) {
			this.setState((prevState) => {
				return {
					employees: prevState.employees.concat(id),
				}
			})
		}
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const {
			code,
			customer,
			department,
			employees,
			priority,
			message,
		} = this.state
		const formData = { code, customer, department, priority, message }
		formData.employees = employees.map((emp) => ({ employees: emp }))
		console.log('tickets form', formData)
		// this.props.dispatch(startEditTicket(this.props.tickets._id, formData))
		// this.props.dispatch(startPostTicket(formData))
		this.props.history.push('/ticket')
		this.setState({
			show: false,
		})
		this.setState({
			code: '',
			customer: '',
			department: '',
			employee: '',
			message: '',
			priority: '',
		})
	}

	render() {
		const { selectedOption } = this.state
		console.log('Edit ticket', this.props.tickets?.message)
		return (
			<div>
				<form onSubmit={this.handleSubmit} className='div1'>
					{<h1>ADD TICKETS</h1>}
					<label for='Code'>Code</label>
					<br />
					<input
						type='Number'
						name='code'
						value={this.state.code}
						onChange={this.handleChange}
					></input>
					<br />
					<label>Customers:</label> <br />
					<select
						value={this.state.customer}
						name='customer'
						onChange={this.handleChange}
					>
						<option value=''>select</option>
						{this.props.customers.map((ele) => {
							return <option value={ele._id}>{ele.name}</option>
						})}
					</select>{' '}
					<br />
					<label>Departments:</label> <br />
					<select
						value={this.state.department}
						onChange={this.handleDepartmentChange}
						name='department'
					>
						<option value=''>select</option>
						{this.props.departments.map((department) => {
							return (
								<option value={department._id} key={department._id}>
									{department.name}
								</option>
							)
						})}
					</select>{' '}
					<br />
					{/* <label for='Employees'>Employees:</label> <br />
					<select
						value={this.state.employees}
						onChange={this.handleEmployeeSelection}
						name='employees'
						multiple={true}
					>
						<option value=''>select</option>
						{selectEmployeesByDepartment(
							this.props.employees,
							this.state.department
						).map((employees) => {
							return (
								<option value={employees._id} key={employees._id}>
									{employees.name}
								</option>
							)
						})}
					</select>{' '} */}
					<br />
					<label for='Message'>Message</label>
					<br />
					<textarea
						name='message'
						value={this.state.message}
						placeholder='Write something..'
						style={{ width: '40%' }}
						onChange={this.handleChange}
					></textarea>
					<br />
					<label>
						High
						<input
							type='radio'
							value='high'
							checked={this.state.priority == 'high'}
							onChange={this.handleRadio}
						></input>
						<span class='checkmark'></span>
					</label>
					<br />
					<label>
						Medium
						<input
							type='radio'
							value='medium'
							checked={this.state.priority == 'medium'}
							onChange={this.handleRadio}
						></input>
						<span class='checkmark'></span>
					</label>
					<br />
					<label>
						Low{' '}
						<input
							type='radio'
							value='low'
							checked={this.state.priority == 'low'}
							onChange={this.handleRadio}
						></input>
						<span class='checkmark'></span>
					</label>
					<br />
					<input type='submit' className='btn' />
				</form>
			</div>
		)
	}
}
const mapStateToProps = (state, props) => {
	return {
		customers: state.customers,
		departments: state.departments,
		employees: state.employees,
		tickets: state.tickets.find((ele) => ele._id == props.match.params.id),
	}
}

export default connect(mapStateToProps)(EditTicket)
