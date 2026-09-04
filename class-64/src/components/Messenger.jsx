
import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

export default function Messenger() {
  const [to , setTo] = useState(contacts[0])
  return (
    <div style={{display:"flex", gap:'10px'}}>
      <ContactList 
      contacts = {contacts}
      onSelected = {(contact)=> setTo(contact)}
      />
      <Chat key= {to.id} currentChat = {to}/>
    </div>
  )
}


