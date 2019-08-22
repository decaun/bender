import React from 'react'
import PropTypes from 'prop-types'
import Messager from './Messager'

const MessagesList = ({ messages }) => (
  <div>
    <ul>
      {messages.map(message => (
        <Messager
          key={message.id}
          {...message}
        />
    ))}
    </ul>
  </div>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessagesList
