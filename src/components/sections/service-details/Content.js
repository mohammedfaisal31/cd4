import React from 'react';
import { Link } from 'react-router-dom';
import { getService } from '../../../helper/serviceHelper';
import { socialShare } from '../../../helper/helper';
import Popuphelper from '../../../helper/Popuphelper';
import Sidebar from '../../layouts/Servicesidebar';

class Content extends Popuphelper {
    constructor(props) {
        super(props);
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const detailId = this.props.detailId;
        const item = getService(detailId);
        return (
            <div className="sidebar-style-9 service-details">
                <div className="section sigma_post-details">
                    <div className="container">
                        <div className="row">
                            
                            {/* Sidebar Start */}
                            <div className="col-lg-4">
                                <Sidebar />
                            </div>
                            {/* Sidebar End */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;