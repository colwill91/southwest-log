import React, { Component } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {

  render() {
  const StyledFooter = styled.footer`
    padding: 30px 20px 40px 20px;
    background: #332c29;
    color: #b4aaa2;
    letter-spacing: 3px;
    @media (min-width: 768px) {
     padding: 60px 20px 40px 20px;
    }
    .item {
      margin-bottom: 40px;
      &:last-of-type {
        margin-bottom: 0;
      }
      svg {
        margin-bottom: 25px;
        width: 100%;
      }
      ul {
        padding: 0;
        margin: 0 auto 1em auto;
        color: #fff;
        list-style: none;
        li {
          margin: 8px 0;
        }
      }
    }
    p, a {
      color: #fff;
      font-size: 1.1em;
      text-decoration: none;
      word-break: break-all;
      margin: 1em auto;
      @media (min-width: 768px) {
         margin: 0 auto;
      }
      @media (min-width: 768px) {
       font-size: 1em;
      }
    }
  `;
    return (
      <StyledFooter>
      <div className="my-container">
        <div className="row">
          <div className="item phone col-xs-12 col-sm-4">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <a href="tel:07825031794">07825031794</a>
          </div>
          <div className="item times col-xs-12 col-sm-4">
            <FontAwesomeIcon icon={faClock} size="2x" />
            <ul className="opening-times">
              <li>Mon-Sun: 8am - 7pm</li>
            </ul>
          </div>
           <div className="item email col-xs-12 col-sm-4">
           <FontAwesomeIcon icon={faEnvelope} size="2x" />
           <p>jpcountrysideservices@hotmail.co.uk</p>
          </div>
        </div>
      </div>
      </StyledFooter>
    );
  }
}

export default Footer;
