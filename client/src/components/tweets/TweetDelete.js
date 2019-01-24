import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchTweet, deleteTweet } from '../../actions';

class TweetDelete extends Component {
    componentDidMount() {
        this.props.fetchTweet(this.props.match.params.id)
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteTweet(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent() {
        return 'Are you sure you want to delete this Oink?'
    }

    render() {
        return (
            < Modal
                title="Delete Oink"
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
