import React from 'react';

import { render } from 'react-dom';

// Import css
import './styles/app.less';

// Import Components
import App from './components/App';
import FormContainer from './components/FormContainer';
import ContactDetail from './components/ContactDetail';
import ContactNew from './components/ContactNew';
import ContactEdit from './components/ContactEdit';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

//create router rules
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={FormContainer}></IndexRoute>
		<Route path="/view/:userId" component={ContactDetail}></Route>
		<Route path="/edit/:userId" component={ContactEdit}></Route>		
		<Route path="/new" component={ContactNew}></Route>		
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root')); 
