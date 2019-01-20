import React, { Component } from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import Reviews from './components/reviews/Reviews';
import Feedbackform from './components/feedbackform/Feedbackform';
import Footer from './components/footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header-banner-wrap">
          <Header/>
          <Banner/>
          </div>
          <Services/>
          <Reviews/>
          <Feedbackform/>
          <Footer/>
      </div>
    );
  }
}

export default App;
