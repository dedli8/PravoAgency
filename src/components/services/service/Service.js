import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Service extends Component {
    render() {
        const {icon, title, contentTitle, contentList} = this.props.service;
        return (
            <div className='service'>
                <div className="title-box">
                {icon}
                <h3 className="title">{title}</h3>
                </div>
                <div className="content-wrap">
                    <p className="content-title">{contentTitle}</p>
                    <ul className="content-list">
                        {contentList.map(function(contactListItem, index){
                            return <li key={ index }>{contactListItem}</li>;
                        })}
                        </ul>
                </div>
                </div>
        );
    }
}

Service.propTypes = {
    service: PropTypes.object.isRequired
};

export default Service;