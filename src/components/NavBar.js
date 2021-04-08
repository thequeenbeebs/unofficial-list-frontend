import React from 'react';
import SignInButtons from './SignInButtons'
import SignOutButtons from './SignOutButtons'

class NavBar extends React.Component {
    render() {
        return (
            <div class="sidenav">
                <h1>The Unofficial List</h1>
                <SignInButtons />
                <SignOutButtons />
            </div>
        )
    }
}

export default NavBar;