import React from 'react'
import PropTypes from 'prop-types'
import Messager from './Messager'

function MessagesList ({ messages }) {
  
  if(messages){return (
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
)}}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessagesList
