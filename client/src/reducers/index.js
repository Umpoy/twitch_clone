import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redix-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer
})