import React from 'react'
import Chat from './Chat'

const ChatList = ({messages, loader}) => {
  return (
    <div className='chat-list'>
      {messages.map(text=>{
        return(
          <div className='chat-line'>
            {loader && <img src='public\loader.gif'/>}
            <Chat
              user={text.user}
              message={text.body}
            />
          </div>
        )
      })}
      
    </div>
  )
}

export default ChatList
