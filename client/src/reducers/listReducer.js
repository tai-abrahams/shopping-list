import { GET_LIST } from '../action/types';

const initialState = {
    allShopping: '',
}


export default function(state=initialState, action){
    switch (action.type) {
        case GET_LIST:
            return{
                ...state,
                allShopping: action.payload
            }
        default:
            return state
    }
}