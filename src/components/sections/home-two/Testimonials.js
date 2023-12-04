import React, { Component } from 'react';
import testimonials from "../../../data/testimonials.json";
import { getAuthor } from "../../../helper/helper"

class Testimonials extends Component {
    render() {
        return (
            <div className="container">
                <div className="section-title centered">
                    <span className="subtitle">Clients</span>
                    <h3 className="title">Our Clients</h3>
                </div>
                <div className="row">
                    
                    <div className="col-md-12" >
                        <div className="sigma_testimonial style-13 text-left bg-white" >
                            <img src={`${process.env.PUBLIC_URL}/assets/img/clients2.jpeg`}/>
                        </div>
                    </div>
                    
                </div>
                <div className='row'>
                <div className="col-md-12" >
                        <div className="sigma_testimonial style-13 text-left bg-white" >
                            <img src={`${process.env.PUBLIC_URL}/assets/img/clients3.jpeg`}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;