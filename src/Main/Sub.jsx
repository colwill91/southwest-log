import React, { Component } from 'react';
import ProductOverview from '../Products/ProductOverview';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

class Sub extends Component {
  render() {
    return (
      <div>
        <Header mode="product" />
        <ProductOverview  productId={this.props.match.params.id}/>
        <Footer />
      </div>
    )
  }
}

export default Sub;
