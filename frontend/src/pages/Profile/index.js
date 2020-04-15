import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import IncidentsList from '../../components/IncidentsLits';

import Header from '../../components/Header';

export default function Profile() {
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  if (!ongName) {
    localStorage.clear();
    history.push('/');
  }

  // eslint-disable-next-line no-unused-vars

  return (
    <Container>
      <Header />
      <IncidentsList />
    </Container>
  );
}
