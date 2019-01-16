import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweet } from '../../actions'

class TweetEdit extends Component {
    componentDidMount() {
        this.props.fetchTweet(this.props.match.params.id)
    }

    render() {
        if (!this.props.tweet.title) {
            return <div>Loading...</div>
        }
        return (
            <div>{this.props.tweet.title}</div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return { tweet: state.tweets[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchTweet })(TweetEdit);