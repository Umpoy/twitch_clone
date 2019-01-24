import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTweet } from '../../actions';
import TweetForm from './TweetForm';

class TweetCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createTweet(formValues);
    }

    isSignedIn() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <h3>Create an Oink</h3>
                    <TweetForm onSubmit={this.onSubmit} />
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Please Sign In to post your Oink</h3>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.isSignedIn()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { createTweet })(TweetCreate);