import React, { Component } from 'react';
import './index.css';
// import Cookies from 'js-cookie';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace("/home")
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const userDetails = {
      email: email,
      password: password,
    };
    const url = 'http://localhost:8080/auth/authenticate'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {'Content-Type': 'application/json'},
    }
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data.token);
    if(response.ok === true) {
      this.onLoginSuccess();
    }
  }

  render() {
    return (
      <div className="login-container">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h2>Login Page</h2>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
