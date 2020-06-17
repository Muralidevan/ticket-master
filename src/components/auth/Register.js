import React from "react";
import { connect } from "react-redux";
import { startRegisterUser } from "../../actions/UserAction";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			email: "",
			password: "",
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();

		const formdata = {
			username: this.state.userName,
			email: this.state.email,
			password: this.state.password,
		};
		const redirect = () => {
			return this.props.history.push("/users/login");
		};

		this.props.dispatch(startRegisterUser(formdata, redirect));
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		const { userName, email, password } = this.state;

		return (
			<div>
				<h1>Register Form</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="userName">UserName</label>
					<input
						type="text"
						id="userName"
						value={userName}
						name="userName"
						onChange={this.handleChange}
					/>
					<br />
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						value={email}
						name="email"
						onChange={this.handleChange}
					/>{" "}
					<br />
					<label htmlFor="Password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						name="password"
						onChange={this.handleChange}
					/>{" "}
					<br />
					<input type="submit" value="Register" />
				</form>
			</div>
		);
	}
}

export default connect()(Register);
