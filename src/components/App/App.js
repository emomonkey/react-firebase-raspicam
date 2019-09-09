import dotenv from 'dotenv';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import { WithAuthentication } from '../Session';
//import firebase from "firebase";
//import config from '../Config/config.js';
import Navigation from '../Navigation/Navigation.js';
import LandingPage from '../Landing/Landing.js';
import SignUpPage from '../SignUp/SignUp.js';
import SignInPage from '../SignIn/SignIn.js';
import PasswordForgetPage from '../PasswordForget/PasswordForget.js';
import HomePage from '../Home/Home.js';
import AccountPage from '../Account/Account.js';
import AdminPage from '../Admin/Admin.js';
import NotFoundPage from '../NotFound/NotFound.js'
import Firebase, { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes.js';

dotenv.config();

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
    </Router>

);

export default WithAuthentication(App);