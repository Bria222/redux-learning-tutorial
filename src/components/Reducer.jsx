import { combineReducers } from 'redux'
import * as actions from './ActionTypes'  //importing our action types

//First reducer todos list
let lastId = 0;
const todos = (state = [], action) => {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(
                bug => bug.id !== action.payload.id
            );

        case actions.BUG_RESOLVED:
            return state.map(
                bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
            );

        case actions.BUG_TOGGLED:
            return state.map(
                bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: !bug.resolved }

            );

        default:
            return state;
    }

}

//Second reducer user informtion
const userInformation = (state = false, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default combineReducers({
    todos,
    userInformation
})

