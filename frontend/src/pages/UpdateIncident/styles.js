import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 30px;
  margin: 52px auto;

  h1 {
    margin-top: 36px;
    margin-bottom: 15px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 10px;
  }

  @media (max-width: 450px) {
    padding: 0 12px;
    margin: 0 auto;
  }
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
  margin-top: 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 36px;
  }

  @media (max-width: 450px) {
    background: none;
    box-shadow: none;
    padding: 16px;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

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
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 28px;
      margin: 10px auto;
    }

    p {
      display: none;
    }

    a {
      display: none;
    }

    img {
      margin: 10px auto;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 24px;
      color: #41414d;
    }

    img {
      margin-bottom: 20px;
    }
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  @media (max-width: 450px) {
    margin-top: 30px;
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
