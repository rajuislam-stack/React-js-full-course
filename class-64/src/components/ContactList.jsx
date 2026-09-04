import React from 'react'

export default function ContactList({contacts, onSelected}) {
  return (
    <div>
      <ul>
        {contacts.map(contact => {
          return(
            <li key={contact.id}>
             <button 
             id='ChatListButton'
             onClick={()=> onSelected(contact)}
             >
              {contact.name}
             </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
