import React, { useState } from 'react'

function InputSend({messages, setMessages, setLoader}) {
    const [newMessage, setNewMessage] = useState('');

    const handleChange = (e) => {
        setNewMessage(e.target.value);
    }

    const handleSend = () => {
        const temp = {
            user: 'person2',
            body: newMessage
        }
        setMessages(prevMessages => [...prevMessages, temp])
        handleReply()        
    }

    const handleReply = () => {
        setLoader(true)
        setTimeout(()=>{
            const test = {
                user: 'person1',
                body: 'test message' 
            }
            setMessages(prevMessages => [...prevMessages, test])
        }, 4000)
        setLoader(false)
    }

    return (
        <div className='input'>
        <input 
            type='text' 
            onChange={handleChange}
            value={newMessage}
        />
        <button onClick={()=>handleSend(messages)}>
            <i class="fa-solid fa-paper-plane"></i>
        </button>
        </div>
    )
}

export default InputSend
