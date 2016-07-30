import React from 'react';
import { Link } from 'react-router';

//My component
import Contact from './Contact';



const ContactsList = React.createClass({
  render() {

    return (
        <div className="contact-list">    
          {this.props.contacts.map((contact, i) => <Contact {...this.props} key={i} i={i} contact={contact} />)}
          <span className='container-button'>          
          	<Link to="/new" className='btn-custom'>Add Contact</Link>
          </span>
        </div>
      );  
  }
});

export default ContactsList;