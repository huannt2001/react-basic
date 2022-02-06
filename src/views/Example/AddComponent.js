import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing required parameter')
            return;
        }
        console.log('check data: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })
        console.log(this.props)
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitle(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangSalary(event)}
                />
                <br />
                <input type="submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                /> <br />
            </form>
        )
    }
}

export default AddComponent;