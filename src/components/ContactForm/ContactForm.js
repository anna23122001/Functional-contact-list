import React, {useState, useEffect} from 'react'

import './ContactForm.css'

function ContactForm({contactForEdit, onSubmit, onDelete}) {

  const [contact, setContact] = useState({contactForEdit});

  useEffect(() => {
    setContact(contactForEdit);
  }, [contactForEdit])

  function createNewForm() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      }
    };

  // function onInputChange (event) {
  //     setContact(
  //       [event.target.name]: event.target.value
  //     )
  //   }
    
    // onFormSubmit = (event) => {
    //   event.preventDefault()
    //     this.props.onSubmit({
    //      ...this.state,
    //     })
    // }
    
    // onclearInputInfo = (e) => {
    //   const sibling = e.target.parentNode.firstChild;
    //   this.setState({
    //     [sibling.name]: '',
    //   })
    // }
    
    // onContactDelete = () => {
    //   this.props.onDelete(this.props.contactsForEdit.id); 
    //   this.setState({
    //     ...this.createNewForm(),
    //   })
    // }



//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [id, setId] = useState('');


//   function onInputChange(e) {
//     if(e.target.name === 'firstName'){
//       setFirstName(e.target.value);
//   }
//     if(e.target.name === 'lastName'){
//       setLastName(e.target.value)
//   }
//     if(e.target.name === 'email'){
//     setEmail(e.target.value);
// }
//     if(e.target.name === 'phone'){
//     setPhone(e.target.value)
// }

//   }

  // function onContactDelete (e) {
  //   e.stopPropagation();
  //   onDelete(contacts.id)
  // }


// function onFormSubmit(e) {
//   e.preventDefault();
//   onSubmit({
//     firstName,
//     lastName,
//     email,
//     phone
//   })
// }


  return (
    <>
  <form className='form' onSubmit={onFormSubmit}>
  <div className='form-item-container'>
          <input className='input-item'
            type = 'text'
            name = 'firstName'
            value = {firstName}
            placeholder="Enter your name"
            onChange = {onInputChange}
    />
    <span
    // onClick = {this.onclearInputInfo}
    className='input-delete'>
      X</span>
    </div>

      <div className='form-item-container'>
      <input className='input-item'
              type = 'text'
              name = 'lastName'
              value = {lastName}
              placeholder="Enter your surname"
              onChange = {onInputChange}
    />
      <span 
          // onClick = {this.onclearInputInfo}
          className='input-delete'>
      X</span>
      </div>

      <div className='form-item-container'>
      <input className='input-item'
                type = 'email'
                name = 'email'
                value = {email}
                placeholder="Enter your email"
                onChange = {onInputChange}
    />
    <span 
    //  onClick = {this.onclearInputInfo}
    className='input-delete'>
      X</span>
      </div>
   
      <div className='form-item-container'>
      <input className='input-item'
                type = 'text'
                name = 'phone'
                required={true}
                value = {phone}
                placeholder="Enter phone number"
                onChange = {onInputChange}
    />
    <span
          // onClick = {this.onclearInputInfo}
          className='input-delete'>
      X</span>
      </div>

      <button 
            type='submit'
            className='save'
          >Save
          </button>
          { id ? (
            <button 
              type ='button'
              className='delete'
              // onClick={onContactDelete}
            >
              Delete
            </button>
          ) : (
              ''
            )}
  </form>

    </>
  )
}

export default ContactForm