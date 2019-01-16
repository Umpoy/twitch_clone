import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchTweet, deleteTweet } from '../../actions';

class TweetDelete extends Component {
    componentDidMount() {
        this.props.fetchTweet(this.props.match.params.id)
    }

    renderActions() {
        return (
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        )
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this story?'
        }

        return `Are you sure you want to delete the story with the title: ${this.props.stream.title}`
    }

    render() {
        return (
            < Modal
                title="Delete Story"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { tweet: state.tweets[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchTweet, deleteTweet })(TweetDelete);
