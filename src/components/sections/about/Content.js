import React, { Component, Fragment } from 'react';
import Counter from './Counter';
import Team from './Team';
import Whyus from './Whyus';
import Workprocess from './Workprocess';
import Galleryslider from '../../layouts/Galleryslider';

class Content extends Component {
    render() {
        return (
            <Fragment>

                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center"> {/* Center-align the content */}
                                <h2 className='mb-5'>Our Verticals And Roadmap</h2>
                                <img src={process.env.PUBLIC_URL + "/assets/img/about-cd4.jpg"} alt={"roadmap"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center"> {/* Center-align the content */}
                                <h2 className='mb-5'>Data Security and Compliance</h2>
                                <p>At CD4 Academy, ensuring the highest standards of data security in medical research settings is a top priority. We strictly adhere to international data protection norms, including HIPAA and GDPR, to safeguard medical data at every step, from collection to storage and transmission. Utilizing advanced security technologies and robust encryption, we protect data against cyber threats. Our team is thoroughly trained in data security best practices, ensuring compliance and maintaining confidentiality. In case of any data breach, we have a comprehensive incident response plan to swiftly manage and mitigate any issues. This commitment to data security is fundamental to our ethos, ensuring that our client's sensitive information is always secure and handled with the utmost care and responsibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center"> {/* Center-align the content */}
                                <h2 className='mb-5'>Case Studies / Success Stories</h2>
                                <p>In a groundbreaking project with Dozee, a leader in healthcare technology, CD4 Academy embarked on a mission to redefine cardiac health monitoring. Our challenge was vast yet vital: annotate 30,000 ECG wave strips with unparalleled precision. The stakes were high, as each annotation held the potential to influence critical cardiac health decisions. Our team dove into this task with a fusion of deep medical insight and meticulous attention to detail. The result? An astounding 95% accuracy in ECG annotation, a benchmark that stands as a testament to our expertise and commitment to excellence in medical data management.
                                    Simultaneously, CD4 Academy ventured into the intricate world of Natural Language Processing (NLP) in a challenging endeavour with Precognitas. Our objective was to annotate 10,000 Electronic Health Records (EHRs) in a mere 20 days. This project required a rapid yet accurate approach, navigating the nuances of medical terminology and the critical aspect of patient data confidentiality.
                                    Through these collaborations, CD4 Academy has not just completed projects; we have driven innovation in healthcare. Our journey with Dozee and Precognitas showcases dual expertise: an unwavering dedication to quality in cardiac ECG annotation and a pioneering spirit in the realm of NLP for EHRs. We stand proud as a beacon of progress, pushing the boundaries of what's possible in medical data annotation and contributing profoundly to the evolution of healthcare technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pt-0">
                    <div className="container-fluid p-0">
                        {/* Add additional content here */}
                    </div>
                </div>
                <div className="section pb-0 bg-gray" />
                <Team />

            </Fragment>
        );
    }
}

export default Content;