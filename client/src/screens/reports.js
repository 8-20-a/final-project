import React, { Component } from 'react';
import axios from 'axios';
import ReportList from '../components/reportList'

class Reports extends Component {
    // constructor(props) {super(props)
    state={
        currentSelectedUser: null,
        userlist:[],
        studentreports: []
    }

    componentDidMount(){
        this.loadUsers();
    }

    loadUsers = () => {
        axios.get('/users/all').then((res) => {
            console.log(res)
            this.setState({
                userlist: res.data,
            })
        })
    }

    loadReports = e => {
        let userId = e.target.value;

        axios.get(`/studentreports/${userId}`).then(res => {
            console.log(res);
           this.setState({
                currentSelectedUser: this.state.userlist.find(u => u._id == userId),
                studentreports: res.data
            });
        });
    }
   

    render(){
        return (
            <div>
            <div className="welcome-student-dash">
                <div className="welcome-info">
                    <p className="welcome-text">Welcome to the Admin Dashboard</p>
                    </div>
                    </div>
                <div className="my-vertical-nav">
                <div className="row vertical-test">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="/reports"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Reports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/schedules"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedules</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/students"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>Students</a>
                            </li>
                         </ul>
                    </div>
                </div>
                <form>
                    <div className="report-form-container">
                    <label for="StudentInputForm" className="student-select">Select student name to view hours and reports:</label>
                    <select className="form-control" id="exampleFormControlSelect0" name="userId" onChange={(e) => this.loadReports(e)}>
                    {(this.state.userlist) ? this.state.userlist.map((user,index) => (
                        <option key={user._id} value={user._id}>{user.name}</option>
                           )):""}
                    </select><br></br><br></br>
                    </div>
                    
         </form> 
                <ReportList reports={this.state.studentreports} user={this.state.currentSelectedUser} />
         </div> 
        );
    };
}
export default Reports;
