import React from 'react'
import { connect } from 'react-redux'
import * as ActionCreactors from './ActionCreactors'

const DeleteTodo = ({ dispatch, todoData }) => {
    return (
        <li className="list-group-item"
            onClick={toggle => { dispatch(ActionCreactors.bugToggled(todoData.id)) }}
            style={{
                textDecoration: todoData.resolved ? 'line-through' : 'none'
            }}>
            {todoData.description}
            <button
                onClick={d => { dispatch(ActionCreactors.bugRemoved(todoData.id)) }}
                className="btn btn-danger btn-sm float-right">Delete
            </button>
        </li>

    )
}
export default connect()(DeleteTodo)