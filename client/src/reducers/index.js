import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import tweetReducer from './tweetReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    tweets: tweetReducer
})