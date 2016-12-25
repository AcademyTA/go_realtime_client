import React, { Component } from 'react';

class UserForm extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Get value from input
    const node = this.refs.userName;

    // Add User to List
    const userName = node.value;
    this.props.setUserName(userName);

    // Clear form
    node.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='What is your name?'
            type='text'
            ref='userName'
          />
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  setUserName: React.PropTypes.func.isRequired
}

export default UserForm
