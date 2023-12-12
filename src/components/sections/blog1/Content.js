import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }

    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600");
    }

    render() {
        return (
            <div className="sidebar-style-8">
                <div className="section pb-0 sigma_post-details style-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="sigma_post-details-inner">
                                    <div className="entry-content">
                                        <h2 className="entry-title">Why Doctors should have technical skills and greater in-depth knowledge about Artificial Intelligence?</h2>
                                        <p>Dr. Sreeja L</p>
                                        {/* ABSTRACT and KEYWORDS sections */}
                                        {/* INTRODUCTION section */}
                                        <h3>Increasing Competition</h3>
                                        <p>Doctors are businesspeople as much as they are doctors...</p>

                                        <h3>More Revenue</h3>
                                        <p>It would be a mistake to say that acquiring new skills is simply about earning lots of money...</p>

                                        {/* Artificial Intelligence section */}
                                        <h2>Artificial Intelligence</h2>
                                        <p>Artificial intelligence in healthcare is an overarching term used to describe the use of machine-learning algorithms and software...</p>

                                        {/* Cardiovascular section */}
                                        <h3>Cardiovascular</h3>
                                        <p>Artificial intelligence algorithms have shown promising results in accurately diagnosing and risk stratifying patients with concern for coronary artery disease...</p>

                                        {/* Dermatology section */}
                                        <h3>Dermatology</h3>
                                        <p>Dermatologist-level classification of skin cancer from lesion images...</p>

                                        {/* Gastroenterology section */}
                                        <h3>Gastroenterology</h3>
                                        <p>AI can play a role in various facets of the field of gastroenterology...</p>

                                        {/* Infectious diseases section */}
                                        <h3>Infectious diseases</h3>
                                        <p>AI has shown potential in both the laboratory and clinical spheres of infectious disease medicine...</p>

                                        {/* Oncology section */}
                                        <h3>Oncology</h3>
                                        <p>AI has been explored for use in cancer diagnosis, risk stratification, molecular characterization of tumors...</p>

                                        {/* Radiology section */}
                                        <h3>Radiology</h3>
                                        <p>AI is being studied within the field of radiology to detect and diagnose diseases through Computerized Tomography (CT) and Magnetic Resonance (MR) Imaging...</p>

                                        {/* Primary care section */}
                                        <h3>Primary care</h3>
                                        <p>Primary care has become one key development area for AI technologies...</p>

                                        {/* CONCLUSION section */}
                                        <h2>Conclusion</h2>
                                        <p>Doctors have many reasons to acquire more technical skills...</p>

                                        {/* REFERENCES section */}
                                        <h2>References</h2>
                                        <ul>
                                            <li><a href="https://www.britannica.com/dictionary/doctor#:~:text=a%20%3A%20a%20person%20who%20is,treat%20sick%20and%20injured%20people">Britannica - Doctor</a></li>
                                            {/* Add other references as needed */}
                                        </ul>
                                    </div>
                                    {/* Post Meta Start */}
                                    <div className="sigma_post-details-meta">
                                        <div className="sigma_post-details-meta-item sigma_post-share">
                                            <h5 className="mb-0">Share:</h5>
                                            <ul className="sigma_sm ml-4">
                                                {/* Social Share Links */}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Post Meta End */}
                                </div>
                            </div>
                            {/* Sidebar Start */}
                            {/* Removed Sidebar */}
                            {/* Sidebar End */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
