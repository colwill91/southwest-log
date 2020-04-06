import React, { Component } from 'react';
import styled from 'styled-components'
import img from '../images/map-full.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faMouse } from '@fortawesome/free-solid-svg-icons'

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
        // order:1;
        padding: 0 15px;
      }
      .map {
        order:0;
        padding: 0 15px;
      }
    }
    .fig {
      font-size: .7em;
      padding: 0 15px;
    }
    .map-image {
      width: 100%;
    }
    .map-wrapper-inner {
      border: 1px solid #332c29;
    }
  `;
    return (
      <StyledMap>
        <div className="my-container">
          <div className="row center-xs">
            <div className="map col-xs-12 col-sm-5">
              <FontAwesomeIcon icon={faTruck} size="2x" />
              <h3>Free Delivery</h3>
              <div className="map-wrapper">
                <div className="map-wrapper-inner">
                  <img className="map-image" alt="Delivery Map" src={img} />
                </div>
              </div>
              <p className="fig">Please see map for area avaliability and also contact if your area is not listed, we likely can deliver there also.</p>
            </div>
            <div className="order col-xs-12 col-sm-7">
              <FontAwesomeIcon icon={faMouse} size="2x" />
              <h3>Place An Order</h3>
            </div>
          </div>
        </div>
      </StyledMap>
    );
  }
}

export default Map;
