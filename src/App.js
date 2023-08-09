import React, { useEffect, useState } from 'react';
import {nanoid} from 'nanoid'

import api from './contact-service';
import initialState from './model/initialState';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

function App() {
  const [contacts, setContacts] = useState(initialState)
  const [contactForEdit, setContactForEdit] = useState(createEmptyContact())

  function createEmptyContact(){
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone:'',
    }
  };

  useEffect (() => {
    api.get('/')
    .then(({data}) => {
      data ? setContacts(data) :
      setContacts([])
    })
  }, [])

  function createContact(contact) {
    contact.id = nanoid();
    api.post('/', contact)
    .then(({data}) => {
      const newContacts = [...contacts, data]
      setContacts(newContacts);
    })
  };

  function deleteContact(id) {
    api.delete(`/${id}`)
    .then(({status}) => {
      return console.log(status)
    })
    .catch((e) => console.log(e))
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts);
    return {
      contacts,
      contactForEdit: createEmptyContact(),
    }
  };
  
  function addNewContact() {
    const newEmptyContact = createEmptyContact()
    setContactForEdit(newEmptyContact)
  };

  function selectContact(contact){
    setContactForEdit(contact)
  };

  function updateContact(contact) {
      api.put(`/${contact.id}`, contact)
      .then((response) => {
        const updatedContact = response.data;
        setContacts((prevContact) => 
          prevContact.map((prevContact) => (
            prevContact.id !== updatedContact.id ? prevContact : updatedContact
        )));
        setContactForEdit(updatedContact);
      })
  };

  function saveContact(contact){
    if (!contact.id) {
      createContact(contact);
    }else{
      updateContact(contact)
    }
  };

  return (
    <>
     <h1>Contact List</h1>
     <div className="main-container">
      <ContactList 
      contacts={contacts}
      onDelete={deleteContact}
      onAddContact = {addNewContact}
      onEditContact={selectContact}
      />
      <ContactForm
      contactForEdit={contactForEdit}
      onSubmit={saveContact}
      onDelete={deleteContact}
      />
    </div>
    </>
   
  );
}

export default App;
