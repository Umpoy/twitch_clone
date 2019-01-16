import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTweets } from '../../actions';

const align = {
    top: '50%',
    transform: 'translateY(50%)'
}

class TweetList extends Component {
    componentDidMount() {
        this.props.fetchTweets();
    }

    renderAdmin(tweet) {

        if (tweet.userId === this.props.currentUserId) {
            return (
                <div className="right floated content" style={align}>
                    <Link to={`/tweet/edit/${tweet.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            )
        }
    }

    renderList() {
        return this.props.tweets.reverse().map(tweet => {
            return (
                <div className="item" key={tweet.id}> {this.renderAdmin(tweet)}
                    <i className="large middle aligned icon twitter" />
                    <div className="content">
                        <h3>{tweet.title}</h3>
                        <p className="description">
                            {tweet.description}
                        </p>
                        {tweet.name}
                    </div>

                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/tweet/new" className="ui button primary">
                        Create Tweet
                  </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Tweets</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: Object.values(state.tweets),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchTweets })(TweetList);