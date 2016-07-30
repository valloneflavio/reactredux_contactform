import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Contact = React.createClass({
  render() {
    const { contact } = this.props;
    var fullName = contact.name+' '+contact.surname;

    return (
      <div className="contact-line">     
        <Link className='label-fullname' to={`/view/${contact.id}`}>
          {fullName}
        </Link> 
      </div>
    )
  }
});

export default Contact;