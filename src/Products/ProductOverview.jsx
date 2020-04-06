import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const ProductOverview = ({ item }) => {
  const { name, cost, textExtended } = item
  const StyledProductOverview = styled.div`
    text-align: center;
    .left {
      flex-basis: 100%;
      @media (min-width: 768px) {
         flex-basis: 17%;
         margin-right: 3%;
      }
    }
    .right {
      flex-basis: 100%;
      @media (min-width: 768px) {
         flex-basis: 70%;
      }
    }
    .overview-description {
      margin: 20px 0 ;
      color: rgba(0, 0, 0, 0.6);
      font-size: .8em;
      @media (min-width: 768px) {
        font-size: 1em;
      }
    }
    .overview-title {
      font-size: 1.1em;
      margin-bottom: 10px;
      @media (min-width: 768px) {
        font-size: 1.3em;
      }
    }
    .overview-image {
      @media (min-width: 768px) {
        margin-top: 20px;
      }
      img {
        max-width: 110px;
        @media (min-width: 768px) {
          max-width: 150px
        }
      }
    }
    .overview-contact {
      font-size: 20px;
      display: flex;
      margin: 0 auto;
      @media (min-width: 768px) {
        margin: 50px auto 0 auto;
      }
      svg {
        font-size: 22px;
        margin: 17px;
        display: none;
        @media (min-width: 768px) {
          display: block;
        }
      }
      a {
        color: #b97777;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .row {
      margin-left: 0;
      margin-right: 0;
    }
  `
  return (
    <StyledProductOverview>
      <div className="row">
        <div className="left">
          <div className="overview-image">
            <img src="https://via.placeholder.com/150" alt={`Product-${name}`} />
          </div>
        </div>
        <div className="right">
          <p className="overview-title">{name}</p>
          <div className="overview-description">{textExtended}</div>
          <p className="overview-price">£ {cost} each</p>
          <p> Complete with <strong>FREE</strong> delivery </p>
        </div>
        <div className="overview-contact">
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <p>Please call <a href="tel:07825031794">07825031794</a> to order</p>
        </div>
      </div>
    </StyledProductOverview>
  )
}

export default ProductOverview
