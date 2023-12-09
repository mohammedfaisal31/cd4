import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    
    render() {
        return (
            <div className="sigma_banner light-bg style-10 bg-cover"     style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-ai.png)`,
                backgroundSize: 'cover', // Adjust as needed
                backgroundPosition: 'center', // Adjust as needed
                /* Other styles for your component */
              }}>
                {/* <img src={process.env.PUBLIC_URL + "/assets/img/bgm-1.png"} className="tr" alt="img" />
                <img src={process.env.PUBLIC_URL + "/assets/img/bg-ai-new1.png"} className="br" alt="img" /> */}
                <div className="banner-slider-inner">
                    <div className="sigma_banner-text" >
                        <div className="container">
                            <div className="row align-items-center">
                                
                                <div className="col-lg-6" style={{backdropFilter:"blur(100px)",borderRadius:"10px",paddingLeft:"3%",paddingRight:"3%"}}>
                                    <h5 className="primary-color" style={{marginTop:"5%"}}>HealthTech &amp; Medical Education</h5>
                                    <h1 className="title text-white">
                                    Welcome to CD4 ACADEMY
                                    </h1>
                                    <div className='description text-white'>
                                        <p>
                                        WE at CD4 ACADEMY, founded in 2020 in Bangalore, and led by a
                                        proficient team of 30 doctors with many years of experience in
                                        health informatics and AI, is at the vanguard of AI Consulting in
                                        healthcare. Our endeavor is to seamlessly integrate technology
                                        with healthcare, offering courses on AI/ML fundamentals to
                                        medical students and doctors to foster their ability to enhance
                                        patient care using technology. With subject matter experts in
                                        fields like Cardiology, Radiology, Pulmonology, Neurology, we're
                                        also pioneering the development of an AI algorithm in diagnostics,
                                        aiming to revolutionize healthcare practices among professionals
                                        in India.
                                        </p>
                                    </div>
                                    <div className="banner-links d-flex align-items-center" style={{marginBottom:"5%"}}>
                                        <Link to="/contact" className="sigma_btn">Contact us</Link>
                                        <Link to="/about" className="sigma_btn light ml-4">About US</Link>
                                    </div>
                                </div>
                               
                                {/* <div className="col-lg-6 d-none d-lg-block">
                                    <div className="sigma_banner-image mt-5 mt-lg-0">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/bg-1.jpeg"} alt="img" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;