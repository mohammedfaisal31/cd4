import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/blog-2/Content.js';

const pagelocation = "Blog Details";

class Blogdetails extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>CD4 Academy | {"Future of AI in Healthcare"}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: "Future of AI in Healthcare" }} />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Blogdetails;