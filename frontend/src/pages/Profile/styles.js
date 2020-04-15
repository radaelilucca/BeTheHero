import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 1180px;
  padding: 30px;
  margin: 5px auto;

  h1 {
    margin-top: 36px;
    margin-bottom: 15px;
  }

  @media (max-width: 450px) {
    padding: 10px;
    margin: 5px auto;

    h1 {
      margin-left: 10px;
    }
  }
`;

export const Button = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;

  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }
`;

export const PageController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 100%;

  p {
    font-size: 20px;
    color: #e02041;
    font-weight: bold;
  }

  Button {
    background: #e02041;
  }

  @media (max-width: 450px) {
    padding: 26px;
    width: 100vw;
  }
`;
