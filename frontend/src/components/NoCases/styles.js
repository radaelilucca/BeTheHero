import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin-top: 90px;
  border-radius: 10px;
  width: 100%;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ec1b42;
  height: 30vh;
  margin-top: 200px;
  margin-bottom: 50px;
  border-radius: 20px;
  width: 350px;

  @media (max-width: 1024px) {
    margin-top: 180px;

    height: 25vh;
    width: 320px;
  }

  @media (max-width: 450px) {
    margin-top: 100px;

    height: 15vh;
    width: 200px;
  }
`;
export const NotFound = styled.p`
  font-size: 180px;
  line-height: 200px;
  font-weight: bold;
  color: #eee;

  @media (max-width: 1024px) {
    font-size: 160px;
  }
  @media (max-width: 750px) {
    font-size: 120px;
  }
  @media (max-width: 450px) {
    font-size: 100px;
  }
`;
export const Title = styled.strong`
  font-size: 50px;
  line-height: 80px;
  font-weight: bold;
  color: #ec1b42;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 750px) {
    font-size: 26px;
  }
  @media (max-width: 450px) {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;
export const Description = styled.p`
  font-size: 40px;
  line-height: 80px;
  font-weight: 500;
  color: #ec1b42;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 26px;
    line-height: 40px;
  }

  @media (max-width: 750px) {
    font-size: 22px;
    line-height: 40px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
    line-height: 20px;
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
