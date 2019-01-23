import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/Logo.svg';

class Header extends Component {
    state = {
        ua: "ua",
        ru: "ru"
};
    toggleLang = (e) => {
        if(e.target.classList.contains("active")) {
            return false
        }else if(e.target.classList.contains("item")){
            const langItems = document.querySelector(".lang-toggle").children;
            for (let item of langItems) {
                item.classList.remove("active");
            }
            e.target.classList.add("active");
        }
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
                <div className="lang-toggle" onClick={this.toggleLang.bind(this)}>
                    <div className="item">{this.state.ua}</div>
                    <div className="item active">{this.state.ru}</div>
                </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
