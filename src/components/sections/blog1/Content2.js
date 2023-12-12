import React, { Component } from 'react';
import Sidebar from '../../layouts/Blogsidebar';

class Content extends Component {
    render() {
        // Static or dummy data
        const staticData = {
            image: 'path/to/static/image.jpg',
            author: ' Dr.Sreeja L',
            postdate: 'October 10, 2023',
            title: 'Why Doctors should have technical skills and greater in-depth knowledge about Artificial Intelligence ?',
            htmltext: `<div id="article-content">
          
            <p>Complex medical technology is rapidly being introduced in health care, aimed at improving diagnosis and treatment. However, mistakes in the use of medical technology show that adequate expertise to apply it safely is often lacking, let alone to improve patient care through innovative technology use. We argue that a new health care professional, the Technical Physician, should be trained to have the expertise to translate medical technology use into improved patient-specific procedures.In this article an attempt is made to emphasize the need for doctors to acquire technical skills and in depth knowledge about Artificial intelligence.</p>
          
            <h4>Introduction</h4>
            <p>Doctors are person who is skilled in the science of medicine. Doctors are always talked about when it comes to their level of emotional intelligence and patient satisfaction.Doctors require more technical skills than ever before.Technical skills are the specialized knowledge and expertise required to perform specific tasks and use specific tools and programs in real world situations.</p>
          
            <ul>
              <li><strong>Increasing Competition</strong></li>
              <p>Doctors are businesspeople as much as they are doctors. Doctors have to know how to market themselves if they are going to get an edge over their competitors. One way to do this is to improve in the technical department. Enhancing one's technical skills enables them to offer more services to patients. </p>
              
              <li><strong>Do More for Your Clientele</strong></li>
              <p>Good business and making a living is about keeping your clients happy. Do more for your clientele by ensuring you can meet their needs. Before you enhance your technical skills, figure out what people actually want first. In other words, ask them what services they would like to see. </p>

              <li><strong>More revenue</strong></li>
              <p>It would be a mistake to say that acquiring new skills is simply about earning lots of money and being able to charge more for your services; although this is certainly an advantage. Most of the doctors make their money through the added specialist services they offer, you have to deliver service with a smile. </p>

              <!-- More content goes here -->
          
            </ul>
          
            
            <div>
                <h4>Artificial Intelligence</h4>
                <p>Artificial intelligence in healthcare is an overarching term used to describe the use of machine-learning algorithms and software, or artificial intelligence (AI), to mimic human cognition in the analysis, presentation, and comprehension of complex medical and health care data, or to exceed human capabilities by providing new ways to diagnose, treat, or prevent disease.
                    The primary aim of Doctors to acquire the knowledge about AI applications is to analyse relationships between clinical data and patient outcomes. AI programs are applied to practices such as diagnostics, treatment protocol development, drug development, personalized medicine, and patient monitoring and care in different fields.
                </p>
                <ul>
                <li><strong>Cardiovascular</strong></li>
                <p>Artificial intelligence algorithms have shown promising results in accurately diagnosing and risk stratifying patients with concern for coronary artery disease, showing potential as an initial triage tool. Other algorithms have been used in predicting patient mortality, medication effects, and adverse events following treatment for acute coronary syndrome. Wearables, smartphones, and internet-based technologies have also shown the ability to monitor patients' cardiac data points, expanding the amount of data.AI models can use and potentially enabling earlier detection of cardiac events occurring outside of the hospital.</p>
               
                <li><strong>Dermatology</strong></li>
                <p>Dermatologist-level classification of skin cancer from lesion images. Convolutional neural network that achieved 94% accuracy at identifying skin cells from microscopic Tzanck smear images.</p>
              
                <li><strong>Gastroenterology</strong></li>
                <p>AI can play a role in various facets of the field of gastroenterology. Endoscopic exams such as esophagogastroduodenoscopies (EGD) and colonoscopies rely on rapid detection of abnormal tissue. By enhancing these endoscopic procedures with AI, clinicians can more rapidly identify diseases, determine their severity, and visualize blind spots.</p>
              
                <li><strong>Infectious diseases</strong></li>
                <p>AI has shown potential in both the laboratory and clinical spheres of infectious disease medicine. Neural networks have been developed to rapidly and accurately detect a host response to COVID-19 from mass spectrometry samples. AI has also been investigated for improving diagnosis of meningitis, sepsis, and tuberculosis, as well as predicting treatment complications in hepatitis B and hepatitis C patients.</p>
              
                <li><strong>Oncology</strong></li>
                <p>AI has been explored for use in cancer diagnosis, risk stratification, molecular characterization of tumors, and cancer drug discovery. A particular challenge in oncologic care that AI is being developed to help doctors predict which treatment protocols will be best suited for each patient based on their individual genetic, molecular, and tumor-based characteristics which helps the physician to</p>
              
                <li><strong>Radiology</strong></li>
                <p>AI is being studied within the field of radiology to detect and diagnose diseases through Computerized Tomography (CT) and Magnetic Resonance (MR) Imaging.</p>
              
                <li><strong>Primary care</strong></li>
                <p>Primary care has become one key development area for AI technologies. AI in primary care has been used for supporting decision making, predictive modelling, and business analytics. AI helps the doctor in disease diagnosis, telemedicine, and maintaining Electronic Health Records.</p>
              
                
                </ul>              
           
            
            </div>

            <h4>Conclusion</h4>
            <p>Doctors have many reasons to acquire more technical skills. From a patient and business point of view it makes sense. Nevertheless, this desire to enhance your skillset should be tempered with understanding patient needs and delivering an empathetic service that gives a good value for the money.The future of medicine to include a mix of human intelligence and Artificial intelligence.This articles helps to understand the need for doctors to acquire technical skills and gain knowledge about Artificial intelligence and its application into various clinical practices.</p>
            

            <h4>References</h4>
            <ol>
              <li><a href="https://www.britannica.com/dictionary/doctor#:~:text=a%20%3A%20a%20person%20who%20is,treat%20sick%20and%20injured%20people">Britannica - Doctor Definition</a></li>
              <li><a href="https://www.inc.com/aj-agrawal/why-doctors-need-more-technical-skills-than-ever-before.html">Inc - Why Doctors Need More Technical Skills</a></li>
              <li><a href="https://www.coursera.org/articles/what-are-technical-skills">Coursera - What Are Technical Skills</a></li>
              <li><a href="https://www.bmj.com/content/363/bmj.k4563">BMJ - Could artificial intelligence make doctors obsolete?</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare#:~:text=The%20primary%20aim%20of%20health,and%20patient%20monitoring%20and%20care.">Wikipedia - Artificial Intelligence in Healthcare</a></li>
            </ol>
          </div>`,
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
