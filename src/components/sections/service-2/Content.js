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
                            <div className="col-md-12"> {/* Center-align the content */}
                                <h5 style={{marginTop:"2%"}} className='text-center'>Medical Image Labeling in AI</h5>
                                <p>Medical image labeling plays a crucial role in training AI models for healthcare and medical imaging. Here are some key aspects to consider:</p>
                                <ul className="custom-list">
                                    <li>Annotation adds labels, bounding boxes, or segmentation masks to medical images.</li>
                                    <li>Labeling involves assigning a single label to an image, enhancing analysis accuracy.</li>
                                    <li>Medical image annotation tools like MITK Workbench and 3D Slicer simplify the labeling process.</li>
                                    <li>Formats like DICOM and NIfTI enable annotation and labeling of medical images.</li>
                                    <li>Multi-level quality assurance ensures the accuracy and consistency of labels.</li>
                                </ul>
                                <p style={{marginTop:"3%"}}>Tools like Labelbox V7 and Kili Technology BasicAI offer features like annotation support, collaboration, and compatibility with popular medical imaging software. They allow importing and exporting DICOM and NIfTI files, labeling CT, MRI, and PET medical images for computer vision models.</p>

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
