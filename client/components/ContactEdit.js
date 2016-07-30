import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';

const ContactEdit = React.createClass({

  componentWillMount(){
    this._setState();
  },

  _setState(){
    const { userId } = this.props.params;

    var index = this.props.contacts.findIndex((contact) => {            
      if(parseInt(contact.id) === parseInt(userId)){
        return true;
      }
    });

    const contact = (index >= 0) ? this.props.contacts[index] : null;
    var name = (contact && contact.name) ? contact.name : '';
    var surname = (contact && contact.surname) ? contact.surname : '';
    var phone = (contact && contact.phone) ? contact.phone : '';
    var mail = (contact && contact.mail) ? contact.mail : '';
    var address = (contact && contact.address) ? contact.address : '';

    this.setState({
      name: name,
      surname: surname,
      phone: phone,
      mail: mail,
      address : address
    });    
  },

  handleOnClickUpdate(id){
    var index = this.props.contacts.findIndex((contact) => {            
      if(parseInt(contact.id) === parseInt(id)){
        return true;
      }
    });    
    this.props.updateContact(index, this.state.name, id, this.state.surname, this.state.phone, this.state.mail, this.state.address);
    browserHistory.push('/');
  },

  handleOnClickEdit(id){ 
    browserHistory.push('/edit/'+id);
  },

  onChangeInput(event){
    var state = this.state;
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

 _getDetail(contact){
    return(
      <div>
          <label className='form-label'>Name</label>      
          <input
            id={'name'}
            className='form-input'             
            onChange={this.onChangeInput}            
            placeholder={'name'}
            value={this.state.name}
            />

          <label className='form-label'>Surname</label>        
          <input
            id={'surname'} 
            className='form-input' 
            onChange={this.onChangeInput}              
            placeholder={'surname'}
            value={this.state.surname}
            />  

          <label className='form-label'>Phone</label>
          <input
            id={'phone'}  
            className='form-input'             
            onChange={this.onChangeInput}              
            placeholder={'phone'}
            value={this.state.phone}
            />                  
          
          <label className='form-label'>Mail</label>
          <input
            id={'mail'}  
            className='form-input'             
            onChange={this.onChangeInput}              
            placeholder={'mail'}
            value={this.state.mail}
            />            
          
          <label className='form-label'>Address</label>
            <input
            id={'address'} 
            className='form-input' 
            onChange={this.onChangeInput}              
            placeholder={'address'}
            value={this.state.address}
            />  

          <span className='container-button'>
            <button onClick={this.handleOnClickUpdate.bind(this,contact.id)} className='btn-custom'>change</button>                    
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

export default ContactEdit;