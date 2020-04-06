import React, { Component } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurn, faPhone } from '@fortawesome/free-solid-svg-icons'
import {isMobile} from 'react-device-detect';

class Header extends Component {

  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = isMobile ? window.scrollY < 50 : window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render() {
  const StyledHeader = styled.header`
    color: #332c29;
    box-shadow: 0 4px 6px -6px #222;
    background-color: white;
    position: fixed;
    width: 100%;
    text-align: left;
    top: 0;
    z-index: 99999;
    transition: background-color 1s linear;
    a {
      color: #332c29;
      text-decoration: none;
      ${props => props.isTop && `
        color: #fff;
  `   }
    }
    ${props => props.isTop && `
      background-color: transparent;
      transition: background-color 1s linear;
      color: #fff;
      box-shadow: none;
`   }
    .scrolled {
      background: #fff;
    }
    .logo {
      font-size: 17px;
      svg {
        margin-right: 10px;
      }
      @media (min-width: 768px) {
        font-size: 26px;
      }
    }
    .contact {
      display: flex;
      align-items: center;
      @media (min-width: 768px) {
        margin-right: 40px;
      }
      .tel {
        letter-spacing: 2px;
        font-size: .8em;
        @media (min-width: 768px) {
          font-size: 1.2em;
        }
      }
      svg {
        margin-right: 10px;
      }
    }
  `;
    return (
      <StyledHeader isTop={this.state.isTop}>
        <div className="my-container">
          <div className="row between-xs">
            <p className="logo"><FontAwesomeIcon icon={faBurn} size="1x" />JP Countryside Services</p>
              <div className="contact">
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <p className="tel"><a href="tel:07825031794">07825031794</a></p>
              </div>
          </div>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
