import React from 'react';
import { hashHistory } from 'react-router';

import LoginForm from './presentational/LoginForm'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    const { username, password, sessionLocation } = this.state;
    
    hashHistory.push('/home')
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.handleSubmit} 
        onChange={this.handleChange}
        username={this.state.username}
        password={this.state.password}
      />
    )
  }
}


export default Login;