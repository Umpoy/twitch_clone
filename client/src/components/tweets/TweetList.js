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
                <div className="six wide column">
                    <Link to={`/tweet/edit/${tweet.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/tweet/delete/${tweet.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.tweets.reverse().map(tweet => {
            return (
                <div className="item" key={tweet.id}>

                    <div className="ui stackable grid">
                        <div className="ten wide column">
                            <i className="large middle aligned icon twitter" />
                            <div className="content">
                                {/* <h3>{tweet.title}</h3> */}
                                <h3>
                                    {tweet.description}
                                </h3>
                                <br />
                                <div className="extra">{tweet.name}</div>
                            </div>
                        </div>
                        {this.renderAdmin(tweet)}
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