import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from 'react-router-dom';

class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('>>>check res: ', res)
        //     })

        let res = await axios.get('https://reqres.in/api/users?page=1');
        console.log('>>check data: ', res.data.data)
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className='list-user-container'>
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((user, index) => {
                            return (
                                <div className="child" key={user.id}
                                    onClick={() => this.handleViewDetailUser(user)}
                                >
                                    {index + 1} - {user.first_name} - {user.last_name}
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUsers);