
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
  render() {
    
    const headers = [
        'Team Excellence','Team Preparednes','Diverse Expertise','Flexibility','Unyielding Commitment','Scalability']
    
    const bulletPoints = [
        'CD4 Academy is home to a team of exceptional content professionals dedicated to ensuring quality, security, and scalability.',
        ' Our team, proficient in handling a wide array of medical content projects, can work both independently and collaboratively.',
        ' We have professionals from varied medical backgrounds, all of whom possess strong language skills and an in-depth knowledge of medical terminology.',
        ' We are adept at remote work, enabling us to operate efficiently from any location and ensuring availability around the clock.',
        'We place the utmost importance on accuracy, ethical standards, and data security, strictly adhering to industry standards and guidelines.',
        'Our team\'s ability to adapt allows us to swiftly scale based on project requirements, making us a versatile choice for varying workloads.',
      ];

    return (
      <Fragment>
        <div className="section section-padding">
          
          <div className="container">
            <div className="row align-items-center">
              <div className="sigma_about style-9 mt-lg-0 text-center">
                <div className="sigma_about-content ml-3">
                  <div className="row">
                    <h4 className='mb-5'>We are enhancing Medical Research through advanced data annotation collaborations</h4>
                    {bulletPoints.map((point, index) => (
                      <div key={index} className="col-md-6">
                        <div className="sigma_info style-15" style={{ marginBottom: '30px' }}>
                          <div className="sigma_info-description">
                            <h6>{headers[index]}</h6>
                            <p>{point}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Add your "Get A Quote" button or link here */}
                  {/* <Link to="/contact" className="sigma_btn">
                    Get A Quote
                    <i className="fal fa-arrow-right ml-3" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Content;
