import React, { useState, useEffect } from 'react';
import './ContactForm.css';

function ContactForm({ contactForEdit, onSubmit, onDelete }) {
  const [contact, setContact] = useState({ ...contactForEdit });

  useEffect(() => {
    setContact(contactForEdit);
  }, [contactForEdit]);

  function createEmptyContact() {
    return {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  }

  function onInputChange(event) {
    setContact((prevContact) => ({
      ...prevContact,
      [event.target.name]: event.target.value,
    }));
  }

  function onFormSubmit(event) {
    event.preventDefault();
    onSubmit({ ...contact });
  }

  function onClearField(event) {
    const sibling = event.target.parentNode.firstChild;
    setContact((prevContact) => ({
      ...prevContact,
      [sibling.name]: '',
    }));
  }

  function onContactDelete() {
    onDelete(contact.id);
    setContact(createEmptyContact());
  }

  return (
    <>
      <form className='form' onSubmit={onFormSubmit}>
        <div className='form-item-container'>
          <input
            className='input-item'
            type='text'
            name='firstName'
            value={contact.firstName}
            placeholder='Enter your name'
            onChange={onInputChange}
          />
          <span onClick={onClearField} className='input-delete'>
            X
          </span>
        </div>

        <div className='form-item-container'>
          <input
            className='input-item'
            type='text'
            name='lastName'
            value={contact.lastName}
            placeholder='Enter your surname'
            onChange={onInputChange}
          />
          <span onClick={onClearField} className='input-delete'>
            X
          </span>
        </div>

        <div className='form-item-container'>
          <input
            className='input-item'
            type='email'
            name='email'
            value={contact.email}
            placeholder='Enter your email'
            onChange={onInputChange}
          />
          <span onClick={onClearField} className='input-delete'>
            X
          </span>
        </div>

        <div className='form-item-container'>
          <input
            className='input-item'
            type='text'
            name='phone'
            value={contact.phone}
            placeholder='Enter phone number'
            onChange={onInputChange}
          />
          <span onClick={onClearField} className='input-delete'>
            X
          </span>
        </div>

        <button type='submit' className='save'>
          Save
        </button>

        {contact.id ? (
          <button
            type='button'
            className='delete'
            onClick={onContactDelete}
          >
            Delete
          </button>
        ) : (
          ''
        )}
      </form>
    </>
  );
}

export default ContactForm;
