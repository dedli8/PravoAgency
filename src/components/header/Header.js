import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.svg';
import './_header.scss'
class Header extends Component {
    render() {
        return (
                <header className="header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <nav className="main-menu">
                        <a href="#" className="item">услуги и цены</a><a href="#" className="item"></a>отзывы<a href="#" className="item">контакты</a>
                    </nav>
                    <div className="lang-toggle">
                        <div className="item">ru</div>
                        <div className="item">ua</div>
                    </div>
                </header>
        );
    }
}

Header.propTypes = {};

export default Header;
