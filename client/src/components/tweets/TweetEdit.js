import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweet, editTweet } from '../../actions';
import TweetForm from './TweetForm';

class TweetEdit extends Component {
    componentDidMount() {
        this.props.fetchTweet(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editTweet(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.tweet.title) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Tweet</h3>
                <TweetForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.tweet, 'title', 'description')}
                />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return { tweet: state.tweets[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchTweet, editTweet })(TweetEdit);