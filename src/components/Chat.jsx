import React from 'react'

const Chat = ({message, user}) => {
  return (
    <div className={user==='person1'? 'chat chat-left' : 'chat chat-right'}>
      {message}
    </div>
  )
}

export default Chat
