import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTweet } from '../../actions';
import TweetForm from './TweetForm';

class TweetCreate extends Component {


    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.createTweet(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Tweet</h3>
                <TweetForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createTweet })(TweetCreate);