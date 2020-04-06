import React, { Component } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class Hero extends Component {
  render() {
    const { image } = this.props
    const StyledHeroWrapper = styled.section`
      margin: 0px 0 40px 0;
      display: flex;
      height: 460px;
      flex-flow: column;
      color: #fff;
      position: relative;
      @media (min-width: 768px) {
        height: 480px;
      }
    `;
    const Overlay = styled.section`
      position absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      left: 0;
      top: 0;
      right:0;
      bottom: 0;
    `;
    const StyledHeroInner = styled.div`
      background-image: url(${image});
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      flex: 1 1 auto;
      background-position: -300px -50px;
      @media (min-width: 480px) {
        background-position: -240px -100px;
      }
      @media (min-width: 768px) {
        background-position: -75px -65px;
      }
      @media (min-width: 900px) {
        background-position: 0 -65px;
      }
      @media (min-width: 1100px) {
        background-position: 0 -260px;
      }
      .content-wrapper {
        position: absolute;
        top: 120px;
        font-size: 2em;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        p.content {
          line-height: 37px;
        }
        @media (min-width: 768px) {
          top: 180px;
        }
        .checklist {
          list-style: none;
          padding: 0;
          font-size: 1.2rem;
          display: flex;
          flex-wrap: wrap;
          margin-top: 70px;
          justify-content: center;
          @media (min-width: 768px) {
            margin-top: 50px;
          }
          li {
            margin: 5px 10px;
            font-size: .8em;
            @media (min-width: 768px) {
              margin: 5px 30px 5px 0;
              font-size: 1em;
            }
          }
          svg {
            margin-right: 7px;
            color: #65a25b;
          }
        }
        .content {
          text-align: center;
          margin: 0 auto;
          max-width: 90%;
          @media (min-width: 768px) {
            max-width: 550px;
          }
        }
      }
    `;

    return (
      <StyledHeroWrapper>
        <StyledHeroInner>
         <Overlay />
          <div className="my-container">
              <div className="content-wrapper">
                <p className="content">Save money with our locally sourced high-quality seasoned dried logs</p>
                <ul className="checklist">
                  <li><FontAwesomeIcon icon={faCheck} size="sm" />Quality Firewood</li>
                  <li><FontAwesomeIcon icon={faCheck} size="sm" />Locally Sourced</li>
                  <li><FontAwesomeIcon icon={faCheck} size="sm" />More Heat, Less Consumption</li>
                  <li><FontAwesomeIcon icon={faCheck} size="sm" />Low Emissions</li>
                </ul>
              </div>
          </div>
        </StyledHeroInner>
      </StyledHeroWrapper>
    );
  }
}

export default Hero;
