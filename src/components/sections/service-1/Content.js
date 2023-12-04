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
                                <h2 className='mb-5'>Clinical Trial Data Annotation</h2>
                                <p>CD4 Academy's clinical trial data annotation service enhances trial data usability and accuracy for researchers and healthcare professionals. The team categorizes data, extracts critical information, and ensures compliance with regulatory standards like HIPAA and GDPR. This process improves data accessibility, and accuracy in trial outcomes analysis, and facilitates regulatory compliance, supporting clinical research integrity and efficiency.</p>
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
