import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Section, Form, Input, TextArea } from "./styles";

import FormButtonsGroup from "../../components/FormButtonsGroup";

import api from "../../services/api";
import logo from "../../assets/logo.png";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const ongId = localStorage.getItem("id");

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      amount,
    };

    try {
      api.post(`/incidents/create`, data, {
        headers: {
          auth: ongId,
        },
      });

      setTitle("");
      setDescription("");
      setAmount("");

      await Swal.fire({
        title: "Sucesso 👍",
        text: "Caso cadastrado na base de dados!",
        icon: "success",
        confirmButtonColor: "#e02041",
        confirmButtonText: "Ok!",
      }).then(async (result) => {
        if (result.value) {
          history.push("/");
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Que pena 😢",
        text: "Não foi possível cadastrar o caso. Tente novamente. ",
        icon: "error",
        confirmButtonColor: "#e02041",
        confirmButtonText: "Okay",
      });
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/profile">
            <FiArrowLeft size={22} color="#e02041" />
            Voltar para Home
          </Link>
        </Section>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Título do Caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            minLength={3}
          />
          <TextArea
            placeholder="Descrição do Caso"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            minLength={3}
          />
          <Input
            placeholder="Valor em Reais"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            minLength={1}
          />
          <FormButtonsGroup />
        </Form>
      </Content>
    </Container>
  );
}
