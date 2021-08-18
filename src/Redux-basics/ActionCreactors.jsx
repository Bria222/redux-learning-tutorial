import Store from './Store'
import * as actions from './ActionTypes'  //importing our action types

export function bugAdded(description) {
    Store.dispatch(
        {
            type: actions.BUG_ADDED,
            payload: {
                description: description
            }
        }
    );
}

export function bugRemoved(id) {
    Store.dispatch(
        {
            type: actions.BUG_REMOVED,
            payload: {
                id: id
            }
        }
    );
}

export function bugResolved(id) {
    Store.dispatch(
        {
            type: actions.BUG_RESOLVED,
            payload: {
                id: id
            }
        }
    );
}