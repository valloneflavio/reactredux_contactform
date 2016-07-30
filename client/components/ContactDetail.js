import React from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';

const ContactDetail = React.createClass({

  handleOnClickDelete(id){
    var index = this.props.contacts.findIndex((contact) => {            
      if(parseInt(contact.id) === parseInt(id)){
        return true;
      }
    });    
    this.props.removeContact(index);  
    browserHistory.push('/');
  },

  handleOnClickEdit(id){ 
    browserHistory.push('/edit/'+id);
  },

 _getDetail(contact){
    return(
      <div>
          <label className='form-label'>Name</label>      
          <p>{contact.name}</p>

          <label className='form-label'>Surname</label>        
          <p>{contact.surname}</p>    

          <label className='form-label'>Phone</label>
          <p>{contact.phone}</p>                   
          
          <label className='form-label'>Mail</label>
          <p>{contact.mail}</p>             
          
          <label className='form-label'>Address</label>
          <p>{contact.address}</p>  

          <span className='container-button'>
            <button onClick={this.handleOnClickDelete.bind(this,contact.id)} className='btn-custom'>delete</button>  
            <button onClick={this.handleOnClickEdit.bind(this,contact.id)} className='btn-custom'>edit</button>                    
          </span>                
      </div>
    )
 },


  render() {
    const { userId } = this.props.params;

    var index = this.props.contacts.findIndex((contact) => {            
      if(parseInt(contact.id) === parseInt(userId)){
        return true;
      }
    });

    const contact = (index >= 0) ? this.props.contacts[index] : null;
    
    var container = (contact !== null) ? this._getDetail(contact) : (
      <h2>Contact not found</h2>
      );


    return (
      <div className="contact-detail">
        <p>
          <Link to="/">home</Link>        
        </p>       
        <h1>Contact Details</h1>       
         {container}                 
      </div>
    )
  }
});

export default ContactDetail;