import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../data/service/service.json";

class Footer extends Component {
    render() {
        return (
            <footer className="sigma_footer style-5 pb-0">
                <div className="container">
                    <div className="sigma_info-wrapper style-26 mb-5">
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-map-marker-alt" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>Our Address</p>
                                <p className="secondary-color"><b>No 11& 12,10 th A Cross,Virupakshapura, Vidyaranyapuram, P.O. Bangalore 560097</b>
                                </p>
                            </div>
                        </div>
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-phone" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>Call Us</p>
                                <p className="secondary-color"><b>+91 8792294344</b>
                                </p>
                            </div>
                        </div>
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-envelope" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>Our Mail</p>
                                <p className="secondary-color"><b>drjoshua@cd4academy.com</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sigma_footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="sigma_footer-widget">
                                    <div className="sigma_footer-logo mb-4">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo_large_final.png"} alt="logo" />
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-sm-9">
                                            <p className="mb-0">It is a long established fact that a reader will be distracted by the
                                                readable.</p>
                                        </div>
                                    </div> */}
                                    <ul style={{ marginLeft: "45%" }} className="sigma_social-icons has-border mt-4 justify-content-start">

                                        <li>
                                            <a href="https://www.instagram.com/drjoshua_chacko/"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/drjoshuachacko"><i className="fab fa-linkedin" /></a>
                                        </li>
                                        {/* <li>
                                            <Link to="#"><i className="fab fa-google" /></Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Services</h5>
                                    <ul className="sigma_footer-links">
                                        <li>
                                            <Link to={"/service-1"}>Clinical Trial Data Annotation</Link>
                                        </li>
                                        <li>
                                            <Link to={"/service-2"}>Medical Image Labeling</Link>
                                        </li>
                                        <li>
                                            <Link to={"/service-3"}>AI-Based Research Assistance</Link>
                                        </li>

                                        {/* Data */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-3">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Useful Links</h5>
                                    <ul className="sigma_footer-links">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Subscribe</h5>
                                    <form>
                                        <input type="email" name="email" placeholder="Email" required />
                                        <button type="button" className="mt-3 btn-block">Subscribe</button>
                                        <p className="mb-0 mt-3">Get The Latest Updates via email. Any time you may unsubscribe</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between">
                        <div className="sigma_footer-copyright mt-0 mb-3 mb-sm-0">
                            <p className="mb-0">© CD4 Academy <Link to="#">2023</Link> | All Rights Reserved
                            </p>
                        </div>
                        <ul className="sigma_footer-links">
                            <li>
                                <Link to="#">Privacy</Link>
                            </li>
                            <li>
                                <Link to="#">Terms</Link>
                            </li>
                            <li>
                                <Link to="#">Sitemap</Link>
                            </li>
                            <li>
                                <Link to="#">Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;