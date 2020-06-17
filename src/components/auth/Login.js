import React from "react";
import { connect } from "react-redux";
import { startLoginUser } from "../../actions/UserAction";
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const formdata = {
			email: this.state.email,
			password: this.state.password,
		};
		const redirect = () => {
			return this.props.history.push("/");
		};
		this.props.dispatch(startLoginUser(formdata, redirect));
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		const { email, password } = this.state;
		return (
			<div>
				<br />
				<form onSubmit={this.handleSubmit}>
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
					/>
					<br />
					<input type="submit" value="Login" />
				</form>
				<h1>Login</h1>
			</div>
		);
	}
}

export default connect()(Login);
