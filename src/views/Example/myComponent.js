import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    /*
    JSX => return block
    <></> - <React.Fragment></React.Fragment>
    */

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project Manager', salary: '1000' },
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        console.log('check job from parent: ', job)
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs,
        })
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;