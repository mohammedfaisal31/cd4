import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import whyus from "../../../data/whyus.json";

class Whyus extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-lg-6">
                            <div className="sigma_about style-9 w-100 h-100">
                                <div className="sigma_about-image-1 has-no-content">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/CD4-MISSION.jpg"} alt="img" />
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-6"> */}
                            <div className="sigma_about style-9 mt-5 mt-lg-0 text-center">
                                <div className="title ">
                                    <h1 className="title mb-5">Our Mission</h1>
                                </div>
                                
                                <div className="sigma_about-content ml-3">
                                    <div className="row">
                                    <h4>Our mission is ambitious yet focused: to transform healthcare
                                    through AI and create 1000 AI-equipped doctors by 2025.
                                    </h4>
                                    <p >Our primary objective is to deliver top-notch and reliable medical  services to a global clientele. Drawing from our vast expertise, experience, and cutting-edge technology, we offer tailored and compliant solutions. We consistently uphold the highest standards of professionalism, ethics, and excellence. Our passion revolves around creating and refining medical content that positively influences healthand well-being</p>
                                        
                                        {/* Data */}
                                        {/* {whyus.slice(0, 2).map((item, i) => (
                                            <div className="col-md-6" key={i}>
                                                <div className="sigma_info style-15" style={{ marginBottom: 30 + "px" }}>
                                                    <div className="sigma_info-description">
                                                        <h5>
                                                            <Link to="#">{item.title}</Link>
                                                        </h5>
                                                        <p>{item.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))} */}
                                        {/* Data */}
                                    </div>
                                    {/* <Link to="/contact" className="sigma_btn">
                                        Get A Quote
                                        <i className="fal fa-arrow-right ml-3" />
                                    </Link> */}
                                </div>

                                <div className="sigma_about style-9 w-100 h-100 mt-5">
                                <div className="sigma_about-image-1 has-no-content">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/CD4-MISSION.jpg"} alt="img" />
                                </div>
                                </div>
                                
                            </div>
                        {/* */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Whyus;