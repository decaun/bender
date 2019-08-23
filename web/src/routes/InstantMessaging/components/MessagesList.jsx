import React from 'react'
import PropTypes from 'prop-types'
import Messager from './Messager'
import { MessageList} from "@livechat/ui-kit";

function MessagesList ({ messages }) {
  
  if(messages){return (
    <MessageList active>

    <ul>
      {messages.map(message => (
        <Messager
          key={message.id}
          {...message}
        />
    ))}
    </ul>

    </MessageList>
)}}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessagesList
