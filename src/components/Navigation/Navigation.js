import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';
// Context is a bit like dependency injection
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <div>
        <Navbar>

            <Nav className="mr-auto">
                <Nav.Link as={Link} to={ROUTES.SIGN_IN}>Sign In</Nav.Link>

                <Nav.Link as={Link} to={ROUTES.LANDING}>Landing</Nav.Link>


                <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link>

                <Nav.Link as={Link} to={ROUTES.ACCOUNT}>Account</Nav.Link>


                <Nav.Link as={Link} to={ROUTES.ADMIN}>Admin</Nav.Link>

                <SignOutButton />
            </Nav>
        </Navbar>
    </div>
);

const NavigationNonAuth = () => (
    <Navbar>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to={ROUTES.SIGN_IN}>Sign In</Nav.Link>

            <Nav.Link as={Link} to={ROUTES.LANDING}>Landing</Nav.Link>
        </Nav>
    </Navbar>

)

export default Navigation;