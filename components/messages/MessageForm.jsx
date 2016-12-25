import React, { Component } from 'react';

class MessageForm extends Component {
  onSubmit(event) {
    event.preventDefault();

    // Get value from input
    const node = this.refs.message;

    // Add User to List
    const message = node.value;
    this.props.addMessage(message);

    // Clear the input
    node.value = '';
  }
  render() {
    let input;

    if(this.props.activeChannel.id !== undefined){
      input = (
        <input
          ref='message'
          type='text'
          className='form-control'
          placeholder='Add Message...'
        />
      )
    }

    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <div className='form-group'>
          { input }
        </div>
      </form>
    )
  }
}

MessageForm.propTypes = {
  activeChannel: React.PropTypes.object.isRequired,
  addMessage:    React.PropTypes.func.isRequired
}

export default MessageForm
