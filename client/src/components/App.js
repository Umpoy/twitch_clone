import React from 'react';
import { Router, Route } from 'react-router-dom';
import TweetCreate from './tweets/TweetCreate';
import TweetEdit from './tweets/TweetEdit';
import TweetDelete from './tweets/TweetDelete';
import TweetList from './tweets/TweetList';
import TweetShow from './tweets/TweetShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={TweetList} />
                    <Route path="/tweet/new" component={TweetCreate} />
                    <Route path="/tweet/edit/:id" component={TweetEdit} />
                    <Route path="/tweet/delete" component={TweetDelete} />
                    <Route path="/tweet/show" component={TweetShow} />
                </div>
            </Router>
        </div>
    );
}

export default App;