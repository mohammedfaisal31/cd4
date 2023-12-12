import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/blog1/Content2.js';

const pagelocation = "Blog Details";

class Blogdetails extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>CD4 Academy | Need for technical skills in Doctors</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: "Need for technical skills in Doctors" }} />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Blogdetails;