import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import whyus from "../../../data/whyus.json";

class Whyus extends Component {
    render() {
        return (
            <div className="section section-padding" style={{ padding: "1%", marginTop: "5%" }}>
                <div className="container" >
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
                                    <h4 style={{ marginRight: "5%", marginLeft: "2%" }}>Our mission is ambitious yet focused: to transform healthcare
                                        through AI and create 1000+ AI-equipped doctors by 2025.
                                    </h4>
                                    <p style={{ marginRight: "5%", marginLeft: "2%" }}>Our primary objective is to bridge the gap between technology and healthcare and bring both of the industries under one umbrella. Drawing from our vast expertise, experience, and cutting-edge technology, we offer tailored and compliant solutions. We consistently uphold the highest standards of professionalism, ethics, and excellence. Our passion revolves around creating a world of doctors who are excellent clinicians skilled in the field of Artificial Intelligence and use the same in their day to day clinical practice</p>

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