import React, { Component } from 'react';
import styled from 'styled-components'
import img from '../images/map-full.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

class Map extends Component {

  render() {
  const StyledMap = styled.section`
    padding-top: 40px
    padding-bottom: 40px;
    letter-spacing: 1px;
    color: #332c29;
    background-color: #f1f1f1;
    @media (min-width: 769px) {
      padding-top: 80px
      padding-bottom: 80px;
      .map-text{
        order:1;
        padding: 0 15px;
      }
      .map {
        order:0;
        padding: 0 15px;
      }
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
            <div className="map-text col-xs-12 col-sm-5">
            <FontAwesomeIcon icon={faTruck} size="2x" />
            <h2> Free Delivery</h2>
              <p className="text">Josh sticks offers free delivery focussed around Carhampton, Clevedon and Weston-Super-Mare.
              Please see the map if your area is avaliable, and also contact if your area is not listed, we likely can deliver there also.
              </p>
            </div>
            <div className="map col-xs-12 col-sm-6">
              <div className="map-wrapper">
                <div className="map-wrapper-inner">
                  <img className="map-image" alt="Delivery Map" src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledMap>
    );
  }
}

export default Map;
