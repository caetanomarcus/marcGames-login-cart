import { ADD_ID } from "../constants/actions-types";

export function addID(payload){
    return {type: ADD_ID, payload}
}