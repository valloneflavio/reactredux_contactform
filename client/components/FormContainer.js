import React from 'react';
import ContactsList from './ContactsList';

const FormContainer = React.createClass({
  render() {
    return (
      <div className="form-container">
        <ContactsList {...this.props} />
      </div>
    )
  }
});

export default FormContainer;