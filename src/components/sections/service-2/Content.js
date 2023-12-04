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
                                <h2 className='mb-5'>Medical Image Labeling</h2>
                                <p>Our medical image labeling service focuses on improving diagnostic accuracy and AI diagnostic tools by utilizing precise image segmentation and annotation tools. We use AI-assisted labeling and multimodal data integration to enhance diagnostic imaging accuracy and create high-quality datasets, which are essential for training AI models and developing advanced imaging technologies, contributing significantly to radiomics and other imaging techniques.</p>
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
