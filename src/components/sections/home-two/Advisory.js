import React, { Component } from 'react';
import doctorblock from "../../../data/doctor/doctor.json";
import { Link } from 'react-router-dom';

class Advisory extends Component {
    render() {
        return (
            <div className="section section-padding bg-gray">
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">Meet Advisory Board</span>
                        <h3 className="title mb-0">Advisory Board</h3>
                    </div>
                    <div className="row justify-content-center">
                        {/* Data */}
                        <div className="col-lg-3 col-md-4 col-sm-6" >
                            <div className="sigma_team style-15">
                                <div className="sigma_team-thumb">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Jaideep.png"} alt={"joshua"} />
                                </div>
                                <div className="sigma_team-body">
                                    <h5>
                                        <Link to={"/"}>Jaideep Rayapudi, M.D.</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/"} className="sigma_team-category">Advisor</Link>
                                    </div>
                                    
                                    <p>
                                  
With two decades in the healthcare sector, this passionate and driven leader focuses on delivering innovative solutions for improved patient outcomes. Serving as the Vice President of Clinical Solutions at Precognitas, they leverage AI and data science for personalized insights in healthcare. Holding an MD in Physiology, their expertise spans human physiology, medical education, and interprofessional healthcare informatics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Advisory;
