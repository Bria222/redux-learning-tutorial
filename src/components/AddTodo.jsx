import React from 'react'
import { connect } from 'react-redux'
import * as ActionCreactors from './ActionCreactors'

const AddTodo = ({ dispatch }) => {
    let input
    return (
        <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(ActionCreactors.bugAdded(input.value))
            input.value = ''
        }}>
            <div className="row">
                <div className="col-9 float-left">
                    <input className="form-control" ref={node => input = node} />
                </div>
                <div className="col-3 float-right">
                    <button type="submit"
                        className="btn btn-primary btn-sm">
                        Add Todo
                    </button>
                </div>
            </div>
        </form>
    )
}
export default connect()(AddTodo)