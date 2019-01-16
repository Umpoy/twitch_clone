import tweets from '../apis/tweets';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_TWEET,
    FETCH_TWEETS,
    FETCH_TWEET,
    DELETE_TWEET,
    EDIT_TWEET
} from '../actions/types';

export const signIn = (userId, name) => {
    return {
        type: SIGN_IN,
        payload: { userId, name }
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createTweet = formValues => async (dispatch, getState) => {
    const { userId, name } = getState().auth;
    const response = await tweets.post('/tweets', { ...formValues, userId, name });
    console.log(getState().auth);
    dispatch({ type: CREATE_TWEET, payload: response.data });
    history.push('/');
}

export const fetchTweets = () => async dispatch => {
    const response = await tweets.get('/tweets');

    dispatch({ type: FETCH_TWEETS, payload: response.data });
}

export const fetchTweet = (id) => async dispatch => {
    const response = await tweets.get(`/tweets/${id}`);

    dispatch({ type: FETCH_TWEET, payload: response.data });
}

export const deleteTweet = (id) => async dispatch => {
    await tweets.delete(`/tweets/${id}`);

    dispatch({ type: DELETE_TWEET, payload: id });
}

export const editTweet = (id, formValues) => async dispatch => {
    const response = await tweets.put(`/tweets/${id}`, formValues);

    dispatch({ type: EDIT_TWEET, payload: response.data });
    history.push('/');
}


