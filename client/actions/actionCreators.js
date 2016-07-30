// add contact
export function addContact(name, surname, phone, mail, address) {
  return {
    type: 'ADD_CONTACT',
    name, 
    surname,
    phone,
    mail,
    address
  }
}

// remove contact
export function removeContact(index) {
  return {
    type: 'REMOVE_CONTACT',
    index
  }
}

// update Contact
export function updateContact(index, name, userId, surname, phone, mail, address) {
  return {
    type: 'UPDATE_CONTACT',
    index,
    name,
    userId,
    surname,
    phone,
    mail,
    address
  }
}


