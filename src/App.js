import React, { Component } from 'react';
import Header from '/src/components/header/Header';
import Banner from '/src/components/banner/Banner';
import Services from '/src/components/services/Services';
import Reviews from '/src/components/reviews/Reviews';
import Feedbackform from '/src/components/feedbackform/Feedbackform';
import Footer from '/src/components/footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Banner/>
          <Services/>
          <Reviews/>
          <Feedbackform/>
          <Footer/>
      </div>
    );
  }
}

export default App;
