import React, { Component, Fragment } from 'react';
import Galleryslider from '../../layouts/Galleryslider';
import { Link } from 'react-router-dom';
import serviceblock from '../../../data/service/service.json';
import { getFilteredPosts } from '../../../helper/serviceHelper';
import Pagination from "react-js-pagination";

class Content extends Component {
    render() {
        
        return (
            <Fragment>
                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center"> {/* Center-align the content */}
                                <h2 className='mb-5'>AI-Based Research Assistance</h2>
                                <p>CD4 Academy is a leading provider of expert data annotation services for AI-based research in healthcare. They prepare and curate datasets for AI model training, providing annotations for machine learning algorithms. Their iterative approach, in collaboration with AI research teams, ensures continuous improvement of data quality. This service accelerates the development of AI models in healthcare and fosters innovation in research, bridging the gap between data science and medical expertise. CD4 Academy's commitment to data leveraging is backed by domain expertise, technological capability, and ethical and regulatory standards</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pt-0">
                    <div className="container-fluid p-0">
                        {/* Add additional content here */}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Content;
