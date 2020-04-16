import React, { Component } from 'react';
import Header from '../Header/Header'
import HeaderText from '../HeaderText/HeaderText'
import Hero from '../Hero/Hero'
import Map from '../Map/Map'
import Footer from '../Footer/Footer'
import '../App.css';
import '../grid.css';
import ProductsContainer from '../Products/ProductsContainer';
import img from '../images/southwestlogs-bg.jpeg';

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Hero image={img}/>
        <HeaderText content="Our Firewood" />
        <ProductsContainer />
        <Map />
        <Footer />
      </div>
    )
  }
}

export default Main;
