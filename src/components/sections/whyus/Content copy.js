import React, { Component, Fragment } from 'react';
import Contacticons from './Contacticons';
import Contactform from './Contactform';
import Contactmap from './Contactmap';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Contacticons />
                {/* <Contactform /> */}
               <h1>You can have your office map location embedded here</h1>
            </Fragment>
        );
    }
}

export default Content;