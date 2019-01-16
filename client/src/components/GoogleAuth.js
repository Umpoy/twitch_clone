import React, { Component } from 'react';
import client_ID from '../credentials';
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: client_ID,
                scope: 'email profile',
                fetch_basic_profile: true
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
                console.log('name: ', this.auth.currentUser.Ab.w3.wea.slice(0, 1));

            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId(), (this.auth.currentUser.Ab.w3.ofa + ' ' + this.auth.currentUser.Ab.w3.wea.slice(0, 1) + '.'));
        } else {
            this.props.signOut();
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui negative google button googleButton">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn} className="ui negative google button googleButton">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);