import React, { Component } from 'react';
import axios from 'axios';
import TextFieldGroup from './TextFieldGroup';

class SignupForm extends Component {
	state = {
		username: '', 
		email: '',
		password: '',
		passwordConfirmation: '',
		errors: {}
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	};

	onSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3000/register', { 
			user: this.state
		})
		.then(response => this.setState({ errors: response.data }))
		.catch(err => console.log(err));
	};

	render() {
		const { errors } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<TextFieldGroup
					label='Username'
					type='text'
					onChange={this.onChange}
					value={this.state.username}
					field='username'
					error={errors.username}
				/>
				<TextFieldGroup
					label='Email'
					type='text'
					onChange={this.onChange}
					value={this.state.email}
					field='email'
					error={errors.email}
				/>
				<TextFieldGroup
					label='Password'
					type='password'
					onChange={this.onChange}
					value={this.state.password}
					field='password'
					error={errors.password}
				/>
				<TextFieldGroup
					label='Confirm Passsword'
					type='password'
					onChange={this.onChange}
					value={this.state.passwordConfirmation}
					field='passwordConfirmation'
					error={errors.passwordConfirmation}
				/>
				<button>Sign Up</button>
			</form>
		);
	};
}

export default SignupForm;