//General Call to manage the contact
function contact(state = [], action) {
  
  console.log(action.type);

  switch(action.type){
    case 'ADD_CONTACT':
      // return the new state with the new contact
      return addContact(state, action);
    case 'REMOVE_CONTACT':
      //return the new state without the new contact
      return removeContact(state,action);  
    case 'UPDATE_CONTACT':
      //return the state with the contact updated
      return updateContact(state,action);        
    default:
      return state;
  }  

  if(typeof action.userId !== 'undefined') {

  }
  return state;
}


//Add one more contact
function addContact(state = [], action) {
    const userId = (state) ? (state.length + 1) : 1;

      return [
        //Keep the old state
        ...state,
        //Add the new contact
        {
          address : action.address,
          id: userId,
          mail : action.mail,      
          name : action.name,      
          phone: action.phone,
          surname : action.surname  
        }
      ];
}

//Remove one contact
function removeContact(state = [], action) {      
    // we need to return the new state without the deleted comment
    return [
      // from the start to the one we want to delete
      ...state.slice(0,action.index),
      // after the deleted one, to the end
      ...state.slice(action.index + 1)
    ];
}

//Update contact
function updateContact(state = [], action) {      
     
     //copy the old state
     var newState = state;
     //update the contact
     newState[action.index] = {
          address : action.address,
          id: action.userId,
          mail : action.mail,      
          name : action.name,      
          phone: action.phone,
          surname : action.surname         
      };

    return newState;
}

export default contact;

