
import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ MessageUsers }) => (
 
  <div >
    <ul>
      {MessageUsers.map(MessageUsers => (
        <li key={MessageUsers.id}>{MessageUsers.name}</li>
      ))}
    </ul>
  </div>

)

Sidebar.propTypes = {
  MessageUsers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Sidebar
