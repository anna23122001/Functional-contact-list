import React from 'react'
import './ContactItem.css'

function ContactItem({contact, onDelete}) {

  function onContactDelete (e) {
    e.stopPropagation();
    onDelete(contact.id)
  }

  // function onEditContact() {
  //   onEdit(contact)
  // }

  return (
    <div className='contact-item'
    // onDoubleClick={onEditContact}
    >

    <p className='content'>
      {contact.firstName} {contact.lastName}
    </p>
    <span
      className='delete-btn'
      onClick={onContactDelete}
      >
        X</span>
    </div>
  )
}

export default ContactItem