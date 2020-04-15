import React, { useState, useEffect } from "react";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";

import Swal from "sweetalert2";

import {
  Container,
  IncidentsContainer,
  PageController,
  Button,
} from "./styles";

import NoCases from "../NoCases";
import LoadingComponnent from "../LoadingComponnent";
import IncidentCard from "../IncidentCard";

import api from "../../services/api";

export default function IncidentsList() {
  const [incidents, setIncidents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [loading, setLoading] = useState(false);

  const ongId = localStorage.getItem("id");

  async function loadIncidents() {
    setLoading(true);
    const response = await api.get("/profile", {
      params: { page },
      headers: {
        auth: ongId,
      },
    });

    setIncidents(response.data.rows);
    setTotalPage(Math.floor(Math.ceil(response.data.count / 4)));
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }

  useEffect(() => {
    loadIncidents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  async function handleDeleteIncident(id, title) {
    await Swal.fire({
      title: "Deletar Caso",
      text: `Você tem certeza que quer deletar o caso ${title}`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#e02041",
      confirmButtonColor: "#444",
      reverseButtons: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        try {
          await api.delete(`incidents/delete/${id}`, {
            headers: {
              auth: ongId,
            },
          });

          Swal.fire({
            title: "Sucesso",
            text: `Caso ${title} deletado com sucesso.`,
            icon: "success",
            confirmButtonColor: "#e02041",
            confirmButtonText: "Okay",
            // eslint-disable-next-line no-shadow
          }).then(async (result) => {
            if (result.value) {
              setPage(1);
              window.location.reload(true);
            }
          });
        } catch (error) {
          // trocar por sweet alert
          Swal.fire({
            title: "Que pena.",
            text: `Caso: ${title} não pode ser deletado. Tente novamente.`,
            icon: "error",
            confirmButtonColor: "#e02041",
            confirmButtonText: "Okay",
          });
        }
      }
    });
  }

  return (
    <Container>
      {loading ? (
        <LoadingComponnent />
      ) : (
        <div>
          {incidents.length === 0 ? (
            <NoCases />
          ) : (
            <IncidentsContainer>
              <h1> Casos Cadastrados </h1>
              <ul>
                {incidents.map((incident) => (
                  <IncidentCard
                    incident={incident}
                    loadIncidents={loadIncidents}
                    handleDeleteIncident={handleDeleteIncident}
                    key={incident.id}
                  />
                ))}
              </ul>
              <PageController>
                <Button
                  onClick={() => {
                    if (page !== 1) {
                      setPage(page - 1);
                    }
                  }}
                >
                  <FiSkipBack size={24} color="#fff" />
                </Button>
                <p>{page}</p>
                <Button
                  onClick={() => {
                    if (page !== totalPage) {
                      setPage(page + 1);
                    }
                  }}
                >
                  <FiSkipForward size={24} color="#fff" />
                </Button>
              </PageController>
            </IncidentsContainer>
          )}
        </div>
      )}
    </Container>
  );
}
