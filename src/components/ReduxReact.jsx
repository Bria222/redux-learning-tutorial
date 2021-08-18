//Main link react with redux component
import React from 'react';
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Todo from './Todo'

const mapStateToProps = state => ({
    todos: state.todos
})

const ReactRedux = ({ todos }) => {
    console.log(todos);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                    <ul className="list-group" style={{
                        'marginTop': '20px'
                    }}>
                        <li className="list-group-item">
                            <h2 className="text-center" >TODO APP REACT AND REDUX</h2>
                        </li>
                        <li className="list-group-item"><AddTodo /></li>
                        {todos.map(todo => <Todo key={todo.id} todoData={todo} />)}
                        {todos.length == 0 && <li className="list-group-item">
                            <p className="text-center">Todo list empty</p>
                        </li>}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default connect(mapStateToProps)(ReactRedux)