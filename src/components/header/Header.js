import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/Logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <a href="#">
                <img src={logo} className="logo" alt="logo"/></a>
                <nav className="main-menu">
                    <a href="#" className="item">услуги и цены</a><a href="#" className="item">отзывы</a><a href="#"
                                                                                                            className="item">контакты</a>
                </nav>
                <div className="lang-toggle">
                    <div className="item">ua</div>
                    <div className="item active">ru</div>
                </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
