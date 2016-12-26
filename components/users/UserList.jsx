import React, { Component } from 'react';

// Import Components
import User from './User.jsx';

class UserList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.users.map(user => {
            return <User
              user={ user }
              key={ user.id }
            />
          })
        }
      </ul>
    )
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired
}

export default UserList
