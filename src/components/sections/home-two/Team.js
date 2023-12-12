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
                                        <Link to={"/"}>Dr.Joshua S Chacko</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/"} className="sigma_team-category">Founder & CEO</Link>
                                    </div>
                                    <div className="sigma_team-categories">
                                        <a href="/" style={{ fontSize: "12px", color: "#3A96BF" }} >drjoshua@cd4academy.com</a>
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
                                        <Link to={"/"}>Sharath Hari</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/"} className="sigma_team-category">Chief Marketing Officer</Link>
                                    </div>
                                    <div className="sigma_team-categories">
                                        <a href="/" style={{ fontSize: "12px", color: "#3A96BF" }}> sharath@cd4academy.com</a>
                                    </div>
                                    <p>
                                        Has 18 years of experience in Marketing and Brand strategy. An ex-GM of Prestige and Naamdaris. Responsible for Planning, Designing, Implementing and Monitoring the overall business Marketing Communication and Brand Strategy. Identifying relevant mediums to go to market and scaling business with online and traditional mediums.
                                    </p>

                                </div>
                            </div>

                        </div>



                        <div className="col-lg-3 col-md-4 col-sm-6" >
                            <div className="sigma_team style-15">
                                <div className="sigma_team-thumb">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/shantala.jpg"} alt={"joshua"} />
                                </div>
                                <div className="sigma_team-body">
                                    <h5>
                                        <Link to={"/"}>Dr. Snehalatha D</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/"} className="sigma_team-category">Content Team Manager</Link>
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
                                    <img src={process.env.PUBLIC_URL + "/assets/img/anayan.jpg"} alt={"joshua"} />
                                </div>
                                <div className="sigma_team-body">
                                    <h5>
                                        <Link to={"/"}>Dr Ananyan Sampath</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/"} className="sigma_team-category">Content Team Lead</Link>
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
                                    <img src={process.env.PUBLIC_URL + "/assets/img/raymond2.jpg"} alt={"joshua"} />
                                </div>
                                <div className="sigma_team-body">
                                    <h5>
                                        <Link to={"/"}>Dr. Raymond Haward</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/"} className="sigma_team-category">Project Manager</Link>
                                    </div>
                                    <p>
                                        Project Manager of CD4 Academy handling multiple ongoing projects of the company and is a research scholar with vast experience in article writing and content creation.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6" >
                            <div className="sigma_team style-15">
                                <div className="sigma_team-thumb">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/jerin2.png"} alt={"jerin"} />
                                </div>
                                <div className="sigma_team-body">
                                    <h5>
                                        <Link to={"/"}>Jerin Mathew</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/"} className="sigma_team-category">Strategic and Technology Head</Link>
                                    </div>
                                    <p>
                                        A Digital Transformation Architect and Six Sigma Yellow Belt professional, specializes in Snow-Public Sector Digital Services. With a background in Business Analysis at the University of Otago and the Palmerston North City Council, he excels in Technical Solution Design and Agile/Waterfall Project Implementation.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6" >
                            <div className="sigma_team style-15">
                                <div className="sigma_team-thumb">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Jethin2.jpeg"} alt={"joshua"} />
                                </div>
                                <div className="sigma_team-body">
                                    <h5>
                                        <Link to={"/"}>Jethin Mathew</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/"} className="sigma_team-category">Data Lead</Link>
                                    </div>
                                    <p>

                                        A seasoned Full Stack Developer and Six Sigma Yellow Belt, he excels in rapid enterprise application development using extreme programming. With expertise in Azure DevOps, Python, and React.js, he adeptly manages requirements, creates APIs, and designs UI. His impactful contributions include developing robust solutions in the logistics industry through the application of AI/ML models and algorithms.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6" >
                            <div className="sigma_team style-15">
                                <div className="sigma_team-thumb">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Martin.jpeg"} alt={"joshua"} />
                                </div>
                                <div className="sigma_team-body">
                                    <h5>
                                        <Link to={"/"}>Martin West</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/"} className="sigma_team-category">AI Confidant</Link>
                                    </div>
                                    <p>

                                        From seasoned IT consultant to Janars CEO, he boasts 30+ years of expertise from PwC, IBM, and Microsoft. Beyond project management, his forte lies in dissecting intricate problems. As a qualified mediator, he shaped Neutral Advocate into Janars, aligned with client logos, showcasing a history of innovation.
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