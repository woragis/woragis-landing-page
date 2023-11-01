import styled from "styled-components";
export const StyledSideNav = styled.article`
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  width: 45px;
  position: fixed;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 25px;

  button {
    color: rgba(0, 0, 0, 0.2);
    font-size: 0.7rem;
    border: 0;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    height: 30px;
    width: 60px;
    border: rgba(50, 100, 200, 0.5) solid 1px;
    border-radius: 10px;
  }

  &:hover {
    button {
      transition: 300ms;
      color: black;
      box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    }
    button:hover {
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
      /* scale: 130%; */
      width: 90px;
      transform: translateX(-31px);
      transition: 300ms;
    }
  }
  button::after {
    content: "";
    background-color: red;
    height: 30px;
    width: 30px;
    position: relative;
    transform: translateX(-50%);
  }
`;
