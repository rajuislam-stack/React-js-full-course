import { useState } from "react"

export default function Chat({currentChat}) {
  const [text ,setText] = useState('')
  return (
    <div>
      <textarea
       rows={13}
       cols={30}
       placeholder={`Chat to ${currentChat.name}`}
       value={text}
       onChange={e => setText(e.target.value)}
      /> <br />
      <button id="button">
        Sent to {currentChat.email} 
      </button>
    </div>
  )
}
