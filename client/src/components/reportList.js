import React, { Component } from 'react';

import axios from 'axios';

class ReportList extends Component {
    state = {
        reports: []
    }

    specialtyProps = {
        Obstetrics: 'specialtyObhours',
        Surgery: 'specialtyOphours',
        FamilyMedicine: 'specialtyFmhours',
        Pediatrics: 'specialtyPedhours'
    }

    delete(sr) {
        axios.delete(`/studentreports/${sr._id}`).then(() => {
            window.location.reload();
        })
    }     

  render() {
    let reports = {};

    if(this.props.reports && this.props.reports.length) {
        this.props.reports.forEach(rep => {
            if(reports.hasOwnProperty(rep.specialty)) {
                reports[rep.specialty].push(rep);
            } else {
                reports[rep.specialty] = [rep];
            }
        });
    }

    return (
        <div>
            <div>
                <h3 className="hours-title"> Student Hours:</h3><hr></hr>
                {this.props.user ? Object.keys(this.specialtyProps).map((spec) => (
                    <ul className="list-group student-hours-list"> 
                        <li className="list-group-item hours-display" key={spec}>{spec} Hours:
                       {this.props.user[this.specialtyProps[spec]].current}/
                        {this.props.user[this.specialtyProps[spec]]. target} (Target)</li></ul>
                )) : ""}
            </div>
       <div>
       <h3 className="hours-title">Student Reports:</h3><hr></hr>
        <div className="accordion" id="accordionExample">
        {(reports) ? Object.keys(reports).map((spec) => (
            <div className="card reports" key={spec}>
                <div className="card-header reports" id={"heading" + spec}>
                    <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse" + spec.replace(' ', '')} aria-expanded="true" aria-controls="collapseOne">
                        {spec}
                        </button>
                    </h5>
                </div>
                <div id={"collapse" + spec.replace(' ', '')} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        <div className="list-group"> 
                        {reports[spec].map(rep => (
                            <a key={rep._id} href="#" className="list-group-item flex-column align-items-start">
                                <div className="d-flex justify-content-between">
                                  <h5 className="mb-1">{rep.date}</h5>
                                </div><br></br>
                                <p className="mb-1">{rep.report}</p>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary delete-report" onClick={() => this.delete(rep)}>Delete</button>
                                </div>
                                {/* <small><center>{rep._id}</center></small> */}
                            </a>
                        ))}
                        </div>
                    </div>
                </div>   
            </div>  
        )):""}
        </div>
    </div>
   </div> 
    );
  };
}

export default ReportList;