import axios from 'axios';
import { types } from './types';

export const mailAction = (values) => async(dispatch) => {
    try{
        dispatch({type: types.SEND_EMAIL_LOAD})
        const {name, email, subject, message} = values
        const config = {
            headers: {'Content-Type': 'application/json'}
        }
        const { data } = await axios.post('/api/email', {name, email, subject, message}, config)
        dispatch({type: types.SEND_EMAIL_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({
            type:types.SEND_EMAIL_ERROR,
            payload:'Could not log in'})
    }
}
