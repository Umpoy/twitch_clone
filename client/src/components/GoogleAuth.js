import React, { Component } from 'react';
import client_ID from '../credentials';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientID: client_ID,
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;