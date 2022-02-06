import React from "react";
import { ToastContainer, toast } from 'react-toastify';


class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing todo's title`)
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }


    render() {
        let { title } = this.state;
        return (
            <>
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(event) => this.handleOnChangeTitle(event)}
                    />
                    <button
                        onClick={() => this.handleAddTodo()}
                        className="btn-add" type="button">
                        Add
                    </button>
                </div>
            </>
        )
    }
}

// class AddTodo extends React.Component {

//     state = {
//         title: ''
//     }

//     handleOnChangeTitle = (event) => {
//         this.setState({
//             title: event.target.value,
//         })
//     }

//     handleAddTodo = () => {
//         if (!this.state.title) {
//             toast.error(`Missing todo's title `)
//             return;
//         }
//         let todo = {
//             id: Math.floor(Math.random() * 100),
//             title: this.state.title
//         }
//         this.props.addNewTodo(todo);
//         this.setState({
//             title: ''
//         })
//     }
//     render() {
//         let { title } = this.state;

//         return (
//             <div className="add-todo">
//                 <input type="text" value={title}
//                     onChange={(event) => this.handleOnChangeTitle(event)}
//                 />
//                 <button className="btn-add" type="button"
//                     onClick={() => this.handleAddTodo()}>
//                     Add
//                 </button>
//             </div>
//         )
//     }
// }

export default AddTodo;