import _ from 'lodash';
import {
    FETCH_TWEET,
    FETCH_TWEETS,
    CREATE_TWEET,
    EDIT_TWEET,
    DELETE_TWEET
} from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TWEETS:
            console.log({ ...state, ..._.mapKeys(action.payload, 'id') })
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_TWEET:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_TWEET:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_TWEET:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_TWEET:
            return _.omit(state, action.payload)
        default:
            return state
    }
}