import React, { Component } from 'react';
import styled from 'styled-components'
import img from '../images/map-full.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faMouse } from '@fortawesome/free-solid-svg-icons'
import Form from '../Form/Form'
import { HashLink as Link } from 'react-router-hash-link';

class Map extends Component {

  render() {
  const StyledMap = styled.section`
    padding-top: 30px
    padding-bottom: 30px;
    letter-spacing: 1px;
    color: #332c29;
    background-color: #f1f1f1;
    @media (min-width: 769px) {
      padding-top: 50px
      padding-bottom: 50px;
      .map-text{
        padding: 0 15px;
      }
      .map {
        padding: 0 15px;
      }
    }
    .fig {
      font-size: .7em;
      padding: 0 15px;
      margin: 0 auto 10px auto;
    }
    .fig-2 {
      max-width: 80%;
    }
    .map-image {
      width: 100%;
    }
    .map-wrapper-inner {
      border: 1px solid #332c29;
    }
    .order {
      margin-top: 40px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    }
  `;
    return (
      <StyledMap>
        <div className="my-container">
          <div className="row center-xs">
            <div className="map col-xs-12 col-sm-5">
              <FontAwesomeIcon icon={faTruck} size="2x" />
              <h3>Free Delivery</h3>
              <p className="fig">Please see map for area avaliability and also contact if your area is not listed, we likely can deliver there also.</p>
              <div className="map-wrapper">
                <div className="map-wrapper-inner">
                  <img className="map-image" alt="Delivery Map" src={img} />
                </div>
              </div>
            </div>
            <div className="order col-xs-12 col-sm-7">
              <FontAwesomeIcon icon={faMouse} size="2x" />
              <h3>Place An Order</h3>
              <p className="fig fig-2">Please fill out the below form with your details and firewood choices and I will get back to you. Please feel free to 
              <Link to="/#contact-me"> contact me</Link> directly if you prefer.</p>
              <Form />
            </div>
          </div>
        </div>
      </StyledMap>
    );
  }
}

export default Map;
