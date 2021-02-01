import {types} from '../actions/types'

const INITIAL_STATE = {
    loading: false,
    error: false,
    mail: null,
}


export const mailReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SEND_EMAIL_LOAD:{
            return{
                ...state,
                loading: true,
                error: false
            }
        }
        case types.SEND_EMAIL_SUCCESS:{
            return{
                ...state,
                loading: false,
                mail: action.payload,
                error: false,
            }
        }
        case types.SEND_EMAIL_ERROR:{
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        default:{
            return state;
        }
    }
}