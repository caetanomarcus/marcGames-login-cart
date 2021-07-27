import { ADD_ID, CLEAN_ID } from "../constants/actions-types";

export  function addID(payload){
    return {type: ADD_ID, payload}
}

export function cleanID(payload){
    return {type: CLEAN_ID, payload}
}