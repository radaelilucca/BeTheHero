import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;

    .heroes {
      display: none;
    }

    img {
      width: 350px;
      margin-top: 20px;
    }
  }

  @media (max-width: 450px) {
    align-items: center;
  }
`;

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin: 80px;

  @media (max-width: 1024px) {
    max-width: 60vw;
  }
  @media (max-width: 450px) {
    max-width: 80vw;
    margin-top: 40%;
    height: 50vh;
    magin: auto;

    justify-content: space-between;
    align-items: center;
  }
`;

export const Form = styled.form`
  h1 {
    font-size: 30px;
    margin-bottom: 32px;
    margin-top: 62px;
    color: #41414d;
  }

  a {
    font-size: 18px;
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

  svg {
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
    a {
      font-size: 26px;
      margin-top: 50px;
    }

    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 450px) {
    max-width: 80vw;
    margin-top: 10px;

    a {
      font-size: 20px;
    }

    h1 {
      font-size: 24px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
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
`;
