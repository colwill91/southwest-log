import React, { Component } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

class Footer extends Component {

  render() {
  const StyledFooter = styled.footer`
    background: #332c29;
    color: #b4aaa2;
    letter-spacing: 3px;
    #contact-me {
      padding: 30px 20px 60px 20px;
      position: relative;
      @media (min-width: 768px) {
        padding: 40px 20px 40px 20px;
       }
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
    h3 {
      margin-top: 0;
      margin-bottom: 50px;
      @media (min-width: 768px) {
        margin-bottom: 80px;
      }
    }
    p, a {
      color: #fff;
      font-size: .9em;
      text-decoration: none;
      word-break: break-all;
      margin: 1em auto;
      @media (min-width: 768px) {
         margin: 0 auto;
      }
      @media (min-width: 986px) {
        font-size: 1em;
       }
    }
    .copy {
      font-size: .5em;
      position: absolute;
      bottom: 0;
      text-align: center;
      left: 0;
      width: 100%;
      @media (min-width: 768px) {
        bottom: 10px;
        text-align: right;
       }
       a {
         text-decoration: underline;
     }
    }
  `;
    return (
      <StyledFooter>
      <div id="contact-me" className="my-container">
        <h3>Please contact us via email or phone for any enquiries</h3>
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
           <p>jpcountrysideservices@gmail.com</p>
          </div>
        </div>
        <p className="copy">Developed and designed by &copy;<a href="www.paulcolwill.co.uk" target="_blank">Paul Colwill</a></p>
      </div>
      </StyledFooter>
    );
  }
}

export default Footer;
