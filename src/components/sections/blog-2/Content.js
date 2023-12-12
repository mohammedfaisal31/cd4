import React, { Component } from 'react';
import Sidebar from '../../layouts/Blogsidebar';

class Content extends Component {
    render() {
        // Static or dummy data
        const staticData = {
            image: 'path/to/static/image.jpg',
            author: ' Dr.Ananyan Sampath',
            postdate: 'November 11, 2023',
            title: 'Will AI take over Healthcare Jobs?',
            htmltext: `    <div>
            <h4><strong>AI can't replace Healthcare jobs completely</strong></h4>
            <ul>
                <li><strong>Artificial intelligence can diagnose and recommend treatments, analyze medical data.</strong></li>
                <p>AI can't provide the human touch and emotional support that patients often seek from doctors.</p>
                <li><strong>AI lacks empathy, compassion, and understanding that humans have.</strong></li>
                <p>AI can't sense the feelings and needs of the patients and can't build trust and relationships.</p>
            </ul>
            <br/>
            <h4><strong>Advantages of AI in Healthcare Jobs</strong></h4>
            <ul>
                <li><strong>Administrative workflow in Hospital:</strong> AI and automation can perform tasks, freeing up time for other activities.</li>
                <li><strong>Virtual nursing assistants:</strong> AI virtual nurse assistants can answer questions, forward reports, and help patients schedule visits.</li>
                <li><strong>Dosage error reduction:</strong> AI can help identify errors in medication self-administration, leading to better outcomes.</li>
                <li><strong>Safer surgeries:</strong> AI enables surgeons to operate in tiny spaces, reducing risks and improving recovery times.</li>
            </ul>
            <br/>
            <h4><strong>Disadvantages of AI in Healthcare Jobs</strong></h4>
            <ul>
                <li><strong>No Ethics:</strong> Incorporating ethics and morality into Artificial Intelligence is challenging.</li>
                <p>Privacy Concerns: AI relies on sensitive data, raising concerns about breaches and misuse.</p>
                <li><strong>Bias and Fairness:</strong> AI algorithms may inherit biases, leading to unequal treatment and healthcare disparities.</li>
                <p>Lack of Human Oversight: Relying too heavily on AI can lead to reduced human oversight and potential errors.</p>
                <li><strong>Initial Costs:</strong> Implementing AI in healthcare requires significant upfront investments in technology and training.</li>
                <p>Technical Issues: AI systems can produce incorrect or unpredictable results, posing risks in critical healthcare settings.</p>
            </ul>
            <p><strong>Conclusion:</strong> AI is a tool, not a substitute for human healthcare workers.</p>
        </div>
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
