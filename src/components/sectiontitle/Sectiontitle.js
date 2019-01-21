import React, {Component} from 'react';
class Sectiontitle extends Component {
    render() {
        const {title, description, strong} = this.props;
        return (
            <div className="container">
            <div className="title-wrap">
                <h2 className="main-title section-title">{title}</h2>
                <p className="title-description"><strong>{strong}</strong>{description}</p>
            </div>
            </div>
        );
    }
}

export default Sectiontitle;
