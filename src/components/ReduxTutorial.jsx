import React from 'react';
import Store from './Store'
import * as ActionCreactors from './ActionCreactors'
const ReduxTutorial = (props) => {

    console.log("Store object!", Store);

    //Notifies ui tha store data has changed
    const unSubscribe = Store.subscribe(() => {
        console.log("Store changed!", Store.getState());
    });

    Store.dispatch(ActionCreactors.bugAdded('Hello wuilson chola'));
    Store.dispatch(ActionCreactors.bugAdded('What if i dont exist'));
    Store.dispatch(ActionCreactors.bugAdded('Or what if you dont exist'));
    Store.dispatch(ActionCreactors.bugResolved(1));
    Store.dispatch(ActionCreactors.bugRemoved(2));
    unSubscribe();

    return (
        <div className="container">
            <h1 className="text-center" >Redux tutorial</h1>
        </div>

    )
}
export default ReduxTutorial;