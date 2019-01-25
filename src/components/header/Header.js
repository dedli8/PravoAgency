import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/Logo.svg';

class Header extends Component {
    state = {
        ua: "ua",
        ru: "ru",
        uaActive: false,
        activeClass: 'active'
};
        render() {
        return (
            <header className="header">
                <div className="container">
                    <a href="/">
                <img src={logo} className="logo" alt="logo"/></a>
                <nav className="main-menu">
                    <a href="#services" className="item">услуги и цены</a><a href="#reviews" className="item">отзывы</a><a href="#footer"
                                                                                                            className="item">контакты</a>
                </nav>
                <div className="lang-toggle" onClick= { () => this.setState({uaActive: !this.state.uaActive}) } >
                    <div className={'item '+(this.state.uaActive ? this.state.activeClass : "")}>{this.state.ua}</div>
                    <div className={'item '+(this.state.uaActive ? "" : this.state.activeClass)}>{this.state.ru}</div>
                </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
