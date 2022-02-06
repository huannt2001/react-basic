import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import Color from "../HOC/Color";

import { ToastContainer, toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success('Wow so easy!')
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })
        toast.success('Delete succeed!')

    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        // console.log('>>> check editTodo: ', editTodo)
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //Save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);

            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Update todo succeed')

            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        // console.log('>>> check editTodocopy', editTodoCopy)
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>check: ', isEmptyObj)
        return (
            <>
                <p>
                    Simple TODO Apps with React.js
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />

                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj ?
                                            <span className="todo-child-title"> {index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span className="input-edit">
                                                        {index + 1} - <input value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span className="todo-child-title">
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }

                                            </>
                                        }
                                        <button className="btn-option"
                                            onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="btn-option"
                                            onClick={() => this.handleDeleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>

        )
    }
}

// class ListTodo extends React.Component {

//     state = {
//         listTodos: [
//             { id: 'todo1', title: 'Doing home work' },
//             { id: 'todo2', title: 'Making video' },
//             { id: 'todo3', title: 'Fixing bugs' },
//         ],
//         editTodo: {}
//     }

//     addNewTodo = (todo) => {
//         this.setState({
//             listTodos: [...this.state.listTodos, todo]
//         })
//         toast.success('Add new todo succeed')
//     }

//     handleDeleteTodo = (todo) => {
//         let currentTodos = this.state.listTodos;
//         currentTodos = currentTodos.filter(item => item.id !== todo.id)
//         this.setState({
//             listTodos: currentTodos,
//         })
//         toast.success('Delete succeed')
//     }

//     handleEditTodo = (todo) => {
//         this.setState({
//             editTodo: todo
//         })
//     }

//     handleOnChangeEditTodo = (event) => {
//         let editTodoCopy = { ...this.state.editTodo }
//         editTodoCopy.title = event.target.value
//         this.setState({
//             editTodo: editTodoCopy
//         })
//     }

//     render() {
//         let { listTodos, editTodo } = this.state;
//         // let listTodos = this.state.listTodo;

//         let isEmptyObj = Object.keys(editTodo).length === 0

//         return (
//             <div className="list-todo-container">
//                 <AddTodo
//                     addNewTodo={this.addNewTodo}
//                 />

//                 <div className="list-todo-content">
//                     {listTodos && listTodos.length > 0 &&
//                         listTodos.map((todo, index) => {
//                             return (
//                                 <div className="todo-child" key={todo.id}>
//                                     {isEmptyObj ?
//                                         <span className="todo-child-title">{index + 1} - {todo.title}</span>
//                                         :
//                                         <>
//                                             {editTodo.id === todo.id ?
//                                                 <span className="input-edit">
//                                                     {index + 1} - <input value={editTodo.title}
//                                                         onChange={(event) => this.handleOnChangeEditTodo(event)}
//                                                     />
//                                                 </span>
//                                                 :
//                                                 <span className="todo-child-title">{index + 1} - {todo.title}</span>
//                                             }
//                                         </>
//                                     }

//                                     <button className="btn-option"
//                                         onClick={() => this.handleEditTodo(todo)}>
//                                         {isEmptyObj === false && editTodo.id === todo.id ?
//                                             'Save' : 'Edit'
//                                         }
//                                     </button>
//                                     <button className="btn-option"
//                                         onClick={() => this.handleDeleteTodo(todo)}>
//                                         Delete
//                                     </button>
//                                 </div>
//                             )
//                         })}
//                 </div>
//             </div>
//         )
//     }
// }

export default Color(ListTodo);