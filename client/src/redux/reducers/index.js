import { combineReducers } from 'redux'
import { mailReducer } from './mailReducer'
import { authReducer } from './authReducer'

export default combineReducers({
    mail: mailReducer,
    auth: authReducer
})