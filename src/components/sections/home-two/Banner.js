import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth,
        };

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        // Set initial window width on mount
        this.setState({ windowWidth: window.innerWidth });

        // Add event listener for window resize
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        // Clean up the event listener on component unmount
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        // Update window width on resize
        this.setState({ windowWidth: window.innerWidth });
    }
    render() {
        const { windowWidth } = this.state;

        const divStyle = windowWidth > 767 ? {
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-ai.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            /* Other styles for your component */
        } :
            {
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-ai-blur.png)`,
                backdropFilter: "blur(100px)"

            };




        return (
            <div className="sigma_banner light-bg style-10 bg-cover bg-cover-ai" style={divStyle}>
                {/* <img src={process.env.PUBLIC_URL + "/assets/img/bgm-1.png"} className="tr" alt="img" />
                <img src={process.env.PUBLIC_URL + "/assets/img/bg-ai-new1.png"} className="br" alt="img" /> */}
                <div className="banner-slider-inner" >
                    <div className="sigma_banner-text" >
                        <div className="container" >
                            <div className="row align-items-center" >

                                <div className="col-lg-6" style={{ backdropFilter: "blur(100px)", borderRadius: "10px", paddingLeft: "3%", paddingRight: "3%" }}>
                                    <h5 className="primary-color" style={{ marginTop: "5%" }}>HealthTech &amp; Medical Education</h5>
                                    <h1 className="title text-white">
                                        Welcome to CD4 ACADEMY
                                    </h1>
                                    <div className='description text-white'>
                                        <p>
                                            WE at CD4 ACADEMY, founded in 2020 in Bangalore, and led by a
                                            proficient team of 30 doctors with many years of experience in
                                            health informatics and AI, is at the vanguard of AI Consulting in
                                            healthcare. Our endeavour is to seamlessly integrate technology
                                            with healthcare, offering courses on AI/ML fundamentals to
                                            medical students and doctors to foster their ability to enhance
                                            patient care using technology. With subject matter experts in
                                            fields like Cardiology, Radiology, Pulmonology, Neurology, we're
                                            also pioneering the development of an AI algorithm in diagnostics,
                                            aiming to revolutionize healthcare practices among professionals
                                            in India.
                                        </p>
                                    </div>
                                    <div className="banner-links d-flex align-items-center" style={{ marginBottom: "5%" }}>
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