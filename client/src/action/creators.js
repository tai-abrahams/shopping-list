import { GET_LIST } from "./types";
import axios from 'axios'
const API_URL = 'http://localhost:3001'

export const getList = () => async dispatch => {
    const response = await axios.get(`${API_URL}/api/items`)
    .then((res)=>{
        return res;
    })

    dispatch({
        type: GET_LIST,
        payload: response
    });
}