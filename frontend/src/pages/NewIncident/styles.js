import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 36px;
  }

  @media (max-width: 450px) {
    width: 90%;
    height: 90%;
    background: none;
    box-shadow: none;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
  height: 100%;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
  a {
    font-size: 22px;
    font-weight: 500;
    color: #41414d;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 40px;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 26px;
      text-transform: uppercase;
      text-align: center;
      width: 100%;
      margin-top: 20px;
    }

    p {
      display: none;
    }

    a {
      display: none;
    }
  }

  @media (max-width: 450px) {
    width: 90vw;
    height: 35%;
    h1 {
      margin-top: 10px;
      font-size: 24px;
      color: #41414d;
    }

    p {
      font-size: 16px;
      color: #737380;
      line-height: 20px;
    }

    a {
      font-size: 18px;
      position: absolute;
      top: 90%;
      left: 10%;
    }

    img {
      margin: 30px;
    }
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  @media (max-width: 450px) {
    width: 85vw;
  }
`;
export const Input = styled.input`
  margin-top: 8px;

  @media (max-width: 1024px) {
    height: 50px;
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  margin-top: 8px;
`;

export const Button = styled.button`
  width: 60%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 15px;
  color: #fff;
  font-weight: bold;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }

  @media (max-width: 450px) {
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    font-size: 19px;
    font-weight: 600;
  }
`;
export const CancelButton = styled.button`
  width: 35%;
  height: 60px;
  background: #41414d;
  border: 0;
  border-radius: 15px;
  color: #fff;
  font-weight: bold;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
  @media (max-width: 450px) {
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    font-size: 19px;
    font-weight: 600;
  }
`;
export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
