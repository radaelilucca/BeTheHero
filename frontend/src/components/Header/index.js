import React from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { FiPower } from "react-icons/fi";
import { Container, Button, NewCaseButton } from "./styles";

import logo from "../../assets/logo.svg";

export default function Header() {
  const history = useHistory();
  const ongName = localStorage.getItem("ongName");

  // eslint-disable-next-line no-unused-vars
  async function handleLogout(e) {
    await Swal.fire({
      title: "Fazer Logout",
      text: `Você tem certeza que quer sair da aplicação?`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#e02041",
      confirmButtonColor: "#444",
      reverseButtons: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        localStorage.clear();
        history.push("/");
      }
    });
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Be The Hero" />
      </Link>
      <span>
        Bem Vinda,
        <h4>{` ${ongName}`}</h4>
      </span>
      <NewCaseButton>
        <Link to="/incidents/new">Novo Caso</Link>
      </NewCaseButton>

      <Button type="button" onClick={handleLogout}>
        <FiPower size={24} color="#fff" />
      </Button>
    </Container>
  );
}
