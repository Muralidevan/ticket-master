import React from 'react'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
	startGetCustomer,
	startCustomerRemove,
	startCustomerShow,
} from '../../actions/customerActions'
// import axios from '../../config/axios'
// import { Redirect } from 'react-router-dom'
//import CustomerForm from './CustomerForm'

class Customer extends React.Component {
	componentDidMount() {
		if (this.props.customer.length == 0) {
			this.props.dispatch(startGetCustomer())
		}
	}

	redirect = () => {
		return this.props.history.push('/customer/show')
	}

	render() {
		return (
			<div>
				<h2>Customers - {this.props.customer.length} </h2>

				<table border='1'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>E-mail</th>
							<th>Action</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						{this.props.customer.map((cust, i) => {
							return (
								<tr key={cust._id}>
									<td> {i + 1} </td>
									<td> {cust.name} </td>
									<td> {cust.email} </td>
									<td>
										{' '}
										<button
											onClick={() => {
												this.props.dispatch(
													startCustomerShow(cust._id, this.redirect)
												)
											}}
										>
											Show
										</button>{' '}
									</td>
									<td>
										{' '}
										<button
											onClick={() => {
												this.props.dispatch(startCustomerRemove(cust._id))
											}}
										>
											Remove
										</button>{' '}
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		customer: state.customer,
	}
}

export default connect(mapStateToProps)(Customer)
