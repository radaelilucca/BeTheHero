import styled from "styled-components";

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
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
