import styled from "styled-components";

export const StyledHeader = styled.section`
  height: 60px;
  width: inherit;
  text-align: center;
  background-color: white;
  position: sticky;
  top: 0;
  box-shadow: 0px 5px 10px cyan;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }
  /* box-shadow: 0px 5px 10px linear-gradient(red, magenta, pink, green, aqua, cyan, blue, red); */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: 500ms;
    pointer-events: none;
  }
  &:hover::before {
    left: -50%;
    transform: skewX(-5deg);
  }

  .theme-button-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover input ~ .theme-switch {
      background-color: #ccc;
    }
    & input:checked ~ .theme-switch {
      background-color: #2196f3;
    }
    .theme-switch::after {
      content: "";
      position: absolute;
      display: none;
    }
    & input:checked ~ .theme-switch::after {
      display: block;
    }
    & .theme-switch::after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  #theme-switch {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .theme-switch {
    position: absolute;
    height: 25px;
    width: 25px;
    top: 0;
    left: 0;
    background: #eee;
  }
`;
