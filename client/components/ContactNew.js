import React from 'react';
import { Link, browserHistory } from 'react-router';

const ContactNew = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const surname = this.refs.surname.value;
    const phone = this.refs.phone.value;
    const mail = this.refs.mail.value;
    const address = this.refs.address.value;
    this.props.addContact(name, surname, phone, mail, address);
    this.refs.contactNewForm.reset();
    browserHistory.push('/');    
  },

  render() {
    const { userId } = this.props.params;

    return (
      <div className="contact-detail">
        <p>
          <Link to="/">home</Link>        
        </p>        
        <h1>Contact Details</h1>      
        <form ref="contactNewForm" className="contact-new-form" >

          <label className='form-label'>Name</label>      
          <input className='form-input' type="text" ref="name" placeholder="name"/>

          <label className='form-label'>Surname</label>        
          <input className='form-input' type="text" ref="surname" placeholder="surname"/>  

          <label className='form-label'>Phone</label>
          <input className='form-input' type="text" ref="phone" placeholder="phone"/>                
          
          <label className='form-label'>Mail</label>
          <input className='form-input' type="text" ref="mail" placeholder="mail"/>           
          
          <label className='form-label'>Address</label>
          <input className='form-input' type="text" ref="address" placeholder="address"/>

          <span className='container-button'>
            <button onClick={this.handleSubmit} className='btn-custom'>submit</button>        
          </span>          
        </form>       
      </div>
    )
  }
});

export default ContactNew;