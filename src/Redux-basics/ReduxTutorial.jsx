import React from 'react';
import Store from './Store'
import * as ActionCreactors from './ActionCreactors'
const ReduxTutorial = (props) => {

    console.log("Store object!", Store);

    //Notifies ui tha store data has changed
    const unSubscribe = Store.subscribe(() => {
        console.log("Store changed!", Store.getState());
    });
    //Add data to our redux store
    ActionCreactors.bugAdded("What if am wrong and i will never be right");
    ActionCreactors.bugAdded("Yello wilson Chola is cripmled hahahah");
    //console.log(Store.getState());
    //Removing data from our store
    //unSubscribe(); //unsubscribe from being notifyied
    ActionCreactors.bugResolved(1);
    ActionCreactors.bugRemoved(1);  //remove bug
    //console.log(Store.getState());
    unSubscribe();

    return (
        <div className="container">
            <h1 className="text-center" >Redux tutorial</h1>
        </div>

    )
}
export default ReduxTutorial;