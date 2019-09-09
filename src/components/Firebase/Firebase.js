import app from 'firebase/app';
import dotenv from 'dotenv';

import config from '../Config/config';
import 'firebase/auth';
import 'firebase/database';

class Firebase {

    constructor() {
        dotenv.config();
        console.log('hello');
        console.log(process.env.REACT_APP_APIKEY);

        if (!app.apps.length) {
            app.initializeApp(config);
        }
        this.auth = app.auth();
        this.db = app.database();
    }

    // Auth API
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // User API

    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

export default Firebase;