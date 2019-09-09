
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
//import App from '../src/components/App/App.js';

import Navigation from '../src/components/Navigation/Navigation.js';
import LandingPage from '../src/components/Landing/Landing.js';
import SignUpPage from '../src/components/SignUp/SignUp.js';
import SignInPage from '../src/components/SignIn/SignIn.js';
import PasswordForgetPage from '../src/components/PasswordForget/PasswordForget.js';
import HomePage from '../src/components/Home/Home.js';
import AccountPage from '../src/components/Account/Account.js';
import AdminPage from '../src/components/Admin/Admin.js';
import NotFoundPage from '../src/components/NotFound/NotFound.js'
import Firebase, {FirebaseContext} from './components/Firebase';
import * as ROUTES from '../src/constants/routes.js';
import App from './components/App/App.js';

const routing = (
    <Router>
      <FirebaseContext.Provider value={new Firebase()}>
           

        <Navigation />

        <hr />
        <Switch >
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        
          <Route component={NotFoundPage} />
        </Switch>
      </FirebaseContext.Provider>    
    </Router>
       );

       ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
    
//    ReactDOM.render(routing, document.getElementById('root'));
    
    /*import React from 'react';
    import ReactDOM from 'react-dom';
    import 'bootstrap/dist/css/bootstrap.css';
    import App from './components/App/App';
    import * as serviceWorker from './serviceWorker';
    
ReactDOM.render(<App />, document.getElementById('root'));
        */
        
        
        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        //serviceWorker.unregister();
