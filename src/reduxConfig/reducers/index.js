import {ADD_ID, CLEAN_ID} from '../constants/actions-types'

const initialState = {
    id: []
}

function rootReducer(state = initialState, action){
    if(action.type === ADD_ID){
       return {
        ...state,
          id: state.id.concat(action.payload)
       }
        
    } else if(action.type === CLEAN_ID) {
        return {
            ...state,
            id: action.payload
        }
    }

    return state
};

export default rootReducer;