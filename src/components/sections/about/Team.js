import React, { Component } from 'react';
import doctorblock from "../../../data/doctor/doctor.json";
import { Link } from 'react-router-dom';

class Team extends Component {
    render() {
        return (
            <div className="section section-padding bg-gray">
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">Meet Our Team</span>
                        <h3 className="title mb-0">Our Team</h3>
                    </div>
                    <div className="row">
                        {/* Data */}
                        <div className="col-lg-3 col-md-4 col-sm-6" >
                                <div className="sigma_team style-15">
                                    <div className="sigma_team-thumb">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/joshua.jpg"} alt={"joshua"} />
                                    </div>
                                    <div className="sigma_team-body">
                                        <h5>
                                            <Link to={"/doctor-details/" }>Dr.Joshua S Chacko</Link>
                                        </h5>
                                        <div className="sigma_team-categories">
                                            <Link to={"/doctor-details/" } className="sigma_team-category">Founder & CEO</Link>
                                        </div>
                                        <p>
                                        Leading AI and machine learning expert in healthcare product research and development, with 4 years of experience in health tech startups. They have expertise in industry use cases, product development, and clinical trials, and have collaborated with companies like Oracle. They have been involved in various NLP, computer vision, relationship extraction, and assertion projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6" >
                                <div className="sigma_team style-15">
                                    <div className="sigma_team-thumb">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/sharath-crop.jpg"} alt={"joshua"} />
                                    </div>
                                    <div className="sigma_team-body">
                                        <h5>
                                            <Link to={"/doctor-details/" }>Sharath Hari</Link>
                                        </h5>
                                        <div className="sigma_team-categories">
                                            <Link to={"/doctor-details/" } className="sigma_team-category">Chief Marketing Officer</Link>
                                        </div>
                                        <p>
                                        Has 18 years of experience in Marketing and Brand strategy. An ex-GM of Prestige and Naamdaris. Responsible for Planning, Designing, Implementing, and monitoring the overall business Marketing Communication and Brand Strategy. Identifying relevant mediums to go to market and scaling business with online and traditional mediums.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            
                           
                            
                            <div className="col-lg-3 col-md-4 col-sm-6" >
                                <div className="sigma_team style-15">
                                     <div className="sigma_team-thumb">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/profile-icon1-nobg.png"} alt={"joshua"} />
                                    </div> 
                                    <div className="sigma_team-body">
                                        <h5>
                                            <Link to={"/doctor-details/" }>Dr. Snehalatha D</Link>
                                        </h5>
                                        <div className="sigma_team-categories">
                                            <Link to={"/doctor-details/" } className="sigma_team-category">Content Team Manager</Link>
                                        </div>
                                        <p>
                                        With 14 years of cardiology experience, she has collaborated with major healthcare companies like Tricog, specializing in ECG annotations and diagnosis.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-lg-3 col-md-4 col-sm-6" >
                                <div className="sigma_team style-15">
                                     <div className="sigma_team-thumb">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/profile-icon1-nobg.png"} alt={"joshua"} />
                                    </div> 
                                    <div className="sigma_team-body">
                                        <h5>
                                            <Link to={"/doctor-details/" }>Dr Ananyan Sampath</Link>
                                        </h5>
                                        <div className="sigma_team-categories">
                                            <Link to={"/doctor-details/" } className="sigma_team-category">Content Team Lead</Link>
                                        </div>
                                        <p>
                                        An AIIMS Bhopal Gold medalist, MBBS graduate, and academic scholar with a keen interest in artificial intelligence, he has worked as a research scholar and content creator, focusing on Medical AI.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-lg-3 col-md-4 col-sm-6" >
                                <div className="sigma_team style-15">
                                     <div className="sigma_team-thumb">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/profile-icon1-nobg.png"} alt={"joshua"} />
                                    </div> 
                                    <div className="sigma_team-body">
                                        <h5>
                                            <Link to={"/doctor-details/" }>Dr. Raymond Haward</Link>
                                        </h5>
                                        <div className="sigma_team-categories">
                                            <Link to={"/doctor-details/" } className="sigma_team-category">Project Manager</Link>
                                        </div>
                                        <p>
                                        Project Manager of CD4 Academy handling multiple ongoing projects of the company and is a research scholar with vast experience in article writing and content creation.
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

export default Team;