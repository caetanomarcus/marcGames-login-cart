import {ADD_ID} from '../constants/actions-types'

const initialState = {
    id: [1, 2, 3]
}

function rootReducer(state = initialState, action){
    if(action.type === ADD_ID){
       return {
        ...state,
        id: action.payload
       }
        
    }

    return state
};

export default rootReducer;