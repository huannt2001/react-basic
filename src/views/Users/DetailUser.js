import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            // console.log('>>>check res user: ', res.data.data)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    handleBackButton = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0;
        console.log('>>>check props: ', this.props)
        return (
            <>
                <div>Hello detail user id: {this.props.match.params.id}</div>
                {!isEmptyObj &&
                    <>
                        <div>User's name: {user.first_name} - {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// class DetailUser extends React.Component {
//     state = {
//         user: {}
//     }

//     async componentDidMount() {
//         let id = this.props.match.params.id
//         let res = await axios.get(`https://reqres.in/api/users/${id}`)
//         console.log('>>> check id: ', res.data.data)
//         this.setState({
//             user: res && res.data && res.data.data ? res.data.data : {}
//         })
//     }

//     handleBackButton = () => {
//         this.props.history.push('/user')
//     }

//     render() {
//         let { user } = this.state;
//         let isEmptyObj = Object.keys(user).length === 0;
//         return (
//             <>
//                 <div>Hello detail user {this.props.match.params.id}</div>
//                 {!isEmptyObj &&
//                     <div className="list-detail-user">
//                         {console.log('>>> check user name: ', user.last_name)}
//                         <div>User'name: {user.first_name} - {user.last_name}</div>
//                         <div>User'email: {user.email}</div>
//                         <div>
//                             <img src={user.avatar} />
//                         </div>
//                         <button type="button" onClick={() => this.handleBackButton()}>Back</button>
//                     </div>

//                 }
//             </>
//         )
//     }
// }

export default withRouter(DetailUser);