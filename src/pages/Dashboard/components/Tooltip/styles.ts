import styled from 'styled-components';

import InfoBtn from '../../../../assets/images/svg-icons/info-circle-solid.svg';

export const Container = styled.div`
  position: relative;
  div {
    position: absolute;
    display: inline-block;
    background-image: url(${InfoBtn});
    background-repeat: no-repeat;
    filter: invert(1);
    width: 20px;
    height: 20px;
    top: 0;
    right: 0;
  }

  div span {
    visibility: hidden;
    width: 140px;
    background-color: white;
    color: black;
    font-weight: 700;
    text-align: center;
    border-radius: 6px;
    padding: 15px 10px;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 110%;
    left: 50%;
    margin-left: -70px;
    height: auto;
  }
  div span::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }

  div:hover span {
    visibility: visible;
  }
`;
