/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router-dom";
import { FiTrash2, FiEdit } from "react-icons/fi";

import {
  Container,
  CaseProperty,
  PropertyValue,
  EditButton,
  DeleteButton,
} from "./styles";

export default function IncidentCard({ incident, handleDeleteIncident }) {
  const history = useHistory();

  return (
    <Container>
      <li key={incident.id}>
        <CaseProperty>CASO:</CaseProperty>
        <PropertyValue>{incident.title}</PropertyValue>
        <CaseProperty>DESCRIÇÃO:</CaseProperty>
        <PropertyValue>{incident.description}</PropertyValue>
        <CaseProperty>VALOR:</CaseProperty>
        <PropertyValue>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(incident.amount)}
        </PropertyValue>

        <DeleteButton type="button">
          <FiTrash2
            size={20}
            color="red"
            onClick={() => {
              handleDeleteIncident(incident.id, incident.title);
            }}
          />
        </DeleteButton>
        <EditButton type="button">
          <FiEdit
            size={20}
            color="red"
            onClick={() => {
              history.push(`/incidents/update/${incident.id}`);
            }}
          />
        </EditButton>
      </li>
    </Container>
  );
}
