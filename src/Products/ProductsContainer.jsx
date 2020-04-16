import React, { Component } from 'react';
import styled from 'styled-components'
import Product from './Product'
import productsList from '../products.js'

class ProductsContainer extends Component {

  render() {
    const StyledProductsContainer = styled.section`
      margin: 40px auto;
      @media (min-width: 1024px) {
        max-width: 85%;
        margin: 80px auto;
      }
    `
    

    return (
    <StyledProductsContainer>
      <div className="my-container">
        <div className="row">
        {
          productsList.map((item,i) => <Product item={item} key={`product-${i}`}/>)
        }
        </div>
      </div>
    </StyledProductsContainer>
    );
  }
}

export default ProductsContainer;
