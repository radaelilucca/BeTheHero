import styled from "styled-components";

export const Container = styled.div`
  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    height: 260px;

    @media (max-width: 1024px) {
      padding: 20px;
    }

    @media (max-width: 750px) {
      width: 100%;
    }
    @media (max-width: 450px) {
      height: 270px;
    }
  }
`;
export const CaseProperty = styled.p`
  margin-bottom: 8px;
  margin-top: 10px;
  color: #41414d;
  font-weight: bold;
  font-size: 18px;
  display: block;

  @media (max-width: 1024px) {
    margin-bottom: 4px;
    margin-top: 8px;
    font-size: 18px;
  }

  @media (max-width: 750px) {
    margin: 10px auto;
  }

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const PropertyValue = styled.span`
  color: #737380;
  line-height: 22px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 1024px) {
    line-height: 28px;
    font-size: 16px;
  }
  @media (max-width: 750px) {
    margin: 10px auto;
  }
`;

export const EditButton = styled.button`
  position: absolute;
  right: 24px;
  top: 216px;
  border: 0;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
    right: 24px;
    top: 210px;
  }

  @media (max-width: 450px) {
    right: 24px;
    top: 220px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;

  &:hover {
    opacity: 0.7;
  }
`;
