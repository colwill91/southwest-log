import React, {useEffect} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import productsList from '../products.js'

const ProductOverview = ({ productId }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const StyledProductOverview = styled.div`
    text-align: center;
    padding-top: 60px;
    @media (min-width: 768px) {
      padding-bottom: 50px;
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
      font-size: 1.3em;
      margin-bottom: 30px;
      margin-top: 40px;
      @media (min-width: 768px) {
        font-size: 1.6em;
        margin-top: 60px;
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
      font-size: 15px;
      display: flex;
      margin: 0 auto;
      justify-content: center;
      @media (min-width: 768px) {
        margin: 10px auto 0 auto;
        font-size: 18px;
      }
      .email {
        color: #b97777;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          padding: 5px 0;
        }
        span {
          color: rgba(0,0,0,0.6);
          font-size: .8em;
        }
      }
      svg {
        font-size: 16px;
        margin: 23px 15px 23px 23px;
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
    .right {
      padding-top: 20px;
      position: relative;
      @media (min-width: 768px) {
        padding-top: 40px;
      }
    }
    .row {
      margin-left: 0;
      margin-right: 0;
    }
    .header-return {
      text-align: left;
      color: #332c29;
      position: absolute;
      left: 0;
      text-decoration: none;
      font-size: .9em;
      svg {
        margin-right: 5px;
      }
      @media (min-width: 768px) {
        font-size: 1em;
      }
    }
    .order-title {
      margin-top: 30px;
      margin-bottom: 0;
      font-size: 1.2em;
      @media (min-width: 768px) {
        font-size: 1.5em;
        margin-top: 60px;
      }
    }
  `
  const result = productsList.find(product => product.id === productId)
  const { name, cost, textExtended } = result

  return (
    <StyledProductOverview>
      <div className="my-container">
        <div className="row center-xs">
          <div className="product col-xs-12 col-md-9">
            <div className="right">
              <a className="header-return" href="/">
                <FontAwesomeIcon icon={faAngleLeft} size="sm" />Go back
              </a>
              <p className="overview-title">{name}</p>
              <div className="overview-description">{textExtended}</div>
              <p className="overview-price">£ <strong>{cost}</strong> each complete with <strong>FREE</strong> delivery </p>
            </div>
            <h3 className="order-title">Wish to place an order?</h3>
            
            <div className="overview-contact">
              <ul>
                <li>Please call <a href="tel:07825031794">07825031794</a></li>
                <span>or</span>
                <li>Email me @ <span className="email">jpcountrysideservices@gmail.com</span></li>
                <span>or alternatively</span>
                <li>Add this product to an order via the <a href="/#order-form">homepage</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledProductOverview>
  )
}

export default ProductOverview
