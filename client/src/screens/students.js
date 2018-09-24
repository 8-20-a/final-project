import React, { Component } from 'react';

class Student extends Component {
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
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" href="/admin"><i className="fa fa-home" aria-hidden ="true"></i>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/reports"><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Reports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/schedules"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>Schedules</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/students"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>Students</a>
                            </li>
                         </ul>
                    </div>
                </div>
            <div className= "jumbotron">
            <div>
            <h1>Here is where the admin will load the list of students</h1>
        </div>
      </div>
    </div>    
        )
    };
}
export default Student;
