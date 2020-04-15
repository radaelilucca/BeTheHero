import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Content, Section, Form, Input, TextArea } from "./styles";

import FormButtonsGroup from "../../components/FormButtonsGroup";

import logo from "../../assets/logo.png";
import api from "../../services/api";

export default function UpdateIncident() {
  const [incident, setIncident] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();

  const history = useHistory();

  const ongId = localStorage.getItem("id");

  const { id } = useParams();

  async function getIncident() {
    const response = await api.get(`/incident/${id}`, {
      headers: {
        auth: ongId,
      },
    });
    return setIncident(response.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      api.put(
        `/incidents/${id}`,
        { title, description, amount },
        {
          headers: {
            auth: ongId,
          },
        }
      );
      toast.success("Caso Atualizado com Sucesso! 👍");
      setTimeout(() => {
        history.push("/");
      }, 2500);
    } catch (err) {
      toast.error("Falha ao atualizar o caso. Tente novamente. 😢");
    }
  }

  useEffect(() => {
    getIncident();
  }, []);

  return (
    <Container>
      <Content>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover
        />
        <Section>
          <img src={logo} alt="Be The Hero" />
          <h1>Alterar dados do caso</h1>
          <p>Altere os dados deste caso!</p>
          <Link to="/profile">
            <FiArrowLeft size={22} color="#e02041" />
            Voltar para Home
          </Link>
        </Section>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder={"Título: " + incident.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder={"Descrição: " + incident.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            placeholder={
              "Valor em reais: " +
              Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.amount)
            }
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <FormButtonsGroup />
        </Form>
      </Content>
    </Container>
  );
}
