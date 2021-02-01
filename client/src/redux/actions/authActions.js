import axios from 'axios';
import { types } from './types';

export const userLogin = () => async (dispatch) => {
    try{
        const { data } = await axios.get('/api/user');
        dispatch({type:types.LOGIN_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({
            type:types.LOGIN_FAIL,
            payload:error.response.data.message ? error.response.data.message : error.message
        })
    }
}