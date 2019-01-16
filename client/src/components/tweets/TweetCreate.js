import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTweet } from '../../actions';
import TweetForm from './TweetForm';

class TweetCreate extends Component {


    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.createTweet(formValues);
    }

    isSignedIn() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <h3>Create a Story</h3>
                    <TweetForm onSubmit={this.onSubmit} />
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Please Sign In to tell your story</h3>
                </div>
            )
        }
    }

    render() {
        console.log(this.props)
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