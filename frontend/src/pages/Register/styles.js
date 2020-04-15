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
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 90vw;
    max-height: 90vh;
    justify-content: center;
    padding: 16px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    background: none;
    box-shadow: none;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 450px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
    color: #41414d;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
  a {
    font-size: 18px;
    font-weight: 600;
    color: #555;
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
    max-width: 70vw;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 48px 0 32px;
      font-size: 38px;
      color: #41414d;
    }

    p {
      font-size: 22px;
      color: #737380;
      line-height: 32px;
    }

    a {
      font-size: 20px;
      margin: 20px 0;
    }

    img {
      margin: 0 auto;
      width: 280px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      margin: 26px 0;
      font-size: 22px;
      text-align: center;
      text-transform: uppercase;
    }

    p {
      display: none;
    }

    a {
      font-size: 18px;
      margin: 10px 0;
      font-weight: 200;
      order: 2;
    }

    img {
      margin: 10px auto;
      width: 270px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  .phone {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 8px;

    svg {
      width: 50px;
      height: 50px;
      display: none;
    }
    select {
      width: 50px;
      display: none;
    }
  }

  @media (max-width: 1024px) {
    max-width: 70vw;

    input {
      height: 56px;
      font-size: 22px;
    }

    button {
      height: 60px;
    }

    .phone {
      input {
        height: 46px;
        border-radius: 10px;
      }
    }
  }

  @media (max-width: 450px) {
    max-width: 80vw;
    margin-top: 30px;

    input {
      height: 46px;
      font-size: 16px;
      border-radius: 10px;
    }

    button {
      height: 46px;
    }
  }
`;

export const Input = styled.input`
  margin-top: 8px;
`;

export const Select = styled.select`
  margin-top: 8px;
  border-radius: 15px;

  @media (max-width: 450px) {
    height: 46px;
    font-size: 18px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  input + input {
    margin-left: 18px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
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
    height: 46px;
    font-size: 18px;
    line-height: 0px;
    marign-top: 22px;
  }
`;
