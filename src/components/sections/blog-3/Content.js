import React, { Component } from 'react';
import Sidebar from '../../layouts/Blogsidebar';

class Content extends Component {
    render() {
        // Static or dummy data
        const staticData = {
            image: 'path/to/static/image.jpg',
            author: ' Venkat',
            title: 'What is Medical Scribing & Career in Medical Scribing?',
            htmltext: ` <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Medical Scribing and Career Progression</title>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700|Rubik:300,400,500,700&display=swap">
              <style>
                body {
                  font-family: "Heebo", sans-serif;
                  line-height: 1.6;
                  color: #23059; /* Body text color */
                }
            
                h2, h3, h4, h5, h6 {
                  font-family: "Rubik", sans-serif;
                  color: #5CC8F2; /* Primary color */
                }
            
                h1 {
                  font-size: 2.5rem;
                }
            
                h2 {
                  font-size: 2rem;
                }
            
                p {
                  margin-bottom: 1.25em;
                }
            
                a {
                  color: #5CC8F2; /* Primary color */
                  text-decoration: none;
                }
            
                a:hover {
                  color: #3A96BF; /* Primary hover color */
                }
            
                section {
                  margin: 40px 0;
                  border-bottom: 1px solid #EBF2F3; /* Borders color */
                  padding-bottom: 40px;
                }
            
                section:last-child {
                  border-bottom: none;
                }
            
                .career-progression {
                  font-weight: bold;
                  color: #0ASDA6; /* Secondary color */
                }
            
                .common-jobs, .progression {
                  list-style-type: none;
                  padding: 0;
                }
            
                .common-jobs li, .progression li {
                  margin-bottom: 10px;
                }
            
                .common-jobs li::before {
                  content: "• ";
                  color: #0ASDA6; /* Secondary color */
                }
            
                .progression li::before {
                  content: "→ ";
                  color: #0ASDA6; /* Secondary color */
                }
              </style>
            </head>
            <body>
            
              <section>
                <p>Definition: A medical scribe is an allied health paraprofessional who specializes in charting physician-patient encounters in real time, such as during medical examinations. They also locate information and patients for physicians and complete forms needed for patient care. This can add up to a lot of hours of clerical work and record keeping, and it has become important to provide doctors with help.</p>
                <p>Depending on which area of practice the scribe works in, the position may also be called clinical scribe, ER scribe or ED scribe (emergency department), or just scribe (context is implicit). A scribe is trained in health information management and the use of health information technology to support it. A scribe can work on-site (hospital or clinic).</p>
                <p>Medical scribes have been proposed as a solution to the problems of excessive documentation, work-life balance, and burnout facing general internists. However, their acceptability to patients and effects on provider experience have not been tested in a real-world model of effectiveness. In this test of a modified practice model, scribes supported greater patient throughput and improved provider perceptions of documentation burden with no decrement in high patient satisfaction.</p>
              </section>
            
              <section>
                <h2>Medical Scribe Career Progression</h2>
                <p>A medical scribing graduate can land the title of 'Doctor Approved Medical Scribe.'</p>
                <p>Career paths for medical scribes are diverse and wide-ranging. With experience and proven success, medical scribes can progress to more senior roles or even executive-level positions, such as account manager or practice manager.</p>
                <div class="career-progression">
                  <p>Career After Medical Scribe:</p>
                  <ul class="progression">
                    <li>Trainer account manager</li>
                    <li>Trainer practice manager</li>
                    <li>Trainer nursing director</li>
                    <li>Research associate business manager officer</li>
                    <li>Research associate Center manager</li>
                    <li>Research associate partner</li>
                    <li>Physician Assistant</li>
                    <ul class="common-jobs">
                      <li>Chief executive officer</li>
                      <li>Nurse manager</li>
                      <li>Medical director</li>
                    </ul>
                    <li>Registered Nurse</li>
                    <ul class="common-jobs">
                      <li>Clinical manager</li>
                      <li>Patient care manager</li>
                      <li>Senior research coordinator</li>
                    </ul>
                    <li>Shift Leader</li>
                    <ul class="common-jobs">
                      <li>Clinical Director</li>
                      <li>Chief Medical Officer</li>
                      <li>Laboratory Manager</li>
                    </ul>
                    <li>Clinical research coordinator: Medical manager</li>
                  </ul>
                </div>
              </section>
            
              <section>
                <h2>Most Common Jobs Before Medical Scribe</h2>
                <ul class="common-jobs">
                  <li>Volunteer</li>
                  <li>Research Assistant</li>
                  <li>Internship</li>
                  <li>Sales Associate</li>
                  <li>Medical Assistant</li>
                  <li>Cashier</li>
                  <li>Server</li>
                  <li>Office Assistant</li>
                  <li>Tutor</li>
                  <li>Certified Nursing Assistant</li>
                  <li>Medical Transcriptionist</li>
                  <li>Customer Service Representative</li>
                  <li>Administrative Assistant</li>
                  <li>Teaching Assistant</li>
                  <li>Receptionist</li>
                  <li>Assistant</li>
                  <li>Laboratory Assistant</li>
                  <li>Waiters</li>
                  <li>Emergency Medical Technician</li>
                  <li>Pharmacist Technician</li>
                </ul>
              </section>
            
              <section>
                <h2>Most Common Career Progression For Medical Scribes</h2>
                <ul class="progression">
                  <li>Medical Assistant</li>
                  <li>Research Assistant</li>
                  <li>Volunteer</li>
                  <li>Internship</li>
                  <li>Server</li>
                  <li>Tutor</li>
                  <li>Pharmacist Technician</li>
                  <li>Emergency Medical Technician</li>
                  <li>Sales Associate</li>
                  <li>Trainer</li>
                  <li>Certificate Nursing Assistant</li>
                  <li>Student/Clinical Rotation</li>
                  <li>Research Associate, etc.</li>
                </ul>
              </section>
            
              <section>
                <p>These professionals assist doctors during patient visits and simultaneously record all information in EHRs. They raise queries in the EHRs so doctors can track the patient's progress and decide the further course of treatment. Medical scribes may also schedule appointments and procure lab reports for the doctor to analyze and interpret.</p>
              </section>
            
            </body>
            </html>
            
            
            
            
        `,
            reviews: [
                {
                    user: {
                        name: 'Dr Sreeja L',
                        image: 'path/to/static/user1.jpg',
                    },
                    commentdate: 'January 2, 2023',
                    comment: 'This is a static comment.',
                    replies: [
                        {
                            user: {
                                name: 'Dr Sreeja L',
                                image: 'path/to/static/user2.jpg',
                            },
                            commentdate: 'January 3, 2023',
                            comment: 'This is a static reply.',
                        },
                    ],
                },
            ],
        };

        return (
            <div className="sidebar-style-8">
                <div className="section pb-0 sigma_post-details style-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="sigma_post-details-inner">
                                    <div className="entry-content">
                                        <div className="sigma_post-details-meta">
                                            <span> <i className="far fa-user" /> By
                                                {staticData.author}</span>
                                            <span> <i className="far fa-calendar-alt" /> {staticData.postdate}</span>
                                        </div>
                                        <h2 className="entry-title">{staticData.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: staticData.htmltext }} />
                                    </div>
                                    <hr />
                                    

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
