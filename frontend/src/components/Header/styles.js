import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
  }
  @media (max-width: 750px) {
    margin-top: 5px;

    justify-content: center;

    span {
      display: none;
    }
  }

  @media (max-width: 450px) {
    img {
      height: 42px;
      margin-right: 60px;
    }
  }
`;

export const Button = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  border: 1px solid #dcdce6;
  background: #e02041;

  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }

  @media (max-width: 450px) {
    height: 42px;
    width: 42px;
    margin-left: 20px;
  }
`;

export const NewCaseButton = styled.button`
  width: 160px;
  margin-left: auto;
  margin-top: 0;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 15px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  transition: filter 0.2s;
  margin-right: 16px;

  &:hover {
    filter: brightness(90%);
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    line-height: 60px;
    opacity: 0.9;
  }

  @media (max-width: 525px) {
    width: 100px;
    margin-left: 30px;

    a {
      font-size: 14px;
    }
  }


  @media (max-width: 450px) {
    width: 100px;
    height: 40px;
    margin: 0;

    a {
      font-size: 16px;
      line-height: 0px;
    }
  }
`;
