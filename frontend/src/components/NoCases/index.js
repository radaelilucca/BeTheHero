import React from 'react';
import {
  Container,
  Title,
  Description,
  NotFound,
  NotFoundContainer,
} from './styles';

export default function NoCases() {
  return (
    <Container>
      <NotFoundContainer>
        <NotFound>404</NotFound>
      </NotFoundContainer>
      <Title> Parece que sua ONG não possui nenhum caso.</Title>
      <Description>
        Cadastre um novo caso e encontre logo novos Heróis!
      </Description>
    </Container>
  );
}
