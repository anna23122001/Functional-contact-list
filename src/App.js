import React, { useEffect, useState } from 'react';
import {nanoid} from 'nanoid'

import initialState from './model/initialState';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';


function App() {
  const [contacts, setContacts] = useState(initialState)
  const [contactForEdit, setContactForEdit] = useState(createEmptyContact())

  function createEmptyContact(){
    return {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone:'',
    }
  }

  useEffect(() => {
    setContacts(restoreContacts)
  }, [])

  function restoreContacts() {
    const data = localStorage.getItem('contacts');
    return data ? JSON.parse(data) : initialState;
  }

  function saveToStorage(contacts){
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }

  function createContact(contact) {
    contact.id = nanoid();
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
    saveToStorage(newContacts)
  }

  function deleteContact(id) {
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts);
    saveToStorage(newContacts);
  }





  // function addNewContact() {
  //   setContactForEdit(createEmptyContact())
  //   saveToStorage(contactForEdit)
  // }


// Functions

// saveToLocalSorage: addNewContact  deleteContact !createContact, !updateContact

// saveContact(update||create) updateContact createContact 

// selectContact

  
  return (
    <>
     <h1>Contact List</h1>
     <div className="main-container">
      <ContactList 
      contacts={contacts}
      onDelete={deleteContact}
      // onAddContact = {addNewContact}
      // onEditContact={selectContact}
      />
      <ContactForm
      contactForEdit={contactForEdit}
      contacts={contacts}
      onSubmit={createContact}
      onDelete={deleteContact}
      />
    </div>
    </>
   
  );
}

export default App;
