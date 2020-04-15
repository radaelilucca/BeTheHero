import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  flex: 1;
  height: 80vh;

  @media (max-width: 450px) {
    margin-top: 20px;
    width: 60%;
    height: 80vh;
  }
`;

export const AnimationHero = styled.div`
  margin-top: 30px;
  width: 450px;
  height: 220px;
`;
export const AnimationLoading = styled.div`
  margin-top: 80px;
  width: 450px;
  height: 100px;

  @media (max-width: 450px) {
    margin-top: 30px;
  }
`;

export const LoadingText = styled.div`
  margin-top: 88px;
  margin-bottom: 30px;
  font-size: 38px;
  font-weight: bold;
  color: #41414d;

  @media (max-width: 450px) {
    font-size: 30px;
    margin-top: 40px;
  }
`;
